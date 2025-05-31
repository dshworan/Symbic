import { MoveValidator } from './moveValidator';
import { HintStep } from './types';

export class FarAntiTripletRule extends MoveValidator {
  constructor() {
    super(
      'farantitriplet',
      'Places digits to avoid creating triplets when two nulls are adjacent to a needed digit'
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
        message: colStep.message.replace('row', 'column').replace('Column', 'Row'),
        hintCellSets: colStep.hintCellSets.map(cell => ({ row: cell.col, col: cell.row }))
      };
    }
    
    return null;
  }

  private _transposeGrid(grid: (number | null)[][], size: number): (number | null)[][] {
    const transposed = Array(size).fill(null).map(() => Array(size).fill(null));
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        transposed[col][row] = grid[row][col];
      }
    }
    return transposed;
  }

  private _checkRows(puzzle: (number | null)[][], size: number): HintStep | null {
    for (let row = 0; row < size; row++) {
      const currentRow = puzzle[row];
      const nullIndices: number[] = [];
      const counts: { [key: number]: number } = { 0: 0, 1: 0 };

      // Gather null positions and digit counts
      for (let col = 0; col < size; col++) {
        const val = currentRow[col];
        if (val === null) nullIndices.push(col);
        else counts[val]++;
      }

      if (nullIndices.length !== 3) continue;

      const half = size / 2;
      const need0 = half - counts[0];
      const need1 = half - counts[1];

      let targetDigit: number | null = null;
      if (need0 === 2) targetDigit = 0;
      else if (need1 === 2) targetDigit = 1;
      else continue;

      // Try to find a pair of adjacent nulls that sit next to a digit of targetDigit
      for (let i = 0; i < nullIndices.length; i++) {
        for (let j = i + 1; j < nullIndices.length; j++) {
          const a = nullIndices[i];
          const b = nullIndices[j];

          if (Math.abs(a - b) === 1) { // They're adjacent
            const left = Math.min(a, b);
            const right = Math.max(a, b);

            // Check if adjacent to targetDigit on either side
            const leftNeighbor = left - 1 >= 0 ? currentRow[left - 1] : null;
            const rightNeighbor = right + 1 < size ? currentRow[right + 1] : null;

            if (leftNeighbor === targetDigit || rightNeighbor === targetDigit) {
              // Find the third null (the "far" one)
              const farNull = nullIndices.find(idx => idx !== a && idx !== b);

              return {
                row,
                col: farNull!,
                value: targetDigit,
                rule: 'farantitriplet',
                message: `In row ${row+1}, placing ${targetDigit} at column ${farNull!+1} to avoid potential triplet with adjacent nulls at columns ${a+1} and ${b+1}.`,
                hintCellSets: [
                  // The far null cell (target)
                  { row, col: farNull! },
                  // The adjacent null cells
                  { row, col: a },
                  { row, col: b },
                  // The target digit cell that's adjacent to the nulls
                  ...(leftNeighbor === targetDigit ? [{ row, col: left - 1 }] : []),
                  ...(rightNeighbor === targetDigit ? [{ row, col: right + 1 }] : [])
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