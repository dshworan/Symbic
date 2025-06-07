import { Puzzle } from '../../../../types/levelTypes';

export const level1Puzzles: Puzzle[] = [
  {
    grid: [
        [null,0,0,null,null,null,0,null,null,1],
        [0,null,1,null,0,0,null,null,1,null],
        [null,null,null,null,0,null,null,1,null,null],
        [null,null,null,0,null,null,1,null,null,0],
        [null,null,0,null,null,1,1,null,0,null],
        [null,1,null,null,1,null,null,0,null,null],
        [1,1,null,0,null,null,0,null,null,1],
        [null,null,0,null,null,null,null,null,null,null],
        [null,null,null,null,null,1,null,null,0,0],
        [0,0,null,1,null,1,1,null,null,0],
      ],
      solution: [
        [1,0,0,1,1,0,0,1,0,1],
        [0,0,1,1,0,0,1,0,1,1],
        [0,1,1,0,0,1,0,1,1,0],
        [1,1,0,0,1,0,1,1,0,0],
        [1,0,0,1,0,1,1,0,0,1],
        [0,1,1,0,1,1,0,0,1,0],
        [1,1,0,0,1,0,0,1,0,1],
        [1,0,0,1,0,0,1,0,1,1],
        [0,1,1,0,1,1,0,1,0,0],
        [0,0,1,1,0,1,1,0,1,0],
      ],
    difficulty: 2.28
    
  },
  {
    grid: [
        [null,0,null,null,0,0,null,null,1,1],
        [null,null,null,0,0,null,null,1,null,1],
        [null,1,1,null,null,null,null,1,null,null],
        [0,null,null,null,null,1,null,null,0,null],
        [null,null,null,null,1,null,null,0,null,0],
        [0,null,null,null,1,null,1,null,null,0],
        [null,1,1,null,null,null,null,null,null,null],
        [null,null,null,null,1,null,null,0,null,0],
        [1,null,null,0,1,null,1,null,1,0],
        [null,null,0,null,null,null,null,null,null,null],
      ],
      solution: [
        [1,0,0,1,0,0,1,0,1,1],
        [1,0,1,0,0,1,0,1,0,1],
        [0,1,1,0,1,0,0,1,1,0],
        [0,1,0,1,0,1,1,0,0,1],
        [1,0,1,0,1,1,0,0,1,0],
        [0,1,0,1,1,0,1,1,0,0],
        [0,1,1,0,0,1,0,1,0,1],
        [1,0,0,1,1,0,1,0,1,0],
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1],
      ],
    difficulty: 2.32
    
  },
  {
    grid: [
        [null,null,1,null,null,null,null,null,0,0],
        [null,1,null,0,0,null,null,null,0,null],
        [0,null,null,null,null,1,null,null,null,null],
        [null,null,0,null,1,null,null,0,0,null],
        [null,null,null,null,null,1,1,null,0,null],
        [1,null,null,0,null,null,null,null,null,null],
        [null,null,null,null,null,null,0,0,null,1],
        [1,1,null,null,0,null,null,null,null,null],
        [null,null,0,1,null,null,0,null,null,1],
        [1,null,null,null,null,0,0,null,1,null],
      ],
      solution: [
        [1,0,1,1,0,0,1,1,0,0],
        [0,1,1,0,0,1,1,0,0,1],
        [0,1,0,0,1,1,0,1,1,0],
        [1,0,0,1,1,0,1,0,0,1],
        [0,0,1,1,0,1,1,0,0,1],
        [1,1,0,0,1,0,0,1,1,0],
        [0,0,1,0,1,1,0,0,1,1],
        [1,1,0,1,0,0,1,1,0,0],
        [0,1,0,1,0,1,0,0,1,1],
        [1,0,1,0,1,0,0,1,1,0],
      ],
    difficulty: 2.36
    
  },
  {
    grid: [
        [1,0,null,null,null,1,null,null,0,null],
        [null,0,0,null,null,1,null,null,null,1],
        [null,null,null,null,0,null,null,1,null,1],
        [null,null,null,null,null,0,null,null,null,null],
        [null,0,0,null,null,null,0,null,null,null],
        [null,null,0,null,null,1,null,0,null,0],
        [null,1,null,null,null,null,null,null,1,null],
        [null,1,null,0,null,null,null,0,null,null],
        [null,null,null,null,1,null,1,null,null,null],
        [null,1,1,null,null,0,null,null,null,1],
      ],
      solution: [
        [1,0,1,0,1,1,0,1,0,0],
        [1,0,0,1,0,1,0,0,1,1],
        [0,1,0,1,0,0,1,1,0,1],
        [0,1,1,0,1,0,1,0,1,0],
        [1,0,0,1,0,1,0,1,0,1],
        [1,0,0,1,0,1,1,0,1,0],
        [0,1,1,0,1,0,0,1,1,0],
        [0,1,1,0,0,1,1,0,0,1],
        [1,0,0,1,1,0,1,0,1,0],
        [0,1,1,0,1,0,0,1,0,1],
      ],
    difficulty: 2.4
    
  },
  {
    grid: [
        [0,null,null,1,null,null,null,1,null,null],
        [0,null,null,1,1,null,null,null,0,null],
        [null,null,0,null,null,null,null,null,null,1],
        [null,null,null,0,null,null,1,null,null,null],
        [0,null,0,null,null,null,0,null,1,1],
        [null,null,null,null,null,null,null,null,null,null],
        [null,0,null,null,null,null,null,null,null,null],
        [1,0,null,0,1,null,1,0,null,0],
        [null,null,null,0,null,null,1,null,null,0],
        [null,0,null,null,null,0,null,null,null,null],
      ],
      solution: [
        [0,0,1,1,0,1,0,1,1,0],
        [0,1,0,1,1,0,1,0,0,1],
        [1,1,0,0,1,0,0,1,0,1],
        [1,0,1,0,0,1,1,0,1,0],
        [0,1,0,1,0,1,0,0,1,1],
        [0,1,1,0,1,0,1,1,0,0],
        [1,0,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,1,0,0,1,1,0,1,0],
        [1,0,0,1,1,0,0,1,0,1],
      ],
    difficulty: 2.42
    
  },
]; 
