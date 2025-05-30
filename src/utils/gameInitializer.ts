import { puzzleManager } from './puzzleManager';

export const initializeGame = async (): Promise<void> => {
  try {
    // Initialize the puzzle manager
    const puzzle = puzzleManager.getCurrentPuzzle();
    if (!puzzle) {
      throw new Error('Failed to initialize game: No puzzle available');
    }
    
    return Promise.resolve();
  } catch (error) {
    console.error('Error initializing game:', error);
    return Promise.reject(error);
  }
}; 