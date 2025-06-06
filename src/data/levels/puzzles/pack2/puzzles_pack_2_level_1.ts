import { Puzzle } from '../../../types/levelTypes';

export const level1Puzzles: Puzzle[] = [
  {
    grid: [
        [null,null,1,1,null,null],
        [0,null,1,null,null,1],
        [null,null,null,1,null,1],
        [1,1,null,null,0,null],
        [1,null,null,null,null,0],
        [null,null,0,0,null,null],
      ],
      solution: [
        [1,0,1,1,0,0],
        [0,0,1,0,1,1],
        [0,1,0,1,0,1],
        [1,1,0,1,0,0],
        [1,0,1,0,1,0],
        [0,1,0,0,1,1],
      ],
    difficulty: 2.22
    
  },
  {
    grid: [
        [1,null,null,0,null,0],
        [null,null,1,null,null,null],
        [null,1,null,null,null,null],
        [0,null,0,null,null,1],
        [null,null,0,null,1,null],
        [0,null,null,1,null,1],
      ],
      solution: [
        [1,1,0,0,1,0],
        [1,0,1,1,0,0],
        [0,1,1,0,0,1],
        [0,1,0,0,1,1],
        [1,0,0,1,1,0],
        [0,0,1,1,0,1],
      ],
    difficulty: 2.28
    
  },
  {
    grid: [
        [null,1,null,null,null,0],
        [null,null,0,null,null,1],
        [null,null,null,1,null,null],
        [1,null,null,null,0,null],
        [null,0,null,1,null,null],
        [null,null,null,0,0,null],
      ],
      solution: [
        [0,1,1,0,1,0],
        [1,0,0,1,0,1],
        [0,1,0,1,1,0],
        [1,0,1,0,0,1],
        [1,0,0,1,1,0],
        [0,1,1,0,0,1],
      ],
    difficulty: 2.39
    
  },
  {
    grid: [
        [1,null,null,null,null,null],
        [null,null,0,0,null,null],
        [null,1,null,null,0,0],
        [1,null,null,0,null,null],
        [null,null,0,null,null,1],
        [null,null,null,0,null,null],
      ],
      solution: [
        [1,0,1,1,0,0],
        [0,1,0,0,1,1],
        [1,1,0,1,0,0],
        [1,0,1,0,1,0],
        [0,1,0,1,0,1],
        [0,0,1,0,1,1],
      ],
    difficulty: 2.39
    
  },
  {
    grid: [
        [null,null,1,null,null,null],
        [null,0,null,null,null,1],
        [null,null,null,null,0,0],
        [null,null,1,1,null,null],
        [null,null,null,null,null,0],
        [null,null,null,0,null,1],
      ],
      solution: [
        [1,0,1,1,0,0],
        [0,0,1,0,1,1],
        [1,1,0,1,0,0],
        [0,0,1,1,0,1],
        [1,1,0,0,1,0],
        [0,1,0,0,1,1],
      ],
    difficulty: 2.44
    
  },
]; 
