import { Puzzle } from '../../../../types/levelTypes';

export const level4Puzzles: Puzzle[] = [
  {
    grid: [
        [1,null,0,null,null,null],
        [null,null,null,1,null,null],
        [1,null,null,null,0,null],
        [null,null,0,0,null,null],
        [null,null,null,null,0,null],
        [1,null,null,1,null,0],
      ],
      solution: [
        [1,1,0,0,1,0],
        [0,0,1,1,0,1],
        [1,0,1,1,0,0],
        [0,1,0,0,1,1],
        [0,1,1,0,0,1],
        [1,0,0,1,1,0],
      ],
    difficulty: 9.51
    
  },
  {
    grid: [
        [0,null,null,null,null,null],
        [null,null,null,0,null,null],
        [null,null,0,0,null,null],
        [null,null,null,null,null,null],
        [null,null,null,null,0,null],
        [0,null,null,null,0,null],
      ],
      solution: [
        [0,1,0,1,1,0],
        [1,0,1,0,0,1],
        [0,1,0,0,1,1],
        [1,0,0,1,1,0],
        [1,0,1,1,0,0],
        [0,1,1,0,0,1],
      ],
    difficulty: 9.75
    
  },
  {
    grid: [
        [1,null,null,0,null,1],
        [null,null,null,null,0,null],
        [0,null,null,null,null,null],
        [null,null,1,null,0,null],
        [0,null,1,null,null,null],
        [null,null,null,null,null,null],
      ],
      solution: [
        [1,0,1,0,0,1],
        [1,1,0,1,0,0],
        [0,1,0,0,1,1],
        [1,0,1,1,0,0],
        [0,0,1,0,1,1],
        [0,1,0,1,1,0],
      ],
    difficulty: 10.17
    
  },
  {
    grid: [
        [null,1,null,1,null,null],
        [null,1,null,1,null,null],
        [null,null,null,null,0,null],
        [null,null,null,null,0,0],
        [null,null,null,null,null,null],
        [null,null,null,null,null,null],
      ],
      solution: [
        [1,1,0,1,0,0],
        [0,1,0,1,1,0],
        [1,0,1,0,0,1],
        [1,0,1,1,0,0],
        [0,1,0,0,1,1],
        [0,0,1,0,1,1],
      ],
    difficulty: 10.75
    
  },
  {
    grid: [
        [null,null,0,0,null,0],
        [null,null,null,null,null,null],
        [null,1,1,null,null,1],
        [null,null,null,null,0,null],
        [null,null,0,null,null,null],
        [null,null,null,null,null,null],
      ],
      solution: [
        [1,1,0,0,1,0],
        [1,0,0,1,1,0],
        [0,1,1,0,0,1],
        [1,0,1,1,0,0],
        [0,1,0,0,1,1],
        [0,0,1,1,0,1],
      ],
    difficulty: 10.98
    
  },
]; 
