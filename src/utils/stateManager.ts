import { storage } from './storage';

export interface GameState {
  pack: number;
  level: number;
  puzzleIndex: number;
}

class StateManager {
  private static instance: StateManager;
  private isInitialized = false;

  private constructor() {}

  public static getInstance(): StateManager {
    if (!StateManager.instance) {
      StateManager.instance = new StateManager();
    }
    return StateManager.instance;
  }

  public setInitialized(value: boolean): void {
    this.isInitialized = value;
  }

  public isStateInitialized(): boolean {
    return this.isInitialized;
  }

  public async saveGameState(pack: number, level: number, puzzleIndex: number): Promise<void> {
    try {
      await storage.setCurrentPuzzleState(pack, level, puzzleIndex);
      console.log('StateManager: Saved game state:', { pack, level, puzzleIndex });
    } catch (error) {
      console.error('StateManager: Error saving game state:', error);
    }
  }

  public async loadGameState(): Promise<GameState | null> {
    try {
      const savedState = await storage.getCurrentPuzzleState();
      if (savedState) {
        console.log('StateManager: Loaded game state:', savedState);
      }
      return savedState;
    } catch (error) {
      console.error('StateManager: Error loading game state:', error);
      return null;
    }
  }

  public async clearGameState(): Promise<void> {
    try {
      await storage.clearCurrentPuzzleState();
      console.log('StateManager: Cleared game state');
    } catch (error) {
      console.error('StateManager: Error clearing game state:', error);
    }
  }
}

export const stateManager = StateManager.getInstance(); 