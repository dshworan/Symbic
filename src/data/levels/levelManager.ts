import { Level, LevelColors } from '../types/levelTypes';
import { shapes } from './shapes';
import { level1Puzzles } from './puzzles/level1Puzzles';
import { level2Puzzles } from './puzzles/level2Puzzles';
import { level3Puzzles } from './puzzles/level3Puzzles';
import { level4Puzzles } from './puzzles/level4Puzzles';

export class LevelManager {
  private currentLevelIndex: number = 0;
  private levels: Level[];
  private static instance: LevelManager;

  private constructor() {
    this.levels = [
      {
        id: 1,
        shapes: shapes[0],
        colors: {
          primary: '#f53646',    // Red
          secondary: '#07bd2f'   // Green
        },
        puzzles: level1Puzzles,
        size: 4
      },
      {
        id: 2,
        shapes: shapes[1],
        colors: {
          primary: '#2196F3',    // Blue
          secondary: '#FFC107'   // Yellow
        },
        puzzles: level2Puzzles,
        size: 6
      },
      {
        id: 3,
        shapes: shapes[2],
        colors: {
          primary: '#f53646',    // Red
          secondary: '#FFC107'   // Yellow
        },
        puzzles: level3Puzzles,
        size: 8
      },
      {
        id: 4,
        shapes: shapes[3],
        colors: {
          primary: '#2196F3',    // Blue
          secondary: '#f53646'   // Red
        },
        puzzles: level4Puzzles,
        size: 10
      }
    ];
  }

  public static getInstance(): LevelManager {
    if (!LevelManager.instance) {
      LevelManager.instance = new LevelManager();
    }
    return LevelManager.instance;
  }

  getCurrentLevel(): Level {
    return this.levels[this.currentLevelIndex];
  }

  getCurrentLevelNumber(): number {
    return this.currentLevelIndex + 1;
  }

  getTotalLevels(): number {
    return this.levels.length;
  }

  nextLevel(): boolean {
    if (this.currentLevelIndex < this.levels.length - 1) {
      this.currentLevelIndex++;
      return true;
    }
    return false;
  }

  previousLevel(): boolean {
    if (this.currentLevelIndex > 0) {
      this.currentLevelIndex--;
      return true;
    }
    return false;
  }

  resetToFirstLevel(): void {
    this.currentLevelIndex = 0;
  }
}

export const levelManager = LevelManager.getInstance(); 