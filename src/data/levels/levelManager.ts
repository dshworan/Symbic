import { Level, LevelColors, Pack } from '../types/levelTypes';
import { shapes } from './shapes_and_colors';
import { puzzleManager } from '../../utils/puzzleManager';

// Pack 1
import { level1Puzzles } from './puzzles/pack1/puzzles_pack_1_level_1';
import { level2Puzzles } from './puzzles/pack1/puzzles_pack_1_level_2';
import { level3Puzzles } from './puzzles/pack1/puzzles_pack_1_level_3';
import { level4Puzzles } from './puzzles/pack1/puzzles_pack_1_level_4';

// Pack 2
import { level1Puzzles as pack2Level1Puzzles } from './puzzles/pack2/puzzles_pack_2_level_1';
import { level2Puzzles as pack2Level2Puzzles } from './puzzles/pack2/puzzles_pack_2_level_2';
import { level3Puzzles as pack2Level3Puzzles } from './puzzles/pack2/puzzles_pack_2_level_3';
import { level4Puzzles as pack2Level4Puzzles } from './puzzles/pack2/puzzles_pack_2_level_4';

// Pack 3
import { level1Puzzles as pack3Level1Puzzles } from './puzzles/pack3/puzzles_pack_3_level_1';
import { level2Puzzles as pack3Level2Puzzles } from './puzzles/pack3/puzzles_pack_3_level_2';
import { level3Puzzles as pack3Level3Puzzles } from './puzzles/pack3/puzzles_pack_3_level_3';
import { level4Puzzles as pack3Level4Puzzles } from './puzzles/pack3/puzzles_pack_3_level_4';

// Pack 4
import { level1Puzzles as pack4Level1Puzzles } from './puzzles/pack4/puzzles_pack_4_level_1';
import { level2Puzzles as pack4Level2Puzzles } from './puzzles/pack4/puzzles_pack_4_level_2';
import { level3Puzzles as pack4Level3Puzzles } from './puzzles/pack4/puzzles_pack_4_level_3';
import { level4Puzzles as pack4Level4Puzzles } from './puzzles/pack4/puzzles_pack_4_level_4';

// Pack 5
import { level1Puzzles as pack5Level1Puzzles } from './puzzles/pack5/puzzles_pack_5_level_1';
import { level2Puzzles as pack5Level2Puzzles } from './puzzles/pack5/puzzles_pack_5_level_2';
import { level3Puzzles as pack5Level3Puzzles } from './puzzles/pack5/puzzles_pack_5_level_3';
import { level4Puzzles as pack5Level4Puzzles } from './puzzles/pack5/puzzles_pack_5_level_4';

// Pack 6
import { level1Puzzles as pack6Level1Puzzles } from './puzzles/pack6/puzzles_pack_6_level_1';
import { level2Puzzles as pack6Level2Puzzles } from './puzzles/pack6/puzzles_pack_6_level_2';
import { level3Puzzles as pack6Level3Puzzles } from './puzzles/pack6/puzzles_pack_6_level_3';
import { level4Puzzles as pack6Level4Puzzles } from './puzzles/pack6/puzzles_pack_6_level_4';

// Pack 7
import { level1Puzzles as pack7Level1Puzzles } from './puzzles/pack7/puzzles_pack_7_level_1';
import { level2Puzzles as pack7Level2Puzzles } from './puzzles/pack7/puzzles_pack_7_level_2';
import { level3Puzzles as pack7Level3Puzzles } from './puzzles/pack7/puzzles_pack_7_level_3';
import { level4Puzzles as pack7Level4Puzzles } from './puzzles/pack7/puzzles_pack_7_level_4';

// Pack 8
import { level1Puzzles as pack8Level1Puzzles } from './puzzles/pack8/puzzles_pack_8_level_1';
import { level2Puzzles as pack8Level2Puzzles } from './puzzles/pack8/puzzles_pack_8_level_2';
import { level3Puzzles as pack8Level3Puzzles } from './puzzles/pack8/puzzles_pack_8_level_3';
import { level4Puzzles as pack8Level4Puzzles } from './puzzles/pack8/puzzles_pack_8_level_4';

