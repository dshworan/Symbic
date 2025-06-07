import { MoveValidator } from './moveValidator';
import { HintStep } from './types';
import { Shape } from '../types/levelTypes';

export class CloseAntiTripletRule extends MoveValidator {
  constructor() {
    super(
      'closeantitriplet',
      'Prevents triplets by placing digits in the furthest empty cell'
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

    let result = this._checkRows(puzzle, size, shapes);
    if (result !== null) {
      return result;
    }
   
    // transpose puzzle to check columns
    const transposed = this._transposeGrid(puzzle, size);
    result = this._checkRows(transposed, size, shapes);
    if (result !== null) {
      // swap row/col in result because we transposed the puzzle
      const { row, col, value, rule, message, hintCellSets } = result;
      return { 
        row: col, 
        col: row, 
        value, 
        rule,
        message: message.replace('row', 'column'),
        hintCellSets: hintCellSets?.map(cell => ({ row: cell.col, col: cell.row }))
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

  private _checkRows(puzzle: (number | null)[][], size: number, shapes: Shape[]): HintStep | null {
    for (let row = 0; row < puzzle.length; row++) {
      const currentRow = puzzle[row];
      
      // Validate row data
      if (!Array.isArray(currentRow) || currentRow.length !== size) {
        continue;
      }
      
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
        hintCellSets: Array<{row: number; col: number}>;
      }> = [];
      
      // Now check for patterns where a digit has three empty cells
      for (let i = 0; i < currentRow.length; i++) {
        if (currentRow[i] === neededDigit) {
          // Check for pattern X--- (digit followed by three empty cells)
          if (i <= currentRow.length - 4 && 
              currentRow[i+1] === null && 
              currentRow[i+2] === null && 
              currentRow[i+3] === null) {
            // Find the furthest empty cell from position i
            const furthestEmptyCell = emptyIndices.reduce((furthest, current) => {
              return Math.abs(current - i) > Math.abs(furthest - i) ? current : furthest;
            });
            
            foundPatterns.push({
              row: row,
              col: furthestEmptyCell,
              value: neededDigit,
              pattern: 'X---',
              message: `To prevent three <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[neededDigit].path}" fill="${shapes[neededDigit].fill}"/></svg> together, this cell must be a <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[neededDigit].path}" fill="${shapes[neededDigit].fill}"/></svg>`,
              hintCellSets: [
                { row: row, col: furthestEmptyCell }, // Primary highlight - where to place the digit
                { row: row, col: i }, // Secondary highlight - pattern cells
                { row: row, col: i+1 },
                { row: row, col: i+2 },
                { row: row, col: i+3 }
              ]
            });
          }
          
          // Check for pattern -X-- (empty cell, digit, two empty cells)
          if (i > 0 && i <= currentRow.length - 3 && 
              currentRow[i-1] === null && 
              currentRow[i+1] === null && 
              currentRow[i+2] === null) {
            // Find the furthest empty cell from position i
            const furthestEmptyCell = emptyIndices.reduce((furthest, current) => {
              return Math.abs(current - i) > Math.abs(furthest - i) ? current : furthest;
            });
            
            foundPatterns.push({
              row: row,
              col: furthestEmptyCell,
              value: neededDigit,
              pattern: '-X--',
              message: `To prevent three <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[neededDigit].path}" fill="${shapes[neededDigit].fill}"/></svg> together, this cell must be a <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[neededDigit].path}" fill="${shapes[neededDigit].fill}"/></svg>`,
              hintCellSets: [
                { row: row, col: furthestEmptyCell }, // Primary highlight - where to place the digit
                { row: row, col: i-1 }, // Secondary highlight - pattern cells
                { row: row, col: i },
                { row: row, col: i+1 },
                { row: row, col: i+2 }
              ]
            });
          }
          
          // Check for pattern --X- (two empty cells, digit, empty cell)
          if (i >= 2 && i < currentRow.length - 1 && 
              currentRow[i-2] === null && 
              currentRow[i-1] === null && 
              currentRow[i+1] === null) {
            // Find the furthest empty cell from position i
            const furthestEmptyCell = emptyIndices.reduce((furthest, current) => {
              return Math.abs(current - i) > Math.abs(furthest - i) ? current : furthest;
            });
            
            foundPatterns.push({
              row: row,
              col: furthestEmptyCell,
              value: neededDigit,
              pattern: '--X-',
              message: `To prevent three <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[neededDigit].path}" fill="${shapes[neededDigit].fill}"/></svg> together, this cell must be a <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[neededDigit].path}" fill="${shapes[neededDigit].fill}"/></svg>`,
              hintCellSets: [
                { row: row, col: furthestEmptyCell }, // Primary highlight - where to place the digit
                { row: row, col: i-2 }, // Secondary highlight - pattern cells
                { row: row, col: i-1 },
                { row: row, col: i },
                { row: row, col: i+1 }
              ]
            });
          }
          
          // Check for pattern ---X (three empty cells followed by digit)
          if (i >= 3 && 
              currentRow[i-3] === null && 
              currentRow[i-2] === null && 
              currentRow[i-1] === null) {
            // Find the furthest empty cell from position i
            const furthestEmptyCell = emptyIndices.reduce((furthest, current) => {
              return Math.abs(current - i) > Math.abs(furthest - i) ? current : furthest;
            });
            
            foundPatterns.push({
              row: row,
              col: furthestEmptyCell,
              value: neededDigit,
              pattern: '---X',
              message: `To prevent three <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[neededDigit].path}" fill="${shapes[neededDigit].fill}"/></svg> together, this cell must be a <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[neededDigit].path}" fill="${shapes[neededDigit].fill}"/></svg>`,
              hintCellSets: [
                { row: row, col: furthestEmptyCell }, // Primary highlight - where to place the digit
                { row: row, col: i-3 }, // Secondary highlight - pattern cells
                { row: row, col: i-2 },
                { row: row, col: i-1 },
                { row: row, col: i }
              ]
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
          rule: 'closeantitriplet',
          message: result.message,
          hintCellSets: result.hintCellSets
        };
      }
    }
    
    return null;
  }
} 