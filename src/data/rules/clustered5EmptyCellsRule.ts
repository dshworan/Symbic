import { MoveValidator } from './moveValidator';
import { HintStep } from './types';

export class Clustered5EmptyCellsRule extends MoveValidator {
  constructor() {
    super(
      'clustered5emptycells',
      'Places needed digits in the isolated empty cell when there are 5 empty cells with 4 clustered together'
    );
  }

  findStep(puzzle: (number | null)[][], size: number): HintStep | null {
    // First check rows
    const rowStep = this._checkRows(puzzle, size);
    if (rowStep) return rowStep;
    
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
        message: colStep.message.replace('row', 'column')
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
      
      // Find empty cells 
      const emptyCells: number[] = [];
      let zeroCount = 0;
      let oneCount = 0;
      
      for (let col = 0; col < currentRow.length; col++) {
        if (currentRow[col] === null) {
          emptyCells.push(col);
        } else if (currentRow[col] === 0) {
          zeroCount++;
        } else if (currentRow[col] === 1) {
          oneCount++;
        }
      }
      
      // We need exactly 5 empty cells
      if (emptyCells.length !== 5) {
        continue;
      }
      
      // Determine which digit needs to be placed 4 times (when one has reached or exceeded half)
      const neededZeros = (size / 2) - zeroCount;
      const neededOnes = (size / 2) - oneCount;
      
      let targetDigit: number | null = null;
      if (neededZeros === 4) {
        targetDigit = 0;
      } else if (neededOnes === 4) {
        targetDigit = 1;
      } else {
        continue; // We don't need exactly 4 of one digit
      }
      
      // Sort empty indices to help with pattern detection
      emptyCells.sort((a, b) => a - b);
      
      // Check if 4 empty cells are clustered together
      const clusters = this._findClusters(emptyCells);
      
      // We need exactly one cluster of 4 and one isolated cell
      if (clusters.length === 2 && 
          ((clusters[0].length === 4 && clusters[1].length === 1) || 
           (clusters[0].length === 1 && clusters[1].length === 4))) {
        
        // Find the isolated empty cell
        const isolatedCell = clusters[0].length === 1 ? clusters[0][0] : clusters[1][0];
        
        return {
          row: row,
          col: isolatedCell,
          value: targetDigit,
          rule: 'clustered5emptycells',
          message: `Found 5 empty cells in row ${row+1} with 4 clustered together. Placing ${targetDigit} in the isolated cell.`
        };
      }
    }
    
    return null;
  }
  
  private _findClusters(indices: number[]): number[][] {
    const clusters: number[][] = [];
    let currentCluster = [indices[0]];
    
    for (let i = 1; i < indices.length; i++) {
      // If this index is adjacent to the previous one, add to current cluster
      if (indices[i] === indices[i-1] + 1) {
        currentCluster.push(indices[i]);
      } else {
        // Start a new cluster
        clusters.push(currentCluster);
        currentCluster = [indices[i]];
      }
    }
    
    // Add the last cluster
    clusters.push(currentCluster);
    
    return clusters;
  }
} 