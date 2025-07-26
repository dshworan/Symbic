import packList from './packList';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface LevelInfo {
  level: number;
  size: number;
  puzzles: number;
  difficulty: number;
}

export interface PackInfo {
  id: number;
  name: string;
  levels: LevelInfo[];
  isPlayable: boolean;
  completedPuzzles: number;
}

// Storage keys
const COMPLETED_PUZZLES_KEY = '@puzzle_completion_data';

// Type for storing completion data
interface PackCompletionData {
  [level: number]: {
    [puzzleIndex: number]: boolean;
  };
}

export class PackDataManager {
  private static instance: PackDataManager;
  private completionData: { [packId: number]: PackCompletionData } = {};
  private unlockedPacks: Set<number> = new Set();

  private constructor() {
    this.loadCompletionData();
  }

  public static getInstance(): PackDataManager {
    if (!PackDataManager.instance) {
      PackDataManager.instance = new PackDataManager();
    }
    return PackDataManager.instance;
  }

  private async loadCompletionData() {
    try {
      const data = await AsyncStorage.getItem('packCompletionData');
      if (data) {
        this.completionData = JSON.parse(data);
      }

      // Load unlocked packs
      const unlockedData = await AsyncStorage.getItem('unlockedPacks');
      if (unlockedData) {
        const unlockedArray = JSON.parse(unlockedData);
        this.unlockedPacks = new Set(unlockedArray);
      }
    } catch (error) {
      console.error('Error loading completion data:', error);
    }
  }

  private async saveCompletionData() {
    try {
      await AsyncStorage.setItem('packCompletionData', JSON.stringify(this.completionData));
      await AsyncStorage.setItem('unlockedPacks', JSON.stringify(Array.from(this.unlockedPacks)));
    } catch (error) {
      console.error('Error saving completion data:', error);
    }
  }

  public unlockPack(packId: number): void {
    // Add pack to unlocked set
    this.unlockedPacks.add(packId);
    
    // Initialize completion data for the pack if it doesn't exist
    if (!this.completionData[packId]) {
      this.completionData[packId] = {};
    }
    
    // Save to local storage
    this.saveCompletionData();
  }

  public isPackPlayable(packId: number): boolean {
    // Packs 1-3 are always playable
    if (packId >= 1 && packId <= 3) return true;

    // For packs 4-30, check if they're in the unlocked set
    return this.unlockedPacks.has(packId);
  }

  public isPuzzlePlayable(packId: number, level: number, puzzleIndex: number): boolean {
    // If the pack is playable, all puzzles in it are playable
    return this.isPackPlayable(packId);
  }

  public getCompletedPuzzleCount(packId: number, level: number): number {
    if (!this.completionData[packId]?.[level]) {
      return 0;
    }
    return Object.keys(this.completionData[packId][level]).length;
  }

  public getPackCompletedPuzzleCount(packId: number): number {
    if (!this.completionData[packId]) {
      return 0;
    }
    return Object.values(this.completionData[packId]).reduce((total, levelData) => {
      return total + Object.keys(levelData).length;
    }, 0);
  }

  public isPuzzleCompleted(packId: number, level: number, puzzleIndex: number): boolean {
    return !!this.completionData[packId]?.[level]?.[puzzleIndex];
  }

  public isPackCompleted(packId: number): boolean {
    const packData = packList.find(p => p.pack === packId);
    if (!packData) {
      return false;
    }

    // Check if all levels in the pack are completed
    for (const levelData of packData.levels) {
      const level = levelData.level;
      // Check if all puzzles in this level are completed
      for (let puzzleIndex = 0; puzzleIndex < levelData.puzzles; puzzleIndex++) {
        if (!this.isPuzzleCompleted(packId, level, puzzleIndex)) {
          return false;
        }
      }
    }
    return true;
  }

  public getNextIncompleteLevel(packId: number): { level: number; puzzleIndex: number } | null {
    const packData = packList.find(p => p.pack === packId);
    if (!packData) {
      return null;
    }

    // Find the first incomplete puzzle in the pack
    for (const levelData of packData.levels) {
      const level = levelData.level;
      for (let puzzleIndex = 0; puzzleIndex < levelData.puzzles; puzzleIndex++) {
        if (!this.isPuzzleCompleted(packId, level, puzzleIndex)) {
          return { level, puzzleIndex };
        }
      }
    }
    return null; // All puzzles in the pack are completed
  }

