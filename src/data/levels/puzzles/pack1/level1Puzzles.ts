import { Puzzle } from '../../../types/levelTypes';

export const level1Puzzles: Puzzle[] = [
  {
    grid: [
        [1, 0, null, 0],
        [0, 1, 0, 1],
        [0, null, 1, 0],
        [null, null, 0, 1]
      ],
      solution: [
        [1, 0, 1, 0],
        [0, 1, 0, 1],
        [0, 1, 1, 0],
        [1, 0, 0, 1]
      ],
    difficulty: 1,
    message: "There will always be an equal number of shapes in a row or column."
    
  },
  {
    grid: [
        [null, null, 0, 1],
        [0, null, 1, null],
        [0, 1, null, 1],
        [null, null, 1, 0]
      ],
      solution: [
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 1, 0, 1],
        [1, 0, 1, 0]
      ],
    difficulty: 1,
    message: "You are not allowed to have 3 in a row horizontally or vertically."
  },
  {
    grid: [
        [1, null, null, 0],
        [null, null, 0, 1],
        [0, null, 1, null],
        [1, 0, null, 1]
      ],
      solution: [
        [1, 0, 1, 0],
        [0, 1, 0, 1],
        [0, 1, 1, 0],
        [1, 0, 0, 1]
      ],
    difficulty: 1,
    message: "No two rows can be exactly the same."
  },
  {
    grid: [
        [null, 0, null, 1],
        [0, null, 1, null],
        [null, 1, null, null],
        [1, null, 1, null]
      ],
      solution: [
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 1, 0, 1],
        [1, 0, 1, 0]
      ],
    difficulty: 1,
    message: "No two columns can be exactly the same."
  },
  {
    grid: [
        [null, 0, 0, null],
        [null, null, null, null],
        [1, null, 1, null],
        [null, 1, 0, null]
      ],
      solution: [
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [1, 0, 1, 0],
        [0, 1, 0, 1]
      ],
    difficulty: 1,
    message: "You shouldn't have to guess. Use logic to solve the puzzle."
  }
]; 