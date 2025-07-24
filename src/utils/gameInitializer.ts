import { stateManager } from './stateManager';
import { levelManager } from '../data/levels/levelManager';
import { puzzleManager } from './puzzleManager';
import PackDataManager from '../data/packDataManager';

export const initializeGame = async (): Promise<void> => {
  try {
    console.log('=== GAME INITIALIZATION START ===');
    
    // Load saved puzzle state
    const savedState = await stateManager.loadGameState();
    
    if (savedState) {
      console.log('Found saved puzzle state:', savedState);
      
      // Set the saved pack and level without saving state
      console.log('Setting pack to:', savedState.pack);
      levelManager.setCurrentPackWithoutSaving(savedState.pack);
      console.log('Setting level to:', savedState.level);
      levelManager.setCurrentLevelWithoutSaving(savedState.level);
      
      console.log('After setting pack/level - Current pack:', levelManager.getCurrentPackNumber(), 'Current level:', levelManager.getCurrentLevelNumber());
      
      // Check if the saved puzzle is still playable (not completed)
      const packDataManager = PackDataManager.getInstance();
      const isPlayable = packDataManager.isPuzzlePlayable(
        savedState.pack, 
        savedState.level, 
        savedState.puzzleIndex
      );
      
      console.log('Is saved puzzle playable?', isPlayable);
      
      if (isPlayable) {
        // Set the saved puzzle index without saving state
        console.log('Setting puzzle index to:', savedState.puzzleIndex);
        puzzleManager.setCurrentPuzzleIndexWithoutSaving(savedState.puzzleIndex);
        console.log('After setting puzzle index - Current puzzle index:', puzzleManager.getCurrentPuzzleIndex());
        console.log('Restored to saved puzzle state');
      } else {
        // Find the next uncompleted puzzle
        console.log('Saved puzzle is completed, finding next uncompleted puzzle...');
        findAndSetNextUncompletedPuzzle(savedState.pack, savedState.level);
      }
    } else {
      console.log('No saved puzzle state found, starting from beginning...');
      // Start from the first uncompleted puzzle
      findAndSetNextUncompletedPuzzle(1, 1);
    }
    
    // Mark state as initialized so future saves will work
    stateManager.setInitialized(true);
    
    console.log('=== FINAL STATE ===');
    console.log('Current pack:', levelManager.getCurrentPackNumber());
    console.log('Current level:', levelManager.getCurrentLevelNumber());
    console.log('Current puzzle index:', puzzleManager.getCurrentPuzzleIndex());
    console.log('=== GAME INITIALIZATION COMPLETE ===');
  } catch (error) {
    console.error('Error during game initialization:', error);
    // Fallback to starting from the beginning
    levelManager.setCurrentPackWithoutSaving(1);
    levelManager.setCurrentLevelWithoutSaving(1);
    puzzleManager.setCurrentPuzzleIndexWithoutSaving(0);
    stateManager.setInitialized(true);
  }
};

const findAndSetNextUncompletedPuzzle = (startPack: number, startLevel: number): void => {
  console.log('Finding next uncompleted puzzle starting from pack:', startPack, 'level:', startLevel);
  const packDataManager = PackDataManager.getInstance();
  
  // Start from the specified pack and level without saving
  levelManager.setCurrentPackWithoutSaving(startPack);
  levelManager.setCurrentLevelWithoutSaving(startLevel);
  
  // Find the first uncompleted puzzle in the current level
  const currentLevel = levelManager.getCurrentLevel();
  console.log('Checking level with', currentLevel.puzzles.length, 'puzzles');
  
  for (let puzzleIndex = 0; puzzleIndex < currentLevel.puzzles.length; puzzleIndex++) {
    const isCompleted = packDataManager.isPuzzleCompleted(startPack, startLevel, puzzleIndex);
    console.log(`Puzzle ${puzzleIndex} completed:`, isCompleted);
    
    if (!isCompleted) {
      puzzleManager.setCurrentPuzzleIndexWithoutSaving(puzzleIndex);
      console.log(`Found uncompleted puzzle: Pack ${startPack}, Level ${startLevel}, Puzzle ${puzzleIndex}`);
      return;
    }
  }
  
  // If all puzzles in current level are completed, try next level
  console.log('All puzzles in current level completed, trying next level...');
  if (levelManager.nextLevel()) {
    // Try to find uncompleted puzzle in the new level
    findAndSetNextUncompletedPuzzle(
      levelManager.getCurrentPackNumber(),
      levelManager.getCurrentLevelNumber()
    );
  } else {
    // We're at the end of all packs, stay at the last puzzle
    console.log('All puzzles completed, staying at last puzzle');
  }
}; 