  public getNextIncompletePack(): number | null {
    // Find the first pack that has incomplete puzzles
    for (let packId = 1; packId <= packList.length; packId++) {
      if (!this.isPackCompleted(packId)) {
        return packId;
      }
    }
    return null; // All packs are completed
  }

  public getNextIncompleteLevelInAnyPack(): { packId: number; level: number; puzzleIndex: number } | null {
    // Find the first incomplete puzzle in any pack
    for (let packId = 1; packId <= packList.length; packId++) {
      const nextIncompleteLevel = this.getNextIncompleteLevel(packId);
      if (nextIncompleteLevel) {
        return {
          packId,
          level: nextIncompleteLevel.level,
          puzzleIndex: nextIncompleteLevel.puzzleIndex
        };
      }
    }
    return null; // All puzzles in all packs are completed
  }

  public completePuzzle(packId: number, level: number, puzzleIndex: number): void {
    if (!this.completionData[packId]) {
      this.completionData[packId] = {};
    }
    if (!this.completionData[packId][level]) {
      this.completionData[packId][level] = {};
    }
    this.completionData[packId][level][puzzleIndex] = true;
    this.saveCompletionData();
  }

  public getPacks(): PackInfo[] {
    // Get all packs from packList
    const allPacks = packList.map(packData => {
      const levels = packData.levels.map(levelData => ({
        level: levelData.level,
        size: parseInt(levelData.size),
        puzzles: levelData.puzzles,
        difficulty: levelData.difficulty
      }));

      return {
        id: packData.pack,
        name: `Pack ${packData.pack}`,
        levels,
        isPlayable: this.isPackPlayable(packData.pack),
        completedPuzzles: this.getPackCompletedPuzzleCount(packData.pack)
      };
    });

    // Log for debugging
    //console.log('All packs loaded:', allPacks.map(p => p.id));

    return allPacks;
  }

  public getPack(packId: number): PackInfo {
    const packData = packList.find(p => p.pack === packId);
    if (!packData) {
      throw new Error(`Pack ${packId} not found`);
    }

    const levels = packData.levels.map(levelData => ({
      level: levelData.level,
      size: parseInt(levelData.size),
      puzzles: levelData.puzzles,
      difficulty: levelData.difficulty
    }));

    return {
      id: packData.pack,
      name: `Pack ${packData.pack}`,
      levels,
      isPlayable: this.isPackPlayable(packId),
      completedPuzzles: this.getPackCompletedPuzzleCount(packId)
    };
  }

  public unlockPuzzleWithAd(packId: number, level: number, puzzleIndex: number): boolean {
    if (!this.completionData[packId]) {
      this.completionData[packId] = {};
    }
    if (!this.completionData[packId][level]) {
      this.completionData[packId][level] = {};
    }
    this.completionData[packId][level][puzzleIndex] = true;
    this.saveCompletionData();
    return true;
  }

  public isPuzzleUnlocked(packId: number, level: number, puzzleIndex: number): boolean {
    return !!(
      this.completionData[packId]?.[level]?.[puzzleIndex]
    );
  }

  private getPuzzleKey(packId: number, level: number, puzzleIndex: number): string {
    return `${packId}-${level}-${puzzleIndex}`;
  }

  public async clearCompletionData() {
    try {
      // Clear completion data
      this.completionData = {};
      await AsyncStorage.removeItem(COMPLETED_PUZZLES_KEY);
      
      // Save the current unlocked packs to preserve them
      await AsyncStorage.setItem('unlockedPacks', JSON.stringify(Array.from(this.unlockedPacks)));
      
      console.log('Cleared completion data while preserving unlocked packs');
    } catch (error) {
      console.error('Error clearing completion data:', error);
    }
  }

  public async clearAllStorage() {
    try {
      // Clear completion data
      this.completionData = {};
      await AsyncStorage.removeItem(COMPLETED_PUZZLES_KEY);
      
      // Clear unlocked packs
      this.unlockedPacks = new Set();
      await AsyncStorage.removeItem('unlockedPacks');
      
      console.log('Cleared all storage including unlocked packs');
    } catch (error) {
      console.error('Error clearing all storage:', error);
    }
  }
}

export default PackDataManager; 