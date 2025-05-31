import { MoveValidator } from './moveValidator';
import { HintStep } from './types';

export class SpreadAntiTripletRule extends MoveValidator {
  constructor() {
    super(
      'spreadantitriplet',
      'Prevents triplets when a digit appears between or adjacent to empty cells'
    );
  }

  findStep(puzzle: (number | null)[][], size: number): HintStep | null {
    let result = this._checkRows(puzzle, size);
    if (result !== null) {
      return result;
    }
   
    // transpose puzzle to check columns
    const transposed = this._transposeGrid(puzzle, size);
    result = this._checkRows(transposed, size);
    if (result !== null) {
      // swap row/col in result because we transposed the puzzle
      const { row, col, value, rule } = result;
      return { 
        row: col, 
        col: row, 
        value, 
        rule,
        message: result.message.replace('row', 'column')
      };
    }
    
    return null;
  }

  private _transposeGrid(grid: (number | null)[][], size: number): (number | null)[][] {
    const transposed: (number | null)[][] = [];
    
    for (let col = 0; col < size; col++) {
      const newRow: (number | null)[] = [];
      for (let row = 0; row < size; row++) {
        newRow.push(grid[row][col]);
      }
      transposed.push(newRow);
    }
    
    return transposed;
  }

  private _checkRows(puzzle: (number | null)[][], size: number): HintStep | null {
    for (let row = 0; row < puzzle.length; row++) {
      const currentRow = puzzle[row];
      
      // Find empty cells and count digits
      const emptyIndices: number[] = [];
      let zeroCount = 0;
      let oneCount = 0;
      
      for (let col = 0; col < currentRow.length; col++) {
        if (currentRow[col] === null) {
          emptyIndices.push(col);
        } else if (currentRow[col] === 0) {
          zeroCount++;
        } else if (currentRow[col] === 1) {
          oneCount++;
        }
      }
      
      // We need exactly 3 empty cells
      if (emptyIndices.length !== 3) {
        continue;
      }
      
      // Sort empty indices to help with pattern detection
      emptyIndices.sort((a, b) => a - b);
      
      // Determine which digit is needed twice
      const neededZeros = (size / 2) - zeroCount;
      const neededOnes = (size / 2) - oneCount;
      
      // We're looking for the digit that needs to be placed twice
      let neededDigit: number | null = null;
      if (neededZeros === 2) {
        neededDigit = 0;
      } else if (neededOnes === 2) {
        neededDigit = 1;
      } else {
        continue;
      }
      
      // Track the found patterns to choose the most constrained one
      let foundPatterns: Array<{
        row: number;
        col: number;
        value: number;
        pattern: string;
        message: string;
      }> = [];
      
      // Now check for the pattern where two empty cells are adjacent to the needed digit
      for (let i = 0; i < currentRow.length; i++) {
        if (currentRow[i] === neededDigit) {
          // FIRST PRIORITY: Check for -X- pattern (empty cells on both sides)
          // This pattern is most constraining because it forces the digit on both sides
          if (i > 0 && i < currentRow.length - 1 && 
              currentRow[i-1] === null && currentRow[i+1] === null) {
            // Find the third empty cell
            const thirdEmptyCell = emptyIndices.find(idx => idx !== i-1 && idx !== i+1);
            
            // This pattern takes precedence - return immediately
            return {
              row: row,
              col: thirdEmptyCell!,
              value: neededDigit,
              rule: 'spreadantitriplet',
              message: `Found empty cells on both sides of a ${neededDigit} in row ${row+1}. Placing ${neededDigit} in the third empty cell.`
            };
          }
          
          // SECOND PRIORITY: Check for --X pattern (two empty cells to the left)
          if (i >= 2 && currentRow[i-1] === null && currentRow[i-2] === null) {
            // Find the third empty cell (the one not adjacent to this digit)
            const thirdEmptyCell = emptyIndices.find(idx => idx !== i-1 && idx !== i-2);
            
            foundPatterns.push({
              row: row,
              col: thirdEmptyCell!,
              value: neededDigit,
              pattern: '--X',
              message: `Found two empty cells next to a ${neededDigit} in row ${row+1}. Placing ${neededDigit} in the third empty cell.`
            });
          }
          
          // THIRD PRIORITY: Check for X-- pattern (two empty cells to the right)
          if (i < currentRow.length - 2 && 
              currentRow[i+1] === null && currentRow[i+2] === null) {
            // Find the third empty cell
            const thirdEmptyCell = emptyIndices.find(idx => idx !== i+1 && idx !== i+2);
            
            foundPatterns.push({
              row: row,
              col: thirdEmptyCell!,
              value: neededDigit,
              pattern: 'X--',
              message: `Found two empty cells next to a ${neededDigit} in row ${row+1}. Placing ${neededDigit} in the third empty cell.`
            });
          }
        }
      }
      
      // If we found at least one pattern, return the first one (most constraining)
      if (foundPatterns.length > 0) {
        const result = foundPatterns[0];
        return {
          row: result.row,
          col: result.col,
          value: result.value,
          rule: 'spreadantitriplet',
          message: result.message
        };
      }
    }
    
    return null;
  }
} 