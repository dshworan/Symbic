import { Puzzle } from '../../../types/levelTypes';

export const level1Puzzles: Puzzle[] = [
  {
    grid: [
        [null,0,0,1],
        [null,null,1,0],
        [0,1,0,null],
        [1,0,1,0],
      ],
      solution: [
        [1,0,0,1],
        [0,1,1,0],
        [0,1,0,1],
        [1,0,1,0],
      ],
    difficulty: 1.5
    
  },
  {
    grid: [
        [1,null,1,0],
        [0,1,null,1],
        [null,null,1,null],
        [null,0,0,null],
      ],
      solution: [
        [1,0,1,0],
        [0,1,0,1],
        [0,1,1,0],
        [1,0,0,1],
      ],
    difficulty: 1.88
    
  },
  {
    grid: [
        [1,0,null,1],
        [0,null,null,null],
        [null,1,0,null],
        [1,null,1,0],
      ],
      solution: [
        [1,0,0,1],
        [0,1,1,0],
        [0,1,0,1],
        [1,0,1,0],
      ],
    difficulty: 1.88
    
  },
  {
    grid: [
        [1,null,null,null],
        [null,1,null,1],
        [0,null,1,null],
        [null,0,null,1],
      ],
      solution: [
        [1,0,1,0],
        [0,1,0,1],
        [0,1,1,0],
        [1,0,0,1],
      ],
    difficulty: 2.13
    
  },
  {
    grid: [
        [null,1,null,null],
        [1,null,null,0],
        [0,1,null,0],
        [null,null,null,null],
      ],
      solution: [
        [0,1,0,1],
        [1,0,1,0],
        [0,1,1,0],
        [1,0,0,1],
      ],
    difficulty: 2.25
    
  },
]; 
