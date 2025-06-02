import { Level, LevelColors, Pack } from '../types/levelTypes';
import { shapes } from './shapes';
import { level1Puzzles } from './puzzles/pack1/level1Puzzles';
import { level2Puzzles } from './puzzles/pack1/level2Puzzles';
import { level3Puzzles } from './puzzles/pack1/level3Puzzles';
import { level4Puzzles } from './puzzles/pack1/level4Puzzles';
import { level1Puzzles as pack2Level1Puzzles } from './puzzles/pack2/level1Puzzles';
import { level2Puzzles as pack2Level2Puzzles } from './puzzles/pack2/level2Puzzles';
export class LevelManager {
  private currentPackIndex: number = 0;
  private currentLevelIndex: number = 0;
  private packs: Pack[];
  private static instance: LevelManager;

  private constructor() {
    this.packs = [
      {
        id: 1,
        name: 'Pack 1',
        levels: [
          {
            id: 1,
            packId: 1,
            shapes: shapes[0],
            puzzles: level1Puzzles,
          },
          {
            id: 2,
            packId: 1,
            shapes: shapes[1],
            puzzles: level2Puzzles,
          },
          {
            id: 3,
            packId: 1,
            shapes: shapes[2],
            puzzles: level3Puzzles,
          },
          {
            id: 4,
            packId: 1,
            shapes: shapes[3],
            puzzles: level4Puzzles,
          }
        ]
      },
      {
        id: 2,
        name: 'Pack 2',
        levels: [
          {
            id: 1,
            packId: 2,
            shapes: shapes[0],
            puzzles: pack2Level1Puzzles,
          },
          {
            id: 2,
            packId: 2,
            shapes: shapes[1],
            puzzles: pack2Level2Puzzles,
          }
        ]
      }
    ];
  }

  public static getInstance(): LevelManager {
    if (!LevelManager.instance) {
      LevelManager.instance = new LevelManager();
    }
    return LevelManager.instance;
  }

  getCurrentPack(): Pack {
    return this.packs[this.currentPackIndex];
  }

  getCurrentLevel(): Level {
    return this.getCurrentPack().levels[this.currentLevelIndex];
  }

  getCurrentLevelNumber(): number {
    return this.currentLevelIndex + 1;
  }

  getCurrentPackNumber(): number {
    return this.currentPackIndex + 1;
  }

  getTotalLevelsInCurrentPack(): number {
    return this.getCurrentPack().levels.length;
  }

  getTotalPacks(): number {
    return this.packs.length;
  }

  nextLevel(): boolean {
    const currentPack = this.getCurrentPack();
    if (this.currentLevelIndex < currentPack.levels.length - 1) {
      this.currentLevelIndex++;
      return true;
    } else if (this.currentPackIndex < this.packs.length - 1) {
      // Move to next pack
      this.currentPackIndex++;
      this.currentLevelIndex = 0;
      return true;
    }
    return false;
  }

  previousLevel(): boolean {
    if (this.currentLevelIndex > 0) {
      this.currentLevelIndex--;
      return true;
    } else if (this.currentPackIndex > 0) {
      // Move to previous pack
      this.currentPackIndex--;
      this.currentLevelIndex = this.getCurrentPack().levels.length - 1;
      return true;
    }
    return false;
  }

  resetToFirstLevel(): void {
    this.currentPackIndex = 0;
    this.currentLevelIndex = 0;
  }
}

export const levelManager = LevelManager.getInstance(); 