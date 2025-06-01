import { MoveValidator } from './moveValidator';
import { HintStep } from './types';
import { Shape } from '../types/levelTypes';

export class EqualNumberRule extends MoveValidator {
  constructor() {
    super(
      'equalnumber',
      'Ensures equal number of 0s and 1s in each row and column'
    );
  }

  findStep(puzzle: (number | null)[][], size: number, shapes?: Shape[]): HintStep | null {
    if (!shapes) return null;

    // Check each row
    for (let row = 0; row < size; row++) {
      let zeros = 0;
      let ones = 0;
      let empty: number[] = [];
      
      // Count values and find empty cells
      for (let col = 0; col < size; col++) {
        if (puzzle[row][col] === 0) {
          zeros++;
        } else if (puzzle[row][col] === 1) {
          ones++;
        } else {
          empty.push(col);
        }
      }
      
      // If we have exactly half of each value, we can fill an empty cell
      if (empty.length > 0) {
        if (zeros === size/2) {
          // Fill first empty cell with 1
          return {
            row: row,
            col: empty[0],
            value: 1,
            rule: 'equalnumber',
            message: `This row already has the maximum number of <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[0].path}" fill="${shapes[0].fill}"/></svg>s, so this must be a <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[1].path}" fill="${shapes[1].fill}"/></svg>.`,
            hintCellSets: Array.from({ length: size }, (_, i) => ({ row, col: i }))
          };
        } else if (ones === size/2) {
          // Fill first empty cell with 0
          return {
            row: row,
            col: empty[0],
            value: 0,
            rule: 'equalnumber',
            message: `This row already has the maximum number of <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[1].path}" fill="${shapes[1].fill}"/></svg>s, so this must be a <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[0].path}" fill="${shapes[0].fill}"/></svg>.`,
            hintCellSets: Array.from({ length: size }, (_, i) => ({ row, col: i }))
          };
        }
      }
    }
    
    // Check each column
    for (let col = 0; col < size; col++) {
      let zeros = 0;
      let ones = 0;
      let empty: number[] = [];
      
      // Count values and find empty cells
      for (let row = 0; row < size; row++) {
        if (puzzle[row][col] === 0) {
          zeros++;
        } else if (puzzle[row][col] === 1) {
          ones++;
        } else {
          empty.push(row);
        }
      }
      
      // If we have exactly half of each value, we can fill an empty cell
      if (empty.length > 0) {
        if (zeros === size/2) {
          // Fill first empty cell with 1
          return {
            row: empty[0],
            col: col,
            value: 1,
            rule: 'equalnumber',
            message: `This column already has the maximum number of <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[0].path}" fill="${shapes[0].fill}"/></svg>s, so this must be a <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[1].path}" fill="${shapes[1].fill}"/></svg>.`,
            hintCellSets: Array.from({ length: size }, (_, i) => ({ row: i, col }))
          };
        } else if (ones === size/2) {
          // Fill first empty cell with 0
          return {
            row: empty[0],
            col: col,
            value: 0,
            rule: 'equalnumber',
            message: `This column already has the maximum number of <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[1].path}" fill="${shapes[1].fill}"/></svg>s, so this must be a <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[0].path}" fill="${shapes[0].fill}"/></svg>.`,
            hintCellSets: Array.from({ length: size }, (_, i) => ({ row: i, col }))
          };
        }
      }
    }
    
    return null;
  }
} 