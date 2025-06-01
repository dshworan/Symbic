import { Rule, HintStep } from './types';
import { Shape } from '../types/levelTypes';

export abstract class MoveValidator implements Rule {
  constructor(
    public readonly name: string,
    public readonly description: string
  ) {}

  abstract findStep(puzzle: (number | null)[][], size: number, shapes?: Shape[]): HintStep | null;

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  protected isValidMove(puzzle: (number | null)[][], row: number, col: number, value: number, size: number): boolean {
    // Check if the move would create three in a row
    if (this.wouldCreateThreeInRow(puzzle, row, col, value, size)) {
      return false;
    }

    // Check if the move would create three in a column
    if (this.wouldCreateThreeInColumn(puzzle, row, col, value, size)) {
      return false;
    }

    // Check if the move would create duplicate rows
    if (this.wouldCreateDuplicateRows(puzzle, row, col, value, size)) {
      return false;
    }

    // Check if the move would create duplicate columns
    if (this.wouldCreateDuplicateColumns(puzzle, row, col, value, size)) {
      return false;
    }

    return true;
  }

  private wouldCreateThreeInRow(puzzle: (number | null)[][], row: number, col: number, value: number, size: number): boolean {
    // Check left side
    if (col >= 2 && puzzle[row][col - 2] === value && puzzle[row][col - 1] === value) {
      return true;
    }
    // Check middle
    if (col >= 1 && col < size - 1 && puzzle[row][col - 1] === value && puzzle[row][col + 1] === value) {
      return true;
    }
    // Check right side
    if (col < size - 2 && puzzle[row][col + 1] === value && puzzle[row][col + 2] === value) {
      return true;
    }
    return false;
  }

  private wouldCreateThreeInColumn(puzzle: (number | null)[][], row: number, col: number, value: number, size: number): boolean {
    // Check top
    if (row >= 2 && puzzle[row - 2][col] === value && puzzle[row - 1][col] === value) {
      return true;
    }
    // Check middle
    if (row >= 1 && row < size - 1 && puzzle[row - 1][col] === value && puzzle[row + 1][col] === value) {
      return true;
    }
    // Check bottom
    if (row < size - 2 && puzzle[row + 1][col] === value && puzzle[row + 2][col] === value) {
      return true;
    }
    return false;
  }

  private wouldCreateDuplicateRows(puzzle: (number | null)[][], row: number, col: number, value: number, size: number): boolean {
    // Create a copy of the puzzle with the new value
    const newPuzzle = puzzle.map(r => [...r]);
    newPuzzle[row][col] = value;

    // Check if this row is now identical to any other row
    for (let i = 0; i < size; i++) {
      if (i === row) continue;
      
      let isIdentical = true;
      for (let j = 0; j < size; j++) {
        if (newPuzzle[row][j] !== newPuzzle[i][j]) {
          isIdentical = false;
          break;
        }
      }
      if (isIdentical) return true;
    }
    return false;
  }

  private wouldCreateDuplicateColumns(puzzle: (number | null)[][], row: number, col: number, value: number, size: number): boolean {
    // Create a copy of the puzzle with the new value
    const newPuzzle = puzzle.map(r => [...r]);
    newPuzzle[row][col] = value;

    // Check if this column is now identical to any other column
    for (let j = 0; j < size; j++) {
      if (j === col) continue;
      
      let isIdentical = true;
      for (let i = 0; i < size; i++) {
        if (newPuzzle[i][col] !== newPuzzle[i][j]) {
          isIdentical = false;
          break;
        }
      }
      if (isIdentical) return true;
    }
    return false;
  }
} 