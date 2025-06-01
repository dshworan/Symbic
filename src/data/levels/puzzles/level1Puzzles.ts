import { Puzzle } from '../../types/levelTypes';

export const level1Puzzles: Puzzle[] = [
  {
    grid: [
        [1, 0, null, 0],
        [0, null, null, 1],
        [null, 1, 1, null],
        [null, 0, 0, null]
      ],
      solution: [
        [1, 0, 1, 0],
        [0, 1, 0, 1],
        [0, 1, 1, 0],
        [1, 0, 0, 1]
      ],
    difficulty: 1.1
  }
  // Add more puzzles for level 1 here
]; 