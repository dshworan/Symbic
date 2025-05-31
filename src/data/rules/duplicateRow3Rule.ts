import { MoveValidator } from './moveValidator';
import { HintStep } from './types';

export class DuplicateRow3Rule extends MoveValidator {
  constructor() {
    super(
      'duplicaterow3',
      'Prevents duplicate rows and columns by comparing patterns with 3 empty cells'
    );
  }

  findStep(puzzle: (number | null)[][], size: number): HintStep | null {
    // First check rows
    const rowStep = this._findStepInRows(puzzle, size);
    if (rowStep) return rowStep;
    
    // Then check columns
    const colStep = this._findStepInColumns(puzzle, size);
    if (colStep) return colStep;
    
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
    // Check each row with exactly 3 empty cells
    for (let row1 = 0; row1 < size; row1++) {
      const emptyCells = this._findEmptyCells(puzzle[row1]);
      
      // Skip if not exactly 3 empty cells
      if (emptyCells.length !== 3) {
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
          // For 3 empty cells, use the "odd one out" rule
          
          // Count 0s and 1s in the empty positions
          let zeros = 0;
          let ones = 0;
          
          for (const emptyCol of emptyCells) {
            if (puzzle[row2][emptyCol] === 0) {
              zeros++;
            } else {
              ones++;
            }
          }
          
          // Find the odd one out
          if (zeros === 1 || ones === 1) {
            const targetValue = zeros === 1 ? 0 : 1;
            let oddOneOutCol = -1;
            
            // Find the position with the odd value
            for (const emptyCol of emptyCells) {
              if (puzzle[row2][emptyCol] === targetValue) {
                oddOneOutCol = emptyCol;
                break;
              }
            }
            
            // Place the opposite of the odd value
            const oppositeValue = targetValue === 0 ? 1 : 0;
            
            return {
              row: row1,
              col: oddOneOutCol,
              value: oppositeValue,
              rule: 'duplicaterow3',
              message: `To avoid duplicating row ${row2 + 1}, the odd one out position must be the opposite value.`
            };
          }
          
          // If no odd one out (equal numbers of 0s and 1s), just make one different
          const firstEmptyCol = emptyCells[0];
          const value = puzzle[row2][firstEmptyCol] === 0 ? 1 : 0;
          
          return {
            row: row1,
            col: firstEmptyCol,
            value: value,
            rule: 'duplicaterow3',
            message: `No two rows can be identical. This cell must be different from row ${row2 + 1}.`
          };
        }
      }
    }
    
    return null;
  }
  
  private _findStepInColumns(puzzle: (number | null)[][], size: number): HintStep | null {
    // Check each column with exactly 3 empty cells
    for (let col1 = 0; col1 < size; col1++) {
      // Extract column to find empty cells
      const column: (number | null)[] = [];
      for (let row = 0; row < size; row++) {
        column.push(puzzle[row][col1]);
      }
      
      const emptyCells = this._findEmptyCells(column);
      
      // Skip if not exactly 3 empty cells
      if (emptyCells.length !== 3) {
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
          // For 3 empty cells, we need to check if we can determine a value
          // Count occurrences of each value in col2 at the empty positions
          let zeros = 0;
          let ones = 0;
          
          for (const emptyRow of emptyCells) {
            if (puzzle[emptyRow][col2] === 0) {
              zeros++;
            } else if (puzzle[emptyRow][col2] === 1) {
              ones++;
            }
          }
          
          // If one value appears only once, we can place the opposite value
          if (zeros === 1 || ones === 1) {
            const targetValue = zeros === 1 ? 0 : 1;
            // Find the position with the single occurrence
            for (const emptyRow of emptyCells) {
              if (puzzle[emptyRow][col2] === targetValue) {
                // Place the opposite value
                const value = targetValue === 0 ? 1 : 0;
                
                return {
                  row: emptyRow,
                  col: col1,
                  value: value,
                  rule: 'duplicaterow3',
                  message: `To avoid duplicating column ${col2 + 1}, this cell must be different from the single occurrence of ${targetValue}.`
                };
              }
            }
          }
        }
      }
    }
    
    return null;
  }
} 