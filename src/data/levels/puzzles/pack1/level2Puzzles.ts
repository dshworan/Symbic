import { Puzzle } from '../../../types/levelTypes';

export const level2Puzzles: Puzzle[] = [
  {
    grid: [
        [1, 0, 1, 0, 1, 0],
        [0, 0, 1, null, 0, 1],
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
      difficulty: 20
  }
  // Add more puzzles for level 2 here
]; 