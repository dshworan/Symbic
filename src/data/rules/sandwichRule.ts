import { MoveValidator } from './moveValidator';
import { HintStep } from './types';

export class SandwichRule extends MoveValidator {
  constructor() {
    super(
      'sandwich',
      'When a cell is between two cells of the same value, it must be the opposite value'
    );
  }

  findStep(puzzle: (number | null)[][], size: number): HintStep | null {
    // Check for sandwich patterns in rows
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size - 2; col++) {
        // Skip if end cells are empty or middle is filled
        if (puzzle[row][col] === null || puzzle[row][col + 2] === null || puzzle[row][col + 1] !== null) {
          continue;
        }
        
        // Check if we have a pattern [X, ?, X] where X is 0 or 1 and ? is empty
        if (puzzle[row][col] === puzzle[row][col + 2]) {
          const value = puzzle[row][col];
          const neededDigit = 1 - value;
          return {
            row: row,
            col: col + 1,
            value: neededDigit,
            rule: 'sandwich',
            message: `We can't have three ${value} in a row, so this must be a ${neededDigit}`,
            hintCellSets: [
              { row: row, col: col },
              { row: row, col: col + 2 }
            ]
          };
        }
      }
    }
    
    // Check for sandwich patterns in columns
    for (let col = 0; col < size; col++) {
      for (let row = 0; row < size - 2; row++) {
        // Skip if end cells are empty or middle is filled
        if (puzzle[row][col] === null || puzzle[row + 2][col] === null || puzzle[row + 1][col] !== null) {
          continue;
        }
        
        // Check if we have a pattern [X, ?, X] where X is 0 or 1 and ? is empty
        if (puzzle[row][col] === puzzle[row + 2][col]) {
          const value = puzzle[row][col];
          const neededDigit = 1 - value;
          return {
            row: row + 1,
            col: col,
            value: neededDigit,
            rule: 'sandwich',
            message: `We can't have three ${value} in a row, so this must be a ${neededDigit}`,
            hintCellSets: [
              { row: row, col: col },
              { row: row + 2, col: col }
            ]
          };
        }
      }
    }
    
    return null;
  }
} 