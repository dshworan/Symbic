import { Puzzle } from '../../../../types/levelTypes';

export const level2Puzzles: Puzzle[] = [
  {
    grid: [
        [1,null,null,null,1,null],
        [null,null,0,null,null,null],
        [1,0,null,null,1,null],
        [null,null,1,null,null,null],
        [null,null,null,null,0,null],
        [1,null,null,null,null,0],
      ],
      solution: [
        [1,0,1,0,1,0],
        [0,1,0,1,0,1],
        [1,0,0,1,1,0],
        [0,0,1,0,1,1],
        [0,1,1,0,0,1],
        [1,1,0,1,0,0],
      ],
    difficulty: 13.75
    
  },
  {
    grid: [
        [null,0,0,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,0,0,null,1,null],
        [null,null,1,null,null,null],
        [1,null,null,null,null,1],
      ],
      solution: [
        [1,0,0,1,0,1],
        [0,1,0,1,1,0],
        [0,1,1,0,0,1],
        [1,0,0,1,1,0],
        [0,1,1,0,1,0],
        [1,0,1,0,0,1],
      ],
    difficulty: 14.16
    
  },
  {
    grid: [
        [null,null,null,null,0,0],
        [1,null,null,0,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,0],
        [null,0,null,null,null,0],
        [null,null,1,null,null,null],
      ],
      solution: [
        [1,1,0,1,0,0],
        [1,0,1,0,0,1],
        [0,1,0,0,1,1],
        [0,1,0,1,1,0],
        [1,0,1,1,0,0],
        [0,0,1,0,1,1],
      ],
    difficulty: 15.27
    
  },
  {
    grid: [
        [null,null,null,1,1,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
        [1,1,null,null,1,null],
        [1,null,0,null,null,null],
        [null,0,null,null,null,null],
      ],
      solution: [
        [0,1,0,1,1,0],
        [1,0,1,1,0,0],
        [0,1,1,0,0,1],
        [1,1,0,0,1,0],
        [1,0,0,1,0,1],
        [0,0,1,0,1,1],
      ],
    difficulty: 15.27
    
  },
  {
    grid: [
        [null,null,1,null,1,null],
        [null,null,null,null,null,null],
        [null,null,null,0,null,null],
        [null,null,null,null,null,1],
        [1,null,null,0,null,1],
        [1,null,null,null,null,null],
      ],
      solution: [
        [0,1,1,0,1,0],
        [0,0,1,1,0,1],
        [1,1,0,0,1,0],
        [0,1,0,1,0,1],
        [1,0,1,0,0,1],
        [1,0,0,1,1,0],
      ],
    difficulty: 16.31
    
  },
]; 
