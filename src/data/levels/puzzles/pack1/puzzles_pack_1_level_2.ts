import { Puzzle } from '../../../../types/levelTypes';

export const level2Puzzles: Puzzle[] = [
  {
    grid: [
        [1,null,1,null,0,0],
        [1,null,null,0,null,0],
        [null,null,0,null,null,null],
        [null,null,0,0,null,null],
        [0,null,null,null,null,1],
        [0,null,0,null,1,1],
      ],
      solution: [
        [1,0,1,1,0,0],
        [1,0,1,0,1,0],
        [0,1,0,1,0,1],
        [1,1,0,0,1,0],
        [0,0,1,1,0,1],
        [0,1,0,0,1,1],
      ],
    difficulty: 2.11
    
  },
  {
    grid: [
        [0,null,0,null,1,1],
        [null,null,null,null,null,null],
        [null,1,1,null,0,null],
        [0,null,null,1,null,null],
        [null,null,0,null,null,0],
        [1,null,1,null,0,0],
      ],
      solution: [
        [0,1,0,0,1,1],
        [1,0,0,1,1,0],
        [0,1,1,0,0,1],
        [0,0,1,1,0,1],
        [1,1,0,0,1,0],
        [1,0,1,1,0,0],
      ],
    difficulty: 2.17
    
  },
  {
    grid: [
        [0,null,0,null,null,1],
        [1,null,null,null,0,null],
        [null,null,0,1,null,1],
        [1,null,null,null,null,0],
        [null,null,1,null,null,null],
        [1,null,1,0,null,0],
      ],
      solution: [
        [0,1,0,0,1,1],
        [1,0,1,1,0,0],
        [0,1,0,1,0,1],
        [1,1,0,0,1,0],
        [0,0,1,1,0,1],
        [1,0,1,0,1,0],
      ],
    difficulty: 2.17
    
  },
  {
    grid: [
        [0,null,null,1,1,null],
        [0,null,0,1,null,null],
        [null,null,null,null,null,0],
        [1,null,null,0,null,null],
        [null,0,null,null,null,1],
        [1,null,null,0,0,null],
      ],
      solution: [
        [0,1,0,1,1,0],
        [0,1,0,1,0,1],
        [1,0,1,0,1,0],
        [1,1,0,0,1,0],
        [0,0,1,1,0,1],
        [1,0,1,0,0,1],
      ],
    difficulty: 2.22
    
  },
  {
    grid: [
        [0,null,null,null,null,0],
        [null,0,1,null,null,null],
        [null,null,1,null,null,0],
        [null,null,null,null,null,1],
        [null,0,null,null,null,null],
        [1,null,null,1,null,1],
      ],
      solution: [
        [0,1,0,1,1,0],
        [1,0,1,0,0,1],
        [0,1,1,0,1,0],
        [0,1,0,1,0,1],
        [1,0,1,0,1,0],
        [1,0,0,1,0,1],
      ],
    difficulty: 2.39
    
  },
]; 
