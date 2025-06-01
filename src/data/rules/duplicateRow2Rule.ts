import { MoveValidator } from './moveValidator';
import { HintStep } from './types';
import { Shape } from '../types/levelTypes';

export class DuplicateRow2Rule extends MoveValidator {
  constructor() {
    super(
      'duplicaterow2',
      'Prevents duplicate rows and columns by comparing patterns with 2 empty cells'
    );
  }

  findStep(puzzle: (number | null)[][], size: number, shapes?: Shape[]): HintStep | null {
    if (!shapes) return null;

    // First check rows
    const rowStep = this._findStepInRows(puzzle, size);
    if (rowStep) {
      return {
        ...rowStep,
        message: rowStep.message.replace(/\b([01])s?\b/g, (match) => {
          const value = parseInt(match);
          if (!shapes[value]) {
            console.error('Shape not found for value:', value, 'Available shapes:', shapes);
            return match;
          }
          return `<svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[value].path}" fill="${shapes[value].fill}"/></svg>`;
        })
      };
    }
    
    // Then check columns
    const colStep = this._findStepInColumns(puzzle, size);
    if (colStep) {
      return {
        ...colStep,
        message: colStep.message.replace(/\b([01])s?\b/g, (match) => {
          const value = parseInt(match);
          if (!shapes[value]) {
            console.error('Shape not found for value:', value, 'Available shapes:', shapes);
            return match;
          }
          return `<svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[value].path}" fill="${shapes[value].fill}"/></svg>`;
        })
      };
    }
    
    return null;
  }
  
  private _findEmptyCells(line: (number | null)[]): number[] {
    const emptyCells: number[] = [];
    for (let i = 0; i < line.length; i++) {
      if (line[i] === null) {
        emptyCells.push(i);
      }
    }
    return emptyCells;
  }
  
  private _findStepInRows(puzzle: (number | null)[][], size: number): HintStep | null {
    // Check each row with exactly 2 empty cells
    for (let row1 = 0; row1 < size; row1++) {
      const emptyCells = this._findEmptyCells(puzzle[row1]);
      
      // Skip if not exactly 2 empty cells
      if (emptyCells.length !== 2) {
        continue;
      }
      
      // Look for other rows to compare with
      for (let row2 = 0; row2 < size; row2++) {
        if (row1 === row2) {
          continue; // Skip same row
        }
        
        // Skip if row2 has any empty cells (must be completed)
        if (puzzle[row2].includes(null)) {
          continue;
        }
        
        // Check if the filled positions match between rows
        let patternMatch = true;
        
        for (let col = 0; col < size; col++) {
          // Skip empty cells in row1
          if (puzzle[row1][col] === null) {
            continue;
          }
          
          // Check if values match
          if (puzzle[row1][col] !== puzzle[row2][col]) {
            patternMatch = false;
            break;
          }
        }
        
        // If pattern matches in all filled positions
        if (patternMatch) {
          // For 2 empty cells, make one different
          for (const emptyCol of emptyCells) {
            // Place the opposite value to avoid duplication
            const value = puzzle[row2][emptyCol] === 0 ? 1 : 0;
            
            return {
              row: row1,
              col: emptyCol,
              value: value,
              rule: 'duplicaterow2',
              message: `No two rows can be identical. This cell must be different.`,
              hintCellSets: [
                // Highlight the row being filled
                ...Array.from({ length: size }, (_, i) => ({ row: row1, col: i })),
                // Highlight the row being compared to
                ...Array.from({ length: size }, (_, i) => ({ row: row2, col: i }))
              ]
            };
          }
        }
      }
    }
    
    return null;
  }
  
  private _findStepInColumns(puzzle: (number | null)[][], size: number): HintStep | null {
    // Check each column with exactly 2 empty cells
    for (let col1 = 0; col1 < size; col1++) {
      // Extract column to find empty cells
      const column: (number | null)[] = [];
      for (let row = 0; row < size; row++) {
        column.push(puzzle[row][col1]);
      }
      
      const emptyCells = this._findEmptyCells(column);
      
      // Skip if not exactly 2 empty cells
      if (emptyCells.length !== 2) {
        continue;
      }
      
      // Look for other columns to compare with
      for (let col2 = 0; col2 < size; col2++) {
        if (col1 === col2) {
          continue; // Skip same column
        }
        
        // Extract second column for comparison
        const column2: (number | null)[] = [];
        for (let row = 0; row < size; row++) {
          column2.push(puzzle[row][col2]);
        }
        
        // Skip if col2 has any empty cells (must be completed)
        if (column2.includes(null)) {
          continue;
        }
        
        // Check if the filled positions match between columns
        let patternMatch = true;
        
        for (let row = 0; row < size; row++) {
          // Skip empty cells in col1
          if (puzzle[row][col1] === null) {
            continue;
          }
          
          // Check if values match
          if (puzzle[row][col1] !== puzzle[row][col2]) {
            patternMatch = false;
            break;
          }
        }
        
        // If pattern matches in all filled positions
        if (patternMatch) {
          // For 2 empty cells, we can fill both to make them different
          // Find the first empty cell that has a value in col2
          for (const emptyRow of emptyCells) {
            // Place the opposite value to avoid duplication
            const value = puzzle[emptyRow][col2] === 0 ? 1 : 0;
            
            return {
              row: emptyRow,
              col: col1,
              value: value,
              rule: 'duplicaterow2',
              message: `No two columns can be identical. This cell must be different.`,
              hintCellSets: [
                // Highlight the column being filled
                ...Array.from({ length: size }, (_, i) => ({ row: i, col: col1 })),
                // Highlight the column being compared to
                ...Array.from({ length: size }, (_, i) => ({ row: i, col: col2 }))
              ]
            };
          }
        }
      }
    }
    
    return null;
  }

  private _transposeGrid(puzzle: (number | null)[][], size: number): (number | null)[][] {
    const transposed: (number | null)[][] = [];
    for (let col = 0; col < size; col++) {
      const column: (number | null)[] = [];
      for (let row = 0; row < size; row++) {
        column.push(puzzle[row][col]);
      }
      transposed.push(column);
    }
    return transposed;
  }
} 