// Pack 9
import { level1Puzzles as pack9Level1Puzzles } from './puzzles/pack9/puzzles_pack_9_level_1';
import { level2Puzzles as pack9Level2Puzzles } from './puzzles/pack9/puzzles_pack_9_level_2';
import { level3Puzzles as pack9Level3Puzzles } from './puzzles/pack9/puzzles_pack_9_level_3';
import { level4Puzzles as pack9Level4Puzzles } from './puzzles/pack9/puzzles_pack_9_level_4';

// Pack 10
import { level1Puzzles as pack10Level1Puzzles } from './puzzles/pack10/puzzles_pack_10_level_1';
import { level2Puzzles as pack10Level2Puzzles } from './puzzles/pack10/puzzles_pack_10_level_2';
import { level3Puzzles as pack10Level3Puzzles } from './puzzles/pack10/puzzles_pack_10_level_3';
import { level4Puzzles as pack10Level4Puzzles } from './puzzles/pack10/puzzles_pack_10_level_4';

// Pack 11
import { level1Puzzles as pack11Level1Puzzles } from './puzzles/pack11/puzzles_pack_11_level_1';
import { level2Puzzles as pack11Level2Puzzles } from './puzzles/pack11/puzzles_pack_11_level_2';
import { level3Puzzles as pack11Level3Puzzles } from './puzzles/pack11/puzzles_pack_11_level_3';
import { level4Puzzles as pack11Level4Puzzles } from './puzzles/pack11/puzzles_pack_11_level_4';

// Pack 12
import { level1Puzzles as pack12Level1Puzzles } from './puzzles/pack12/puzzles_pack_12_level_1';
import { level2Puzzles as pack12Level2Puzzles } from './puzzles/pack12/puzzles_pack_12_level_2';
import { level3Puzzles as pack12Level3Puzzles } from './puzzles/pack12/puzzles_pack_12_level_3';
import { level4Puzzles as pack12Level4Puzzles } from './puzzles/pack12/puzzles_pack_12_level_4';

// Pack 13
import { level1Puzzles as pack13Level1Puzzles } from './puzzles/pack13/puzzles_pack_13_level_1';
import { level2Puzzles as pack13Level2Puzzles } from './puzzles/pack13/puzzles_pack_13_level_2';
import { level3Puzzles as pack13Level3Puzzles } from './puzzles/pack13/puzzles_pack_13_level_3';
import { level4Puzzles as pack13Level4Puzzles } from './puzzles/pack13/puzzles_pack_13_level_4';

// Pack 14
import { level1Puzzles as pack14Level1Puzzles } from './puzzles/pack14/puzzles_pack_14_level_1';
import { level2Puzzles as pack14Level2Puzzles } from './puzzles/pack14/puzzles_pack_14_level_2';
import { level3Puzzles as pack14Level3Puzzles } from './puzzles/pack14/puzzles_pack_14_level_3';
import { level4Puzzles as pack14Level4Puzzles } from './puzzles/pack14/puzzles_pack_14_level_4';

// Pack 15
import { level1Puzzles as pack15Level1Puzzles } from './puzzles/pack15/puzzles_pack_15_level_1';
import { level2Puzzles as pack15Level2Puzzles } from './puzzles/pack15/puzzles_pack_15_level_2';
import { level3Puzzles as pack15Level3Puzzles } from './puzzles/pack15/puzzles_pack_15_level_3';
import { level4Puzzles as pack15Level4Puzzles } from './puzzles/pack15/puzzles_pack_15_level_4';

// Pack 16
import { level1Puzzles as pack16Level1Puzzles } from './puzzles/pack16/puzzles_pack_16_level_1';
import { level2Puzzles as pack16Level2Puzzles } from './puzzles/pack16/puzzles_pack_16_level_2';
import { level3Puzzles as pack16Level3Puzzles } from './puzzles/pack16/puzzles_pack_16_level_3';
import { level4Puzzles as pack16Level4Puzzles } from './puzzles/pack16/puzzles_pack_16_level_4';

