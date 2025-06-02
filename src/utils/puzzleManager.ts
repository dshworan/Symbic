import { CellValue } from '../types/puzzle';
import { Puzzle } from '../data/types/levelTypes';
import { levelManager } from '../data/levels/levelManager';

class PuzzleManager {
  private currentPuzzleIndex: number = 0;

  getCurrentPuzzle(): Puzzle {
    const currentLevel = levelManager.getCurrentLevel();
    return currentLevel.puzzles[this.currentPuzzleIndex];
  }

  getCurrentPuzzleIndex(): number {
    return this.currentPuzzleIndex;
  }

  getLevel(): number {
    return levelManager.getCurrentLevelNumber();
  }

  getDifficulty(): number {
    return this.getCurrentPuzzle().difficulty;
  }

  nextPuzzle(): boolean {
    const currentLevel = levelManager.getCurrentLevel();
    
    // If we're at the last puzzle of the current level
    if (this.currentPuzzleIndex >= currentLevel.puzzles.length - 1) {
      // Try to move to the next level
      if (levelManager.nextLevel()) {
        // Reset puzzle index for the new level
        this.currentPuzzleIndex = 0;
      return true;
    }
      // If we can't move to next level (we're at the last level), stay at current puzzle
    return false;
    }
    
    // Move to next puzzle in current level
    this.currentPuzzleIndex++;
    return true;
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