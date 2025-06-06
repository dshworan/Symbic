import { Level, LevelColors, Pack } from '../types/levelTypes';
import { shapes } from './shapes_and_colors';
import { level1Puzzles } from './puzzles/pack1/puzzles_pack_1_level_1';
import { level2Puzzles } from './puzzles/pack1/puzzles_pack_1_level_2';
import { level3Puzzles } from './puzzles/pack1/puzzles_pack_1_level_3';
import { level4Puzzles } from './puzzles/pack1/puzzles_pack_1_level_4';
import { level1Puzzles as pack2Level1Puzzles } from './puzzles/pack2/puzzles_pack_2_level_1';
import { level2Puzzles as pack2Level2Puzzles } from './puzzles/pack2/puzzles_pack_2_level_2';
import { level3Puzzles as pack2Level3Puzzles } from './puzzles/pack2/puzzles_pack_2_level_3';
import { level4Puzzles as pack2Level4Puzzles } from './puzzles/pack2/puzzles_pack_2_level_4';
import { level1Puzzles as pack3Level1Puzzles } from './puzzles/pack3/puzzles_pack_3_level_1';
import { level2Puzzles as pack3Level2Puzzles } from './puzzles/pack3/puzzles_pack_3_level_2';
import { level3Puzzles as pack3Level3Puzzles } from './puzzles/pack3/puzzles_pack_3_level_3';
import { level4Puzzles as pack3Level4Puzzles } from './puzzles/pack3/puzzles_pack_3_level_4';

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
          },
          {
            id: 3,
            packId: 2,
            shapes: shapes[2],
            puzzles: pack2Level3Puzzles,
          },
          {
            id: 4,
            packId: 2,
            shapes: shapes[3],
            puzzles: pack2Level4Puzzles,
          }
        ]
      },
      {
        id: 3,
        name: 'Pack 3',
        levels: [
          {
            id: 1,
            packId: 3,
            shapes: shapes[0],
            puzzles: pack3Level1Puzzles,
          },
          {
            id: 2,
            packId: 3,
            shapes: shapes[1],
            puzzles: pack3Level2Puzzles,
          },
          {
            id: 3,
            packId: 3,
            shapes: shapes[2],
            puzzles: pack3Level3Puzzles,
          },
          {
            id: 4,
            packId: 3,
            shapes: shapes[3],
            puzzles: pack3Level4Puzzles,
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