// Pack 17
import { level1Puzzles as pack17Level1Puzzles } from './puzzles/pack17/puzzles_pack_17_level_1';
import { level2Puzzles as pack17Level2Puzzles } from './puzzles/pack17/puzzles_pack_17_level_2';
import { level3Puzzles as pack17Level3Puzzles } from './puzzles/pack17/puzzles_pack_17_level_3';
import { level4Puzzles as pack17Level4Puzzles } from './puzzles/pack17/puzzles_pack_17_level_4';

// Pack 18
import { level1Puzzles as pack18Level1Puzzles } from './puzzles/pack18/puzzles_pack_18_level_1';
import { level2Puzzles as pack18Level2Puzzles } from './puzzles/pack18/puzzles_pack_18_level_2';
import { level3Puzzles as pack18Level3Puzzles } from './puzzles/pack18/puzzles_pack_18_level_3';
import { level4Puzzles as pack18Level4Puzzles } from './puzzles/pack18/puzzles_pack_18_level_4';

// Pack 19
import { level1Puzzles as pack19Level1Puzzles } from './puzzles/pack19/puzzles_pack_19_level_1';
import { level2Puzzles as pack19Level2Puzzles } from './puzzles/pack19/puzzles_pack_19_level_2';
import { level3Puzzles as pack19Level3Puzzles } from './puzzles/pack19/puzzles_pack_19_level_3';
import { level4Puzzles as pack19Level4Puzzles } from './puzzles/pack19/puzzles_pack_19_level_4';

// Pack 20
import { level1Puzzles as pack20Level1Puzzles } from './puzzles/pack20/puzzles_pack_20_level_1';
import { level2Puzzles as pack20Level2Puzzles } from './puzzles/pack20/puzzles_pack_20_level_2';
import { level3Puzzles as pack20Level3Puzzles } from './puzzles/pack20/puzzles_pack_20_level_3';
import { level4Puzzles as pack20Level4Puzzles } from './puzzles/pack20/puzzles_pack_20_level_4';

// Pack 21
import { level1Puzzles as pack21Level1Puzzles } from './puzzles/pack21/puzzles_pack_21_level_1';
import { level2Puzzles as pack21Level2Puzzles } from './puzzles/pack21/puzzles_pack_21_level_2';
import { level3Puzzles as pack21Level3Puzzles } from './puzzles/pack21/puzzles_pack_21_level_3';
import { level4Puzzles as pack21Level4Puzzles } from './puzzles/pack21/puzzles_pack_21_level_4';

// Pack 22
import { level1Puzzles as pack22Level1Puzzles } from './puzzles/pack22/puzzles_pack_22_level_1';
import { level2Puzzles as pack22Level2Puzzles } from './puzzles/pack22/puzzles_pack_22_level_2';
import { level3Puzzles as pack22Level3Puzzles } from './puzzles/pack22/puzzles_pack_22_level_3';
import { level4Puzzles as pack22Level4Puzzles } from './puzzles/pack22/puzzles_pack_22_level_4';

// Pack 23
import { level1Puzzles as pack23Level1Puzzles } from './puzzles/pack23/puzzles_pack_23_level_1';
import { level2Puzzles as pack23Level2Puzzles } from './puzzles/pack23/puzzles_pack_23_level_2';
import { level3Puzzles as pack23Level3Puzzles } from './puzzles/pack23/puzzles_pack_23_level_3';
import { level4Puzzles as pack23Level4Puzzles } from './puzzles/pack23/puzzles_pack_23_level_4';

// Pack 24
import { level1Puzzles as pack24Level1Puzzles } from './puzzles/pack24/puzzles_pack_24_level_1';
import { level2Puzzles as pack24Level2Puzzles } from './puzzles/pack24/puzzles_pack_24_level_2';
import { level3Puzzles as pack24Level3Puzzles } from './puzzles/pack24/puzzles_pack_24_level_3';
import { level4Puzzles as pack24Level4Puzzles } from './puzzles/pack24/puzzles_pack_24_level_4';

// Pack 25
import { level1Puzzles as pack25Level1Puzzles } from './puzzles/pack25/puzzles_pack_25_level_1';
import { level2Puzzles as pack25Level2Puzzles } from './puzzles/pack25/puzzles_pack_25_level_2';
import { level3Puzzles as pack25Level3Puzzles } from './puzzles/pack25/puzzles_pack_25_level_3';
import { level4Puzzles as pack25Level4Puzzles } from './puzzles/pack25/puzzles_pack_25_level_4';

