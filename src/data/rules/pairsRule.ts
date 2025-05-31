import { MoveValidator } from './moveValidator';
import { HintStep } from './types';

export class PairsRule extends MoveValidator {
  constructor() {
    super(
      'pairs',
      'When two adjacent cells have the same value, a third consecutive cell cannot have this value'
    );
  }

  findStep(puzzle: (number | null)[][], size: number): HintStep | null {
    // Check for adjacent pairs (00 or 11) in rows
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size - 1; col++) {
        // Skip if either cell is empty
        if (puzzle[row][col] === null || puzzle[row][col + 1] === null) {
          continue;
        }
        
        // Check for two adjacent same values
        if (puzzle[row][col] === puzzle[row][col + 1]) {
          const value = puzzle[row][col];
          
          // Check if there's room after the pair and it's empty
          if (col + 2 < size && puzzle[row][col + 2] === null) {
            const neededDigit = 1 - value;
            if (this._isValidMove(puzzle, row, col + 2, neededDigit, size)) {
              return {
                row: row,
                col: col + 2,
                value: neededDigit,
                rule: 'pairs',
                message: `We can't have three ${value} in a row, so this must be a ${neededDigit}`,
                hintCellSets: [
                  { row: row, col: col },
                  { row: row, col: col + 1 }
                ]
              };
            }
          }
          
          // Check if there's room before the pair and it's empty
          if (col > 0 && puzzle[row][col - 1] === null) {
            const neededDigit = 1 - value;
            if (this._isValidMove(puzzle, row, col - 1, neededDigit, size)) {
              return {
                row: row,
                col: col - 1,
                value: neededDigit,
                rule: 'pairs',
                message: `We can't have three ${value} in a row, so this must be a ${neededDigit}`,
                hintCellSets: [
                  { row: row, col: col },
                  { row: row, col: col + 1 }
                ]
              };
            }
          }
        }
      }
    }
    
    // Check for adjacent pairs (00 or 11) in columns
    for (let col = 0; col < size; col++) {
      for (let row = 0; row < size - 1; row++) {
        // Skip if either cell is empty
        if (puzzle[row][col] === null || puzzle[row + 1][col] === null) {
          continue;
        }
        
        // Check for two adjacent same values
        if (puzzle[row][col] === puzzle[row + 1][col]) {
          const value = puzzle[row][col];
          
          // Check if there's room after the pair and it's empty
          if (row + 2 < size && puzzle[row + 2][col] === null) {
            const neededDigit = 1 - value;
            if (this._isValidMove(puzzle, row + 2, col, neededDigit, size)) {
              return {
                row: row + 2,
                col: col,
                value: neededDigit,
                rule: 'pairs',
                message: `We can't have three ${value} in a row, so this must be a ${neededDigit}`,
                hintCellSets: [
                  { row: row, col: col },
                  { row: row + 1, col: col }
                ]
              };
            }
          }
          
          // Check if there's room before the pair and it's empty
          if (row > 0 && puzzle[row - 1][col] === null) {
            const neededDigit = 1 - value;
            if (this._isValidMove(puzzle, row - 1, col, neededDigit, size)) {
              return {
                row: row - 1,
                col: col,
                value: neededDigit,
                rule: 'pairs',
                message: `We can't have three ${value} in a row, so this must be a ${neededDigit}`,
                hintCellSets: [
                  { row: row, col: col },
                  { row: row + 1, col: col }
                ]
              };
            }
          }
        }
      }
    }
    
    return null;
  }

  /**
   * Check if the move would be valid considering balance constraints
   * @param puzzle - The current puzzle state
   * @param row - Row index
   * @param col - Column index
   * @param value - Value to check (0 or 1)
   * @param size - Size of the puzzle
   * @returns Whether the move is valid
   */
  private _isValidMove(puzzle: (number | null)[][], row: number, col: number, value: number, size: number): boolean {
    // Check for three consecutive same values in row
    if (col >= 2 && puzzle[row][col-1] === value && puzzle[row][col-2] === value) {
      return false;
    }
    if (col <= size-3 && puzzle[row][col+1] === value && puzzle[row][col+2] === value) {
      return false;
    }
    if (col > 0 && col < size-1 && puzzle[row][col-1] === value && puzzle[row][col+1] === value) {
      return false;
    }
    
    // Check for three consecutive same values in column
    if (row >= 2 && puzzle[row-1][col] === value && puzzle[row-2][col] === value) {
      return false;
    }
    if (row <= size-3 && puzzle[row+1][col] === value && puzzle[row+2][col] === value) {
      return false;
    }
    if (row > 0 && row < size-1 && puzzle[row-1][col] === value && puzzle[row+1][col] === value) {
      return false;
    }
    
    // Count values in row and column
    let rowCount = 0;
    let colCount = 0;
    
    for (let i = 0; i < size; i++) {
      if (puzzle[row][i] === value) rowCount++;
      if (puzzle[i][col] === value) colCount++;
    }
    
    // Check if adding this value would cause too many of the same digit
    if (rowCount >= size/2 || colCount >= size/2) {
      return false;
    }
    
    return true;
  }
} 