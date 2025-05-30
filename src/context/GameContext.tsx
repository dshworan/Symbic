import React, { createContext, useState, useContext } from 'react';
import { CellValue } from '../types/puzzle';
import { puzzleManager } from '../utils/puzzleManager';

interface GameState {
  score: number;
  currentPuzzle: any;
  grid: CellValue[][];
}

interface GameContextType {
  gameState: GameState;
  updateGrid: (newGrid: CellValue[][]) => void;
  incrementScore: () => void;
  resetGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    currentPuzzle: puzzleManager.getCurrentPuzzle(),
    grid: puzzleManager.getCurrentPuzzle().grid,
  });

  const updateGrid = (newGrid: CellValue[][]) => {
    setGameState(prev => ({
      ...prev,
      grid: newGrid,
    }));
  };

  const incrementScore = () => {
    setGameState(prev => ({
      ...prev,
      score: prev.score + 1,
    }));
  };

  const resetGame = () => {
    puzzleManager.resetToFirstPuzzle();
    setGameState({
      score: 0,
      currentPuzzle: puzzleManager.getCurrentPuzzle(),
      grid: puzzleManager.getCurrentPuzzle().grid,
    });
  };

  return (
    <GameContext.Provider value={{ gameState, updateGrid, incrementScore, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}; 