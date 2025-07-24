import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  SOUND_ENABLED: '@game_sound_enabled',
  CURRENT_PACK: '@game_current_pack',
  CURRENT_LEVEL: '@game_current_level',
  CURRENT_PUZZLE_INDEX: '@game_current_puzzle_index',
};

export const storage = {
  async getSoundEnabled(): Promise<boolean> {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEYS.SOUND_ENABLED);
      return value === null ? true : value === 'true';
    } catch (error) {
      console.error('Error reading sound setting:', error);
      return true; // Default to enabled if there's an error
    }
  },

  async setSoundEnabled(enabled: boolean): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.SOUND_ENABLED, enabled.toString());
    } catch (error) {
      console.error('Error saving sound setting:', error);
    }
  },

  // New methods for puzzle state persistence
  async getCurrentPuzzleState(): Promise<{ pack: number; level: number; puzzleIndex: number } | null> {
    try {
      const pack = await AsyncStorage.getItem(STORAGE_KEYS.CURRENT_PACK);
      const level = await AsyncStorage.getItem(STORAGE_KEYS.CURRENT_LEVEL);
      const puzzleIndex = await AsyncStorage.getItem(STORAGE_KEYS.CURRENT_PUZZLE_INDEX);
      
      if (pack !== null && level !== null && puzzleIndex !== null) {
        return {
          pack: parseInt(pack, 10),
          level: parseInt(level, 10),
          puzzleIndex: parseInt(puzzleIndex, 10),
        };
      }
      return null;
    } catch (error) {
      console.error('Error reading current puzzle state:', error);
      return null;
    }
  },

  async setCurrentPuzzleState(pack: number, level: number, puzzleIndex: number): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.CURRENT_PACK, pack.toString());
      await AsyncStorage.setItem(STORAGE_KEYS.CURRENT_LEVEL, level.toString());
      await AsyncStorage.setItem(STORAGE_KEYS.CURRENT_PUZZLE_INDEX, puzzleIndex.toString());
      console.log('Saved puzzle state:', { pack, level, puzzleIndex });
    } catch (error) {
      console.error('Error saving current puzzle state:', error);
    }
  },

  async clearCurrentPuzzleState(): Promise<void> {
    try {
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.CURRENT_PACK,
        STORAGE_KEYS.CURRENT_LEVEL,
        STORAGE_KEYS.CURRENT_PUZZLE_INDEX,
      ]);
      console.log('Cleared puzzle state');
    } catch (error) {
      console.error('Error clearing current puzzle state:', error);
    }
  },

  // Test function to verify storage works
  async testStorage(): Promise<void> {
    try {
      console.log('Testing storage functionality...');
      
      // Test setting and getting puzzle state
      await this.setCurrentPuzzleState(2, 3, 1);
      const savedState = await this.getCurrentPuzzleState();
      console.log('Retrieved state:', savedState);
      
      // Test clearing state
      await this.clearCurrentPuzzleState();
      const clearedState = await this.getCurrentPuzzleState();
      console.log('After clearing:', clearedState);
      
      console.log('Storage test completed successfully');
    } catch (error) {
      console.error('Storage test failed:', error);
    }
  },
}; 