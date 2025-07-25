import { Puzzle } from '../../../../types/levelTypes';

export const level3Puzzles: Puzzle[] = [
  {
    grid: [
        [0,null,null,null,1,1],
        [0,1,null,null,null,1],
        [null,1,null,0,null,null],
        [null,null,null,null,0,null],
        [1,null,1,null,null,0],
        [1,null,null,null,0,0],
      ],
      solution: [
        [0,0,1,0,1,1],
        [0,1,0,1,0,1],
        [1,1,0,0,1,0],
        [0,0,1,1,0,1],
        [1,0,1,0,1,0],
        [1,1,0,1,0,0],
      ],
    difficulty: 2.17
    
  },
  {
    grid: [
        [null,null,null,1,null,null],
        [1,1,null,null,null,0],
        [1,1,null,null,null,0],
        [null,null,null,null,1,null],
        [null,null,1,0,null,null],
        [0,null,null,null,null,1],
      ],
      solution: [
        [0,0,1,1,0,1],
        [1,1,0,0,1,0],
        [1,1,0,1,0,0],
        [0,0,1,0,1,1],
        [1,0,1,0,1,0],
        [0,1,0,1,0,1],
      ],
    difficulty: 2.33
    
  },
  {
    grid: [
        [1,1,null,null,null,0],
        [null,null,null,null,1,null],
        [null,null,null,0,null,0],
        [0,null,1,null,null,1],
        [null,null,1,null,null,null],
        [null,0,null,null,null,1],
      ],
      solution: [
        [1,1,0,1,0,0],
        [0,0,1,0,1,1],
        [1,1,0,0,1,0],
        [0,0,1,1,0,1],
        [0,1,1,0,1,0],
        [1,0,0,1,0,1],
      ],
    difficulty: 2.33
    
  },
  {
    grid: [
        [null,0,null,null,null,null],
        [1,null,null,null,0,null],
        [1,null,null,null,0,null],
        [null,1,null,null,null,1],
        [null,1,null,null,0,null],
        [1,null,1,null,null,null],
      ],
      solution: [
        [0,0,1,0,1,1],
        [1,1,0,1,0,0],
        [1,0,1,1,0,0],
        [0,1,0,0,1,1],
        [0,1,0,1,0,1],
        [1,0,1,0,1,0],
      ],
    difficulty: 2.39
    
  },
  {
    grid: [
        [null,null,null,null,null,0],
        [0,null,null,null,null,null],
        [null,null,null,null,null,null],
        [null,null,null,1,null,1],
        [0,0,null,null,null,null],
        [0,null,null,1,null,null],
      ],
      solution: [
        [1,0,1,1,0,0],
        [0,1,1,0,0,1],
        [1,1,0,0,1,0],
        [1,0,0,1,0,1],
        [0,0,1,0,1,1],
        [0,1,0,1,1,0],
      ],
    difficulty: 2.56
    
  },
]; 