// Pack 26
import { level1Puzzles as pack26Level1Puzzles } from './puzzles/pack26/puzzles_pack_26_level_1';
import { level2Puzzles as pack26Level2Puzzles } from './puzzles/pack26/puzzles_pack_26_level_2';
import { level3Puzzles as pack26Level3Puzzles } from './puzzles/pack26/puzzles_pack_26_level_3';
import { level4Puzzles as pack26Level4Puzzles } from './puzzles/pack26/puzzles_pack_26_level_4';

// Pack 27
import { level1Puzzles as pack27Level1Puzzles } from './puzzles/pack27/puzzles_pack_27_level_1';
import { level2Puzzles as pack27Level2Puzzles } from './puzzles/pack27/puzzles_pack_27_level_2';
import { level3Puzzles as pack27Level3Puzzles } from './puzzles/pack27/puzzles_pack_27_level_3';
import { level4Puzzles as pack27Level4Puzzles } from './puzzles/pack27/puzzles_pack_27_level_4';

// Pack 28
import { level1Puzzles as pack28Level1Puzzles } from './puzzles/pack28/puzzles_pack_28_level_1';
import { level2Puzzles as pack28Level2Puzzles } from './puzzles/pack28/puzzles_pack_28_level_2';
import { level3Puzzles as pack28Level3Puzzles } from './puzzles/pack28/puzzles_pack_28_level_3';
import { level4Puzzles as pack28Level4Puzzles } from './puzzles/pack28/puzzles_pack_28_level_4';

// Pack 29
import { level1Puzzles as pack29Level1Puzzles } from './puzzles/pack29/puzzles_pack_29_level_1';
import { level2Puzzles as pack29Level2Puzzles } from './puzzles/pack29/puzzles_pack_29_level_2';
import { level3Puzzles as pack29Level3Puzzles } from './puzzles/pack29/puzzles_pack_29_level_3';
import { level4Puzzles as pack29Level4Puzzles } from './puzzles/pack29/puzzles_pack_29_level_4';

