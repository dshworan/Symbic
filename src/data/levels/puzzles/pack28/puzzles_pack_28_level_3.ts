import { Puzzle } from '../../../../types/levelTypes';

export const level3Puzzles: Puzzle[] = [
  {
    grid: [
        [null,null,0,null,null,null],
        [null,null,0,null,null,null],
        [null,null,null,1,null,1],
        [0,null,1,null,null,null],
        [null,null,null,null,null,1],
        [1,null,null,null,null,null],
      ],
      solution: [
        [0,1,0,0,1,1],
        [1,1,0,1,0,0],
        [0,0,1,1,0,1],
        [0,1,1,0,1,0],
        [1,0,0,1,0,1],
        [1,0,1,0,1,0],
      ],
    difficulty: 16.31
    
  },
  {
    grid: [
        [null,1,null,null,null,null],
        [null,null,0,null,1,null],
        [null,null,null,null,null,0],
        [1,0,null,null,null,null],
        [null,null,null,null,null,null],
        [0,null,1,null,null,0],
      ],
      solution: [
        [0,1,1,0,0,1],
        [1,0,0,1,1,0],
        [0,1,0,1,1,0],
        [1,0,1,0,0,1],
        [1,0,0,1,0,1],
        [0,1,1,0,1,0],
      ],
    difficulty: 16.76
    
  },
  {
    grid: [
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,0,null,0],
        [0,null,null,null,null,0],
        [null,0,null,null,null,null],
        [null,0,0,null,null,1],
      ],
      solution: [
        [0,1,1,0,1,0],
        [0,1,0,1,0,1],
        [1,0,1,0,1,0],
        [0,1,0,1,1,0],
        [1,0,1,0,0,1],
        [1,0,0,1,0,1],
      ],
    difficulty: 17.34
    
  },
  {
    grid: [
        [null,null,0,null,null,1],
        [1,null,null,null,null,1],
        [null,null,1,null,null,null],
        [null,0,1,null,null,null],
        [1,null,null,null,null,null],
        [null,null,null,0,null,null],
      ],
      solution: [
        [0,1,0,0,1,1],
        [1,0,0,1,0,1],
        [0,1,1,0,1,0],
        [0,0,1,1,0,1],
        [1,1,0,1,0,0],
        [1,0,1,0,1,0],
      ],
    difficulty: 17.83
    
  },
  {
    grid: [
        [null,null,null,null,null,null],
        [null,null,null,null,1,1],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,1,null,1,null],
        [null,0,null,null,1,1],
      ],
      solution: [
        [1,1,0,1,0,0],
        [0,1,0,0,1,1],
        [1,0,1,1,0,0],
        [0,1,0,1,0,1],
        [1,0,1,0,1,0],
        [0,0,1,0,1,1],
      ],
    difficulty: 17.89
    
  },
]; 
