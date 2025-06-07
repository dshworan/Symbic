import { Puzzle } from '../../../../types/levelTypes';

export const level4Puzzles: Puzzle[] = [
  {
    grid: [
        [null,null,null,1,null,null],
        [null,0,null,1,null,null],
        [1,null,0,null,null,null],
        [1,null,null,null,null,null],
        [null,1,null,0,1,null],
        [null,null,null,null,null,0],
      ],
      solution: [
        [0,1,0,1,0,1],
        [0,0,1,1,0,1],
        [1,1,0,0,1,0],
        [1,0,1,1,0,0],
        [0,1,0,0,1,1],
        [1,0,1,0,1,0],
      ],
    difficulty: 4.68
    
  },
  {
    grid: [
        [null,1,null,null,null,null],
        [null,null,null,0,null,null],
        [null,null,null,null,0,null],
        [null,1,null,null,null,1],
        [0,null,0,null,0,null],
        [null,null,null,null,null,null],
      ],
      solution: [
        [1,1,0,1,0,0],
        [0,0,1,0,1,1],
        [1,0,1,1,0,0],
        [0,1,0,0,1,1],
        [0,1,0,1,0,1],
        [1,0,1,0,1,0],
      ],
    difficulty: 5.66
    
  },
  {
    grid: [
        [null,null,null,null,null,null],
        [0,null,null,1,null,null],
        [null,null,null,null,0,0],
        [null,null,null,null,null,0],
        [1,null,1,null,null,null],
        [null,null,null,null,null,null],
      ],
      solution: [
        [0,1,0,0,1,1],
        [0,0,1,1,0,1],
        [1,1,0,1,0,0],
        [0,1,1,0,1,0],
        [1,0,1,0,0,1],
        [1,0,0,1,1,0],
      ],
    difficulty: 5.68
    
  },
  {
    grid: [
        [0,null,null,null,0,null],
        [null,1,null,null,null,null],
        [null,null,1,null,null,null],
        [null,1,1,null,null,null],
        [0,null,null,null,null,null],
        [null,null,null,null,null,null],
      ],
      solution: [
        [0,0,1,1,0,1],
        [1,1,0,0,1,0],
        [1,0,1,1,0,0],
        [0,1,1,0,0,1],
        [0,1,0,0,1,1],
        [1,0,0,1,1,0],
      ],
    difficulty: 5.68
    
  },
  {
    grid: [
        [null,1,null,1,null,null],
        [1,null,null,null,1,null],
        [null,null,0,0,null,0],
        [null,null,null,null,null,null],
        [null,0,null,null,null,null],
        [null,null,null,null,null,1],
      ],
      solution: [
        [0,1,0,1,0,1],
        [1,0,1,0,1,0],
        [1,1,0,0,1,0],
        [0,0,1,1,0,1],
        [1,0,1,1,0,0],
        [0,1,0,0,1,1],
      ],
    difficulty: 5.72
    
  },
]; 
