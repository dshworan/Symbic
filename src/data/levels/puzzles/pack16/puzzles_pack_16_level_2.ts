import { Puzzle } from '../../../../types/levelTypes';

export const level2Puzzles: Puzzle[] = [
  {
    grid: [
        [null,null,0,null,null,null],
        [null,null,0,null,null,0],
        [1,null,null,null,null,null],
        [1,1,null,null,null,null],
        [null,null,null,0,null,1],
        [null,0,null,null,null,null],
      ],
      solution: [
        [0,1,0,0,1,1],
        [0,1,0,1,1,0],
        [1,0,1,0,0,1],
        [1,1,0,1,0,0],
        [0,0,1,0,1,1],
        [1,0,1,1,0,0],
      ],
    difficulty: 11.24
    
  },
  {
    grid: [
        [1,null,null,null,null,null],
        [1,null,null,null,null,null],
        [null,1,null,null,1,1],
        [null,null,null,null,0,null],
        [null,null,null,null,null,1],
        [null,0,null,1,null,null],
      ],
      solution: [
        [1,1,0,0,1,0],
        [1,0,1,1,0,0],
        [0,1,0,0,1,1],
        [1,1,0,1,0,0],
        [0,0,1,0,1,1],
        [0,0,1,1,0,1],
      ],
    difficulty: 11.24
    
  },
  {
    grid: [
        [1,null,null,null,null,null],
        [null,null,0,0,null,null],
        [1,null,0,null,0,null],
        [null,null,null,0,null,null],
        [null,0,null,null,null,null],
        [null,null,null,0,null,null],
      ],
      solution: [
        [1,0,1,1,0,0],
        [0,1,0,0,1,1],
        [1,1,0,1,0,0],
        [0,0,1,0,1,1],
        [0,0,1,1,0,1],
        [1,1,0,0,1,0],
      ],
    difficulty: 11.24
    
  },
  {
    grid: [
        [null,null,null,1,1,null],
        [null,1,null,null,null,null],
        [null,null,0,null,1,null],
        [null,null,null,null,null,null],
        [0,null,0,null,0,null],
        [0,null,null,null,null,null],
      ],
      solution: [
        [1,0,0,1,1,0],
        [0,1,1,0,0,1],
        [1,1,0,0,1,0],
        [1,0,1,1,0,0],
        [0,1,0,1,0,1],
        [0,0,1,0,1,1],
      ],
    difficulty: 11.24
    
  },
  {
    grid: [
        [null,null,null,null,null,1],
        [null,null,null,null,null,null],
        [null,null,null,null,1,null],
        [null,null,null,1,1,null],
        [0,0,null,null,null,null],
        [0,null,null,null,null,null],
      ],
      solution: [
        [1,0,0,1,0,1],
        [0,1,1,0,0,1],
        [1,1,0,0,1,0],
        [1,0,0,1,1,0],
        [0,0,1,1,0,1],
        [0,1,1,0,1,0],
      ],
    difficulty: 11.82
    
  },
]; 
