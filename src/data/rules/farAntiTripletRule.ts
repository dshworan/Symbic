import { MoveValidator } from './moveValidator';
import { HintStep } from './types';
import { Shape } from '../types/levelTypes';

export class FarAntiTripletRule extends MoveValidator {
  constructor() {
    super(
      'farantitriplet',
      'Prevents triplets when a digit appears between or adjacent to empty cells'
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
      
      // Now check for the pattern where two empty cells are adjacent to the needed digit
      for (let i = 0; i < currentRow.length; i++) {
        if (currentRow[i] === neededDigit) {
          // Check for pattern --0
          if (i >= 2 && currentRow[i-1] === null && currentRow[i-2] === null) {
            const thirdEmptyCell = emptyIndices.find(idx => idx !== i-1 && idx !== i-2);
            if (thirdEmptyCell !== undefined) {
              return {
                row: row,
                col: thirdEmptyCell,
                value: neededDigit,
                rule: 'farantitriplet',
                message: `To prevent three <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[neededDigit].path}" fill="${shapes[neededDigit].fill}"/></svg> together, this cell must be a <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[neededDigit].path}" fill="${shapes[neededDigit].fill}"/></svg>`,
                hintCellSets: [
                  { row: row, col: thirdEmptyCell }, // Primary highlight - where to place the digit
                  { row: row, col: i-2 }, // Secondary highlight - pattern cells
                  { row: row, col: i-1 },
                  { row: row, col: i }
                ]
              };
            }
          }
          // Check for pattern -0-
          if (i > 0 && i < currentRow.length - 1 && currentRow[i-1] === null && currentRow[i+1] === null) {
            const thirdEmptyCell = emptyIndices.find(idx => idx !== i-1 && idx !== i+1);
            if (thirdEmptyCell !== undefined) {
              return {
                row: row,
                col: thirdEmptyCell,
                value: neededDigit,
                rule: 'farantitriplet',
                message: `To prevent three <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[neededDigit].path}" fill="${shapes[neededDigit].fill}"/></svg> together, this cell must be a <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[neededDigit].path}" fill="${shapes[neededDigit].fill}"/></svg>`,
                hintCellSets: [
                  { row: row, col: thirdEmptyCell }, // Primary highlight - where to place the digit
                  { row: row, col: i-1 }, // Secondary highlight - pattern cells
                  { row: row, col: i },
                  { row: row, col: i+1 }
                ]
              };
            }
          }
          // Check for pattern 0--
          if (i <= currentRow.length - 3 && currentRow[i+1] === null && currentRow[i+2] === null) {
            const thirdEmptyCell = emptyIndices.find(idx => idx !== i+1 && idx !== i+2);
            if (thirdEmptyCell !== undefined) {
              return {
                row: row,
                col: thirdEmptyCell,
                value: neededDigit,
                rule: 'farantitriplet',
                message: `To prevent three <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[neededDigit].path}" fill="${shapes[neededDigit].fill}"/></svg> together, this cell must be a <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[neededDigit].path}" fill="${shapes[neededDigit].fill}"/></svg>`,
                hintCellSets: [
                  { row: row, col: thirdEmptyCell }, // Primary highlight - where to place the digit
                  { row: row, col: i }, // Secondary highlight - pattern cells
                  { row: row, col: i+1 },
                  { row: row, col: i+2 }
                ]
              };
            }
          }
        }
      }
    }
    
    return null;
  }
} 