import { MoveValidator } from './moveValidator';
import { HintStep } from './types';

export class Clustered4EmptyCellsRule extends MoveValidator {
  constructor() {
    super(
      'clustered4emptycells',
      'Places needed digits in the isolated empty cell when there are 4 empty cells with 3 clustered together'
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
        message: colStep.message.replace('row', 'column'),
        hintCellSets: colStep.hintCellSets?.map(cell => ({ row: cell.col, col: cell.row }))
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
      
      // We need exactly 4 empty cells
      if (emptyCells.length !== 4) {
        continue;
      }
      
      // Determine which digit needs to be placed 3 times (when one has reached or exceeded half)
      const neededZeros = (size / 2) - zeroCount;
      const neededOnes = (size / 2) - oneCount;
      
      let targetDigit: number | null = null;
      if (neededZeros === 3) {
        targetDigit = 0;
      } else if (neededOnes === 3) {
        targetDigit = 1;
      } else {
        continue; // We don't need exactly 3 of one digit
      }
      
      // Sort empty indices to help with pattern detection
      emptyCells.sort((a, b) => a - b);
      
      // Check if 3 empty cells are clustered together
      const clusters = this._findClusters(emptyCells);
      
      // We need exactly one cluster of 3 and one isolated cell
      if (clusters.length === 2 && 
          ((clusters[0].length === 3 && clusters[1].length === 1) || 
           (clusters[0].length === 1 && clusters[1].length === 3))) {
        
        // Find the isolated empty cell
        const isolatedCell = clusters[0].length === 1 ? clusters[0][0] : clusters[1][0];
        
        // Find the cluster of 3
        const clusterOf3 = clusters[0].length === 3 ? clusters[0] : clusters[1];
        
        // Find the adjacent non-empty cell
        let adjacentCell: number;
        if (clusterOf3[0] > 0 && puzzle[row][clusterOf3[0] - 1] !== null) {
          adjacentCell = clusterOf3[0] - 1;
        } else if (clusterOf3[2] < size - 1 && puzzle[row][clusterOf3[2] + 1] !== null) {
          adjacentCell = clusterOf3[2] + 1;
        } else {
          continue; // No adjacent non-empty cell found
        }
        
        // Include both empty cells and the adjacent non-empty cell
        const hintCells = [
          ...emptyCells.map(col => ({ row, col })),
          { row, col: adjacentCell }
        ];
        
        console.log('Clustered4EmptyCellsRule - hintCells:', {
          emptyCells,
          adjacentCell,
          hintCells,
          targetCell: { row, col: isolatedCell }
        });
        
        return {
          row: row,
          col: isolatedCell,
          value: targetDigit,
          rule: 'clustered4emptycells',
          message: `We cannot have 3 in a row of ${puzzle[row][adjacentCell]}. So this must be a ${targetDigit}`,
          hintCellSets: hintCells
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