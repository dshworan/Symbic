import { MoveValidator } from './moveValidator';
import { HintStep } from './types';

export class LastCellRule extends MoveValidator {
  constructor() {
    super(
      'lastcell',
      'When only one cell remains empty in a row or column, its value can be determined by the count of 0s and 1s'
    );
  }

  findStep(puzzle: (number | null)[][], size: number): HintStep | null {
    // Check rows
    for (let row = 0; row < size; row++) {
      const emptyCells = this.findEmptyCells(puzzle[row]);
      if (emptyCells.length === 1) {
        const col = emptyCells[0];
        const value = this.determineValue(puzzle[row]);
        if (this._isValidMove(puzzle, row, col, value, size)) {
          return {
            row,
            col,
            value,
            rule: 'lastcell',
            message: `This is the last empty cell in the row. It must be a ${value}`,
            hintCellSets: puzzle[row].map((_, colIndex) => ({ row, col: colIndex }))
          };
        }
      }
    }

    // Check columns
    for (let col = 0; col < size; col++) {
      const column = puzzle.map(row => row[col]);
      const emptyCells = this.findEmptyCells(column);
      if (emptyCells.length === 1) {
        const row = emptyCells[0];
        const value = this.determineValue(column);
        if (this._isValidMove(puzzle, row, col, value, size)) {
          return {
            row,
            col,
            value,
            rule: 'lastcell',
            message: `This is the last empty cell in the column. It must be ${value} to maintain the correct count.`,
            hintCellSets: puzzle.map((_, rowIndex) => ({ row: rowIndex, col }))
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