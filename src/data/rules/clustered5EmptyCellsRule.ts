import { MoveValidator } from './moveValidator';
import { HintStep } from './types';
import { Shape } from '../types/levelTypes';

export class Clustered5EmptyCellsRule extends MoveValidator {
  constructor() {
    super(
      'clustered5emptycells',
      'Places needed digits in the isolated empty cell when there are 5 empty cells with 4 clustered together'
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

    // Check rows
    for (let row = 0; row < size; row++) {
      // Validate row data
      if (!Array.isArray(puzzle[row]) || puzzle[row].length !== size) {
        continue;
      }

      // Find empty cells and count digits
      const emptyCells: number[] = [];
      let zeroCount = 0;
      let oneCount = 0;
      
      for (let col = 0; col < size; col++) {
        if (puzzle[row][col] === null) {
          emptyCells.push(col);
        } else if (puzzle[row][col] === 0) {
          zeroCount++;
        } else if (puzzle[row][col] === 1) {
          oneCount++;
        }
      }
      
      // We need exactly 5 empty cells
      if (emptyCells.length !== 5) {
        continue;
      }
      
      // Determine which digit needs to be placed 4 times
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
          message: `We need 4 <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[targetDigit].path}" fill="${shapes[targetDigit].fill}"/></svg> in these 5 cells. One <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[targetDigit].path}" fill="${shapes[targetDigit].fill}"/></svg> must be in the isolated cell.`,
          hintCellSets: [
            // Highlight the clustered empty cells
            ...clusters[0].length === 4 ? clusters[0].map(col => ({ row, col })) : clusters[1].map(col => ({ row, col })),
            // Highlight the isolated cell
            { row, col: isolatedCell }
          ]
        };
      }
    }
    
    // Check columns
    for (let col = 0; col < size; col++) {
      // Find empty cells and count digits
      const emptyCells: number[] = [];
      let zeroCount = 0;
      let oneCount = 0;
      
      for (let row = 0; row < size; row++) {
        if (!Array.isArray(puzzle[row]) || puzzle[row].length !== size) {
          continue;
        }
        if (puzzle[row][col] === null) {
          emptyCells.push(row);
        } else if (puzzle[row][col] === 0) {
          zeroCount++;
        } else if (puzzle[row][col] === 1) {
          oneCount++;
        }
      }
      
      // We need exactly 5 empty cells
      if (emptyCells.length !== 5) {
        continue;
      }
      
      // Determine which digit needs to be placed 4 times
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
          row: isolatedCell,
          col: col,
          value: targetDigit,
          rule: 'clustered5emptycells',
          message: `We need 4 <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[targetDigit].path}" fill="${shapes[targetDigit].fill}"/></svg> in these 5 cells. One <svg width="20" height="20" viewBox="0 0 100 100"><path d="${shapes[targetDigit].path}" fill="${shapes[targetDigit].fill}"/></svg> must be in the isolated cell.`,
          hintCellSets: [
            // Highlight the clustered empty cells
            ...clusters[0].length === 4 ? clusters[0].map(row => ({ row, col })) : clusters[1].map(row => ({ row, col })),
            // Highlight the isolated cell
            { row: isolatedCell, col }
          ]
        };
      }
    }
    
    return null;
  }

  /**
   * Find clusters of adjacent cells in a sorted array of indices
   * @param indices - Sorted array of cell indices
   * @returns Array of clusters, where each cluster is an array of adjacent indices
   */
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