import { puzzleManager } from './puzzleManager';

export const loadPuzzle = async () => {
  try {
    const puzzle = puzzleManager.getCurrentPuzzle();
    if (!puzzle) {
      throw new Error('Failed to load puzzle: No puzzle available');
    }
    return puzzle;
  } catch (error) {
    console.error('Error loading puzzle:', error);
    throw error;
  }
}; 