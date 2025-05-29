import { Puzzle } from '../../types/puzzle';

export const level1Puzzles: Puzzle[] = [
  {
    id: '1-1',
    grid: [
      [1, 0, 0, null, 0, 1],
      [1, null, 0, 0, null, 0],
      [0, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 0],
      [0, 1, 1, 0, 1, 0],
      [0, 0, 1, 1, 0, 1]
    ],
    solution: [
      [1, 0, 0, 1, 0, 1],
      [1, 1, 0, 0, 1, 0],
      [0, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 0],
      [0, 1, 1, 0, 1, 0],
      [0, 0, 1, 1, 0, 1]
    ],
    difficulty: 1.0,
    gridSize: 6,
    level: 1,
    shapeSetId: 'set-1'
  },

  {
    id: '1-4',
    grid: [
      [1, 0, 0, 1, 0, 1],
      [1, 1, 0, 0, 1, 0],
      [0, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 0],
      [0, 1, 1, 0, 1, 0],
      [0, null, 1, 1, null, 1]
    ],
    solution: [
      [1, 0, 0, 1, 0, 1],
      [1, 1, 0, 0, 1, 0],
      [0, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 0],
      [0, 1, 1, 0, 1, 0],
      [0, 0, 1, 1, 0, 1]
    ],
    difficulty: 1.2,
    gridSize: 6,
    level: 1,
    shapeSetId: 'set-1'
  },
  {
    id: '1-2',
    grid: [
        [null, 1, 1, 0, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 1, 1, 0],
        [0, 1, 1, 0, 1, 0, 0, 1],
        [0, 0, 1, 1, 0, 1, 1, 0],
        [1, 0, 0, 1, 1, 0, 1, 0],
        [1, 1, 0, 0, 1, 0, 0, 1],
        [0, 1, 1, 0, 0, 1, 0, 1]
    ],
    solution: [
        [0, 1, 1, 0, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 1, 1, 0],
        [0, 1, 1, 0, 1, 0, 0, 1],
        [0, 0, 1, 1, 0, 1, 1, 0],
        [1, 0, 0, 1, 1, 0, 1, 0],
        [1, 1, 0, 0, 1, 0, 0, 1],
        [0, 1, 1, 0, 0, 1, 0, 1]
    ],
    difficulty: 1.2,
    gridSize: 8,
    level: 1,
    shapeSetId: 'set-1'
  },
  {
    id: '1-3',
    grid: [
        [null, null, null, null, null, null, null, 1, null, null],
        [null, 0, 0, null, null, 0, null, null, 1, null],
        [null, 0, null, null, 1, null, null, 0, null, 0],
        [null, null, 1, null, null, null, 1, null, null, null],
        [1, null, 1, null, null, null, null, null, null, 1],
        [null, null, null, null, null, null, null, 1, null, null],
        [null, 0, null, null, 1, null, null, null, 0, null],
        [null, null, null, null, 1, 1, null, null, null, 0],
        [null, 0, null, 0, null, null, 1, null, null, 0],
        [0, null, null, null, 0, null, null, null, 1, null]
    ],
    solution: [
        [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
        [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
        [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
        [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
        [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 0, 1, 0, 1, 1]
    ],
    difficulty: 1.2,
    gridSize: 10,
    level: 1,
    shapeSetId: 'set-1'
  },
  {
    id: '1-4',
    grid: [
      [null, 0, null, null, null, null],
      [1, null, null, 0, 0, null],
      [null, null, null, null, 0, null],
      [0, null, null, 1, null, null],
      [null, null, 0, null, null, null],
      [null, 1, null, null, null, 0]
    ],
    solution: [
      [1, 0, 0, 1, 1, 0],
      [1, 0, 1, 0, 0, 1],
      [0, 1, 1, 0, 0, 1],
      [0, 1, 0, 1, 1, 0],
      [1, 0, 0, 1, 0, 1],
      [0, 1, 1, 0, 1, 0]
    ],
    difficulty: 1.2,
    gridSize: 6,
    level: 1,
    shapeSetId: 'set-1'
  },
  {
    id: '1-5',
    grid: [
      [null, null, 0, null, null, 1],
      [1, null, 0, 0, null, null],
      [null, 1, null, null, null, null],
      [null, null, null, null, 1, null],
      [null, null, 1, null, null, 0],
      [0, 0, null, 1, null, null]
    ],
    solution: [
      [1, 0, 0, 1, 0, 1],
      [1, 1, 0, 0, 1, 0],
      [0, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 0],
      [0, 1, 1, 0, 1, 0],
      [0, 0, 1, 1, 0, 1]
    ],
    difficulty: 1.2,
    gridSize: 6,
    level: 1,
    shapeSetId: 'set-1'
  }
]; 