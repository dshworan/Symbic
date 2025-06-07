import { CellValue } from '../../types/puzzle';
import { HintStep } from './types';
import { puzzleManager } from '../../utils/puzzleManager';
import { MoveValidator } from './moveValidator';

export class ShowErrorsRule extends MoveValidator {
  constructor() {
    super('Show Errors', 'Highlights cells that don\'t match the solution');
  }

  findStep(grid: CellValue[][], gridSize: number): HintStep | null {
    // Early validation of input parameters
    if (!grid || !Array.isArray(grid) || grid.length !== gridSize) {
      return null;
    }

    const puzzle = puzzleManager.getCurrentPuzzle();
    if (!puzzle?.solution) {
      return null;
    }

    // Validate solution structure
    const solution = puzzle.solution;
    if (!Array.isArray(solution) || solution.length !== gridSize) {
      return null;
    }

    // Find all cells that don't match the solution
    const incorrectCells: Array<{row: number; col: number}> = [];

    for (let row = 0; row < gridSize; row++) {
      // Validate row data
      if (!Array.isArray(grid[row]) || grid[row].length !== gridSize ||
          !Array.isArray(solution[row]) || solution[row].length !== gridSize) {
        continue;
      }

      for (let col = 0; col < gridSize; col++) {
        // Skip empty cells
        if (grid[row][col] === null) continue;
        
        // If the cell value doesn't match the solution
        if (grid[row][col] !== solution[row][col]) {
          incorrectCells.push({ row, col });
        }
      }
    }

    // If we found any incorrect cells
    if (incorrectCells.length > 0) {
      return {
        row: -1, // Special value to indicate this is an error state
        col: -1, // Special value to indicate this is an error state
        value: -1, // Special value to indicate this is an error state
        message: `Found ${incorrectCells.length} incorrect cell${incorrectCells.length > 1 ? 's' : ''}.`,
        hintCellSets: incorrectCells,
        rule: 'error' // Special rule name to indicate this is an error state
      };
    }

    return null;
  }
} 