import { Puzzle, CellValue } from '../types/puzzle';
import { level1Puzzles } from '../data/puzzles/level1';

class PuzzleManager {
  private currentPuzzleIndex: number = 0;
  private puzzles: Puzzle[] = level1Puzzles;

  getCurrentPuzzle(): Puzzle {
    return this.puzzles[this.currentPuzzleIndex];
  }

  getLevel(): number {
    return this.getCurrentPuzzle().level;
  }

  getDifficulty(): number {
    return this.getCurrentPuzzle().difficulty;
  }

  nextPuzzle(): boolean {
    if (this.currentPuzzleIndex < this.puzzles.length - 1) {
      this.currentPuzzleIndex++;
      return true;
    }
    return false;
  }

  previousPuzzle(): boolean {
    if (this.currentPuzzleIndex > 0) {
      this.currentPuzzleIndex--;
      return true;
    }
    return false;
  }

  resetToFirstPuzzle(): void {
    this.currentPuzzleIndex = 0;
  }
}

export const puzzleManager = new PuzzleManager(); 