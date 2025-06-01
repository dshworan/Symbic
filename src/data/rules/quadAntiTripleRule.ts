import { MoveValidator } from './moveValidator';
import { HintStep } from './types';
import { Shape } from '../types/levelTypes';

export class QuadAntiTripleRule extends MoveValidator {
  constructor() {
    super(
      'quadantitriplet',
      'Places needed digits in scenarios with 4 adjacent empty cells'
    );
  }

  findStep(puzzle: (number | null)[][], size: number, shapes?: Shape[]): HintStep | null {
    if (!shapes) return null;

    // First check rows
    const rowStep = this._checkRows(puzzle, size);
    if (rowStep) {
      return {
        ...rowStep,
        message: rowStep.message.replace(/\d/g, (match) => {
          const value = parseInt(match);
          return `<svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[value].path}" fill="${shapes[value].fill}"/></svg>`;
        })
      };
    }
    
    // Then check columns by transposing the puzzle
    const transposed = this._transposeGrid(puzzle, size);
    const colStep = this._checkRows(transposed, size);
    
    // Translate column step back to original coordinates
    if (colStep) {
      return {
        row: colStep.col,
        col: colStep.row,
        value: colStep.value,
        rule: colStep.rule,
        message: colStep.message.replace('row', 'column').replace('Column', 'Row').replace(/\d/g, (match) => {
          const value = parseInt(match);
          return `<svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[value].path}" fill="${shapes[value].fill}"/></svg>`;
        }),
        hintCellSets: colStep.hintCellSets.map(cell => ({ row: cell.col, col: cell.row }))
      };
    }
    
    return null;
  }

  private _transposeGrid(grid: (number | null)[][], size: number): (number | null)[][] {
    const transposed = Array(size).fill(null).map(() => Array(size).fill(null));
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        transposed[col][row] = grid[row][col];
      }
    }
    return transposed;
  }

  private _checkRows(puzzle: (number | null)[][], size: number): HintStep | null {
    for (let row = 0; row < size; row++) {
      const currentRow = puzzle[row];
      
      // Count nulls and track their positions
      const nullIndices: number[] = [];
      for (let col = 0; col < size; col++) {
        if (currentRow[col] === null) {
          nullIndices.push(col);
        }
      }
      
      // We only care about rows with exactly 4 nulls
      if (nullIndices.length !== 4) {
        continue;
      }
      
      // Check if the 4 nulls are adjacent
      nullIndices.sort((a, b) => a - b);
      const [a, b, c, d] = nullIndices;
      
      if (b === a + 1 && c === b + 1 && d === c + 1) {
        // The 4 nulls are adjacent!
        
        // Count digits to determine what's needed
        let zeros = 0;
        let ones = 0;
        
        for (let col = 0; col < size; col++) {
          if (currentRow[col] === 0) zeros++;
          else if (currentRow[col] === 1) ones++;
        }
        
        // Determine which digit we need 3 of
        const half = size / 2;
        const need0 = half - zeros;
        const need1 = half - ones;
        
        let targetDigit: number | null = null;
        let needCount: number | null = null;
        if (need0 === 3) {
          targetDigit = 0;
          needCount = need0;
        } else if (need1 === 3) {
          targetDigit = 1;
          needCount = need1;
        } else {
          // We only apply this rule when we need exactly 3 of one digit
          continue;
        }
        
        // Place the digit in one of the outermost cells
        // We'll use the first outermost cell (at index a)
        return {
          row: row,
          col: a,  // First cell in the cluster
          value: targetDigit,
          rule: 'quadantitriplet',
          message: `Found 4 adjacent empty cells in row ${row+1} where we need ${needCount} ${targetDigit}s. Placing ${targetDigit} at column ${a+1} to prevent triplets.`,
          hintCellSets: [
            { row, col: a },
            { row, col: b },
            { row, col: c },
            { row, col: d }
          ]
        };
      }
    }
    
    return null;
  }

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
    
    return true;
  }
} 