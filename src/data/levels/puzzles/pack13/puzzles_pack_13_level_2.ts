import { Puzzle } from '../../../../types/levelTypes';

export const level2Puzzles: Puzzle[] = [
  {
    grid: [
        [0,0,null,null,null,null],
        [null,1,1,null,null,null],
        [null,null,null,null,0,null],
        [1,null,1,null,null,null],
        [null,null,null,0,null,null],
        [null,null,null,null,1,null],
      ],
      solution: [
        [0,0,1,1,0,1],
        [0,1,1,0,1,0],
        [1,1,0,1,0,0],
        [1,0,1,0,0,1],
        [0,1,0,0,1,1],
        [1,0,0,1,1,0],
      ],
    difficulty: 6.87
    
  },
  {
    grid: [
        [1,null,null,1,null,null],
        [null,null,null,null,null,null],
        [null,null,null,1,null,1],
        [null,null,1,null,0,null],
        [0,0,null,null,null,null],
        [null,null,null,null,null,0],
      ],
      solution: [
        [1,0,0,1,0,1],
        [0,1,1,0,1,0],
        [0,1,0,1,0,1],
        [1,0,1,1,0,0],
        [0,0,1,0,1,1],
        [1,1,0,0,1,0],
      ],
    difficulty: 6.87
    
  },
  {
    grid: [
        [null,null,null,null,null,null],
        [null,0,0,null,0,null],
        [null,null,null,null,null,null],
        [null,0,null,1,0,null],
        [null,0,null,null,null,null],
        [0,null,null,0,null,0],
      ],
      solution: [
        [0,1,1,0,0,1],
        [1,0,0,1,0,1],
        [1,1,0,0,1,0],
        [0,0,1,1,0,1],
        [1,0,0,1,1,0],
        [0,1,1,0,1,0],
      ],
    difficulty: 6.98
    
  },
  {
    grid: [
        [null,null,1,null,null,1],
        [null,null,null,null,1,null],
        [null,0,1,null,1,null],
        [1,null,0,null,null,null],
        [null,null,null,null,0,null],
        [1,null,null,1,null,null],
      ],
      solution: [
        [0,0,1,1,0,1],
        [0,1,0,0,1,1],
        [1,0,1,0,1,0],
        [1,1,0,1,0,0],
        [0,1,1,0,0,1],
        [1,0,0,1,1,0],
      ],
    difficulty: 7.11
    
  },
  {
    grid: [
        [null,1,null,null,null,0],
        [null,null,null,null,null,null],
        [null,null,0,null,0,null],
        [null,null,null,null,null,null],
        [1,null,null,1,1,null],
        [null,null,null,null,1,null],
      ],
      solution: [
        [1,1,0,1,0,0],
        [1,0,1,0,1,0],
        [0,1,0,1,0,1],
        [0,1,1,0,0,1],
        [1,0,0,1,1,0],
        [0,0,1,0,1,1],
      ],
    difficulty: 7.81
    
  },
]; 
