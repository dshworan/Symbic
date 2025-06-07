import { Puzzle } from '../../../../types/levelTypes';

export const level4Puzzles: Puzzle[] = [
  {
    grid: [
        [null,1,0,null,null,null],
        [null,1,null,1,null,null],
        [1,null,null,null,1,null],
        [0,null,0,null,1,null],
        [null,null,null,null,null,null],
        [null,null,null,null,null,0],
      ],
      solution: [
        [1,1,0,0,1,0],
        [0,1,0,1,0,1],
        [1,0,1,0,1,0],
        [0,1,0,0,1,1],
        [0,0,1,1,0,1],
        [1,0,1,1,0,0],
      ],
    difficulty: 14.94
    
  },
  {
    grid: [
        [null,null,null,null,null,null],
        [null,null,0,0,null,null],
        [null,0,null,1,1,null],
        [null,0,null,null,null,null],
        [null,null,null,null,null,1],
        [null,0,null,null,null,null],
      ],
      solution: [
        [0,1,1,0,0,1],
        [1,1,0,0,1,0],
        [1,0,0,1,1,0],
        [0,0,1,1,0,1],
        [0,1,0,0,1,1],
        [1,0,1,1,0,0],
      ],
    difficulty: 15.2
    
  },
  {
    grid: [
        [null,null,null,1,null,0],
        [null,null,null,1,null,null],
        [null,null,null,null,1,null],
        [0,null,null,null,null,0],
        [null,null,null,null,null,0],
        [1,null,null,null,null,null],
      ],
      solution: [
        [0,1,0,1,1,0],
        [1,0,0,1,0,1],
        [0,0,1,0,1,1],
        [0,1,1,0,1,0],
        [1,1,0,1,0,0],
        [1,0,1,0,0,1],
      ],
    difficulty: 15.27
    
  },
  {
    grid: [
        [0,0,null,0,null,null],
        [null,null,null,null,null,1],
        [null,null,null,null,null,null],
        [null,1,1,null,null,null],
        [0,null,null,null,null,null],
        [null,null,null,null,1,null],
      ],
      solution: [
        [0,0,1,0,1,1],
        [1,0,0,1,0,1],
        [1,1,0,1,0,0],
        [0,1,1,0,1,0],
        [0,0,1,1,0,1],
        [1,1,0,0,1,0],
      ],
    difficulty: 15.27
    
  },
  {
    grid: [
        [null,null,0,null,null,null],
        [null,null,null,null,0,null],
        [1,null,null,null,null,null],
        [null,null,null,0,null,null],
        [1,null,null,null,0,null],
        [null,0,0,null,null,1],
      ],
      solution: [
        [0,1,0,1,1,0],
        [0,1,1,0,0,1],
        [1,0,0,1,1,0],
        [0,1,1,0,1,0],
        [1,0,1,0,0,1],
        [1,0,0,1,0,1],
      ],
    difficulty: 16.76
    
  },
]; 
