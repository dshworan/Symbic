import { Puzzle } from '../../../types/levelTypes';

export const level1Puzzles: Puzzle[] = [
  {
    grid: [
        [1, 0, 1, 0, null, 0],
        [0, 0, 1, 1, 0, 1],
        [0, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 0, 0],
        [0, 1, 0, 1, 0, 1]
  ],
  solution: [
      [1, 0, 1, 0, 1, 0],
      [0, 0, 1, 1, 0, 1],
      [0, 1, 0, 0, 1, 1],
      [1, 1, 0, 0, 1, 0],
      [1, 0, 1, 1, 0, 0],
      [0, 1, 0, 1, 0, 1]
  ],
    difficulty: 8
  },
  {
    grid: [
        [1, 0, null, 0],
        [0, 1, 0, 1],
        [0, 1, 1, 0],
        [1, 0, 0, 1]
      ],
      solution: [
        [1, 0, 1, 0],
        [0, 1, 0, 1],
        [0, 1, 1, 0],
        [1, 0, 0, 1]
      ],
    difficulty: 6
  }
  // Add more puzzles for pack2 level 1 here
]; 