import { MoveValidator } from './moveValidator';
import { HintStep } from './types';
import { Shape } from '../types/levelTypes';

export class SandwichRule extends MoveValidator {
  constructor() {
    super(
      'sandwich',
      'When a cell is between two cells of the same value, it must be the opposite value'
    );
  }

  findStep(puzzle: (number | null)[][], size: number, shapes?: Shape[]): HintStep | null {
    // Early validation of input parameters
    if (!puzzle || !Array.isArray(puzzle) || puzzle.length !== size) {
      return null;
    }

    if (!shapes || !Array.isArray(shapes) || shapes.length < 2) {
      return null;
    }

    // Check for sandwich patterns in rows
    for (let row = 0; row < size; row++) {
      // Validate row data
      if (!Array.isArray(puzzle[row]) || puzzle[row].length !== size) {
        continue;
      }

      for (let col = 0; col < size - 2; col++) {
        // Skip if end cells are empty or undefined, or middle is filled
        if (puzzle[row][col] === null || puzzle[row][col] === undefined || 
            puzzle[row][col + 2] === null || puzzle[row][col + 2] === undefined || 
            puzzle[row][col + 1] !== null) {
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
            message: `We can't have three ${value === 0 ? `<svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[0].path}" fill="${shapes[0].fill}"/></svg>` : `<svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[1].path}" fill="${shapes[1].fill}"/></svg>`} in a row, so this must be a ${neededDigit === 0 ? `<svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[0].path}" fill="${shapes[0].fill}"/></svg>` : `<svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[1].path}" fill="${shapes[1].fill}"/></svg>`}`,
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
      // Validate column data
      const colValues = puzzle.map(row => row?.[col]).filter(val => val !== undefined);
      if (colValues.length !== size) {
        continue;
      }

      for (let row = 0; row < size - 2; row++) {
        // Skip if end cells are empty or undefined, or middle is filled
        if (puzzle[row][col] === null || puzzle[row][col] === undefined || 
            puzzle[row + 2][col] === null || puzzle[row + 2][col] === undefined || 
            puzzle[row + 1][col] !== null) {
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
            message: `We can't have three ${value === 0 ? `<svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[0].path}" fill="${shapes[0].fill}"/></svg>` : `<svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[1].path}" fill="${shapes[1].fill}"/></svg>`} in a row, so this must be a ${neededDigit === 0 ? `<svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[0].path}" fill="${shapes[0].fill}"/></svg>` : `<svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[1].path}" fill="${shapes[1].fill}"/></svg>`}`,
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

  private _isValidMove(puzzle: (number | null)[][], row: number, col: number, value: number, size: number): boolean {
    // Validate input parameters
    if (!puzzle || !Array.isArray(puzzle) || puzzle.length !== size || 
        row < 0 || row >= size || col < 0 || col >= size) {
      return false;
    }

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