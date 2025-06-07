import { Puzzle } from '../../../../types/levelTypes';

export const level3Puzzles: Puzzle[] = [
  {
    grid: [
        [null,null,null,null,null,1],
        [null,null,1,null,null,null],
        [null,null,null,null,1,null],
        [null,1,null,null,1,1],
        [null,null,null,null,null,null],
        [null,null,null,null,null,1],
      ],
      solution: [
        [0,1,0,1,0,1],
        [1,0,1,1,0,0],
        [1,0,1,0,1,0],
        [0,1,0,0,1,1],
        [1,1,0,1,0,0],
        [0,0,1,0,1,1],
      ],
    difficulty: 7.68
    
  },
  {
    grid: [
        [null,null,null,null,0,null],
        [null,null,null,0,null,null],
        [null,null,1,null,null,1],
        [1,null,null,0,null,1],
        [null,null,null,null,null,null],
        [1,null,null,null,null,null],
      ],
      solution: [
        [0,1,0,1,0,1],
        [1,1,0,0,1,0],
        [0,0,1,1,0,1],
        [1,0,1,0,0,1],
        [0,1,0,1,1,0],
        [1,0,1,0,1,0],
      ],
    difficulty: 7.81
    
  },
  {
    grid: [
        [null,null,null,null,null,null],
        [null,null,0,null,null,1],
        [null,null,null,0,null,null],
        [null,null,0,0,null,0],
        [null,null,null,null,null,null],
        [null,null,0,0,null,null],
      ],
      solution: [
        [1,0,1,1,0,0],
        [0,1,0,1,0,1],
        [1,0,1,0,1,0],
        [1,1,0,0,1,0],
        [0,0,1,1,0,1],
        [0,1,0,0,1,1],
      ],
    difficulty: 8.84
    
  },
  {
    grid: [
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,1,null,null,1],
        [1,null,null,0,null,1],
        [null,0,null,null,null,null],
        [null,null,0,0,null,null],
      ],
      solution: [
        [1,0,1,1,0,0],
        [0,1,0,1,1,0],
        [0,1,1,0,0,1],
        [1,0,1,0,0,1],
        [1,0,0,1,1,0],
        [0,1,0,0,1,1],
      ],
    difficulty: 8.91
    
  },
  {
    grid: [
        [1,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,0,null,0],
        [1,null,null,null,0,null],
        [1,null,null,1,null,null],
        [null,1,null,null,null,0],
      ],
      solution: [
        [1,0,1,0,1,0],
        [0,1,0,1,0,1],
        [0,1,1,0,1,0],
        [1,0,1,0,0,1],
        [1,0,0,1,0,1],
        [0,1,0,1,1,0],
      ],
    difficulty: 9.02
    
  },
]; 