// Pack 30
import { level1Puzzles as pack30Level1Puzzles } from './puzzles/pack30/puzzles_pack_30_level_1';
import { level2Puzzles as pack30Level2Puzzles } from './puzzles/pack30/puzzles_pack_30_level_2';
import { level3Puzzles as pack30Level3Puzzles } from './puzzles/pack30/puzzles_pack_30_level_3';
import { level4Puzzles as pack30Level4Puzzles } from './puzzles/pack30/puzzles_pack_30_level_4';

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
      },
      {
        id: 4,
        name: 'Pack 4',
        levels: [
          {
            id: 1,
            packId: 4,
            shapes: shapes[0],
            puzzles: pack4Level1Puzzles,
          },
          {
            id: 2,
            packId: 4,
            shapes: shapes[1],
            puzzles: pack4Level2Puzzles,
          },
          {
            id: 3,
            packId: 4,
            shapes: shapes[2],
            puzzles: pack4Level3Puzzles,
          },
          {
            id: 4,
            packId: 4,
            shapes: shapes[3],
            puzzles: pack4Level4Puzzles,
          }
        ]
      },
      {
        id: 5,
        name: 'Pack 5',
        levels: [
          {
            id: 1,
            packId: 5,
            shapes: shapes[0],
            puzzles: pack5Level1Puzzles,
          },
          {
            id: 2,
            packId: 5,
            shapes: shapes[1],
            puzzles: pack5Level2Puzzles,
          },
          {
            id: 3,
            packId: 5,
            shapes: shapes[2],
            puzzles: pack5Level3Puzzles,
          },
          {
            id: 4,
            packId: 5,
            shapes: shapes[3],
            puzzles: pack5Level4Puzzles,
          }
        ]
      },
      {
        id: 6,
        name: 'Pack 6',
        levels: [
          {
            id: 1,
            packId: 6,
            shapes: shapes[0],
            puzzles: pack6Level1Puzzles,
          },
          {
            id: 2,
            packId: 6,
            shapes: shapes[1],
            puzzles: pack6Level2Puzzles,
          },
          {
            id: 3,
            packId: 6,
            shapes: shapes[2],
            puzzles: pack6Level3Puzzles,
          },
          {
            id: 4,
            packId: 6,
            shapes: shapes[3],
            puzzles: pack6Level4Puzzles,
          }
        ]
      },
      {
        id: 7,
        name: 'Pack 7',
        levels: [
          {
            id: 1,
            packId: 7,
            shapes: shapes[0],
            puzzles: pack7Level1Puzzles,
          },
          {
            id: 2,
            packId: 7,
            shapes: shapes[1],
            puzzles: pack7Level2Puzzles,
          },
          {
            id: 3,
            packId: 7,
            shapes: shapes[2],
            puzzles: pack7Level3Puzzles,
          },
          {
            id: 4,
            packId: 7,
            shapes: shapes[3],
            puzzles: pack7Level4Puzzles,
          }
        ]
      },
      {
        id: 8,
        name: 'Pack 8',
        levels: [
          {
            id: 1,
            packId: 8,
            shapes: shapes[0],
            puzzles: pack8Level1Puzzles,
          },
          {
            id: 2,
            packId: 8,
            shapes: shapes[1],
            puzzles: pack8Level2Puzzles,
          },
          {
            id: 3,
            packId: 8,
            shapes: shapes[2],
            puzzles: pack8Level3Puzzles,
          },
          {
            id: 4,
            packId: 8,
            shapes: shapes[3],
            puzzles: pack8Level4Puzzles,
          }
        ]
      },
      {
        id: 9,
        name: 'Pack 9',
        levels: [
          {
            id: 1,
            packId: 9,
            shapes: shapes[0],
            puzzles: pack9Level1Puzzles,
          },
          {
            id: 2,
            packId: 9,
            shapes: shapes[1],
            puzzles: pack9Level2Puzzles,
          },
          {
            id: 3,
            packId: 9,
            shapes: shapes[2],
            puzzles: pack9Level3Puzzles,
          },
          {
            id: 4,
            packId: 9,
            shapes: shapes[3],
            puzzles: pack9Level4Puzzles,
          }
        ]
      },
      {
        id: 10,
        name: 'Pack 10',
        levels: [
          {
            id: 1,
            packId: 10,
            shapes: shapes[0],
            puzzles: pack10Level1Puzzles,
          },
          {
            id: 2,
            packId: 10,
            shapes: shapes[1],
            puzzles: pack10Level2Puzzles,
          },
          {
            id: 3,
            packId: 10,
            shapes: shapes[2],
            puzzles: pack10Level3Puzzles,
          },
          {
            id: 4,
            packId: 10,
            shapes: shapes[3],
            puzzles: pack10Level4Puzzles,
          }
        ]
      },
      {
        id: 11,
        name: 'Pack 11',
        levels: [
          {
            id: 1,
            packId: 11,
            shapes: shapes[0],
            puzzles: pack11Level1Puzzles,
          },
          {
            id: 2,
            packId: 11,
            shapes: shapes[1],
            puzzles: pack11Level2Puzzles,
          },
          {
            id: 3,
            packId: 11,
            shapes: shapes[2],
            puzzles: pack11Level3Puzzles,
          },
          {
            id: 4,
            packId: 11,
            shapes: shapes[3],
            puzzles: pack11Level4Puzzles,
          }
        ]
      },
      {
        id: 12,
        name: 'Pack 12',
        levels: [
          {
            id: 1,
            packId: 12,
            shapes: shapes[0],
            puzzles: pack12Level1Puzzles,
          },
          {
            id: 2,
            packId: 12,
            shapes: shapes[1],
            puzzles: pack12Level2Puzzles,
          },
          {
            id: 3,
            packId: 12,
            shapes: shapes[2],
            puzzles: pack12Level3Puzzles,
          },
          {
            id: 4,
            packId: 12,
            shapes: shapes[3],
            puzzles: pack12Level4Puzzles,
          }
        ]
      },
      {
        id: 13,
        name: 'Pack 13',
        levels: [
          {
            id: 1,
            packId: 13,
            shapes: shapes[0],
            puzzles: pack13Level1Puzzles,
          },
          {
            id: 2,
            packId: 13,
            shapes: shapes[1],
            puzzles: pack13Level2Puzzles,
          },
          {
            id: 3,
            packId: 13,
            shapes: shapes[2],
            puzzles: pack13Level3Puzzles,
          },
          {
            id: 4,
            packId: 13,
            shapes: shapes[3],
            puzzles: pack13Level4Puzzles,
          }
        ]
      },
      {
        id: 14,
        name: 'Pack 14',
        levels: [
          {
            id: 1,
            packId: 14,
            shapes: shapes[0],
            puzzles: pack14Level1Puzzles,
          },
          {
            id: 2,
            packId: 14,
            shapes: shapes[1],
            puzzles: pack14Level2Puzzles,
          },
          {
            id: 3,
            packId: 14,
            shapes: shapes[2],
            puzzles: pack14Level3Puzzles,
          },
          {
            id: 4,
            packId: 14,
            shapes: shapes[3],
            puzzles: pack14Level4Puzzles,
          }
        ]
      },
      {
        id: 15,
        name: 'Pack 15',
        levels: [
          {
            id: 1,
            packId: 15,
            shapes: shapes[0],
            puzzles: pack15Level1Puzzles,
          },
          {
            id: 2,
            packId: 15,
            shapes: shapes[1],
            puzzles: pack15Level2Puzzles,
          },
          {
            id: 3,
            packId: 15,
            shapes: shapes[2],
            puzzles: pack15Level3Puzzles,
          },
          {
            id: 4,
            packId: 15,
            shapes: shapes[3],
            puzzles: pack15Level4Puzzles,
          }
        ]
      },
      {
        id: 16,
        name: 'Pack 16',
        levels: [
          {
            id: 1,
            packId: 16,
            shapes: shapes[0],
            puzzles: pack16Level1Puzzles,
          },
          {
            id: 2,
            packId: 16,
            shapes: shapes[1],
            puzzles: pack16Level2Puzzles,
          },
          {
            id: 3,
            packId: 16,
            shapes: shapes[2],
            puzzles: pack16Level3Puzzles,
          },
          {
            id: 4,
            packId: 16,
            shapes: shapes[3],
            puzzles: pack16Level4Puzzles,
          }
        ]
      },
      {
        id: 17,
        name: 'Pack 17',
        levels: [
          {
            id: 1,
            packId: 17,
            shapes: shapes[0],
            puzzles: pack17Level1Puzzles,
          },
          {
            id: 2,
            packId: 17,
            shapes: shapes[1],
            puzzles: pack17Level2Puzzles,
          },
          {
            id: 3,
            packId: 17,
            shapes: shapes[2],
            puzzles: pack17Level3Puzzles,
          },
          {
            id: 4,
            packId: 17,
            shapes: shapes[3],
            puzzles: pack17Level4Puzzles,
          }
        ]
      },
      {
        id: 18,
        name: 'Pack 18',
        levels: [
          {
            id: 1,
            packId: 18,
            shapes: shapes[0],
            puzzles: pack18Level1Puzzles,
          },
          {
            id: 2,
            packId: 18,
            shapes: shapes[1],
            puzzles: pack18Level2Puzzles,
          },
          {
            id: 3,
            packId: 18,
            shapes: shapes[2],
            puzzles: pack18Level3Puzzles,
          },
          {
            id: 4,
            packId: 18,
            shapes: shapes[3],
            puzzles: pack18Level4Puzzles,
          }
        ]
      },
      {
        id: 19,
        name: 'Pack 19',
        levels: [
          {
            id: 1,
            packId: 19,
            shapes: shapes[0],
            puzzles: pack19Level1Puzzles,
          },
          {
            id: 2,
            packId: 19,
            shapes: shapes[1],
            puzzles: pack19Level2Puzzles,
          },
          {
            id: 3,
            packId: 19,
            shapes: shapes[2],
            puzzles: pack19Level3Puzzles,
          },
          {
            id: 4,
            packId: 19,
            shapes: shapes[3],
            puzzles: pack19Level4Puzzles,
          }
        ]
      },
      {
        id: 20,
        name: 'Pack 20',
        levels: [
          {
            id: 1,
            packId: 20,
            shapes: shapes[0],
            puzzles: pack20Level1Puzzles,
          },
          {
            id: 2,
            packId: 20,
            shapes: shapes[1],
            puzzles: pack20Level2Puzzles,
          },
          {
            id: 3,
            packId: 20,
            shapes: shapes[2],
            puzzles: pack20Level3Puzzles,
          },
          {
            id: 4,
            packId: 20,
            shapes: shapes[3],
            puzzles: pack20Level4Puzzles,
          }
        ]
      },
      {
        id: 21,
        name: 'Pack 21',
        levels: [
          {
            id: 1,
            packId: 21,
            shapes: shapes[0],
            puzzles: pack21Level1Puzzles,
          },
          {
            id: 2,
            packId: 21,
            shapes: shapes[1],
            puzzles: pack21Level2Puzzles,
          },
          {
            id: 3,
            packId: 21,
            shapes: shapes[2],
            puzzles: pack21Level3Puzzles,
          },
          {
            id: 4,
            packId: 21,
            shapes: shapes[3],
            puzzles: pack21Level4Puzzles,
          }
        ]
      },
      {
        id: 22,
        name: 'Pack 22',
        levels: [
          {
            id: 1,
            packId: 22,
            shapes: shapes[0],
            puzzles: pack22Level1Puzzles,
          },
          {
            id: 2,
            packId: 22,
            shapes: shapes[1],
            puzzles: pack22Level2Puzzles,
          },
          {
            id: 3,
            packId: 22,
            shapes: shapes[2],
            puzzles: pack22Level3Puzzles,
          },
          {
            id: 4,
            packId: 22,
            shapes: shapes[3],
            puzzles: pack22Level4Puzzles,
          }
        ]
      },
      {
        id: 23,
        name: 'Pack 23',
        levels: [
          {
            id: 1,
            packId: 23,
            shapes: shapes[0],
            puzzles: pack23Level1Puzzles,
          },
          {
            id: 2,
            packId: 23,
            shapes: shapes[1],
            puzzles: pack23Level2Puzzles,
          },
          {
            id: 3,
            packId: 23,
            shapes: shapes[2],
            puzzles: pack23Level3Puzzles,
          },
          {
            id: 4,
            packId: 23,
            shapes: shapes[3],
            puzzles: pack23Level4Puzzles,
          }
        ]
      },
      {
        id: 24,
        name: 'Pack 24',
        levels: [
          {
            id: 1,
            packId: 24,
            shapes: shapes[0],
            puzzles: pack24Level1Puzzles,
          },
          {
            id: 2,
            packId: 24,
            shapes: shapes[1],
            puzzles: pack24Level2Puzzles,
          },
          {
            id: 3,
            packId: 24,
            shapes: shapes[2],
            puzzles: pack24Level3Puzzles,
          },
          {
            id: 4,
            packId: 24,
            shapes: shapes[3],
            puzzles: pack24Level4Puzzles,
          }
        ]
      },
      {
        id: 25,
        name: 'Pack 25',
        levels: [
          {
            id: 1,
            packId: 25,
            shapes: shapes[0],
            puzzles: pack25Level1Puzzles,
          },
          {
            id: 2,
            packId: 25,
            shapes: shapes[1],
            puzzles: pack25Level2Puzzles,
          },
          {
            id: 3,
            packId: 25,
            shapes: shapes[2],
            puzzles: pack25Level3Puzzles,
          },
          {
            id: 4,
            packId: 25,
            shapes: shapes[3],
            puzzles: pack25Level4Puzzles,
          }
        ]
      },
      {
        id: 26,
        name: 'Pack 26',
        levels: [
          {
            id: 1,
            packId: 26,
            shapes: shapes[0],
            puzzles: pack26Level1Puzzles,
          },
          {
            id: 2,
            packId: 26,
            shapes: shapes[1],
            puzzles: pack26Level2Puzzles,
          },
          {
            id: 3,
            packId: 26,
            shapes: shapes[2],
            puzzles: pack26Level3Puzzles,
          },
          {
            id: 4,
            packId: 26,
            shapes: shapes[3],
            puzzles: pack26Level4Puzzles,
          }
        ]
      },
      {
        id: 27,
        name: 'Pack 27',
        levels: [
          {
            id: 1,
            packId: 27,
            shapes: shapes[0],
            puzzles: pack27Level1Puzzles,
          },
          {
            id: 2,
            packId: 27,
            shapes: shapes[1],
            puzzles: pack27Level2Puzzles,
          },
          {
            id: 3,
            packId: 27,
            shapes: shapes[2],
            puzzles: pack27Level3Puzzles,
          },
          {
            id: 4,
            packId: 27,
            shapes: shapes[3],
            puzzles: pack27Level4Puzzles,
          }
        ]
      },
      {
        id: 28,
        name: 'Pack 28',
        levels: [
          {
            id: 1,
            packId: 28,
            shapes: shapes[0],
            puzzles: pack28Level1Puzzles,
          },
          {
            id: 2,
            packId: 28,
            shapes: shapes[1],
            puzzles: pack28Level2Puzzles,
          },
          {
            id: 3,
            packId: 28,
            shapes: shapes[2],
            puzzles: pack28Level3Puzzles,
          },
          {
            id: 4,
            packId: 28,
            shapes: shapes[3],
            puzzles: pack28Level4Puzzles,
          }
        ]
      },
      {
        id: 29,
        name: 'Pack 29',
        levels: [
          {
            id: 1,
            packId: 29,
            shapes: shapes[0],
            puzzles: pack29Level1Puzzles,
          },
          {
            id: 2,
            packId: 29,
            shapes: shapes[1],
            puzzles: pack29Level2Puzzles,
          },
          {
            id: 3,
            packId: 29,
            shapes: shapes[2],
            puzzles: pack29Level3Puzzles,
          },
          {
            id: 4,
            packId: 29,
            shapes: shapes[3],
            puzzles: pack29Level4Puzzles,
          }
        ]
      },
      {
        id: 30,
        name: 'Pack 30',
        levels: [
          {
            id: 1,
            packId: 30,
            shapes: shapes[0],
            puzzles: pack30Level1Puzzles,
          },
          {
            id: 2,
            packId: 30,
            shapes: shapes[1],
            puzzles: pack30Level2Puzzles,
          },
          {
            id: 3,
            packId: 30,
            shapes: shapes[2],
            puzzles: pack30Level3Puzzles,
          },
          {
            id: 4,
            packId: 30,
            shapes: shapes[3],
            puzzles: pack30Level4Puzzles,
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

  public getPack(packId: number): Pack {
    const pack = this.packs.find(p => p.id === packId);
    if (!pack) {
      throw new Error(`Pack with ID ${packId} not found`);
    }
    return pack;
  }

  getCurrentPack(): Pack {
    const pack = this.packs[this.currentPackIndex];
    if (!pack) {
      console.error('Invalid pack index:', this.currentPackIndex);
      return this.packs[0]; // Fallback to first pack
    }
    return pack;
  }

  getCurrentLevel(): Level {
    const pack = this.packs[this.currentPackIndex];
    if (!pack) {
      console.error('Invalid pack index:', this.currentPackIndex);
      return this.packs[0].levels[0]; // Fallback to first level of first pack
    }
    const level = pack.levels[this.currentLevelIndex];
    if (!level) {
      console.error('Invalid level index:', this.currentLevelIndex);
      return pack.levels[0]; // Fallback to first level of current pack
    }
    return level;
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

  public setCurrentPack(packId: number): void {
    // Convert to 0-based index
    this.currentPackIndex = packId - 1;
    // Reset level index when changing packs
    this.currentLevelIndex = 0;
    // Sync puzzle manager
    puzzleManager.syncWithLevelManager();
    console.log('Set current pack:', packId, 'pack index:', this.currentPackIndex);
  }

  public setCurrentLevel(levelId: number): void {
    // Convert to 0-based index
    this.currentLevelIndex = levelId - 1;
    // Sync puzzle manager
    puzzleManager.syncWithLevelManager();
    console.log('Set current level:', levelId, 'level index:', this.currentLevelIndex);
  }
}

export const levelManager = LevelManager.getInstance(); 