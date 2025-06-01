import { MoveValidator } from './moveValidator';
import { HintStep } from './types';
import { Shape } from '../types/levelTypes';

export class LastCellRule extends MoveValidator {
  constructor() {
    super(
      'lastCell',
      'When a row or column has only one empty cell, it must contain the missing value'
    );
  }

  findStep(puzzle: (number | null)[][], size: number, shapes?: Shape[]): HintStep | null {
    if (!shapes) return null;

    // Check rows
    for (let row = 0; row < size; row++) {
      const rowValues = puzzle[row];
      const emptyCells = rowValues.reduce((count, cell) => count + (cell === null ? 1 : 0), 0);
      
      if (emptyCells === 1) {
        const col = rowValues.indexOf(null);
        const count0 = rowValues.filter(cell => cell === 0).length;
        const count1 = rowValues.filter(cell => cell === 1).length;
        const neededDigit = count0 > count1 ? 1 : 0;
        
        if (this.isValidMove(puzzle, row, col, neededDigit, size)) {
          return {
            row,
            col,
            value: neededDigit,
            rule: 'lastCell',
            message: `This row needs a ${neededDigit === 0 ? `<svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[0].path}" fill="${shapes[0].fill}"/></svg>` : `<svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[1].path}" fill="${shapes[1].fill}"/></svg>`} to balance the row`,
            hintCellSets: rowValues
              .map((value, index) => ({ row, col: index }))
              .filter((_, index) => index !== col)
          };
        }
      }
    }
    
    // Check columns
    for (let col = 0; col < size; col++) {
      const colValues = puzzle.map(row => row[col]);
      const emptyCells = colValues.reduce((count, cell) => count + (cell === null ? 1 : 0), 0);
      
      if (emptyCells === 1) {
        const row = colValues.indexOf(null);
        const count0 = colValues.filter(cell => cell === 0).length;
        const count1 = colValues.filter(cell => cell === 1).length;
        const neededDigit = count0 > count1 ? 1 : 0;
        
        if (this.isValidMove(puzzle, row, col, neededDigit, size)) {
          return {
            row,
            col,
            value: neededDigit,
            rule: 'lastCell',
            message: `This column needs a ${neededDigit === 0 ? `<svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[0].path}" fill="${shapes[0].fill}"/></svg>` : `<svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[1].path}" fill="${shapes[1].fill}"/></svg>`} to balance the column`,
            hintCellSets: colValues
              .map((value, index) => ({ row: index, col }))
              .filter((_, index) => index !== row)
          };
        }
      }
    }
    
    return null;
  }

  private findEmptyCells(line: (number | null)[]): number[] {
    return line.reduce((acc: number[], val, idx) => {
      if (val === null) acc.push(idx);
      return acc;
    }, []);
  }

  private determineValue(line: (number | null)[]): number {
    const count0 = line.filter(val => val === 0).length;
    const count1 = line.filter(val => val === 1).length;
    return count0 <= count1 ? 0 : 1;
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