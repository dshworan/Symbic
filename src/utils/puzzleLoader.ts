import { puzzleManager } from './puzzleManager';
import { levelManager } from '../data/levels/levelManager';

export const loadPuzzle = async (): Promise<any> => {
  try {
    console.log('=== LOADING PUZZLE ===');
    
    const puzzle = puzzleManager.getCurrentPuzzle();
    const currentLevel = levelManager.getCurrentLevel();
    const currentPuzzleIndex = puzzleManager.getCurrentPuzzleIndex();
    
    console.log('loadPuzzle - Current pack:', levelManager.getCurrentPackNumber());
    console.log('loadPuzzle - Current level:', levelManager.getCurrentLevelNumber());
    console.log('loadPuzzle - Current puzzle index:', currentPuzzleIndex);
    console.log('loadPuzzle - Puzzle grid size:', puzzle.grid.length);
    
    console.log('Current puzzle loaded:', {
      pack: levelManager.getCurrentPackNumber(),
      level: levelManager.getCurrentLevelNumber(),
      puzzleIndex: currentPuzzleIndex,
      gridSize: puzzle.grid.length,
    });
    
    console.log('=== LOADING PUZZLE COMPLETE ===');
    return puzzle;
  } catch (error) {
    console.error('Error loading puzzle:', error);
    throw error;
  }
}; 