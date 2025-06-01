import { Puzzle } from '../../types/levelTypes';

export const level3Puzzles: Puzzle[] = [
  {
    grid: [
      [null, null, null, 1, 1, null, null, 0],
      [null, 0, null, null, null, 0, null, null],
      [null, 0, 0, null, null, null, null, null],
      [1, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, 1],
      [null, null, 1, null, null, null, null, null],
      [0, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
  ],
  solution: [
      [0, 1, 0, 1, 1, 0, 1, 0],
      [0, 0, 1, 0, 1, 0, 1, 1],
      [1, 0, 0, 1, 0, 1, 0, 1],
      [1, 1, 0, 0, 1, 0, 1, 0],
      [0, 1, 1, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 0, 0, 1, 0],
      [0, 1, 0, 0, 1, 1, 0, 1],
      [1, 0, 1, 1, 0, 1, 0, 0]
  ],
    difficulty: 1.0
  },
  {
    grid: [
      [null, 0, 0, null, null, null, null, 0],
      [1, null, 0, null, null, 0, null, 0],
      [null, null, null, null, null, null, null, null],
      [null, 0, null, null, null, null, null, null],
      [null, null, null, 1, null, null, 1, null],
      [null, null, 1, null, 0, null, null, null],
      [null, null, 1, null, null, null, null, null],
      [1, null, null, null, null, 1, null, null]
  ],
  solution: [
      [1, 0, 0, 1, 0, 1, 1, 0],
      [1, 1, 0, 0, 1, 0, 1, 0],
      [0, 1, 1, 0, 1, 0, 0, 1],
      [0, 0, 1, 1, 0, 1, 0, 1],
      [1, 0, 0, 1, 1, 0, 1, 0],
      [0, 1, 1, 0, 0, 1, 0, 1],
      [0, 1, 1, 0, 1, 0, 1, 0],
      [1, 0, 0, 1, 0, 1, 0, 1]
  ],
  difficulty: 11.0
  }
  // Add more puzzles for level 3 here
]; 