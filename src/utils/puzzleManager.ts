import { CellValue } from '../types/puzzle';
import { Puzzle } from '../data/types/levelTypes';
import { levelManager } from '../data/levels/levelManager';
import PackDataManager from '../data/packDataManager';
import { stateManager } from './stateManager';

class PuzzleManager {
  private currentPuzzleIndex: number = 0;

  getCurrentPuzzle(): Puzzle {
    const currentLevel = levelManager.getCurrentLevel();
    if (!currentLevel || !currentLevel.puzzles) {
      console.error('Invalid level or puzzles data:', currentLevel);
      return levelManager.getCurrentPack().levels[0].puzzles[0]; // Fallback to first puzzle
    }
    const puzzle = currentLevel.puzzles[this.currentPuzzleIndex];
    if (!puzzle) {
      console.error('Invalid puzzle index:', this.currentPuzzleIndex);
      return currentLevel.puzzles[0]; // Fallback to first puzzle of current level
    }
    //console.log('Loading puzzle:', {
    //  pack: levelManager.getCurrentPackNumber(),
    //  level: levelManager.getCurrentLevelNumber(),
    //  puzzleIndex: this.currentPuzzleIndex,
    //  gridSize: puzzle.grid.length,
    //  puzzleData: puzzle
    //});
    return puzzle;
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
    const packDataManager = PackDataManager.getInstance();
    const packId = levelManager.getCurrentPackNumber();
    const levelId = levelManager.getCurrentLevelNumber();
    
    // Find the next uncompleted puzzle in the current level
    for (let i = 0; i < currentLevel.puzzles.length; i++) {
      if (!packDataManager.isPuzzleCompleted(packId, levelId, i)) {
        this.currentPuzzleIndex = i;
        this.saveCurrentState();
        return true;
      }
    }
    
    // If all puzzles in current level are completed, try to move to next level
    if (levelManager.nextLevel()) {
      // Reset puzzle index for the new level
      this.currentPuzzleIndex = 0;
      this.saveCurrentState();
      return true;
    }
    
    // If we can't move to next level (we're at the last level), stay at current puzzle
    return false;
  }

  previousPuzzle(): boolean {
    if (this.currentPuzzleIndex > 0) {
      this.currentPuzzleIndex--;
      this.saveCurrentState();
      return true;
    }
    return false;
  }

  resetToFirstPuzzle(): void {
    this.currentPuzzleIndex = 0;
    this.saveCurrentState();
  }

  setCurrentPuzzleIndex(index: number): void {
    this.currentPuzzleIndex = index;
    this.saveCurrentState();
    //console.log('Set current puzzle index:', index);
  }

  // Method for initialization that doesn't save state
  setCurrentPuzzleIndexWithoutSaving(index: number): void {
    //console.log('Setting puzzle index without saving from', this.currentPuzzleIndex, 'to', index);
    this.currentPuzzleIndex = index;
    //console.log('Set current puzzle index (no save):', index);
  }

  // Add method to sync with LevelManager
  syncWithLevelManager(): void {
    // Only reset puzzle index when level changes, not when pack changes
    if (this.getLevel() !== levelManager.getCurrentLevelNumber()) {
      this.currentPuzzleIndex = 0;
      this.saveCurrentState();
    }
  }

  // Save current state to storage via stateManager
  private async saveCurrentState(): Promise<void> {
    // Only save if state is initialized to avoid saving during app startup
    if (stateManager.isStateInitialized()) {
      try {
        await stateManager.saveGameState(
          levelManager.getCurrentPackNumber(),
          levelManager.getCurrentLevelNumber(),
          this.currentPuzzleIndex
        );
      } catch (error) {
        //console.error('Error saving current puzzle state:', error);
      }
    }
  }
}

export const puzzleManager = new PuzzleManager(); 