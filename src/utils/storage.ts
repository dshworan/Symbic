import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  SOUND_ENABLED: '@game_sound_enabled',
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
}; 