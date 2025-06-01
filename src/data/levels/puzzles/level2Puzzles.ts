import { Puzzle } from '../../types/levelTypes';

export const level2Puzzles: Puzzle[] = [
  {
    grid: [
      [null, null, 1, null, null, null],
      [0, 0, null, 1, null, null],
      [0, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, 1, null, null],
      [null, null, null, null, 0, null]
  ],
  solution: [
      [1, 0, 1, 0, 1, 0],
      [0, 0, 1, 1, 0, 1],
      [0, 1, 0, 0, 1, 1],
      [1, 1, 0, 0, 1, 0],
      [1, 0, 1, 1, 0, 0],
      [0, 1, 0, 1, 0, 1]
  ],
      difficulty: 1.4
  }
  // Add more puzzles for level 2 here
]; 