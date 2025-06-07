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
    // Early validation of input parameters
    if (!puzzle || !Array.isArray(puzzle) || puzzle.length !== size) {
      return null;
    }

    if (!shapes || !Array.isArray(shapes) || shapes.length < 2) {
      return null;
    }

    // First check rows
    console.log('\nChecking ROWS:');
    const rowStep = this._checkRows(puzzle, size, 'row', shapes);
    if (rowStep) {
      return rowStep;
    }
    
    // Then check columns by transposing the grid
    console.log('\nChecking COLUMNS:');
    const transposedPuzzle = this._transposeGrid(puzzle, size);
    const colStep = this._checkRows(transposedPuzzle, size, 'column', shapes);
    
    if (colStep) {
      // For column steps, we need to swap row and column indices
      return {
        row: colStep.col,  // Swap row and col
        col: colStep.row,  // Swap row and col
        value: colStep.value,
        rule: 'quadantitriplet',
        message: colStep.message.replace(/row/g, 'column'),  // Update message to say column instead of row
        hintCellSets: colStep.hintCellSets.map(set => ({
          row: set.col,  // Swap row and col
          col: set.row   // Swap row and col
        }))
      };
    }
    
    return null;
  }

  /**
   * Transpose a grid to convert rows to columns
   * @param grid - The grid to transpose
   * @param size - The size of the grid
   * @returns Transposed grid
   */
  private _transposeGrid(grid: (number | null)[][], size: number): (number | null)[][] {
    const transposed = Array(size).fill(null).map(() => Array(size).fill(null));
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        transposed[col][row] = grid[row][col];
      }
    }
    return transposed;
  }

  /**
   * Checks for rows with exactly 4 adjacent nulls where one digit is needed 3 times
   * and places the digit in one of the outermost cells
   */
  private _checkRows(puzzle: (number | null)[][], size: number, direction: 'row' | 'column', shapes: Shape[]): HintStep | null {
    for (let row = 0; row < size; row++) {
      const currentRow = puzzle[row];
      
      // First count total empty cells in the row
      let totalEmptyCells = 0;
      for (let col = 0; col < size; col++) {
        if (currentRow[col] === null) {
          totalEmptyCells++;
        }
      }
      
      // Debug logging
      console.log(`${direction.charAt(0).toUpperCase() + direction.slice(1)} ${row}: Total empty cells: ${totalEmptyCells}`);
      
      // We only care about rows with exactly 4 empty cells total
      if (totalEmptyCells !== 4) {
        console.log(`${direction.charAt(0).toUpperCase() + direction.slice(1)} ${row}: Skipping - has ${totalEmptyCells} empty cells, need exactly 4`);
        continue;  // Skip this row entirely if not exactly 4 empty cells
      }
      
      // Now find the positions of all empty cells
      const nullIndices: number[] = [];
      for (let col = 0; col < size; col++) {
        if (currentRow[col] === null) {
          nullIndices.push(col);
        }
      }
      
      // Check if the 4 nulls are adjacent
      nullIndices.sort((a, b) => a - b);
      const [a, b, c, d] = nullIndices;
      
      if (b === a + 1 && c === b + 1 && d === c + 1) {
        console.log(`${direction.charAt(0).toUpperCase() + direction.slice(1)} ${row}: Found 4 adjacent empty cells at positions:`, [a, b, c, d]);
        
        // Count digits to determine what's needed
        let zeros = 0;
        let ones = 0;
        
        for (let col = 0; col < size; col++) {
          if (currentRow[col] === 0) zeros++;
          else if (currentRow[col] === 1) ones++;
        }
        
        console.log(`${direction.charAt(0).toUpperCase() + direction.slice(1)} ${row}: Found ${zeros} zeros and ${ones} ones`);
        
        // Determine which digit we need 3 of
        const half = size / 2;
        const need0 = half - zeros;
        const need1 = half - ones;
        
        console.log(`${direction.charAt(0).toUpperCase() + direction.slice(1)} ${row}: Need ${need0} zeros and ${need1} ones`);
        
        let targetDigit: number | null = null;
        
        if (need0 === 3) {
          targetDigit = 0;
        } else if (need1 === 3) {
          targetDigit = 1;
        } else {
          console.log(`${direction.charAt(0).toUpperCase() + direction.slice(1)} ${row}: Skipping - don't need exactly 3 of either digit`);
          continue;
        }
        
        // Place the digit in one of the outermost cells
        // We'll use the first outermost cell (at index a)
        return {
          row: row,
          col: a,  // First cell in the cluster
          value: targetDigit,
          rule: 'quadantitriplet',
          message: `These 4 cells need 3 <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[targetDigit].path}" fill="${shapes[targetDigit].fill}"/></svg>. We place a <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[targetDigit].path}" fill="${shapes[targetDigit].fill}"/></svg> on one end to prevent a triplet.`,
          hintCellSets: [
            { row, col: a },
            { row, col: b },
            { row, col: c },
            { row, col: d }
          ]
        };
      } else {
        console.log(`${direction.charAt(0).toUpperCase() + direction.slice(1)} ${row}: Empty cells are not adjacent`);
      }
    }
    
    return null;
  }
} 