import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, useWindowDimensions, Animated, StatusBar, Alert, Platform, ScrollView, Modal, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Puzzle } from '../data/types/levelTypes';
import { puzzleManager } from '../utils/puzzleManager';
import { levelManager } from '../data/levels/levelManager';
import { getRandomSuccessMessage } from '../data/messages';
import { useAudio } from '../context/AudioContext';
import { RuleManager } from '../data/rules/ruleManager';
import SettingsModal from './modals/SettingsModal';
import { pack1Tutorials } from '../data/tutorials/pack1Tutorials';
import { PackDataManager } from '../data/packDataManager';
import { hintManager } from '../utils/hintManager';
import { stateManager } from '../utils/stateManager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showRewardedAd, preloadRewardedAd } from '../utils/rewardAd';
import HintRewardModal from './modals/HintRewardModal';
import { showInterstitialAd, preloadInterstitialAd } from '../utils/interstitialAd';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Game: {
    refreshHints?: number;
  };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Game'>;
type GameScreenRouteProp = RouteProp<RootStackParamList, 'Game'>;

type CellValue = number | null;

interface Move {
  row: number;
  col: number;
  previousValue: CellValue;
  newValue: CellValue;
}

interface Hint {
  row: number;
  col: number;
  value: number;
  message: string;
  hintCellSets?: Array<{row: number; col: number}>;
  rule: string;
}

interface GameBoardProps {
  onComplete: () => void;
  onBack: () => void;
  isAutoplay?: boolean;
  onAutoplayChange: (value: boolean) => void;
  onPackPress?: () => void;
}



const GameBoard: React.FC<GameBoardProps> = ({ onComplete, onBack, isAutoplay = false, onAutoplayChange, onPackPress }) => {
  const { width } = useWindowDimensions();
  const { playSound } = useAudio();
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<GameScreenRouteProp>();
  const [cellSize, setCellSize] = useState(0);
  const [grid, setGrid] = useState<CellValue[][]>([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [successMessage, setSuccessMessage] = useState<{ message: string; backgroundColor: string; borderColor: string } | null>(null);
  const [failureMessage, setFailureMessage] = useState<{ mainText: string; subText: string } | null>(null);
  const [messageOpacity] = useState(new Animated.Value(0));
  const [failureOpacity] = useState(new Animated.Value(0));
  const [shapeScale] = useState(new Animated.Value(1));
  const [boardOpacity] = useState(new Animated.Value(1));
  const [failureTimeout, setFailureTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [currentLevelId, setCurrentLevelId] = useState(levelManager.getCurrentLevel().id);
  const [currentGridSize, setCurrentGridSize] = useState(puzzleManager.getCurrentPuzzle().grid.length);
  const [currentShapes, setCurrentShapes] = useState(levelManager.getCurrentLevel().shapes);
  const [moveHistory, setMoveHistory] = useState<Move[]>([]);
  const [redoStack, setRedoStack] = useState<Move[]>([]);
  const [showSettings, setShowSettings] = useState(false);
  const [isSolved, setIsSolved] = useState(false);
  const [hint, setHint] = useState<Hint | null>(null);
  const [hintOpacity] = useState(new Animated.Value(0));
  const [autoplayInterval, setAutoplayInterval] = useState<NodeJS.Timeout | null>(null);
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [totalPuzzles, setTotalPuzzles] = useState(0);
  const [welcomeOpacity] = useState(new Animated.Value(0));
  const [showWelcome, setShowWelcome] = useState(true);
  const [tutorialOpacity] = useState(new Animated.Value(1));
  const [hasStartedGame, setHasStartedGame] = useState(false);
  const [hintCount, setHintCount] = useState(5);
  const [showHintReward, setShowHintReward] = useState(false);
  const [hintBadgeScale] = useState(new Animated.Value(1));
  const [hasLoadedInitialHints, setHasLoadedInitialHints] = useState(false);
  const [hintsJustAdded, setHintsJustAdded] = useState(false);
  const ruleManager = new RuleManager();

  // Initialize the game board only once on mount
  useEffect(() => {
    const initializeGame = async () => {
      console.log('=== GAMEBOARD INITIALIZATION ===');
      
      // Wait for state manager to be initialized
      let attempts = 0;
      while (!stateManager.isStateInitialized() && attempts < 100) {
        console.log('Waiting for state manager initialization...', attempts);
        await new Promise(resolve => setTimeout(resolve, 100));
        attempts++;
      }
      
      if (!stateManager.isStateInitialized()) {
        console.log('State manager not initialized after 10 seconds, proceeding anyway');
      }
      
      const currentLevel = levelManager.getCurrentLevel();
      const currentPuzzle = puzzleManager.getCurrentPuzzle();
      const currentPuzzleIndex = puzzleManager.getCurrentPuzzleIndex();
      
      console.log('GameBoard - Current level ID:', currentLevel.id);
      console.log('GameBoard - Current puzzle index:', currentPuzzleIndex);
      console.log('GameBoard - Current puzzle grid size:', currentPuzzle.grid.length);
      
      setCurrentLevelId(currentLevel.id);
      setCurrentGridSize(currentPuzzle.grid.length);
      setCurrentShapes(currentLevel.shapes);
      setGrid(currentPuzzle.grid as CellValue[][]);
      setCellSize(calculateCellSize(currentPuzzle.grid.length));
      
      // Set up initial puzzle index and total puzzles
      setCurrentPuzzleIndex(currentPuzzleIndex);
      setTotalPuzzles(currentLevel.puzzles.length);
      
      console.log('GameBoard - Set currentPuzzleIndex to:', currentPuzzleIndex);
      console.log('=== GAMEBOARD INITIALIZATION COMPLETE ===');
    };

    initializeGame();
  }, []); // Empty dependency array means this only runs once on mount

  // Effect to handle level changes
  useEffect(() => {
    const currentLevel = levelManager.getCurrentLevel();
    const puzzle = puzzleManager.getCurrentPuzzle();
    
  }, [currentLevelId, currentGridSize]);

  // Effect to handle puzzle changes
  useEffect(() => {
    const puzzle = puzzleManager.getCurrentPuzzle();
    const currentLevel = levelManager.getCurrentLevel();
    
    if (puzzle && puzzle.grid) {
      const gridSize = puzzle.grid.length;
      const newCellSize = calculateCellSize(gridSize);
      
      // Update grid and size
      setGrid(puzzle.grid as CellValue[][]);
      setCurrentGridSize(gridSize);
      setCellSize(newCellSize);
      setCurrentLevelId(currentLevel.id);
      setCurrentShapes(currentLevel.shapes);
    }
  }, [puzzleManager.getCurrentPuzzleIndex()]);

  // Effect to sync currentPuzzleIndex with puzzleManager
  useEffect(() => {
    const puzzleIndex = puzzleManager.getCurrentPuzzleIndex();
    if (puzzleIndex !== currentPuzzleIndex) {
      setCurrentPuzzleIndex(puzzleIndex);
      // Also update the grid and shapes when puzzle index changes
      const puzzle = puzzleManager.getCurrentPuzzle();
      const currentLevel = levelManager.getCurrentLevel();
      setGrid(puzzle.grid as CellValue[][]);
      setCurrentShapes(currentLevel.shapes);
    }
  }, [puzzleManager.getCurrentPuzzleIndex()]);

  // Effect to ensure grid state is always synchronized with puzzle manager
  useEffect(() => {
    const puzzle = puzzleManager.getCurrentPuzzle();
    const currentLevel = levelManager.getCurrentLevel();
    
    // Check if the current grid matches the puzzle manager's grid
    if (puzzle && puzzle.grid && grid.length > 0) {
      const puzzleGrid = puzzle.grid as CellValue[][];
      const currentGrid = grid;
      
      // Compare grid dimensions
      if (puzzleGrid.length !== currentGrid.length || 
          puzzleGrid[0]?.length !== currentGrid[0]?.length) {
        // Grid dimensions don't match, update the grid
        setGrid(puzzleGrid);
        setCurrentGridSize(puzzleGrid.length);
        setCellSize(calculateCellSize(puzzleGrid.length));
        setCurrentLevelId(currentLevel.id);
        setCurrentShapes(currentLevel.shapes);
        setCurrentPuzzleIndex(puzzleManager.getCurrentPuzzleIndex());
        setTotalPuzzles(currentLevel.puzzles.length);
        return;
      }
      
      // Check if the initial cells (non-null values) match
      let needsUpdate = false;
      for (let row = 0; row < puzzleGrid.length; row++) {
        for (let col = 0; col < puzzleGrid[row].length; col++) {
          if (puzzleGrid[row][col] !== null && currentGrid[row][col] !== puzzleGrid[row][col]) {
            needsUpdate = true;
            break;
          }
        }
        if (needsUpdate) break;
      }
      
      if (needsUpdate) {
        // Update the grid to match the puzzle manager
        setGrid(puzzleGrid);
        setCurrentLevelId(currentLevel.id);
        setCurrentShapes(currentLevel.shapes);
        setCurrentPuzzleIndex(puzzleManager.getCurrentPuzzleIndex());
        setTotalPuzzles(currentLevel.puzzles.length);
      }
    }
  }, [grid, currentPuzzleIndex, currentLevelId]);

  const calculateCellSize = (gridSize: number) => {
    const maxWidth = Math.min(width, 700);
    const padding = 20; // 10px padding on each side
    const availableWidth = maxWidth - padding;
    
    // Adjust cell size based on grid size
    let size;
    if (gridSize <= 6) {
      size = Math.floor(availableWidth / gridSize);
    } else if (gridSize <= 8) {
      size = Math.floor(availableWidth / gridSize);
    } else {
      size = Math.floor(availableWidth / gridSize);
    }
    
    return size;
  };

  const resetGrid = () => {
    // Play restart sound
    playSound('restart');

    // Reset solved state
    setIsSolved(false);

    // Clear any existing hint
    if (hint) {
      Animated.timing(hintOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setHint(null);
      });
    }

    // Clear move history and redo stack
    setMoveHistory([]);
    setRedoStack([]);

    // Clear any pending failure message
    if (failureTimeout) {
      clearTimeout(failureTimeout);
      setFailureTimeout(null);
    }
    setFailureMessage(null);
    failureOpacity.setValue(0);

    const puzzle = puzzleManager.getCurrentPuzzle();
    const currentLevel = levelManager.getCurrentLevel();
    if (!puzzle || !puzzle.grid) {
      console.error('Invalid puzzle data:', puzzle);
      return;
    }

    const gridSize = puzzle.grid.length;
    const isDifferentSize = gridSize !== currentGridSize;

    if (isDifferentSize) {
      // Fade out the entire board
      Animated.timing(boardOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        try {
          // Calculate new cell size before updating the grid
          const newCellSize = calculateCellSize(gridSize);
          setCellSize(newCellSize);
          
          // Update grid and size
          setGrid(puzzle.grid as CellValue[][]);
          setCurrentGridSize(gridSize);
          setCurrentLevelId(currentLevel.id);
          setCurrentShapes(currentLevel.shapes);
          
          // Reset shape scale to 0
          shapeScale.setValue(0);
          
          // Fade in the new board
          Animated.timing(boardOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            console.log('6. Board faded in, growing in shapes');
            // After board is visible, grow in the new shapes
            Animated.timing(shapeScale, {
              toValue: 1,
              duration: 300,
              useNativeDriver: true,
            }).start(() => {
              console.log('7. Shapes grown in, updating level');
              // Update level ID and shapes after shapes are fully grown in
              setTimeout(() => {
                setCurrentLevelId(currentLevel.id);
                setCurrentShapes(currentLevel.shapes);
                console.log('8. Level update complete');
              }, 50);
            });
          });
        } catch (error) {
          console.error('Error during grid transition:', error);
          // Fallback to safe state
          setGrid([]);
          setCurrentGridSize(0);
          setCurrentLevelId(0);
        }
      });
    } else {
      // For same-size grids, only animate the shapes
      Animated.sequence([
        // First fade out the shapes
      Animated.timing(shapeScale, {
        toValue: 0,
          duration: 150,
        useNativeDriver: true,
        })
      ]).start(() => {
        try {
          setGrid(puzzle.grid as CellValue[][]);
          setCurrentLevelId(currentLevel.id);
          setCurrentShapes(currentLevel.shapes);
          
          // Grow in the new shapes
          Animated.timing(shapeScale, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }).start();
        } catch (error) {
          console.error('Error during shape animation:', error);
          // Fallback to safe state
          setGrid([]);
          setCurrentLevelId(0);
        }
      });
    }
  };

  const loadNewPuzzle = () => {
    // Reset solved state
    setIsSolved(false);

    // Clear move history and redo stack
    setMoveHistory([]);
    setRedoStack([]);

    // Clear any pending failure message
    if (failureTimeout) {
      clearTimeout(failureTimeout);
      setFailureTimeout(null);
    }
    setFailureMessage(null);
    failureOpacity.setValue(0);

    const puzzle = puzzleManager.getCurrentPuzzle();
    const currentLevel = levelManager.getCurrentLevel();
    if (!puzzle || !puzzle.grid) {
      console.error('Invalid puzzle data:', puzzle);
      return;
    }

    const gridSize = puzzle.grid.length;
    const isDifferentSize = gridSize !== currentGridSize;

    if (isDifferentSize) {
      try {
        // Calculate new cell size before updating the grid
        const newCellSize = calculateCellSize(gridSize);
        setCellSize(newCellSize);
        
        // Update grid and size
        setGrid(puzzle.grid as CellValue[][]);
        setCurrentGridSize(gridSize);
        setCurrentLevelId(currentLevel.id);
        setCurrentShapes(currentLevel.shapes);
        
        // Reset shape scale to 0
        shapeScale.setValue(0);
        
        // Grow in the new shapes
        Animated.timing(shapeScale, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          // Update level ID and shapes after shapes are fully grown in
          setTimeout(() => {
            setCurrentLevelId(currentLevel.id);
            setCurrentShapes(currentLevel.shapes);
          }, 50);
        });
      } catch (error) {
        console.error('Error during grid transition:', error);
        // Fallback to safe state
        setGrid([]);
        setCurrentGridSize(0);
        setCurrentLevelId(0);
      }
    } else {
      // For same-size grids, only animate the shapes
      Animated.sequence([
        // First fade out the shapes
      Animated.timing(shapeScale, {
        toValue: 0,
          duration: 150,
        useNativeDriver: true,
        })
      ]).start(() => {
        try {
          setGrid(puzzle.grid as CellValue[][]);
          setCurrentLevelId(currentLevel.id);
          setCurrentShapes(currentLevel.shapes);
          
          // Grow in the new shapes
          Animated.timing(shapeScale, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }).start();
        } catch (error) {
          console.error('Error during shape animation:', error);
          // Fallback to safe state
          setGrid([]);
          setCurrentLevelId(0);
        }
      });
    }
  };

  const showSuccessMessage = (messageData: { message: string }) => {
    const currentLevel = levelManager.getCurrentLevel();
    setSuccessMessage({
      message: messageData.message,
      backgroundColor: currentLevel.shapes[0].fill,
      borderColor: currentLevel.shapes[1].fill
    });
    Animated.sequence([
      Animated.timing(messageOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(1000),
      Animated.timing(messageOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setSuccessMessage(null);
    });
  };

  const showFailureMessage = () => {
    // Play incorrect sound
    playSound('incorrect');
    
    setFailureMessage({
      mainText: "Sorry, that is not the solution.",
      subText: "Remember you can't have 3 in a row, and each row and column must have the same number of each shape."
    });
    Animated.sequence([
      Animated.timing(failureOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.delay(9500), // duration of the message
      Animated.timing(failureOpacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setFailureMessage(null);
    });
  };

  const checkCompletion = async (newGrid: CellValue[][]) => {
    const puzzle = puzzleManager.getCurrentPuzzle();
    const solution = puzzle.solution;

    // Check if all cells are filled
    const isFilled = newGrid.every(row => row.every(cell => cell !== null));
    if (!isFilled) return;

    // Check if any cells were modified by the user
    const hasUserModifications = newGrid.some((row, i) =>
      row.some((cell, j) => cell !== puzzle.grid[i][j])
    );
    if (!hasUserModifications) return;

    // Check if the solution matches
    const isComplete = newGrid.every((row, i) =>
      row.every((cell, j) => cell === solution[i][j])
    );

    if (isComplete) {
      // Set solved state to true
      setIsSolved(true);

      // Clear any pending failure message
      if (failureTimeout) {
        clearTimeout(failureTimeout);
        setFailureTimeout(null);
      }
      setFailureMessage(null);
      failureOpacity.setValue(0);

      // Log completion data
      const packId = levelManager.getCurrentPackNumber();
      const levelId = levelManager.getCurrentLevelNumber();
      const puzzleIndex = puzzleManager.getCurrentPuzzleIndex();
      //console.log('Puzzle completed:', {
        //packId,
        //levelId,
        //puzzleIndex,
        //gridSize: puzzle.grid.length
      //});

      // Mark puzzle as completed in PackDataManager
      const packDataManager = PackDataManager.getInstance();
      packDataManager.completePuzzle(packId, levelId, puzzleIndex);

      // Save current state after completing puzzle
      const { stateManager } = await import('../utils/stateManager');
      await stateManager.saveGameState(packId, levelId, puzzleIndex);

      // Show success message
      showSuccessMessage(getRandomSuccessMessage());

      setHasStartedGame(true);

      // Wait 0.5 seconds before starting transition
      setTimeout(async () => {
        // Play level change sound
        playSound('levelChange');
        
        // Store current level info
        const currentLevelInfo = {
          id: currentLevelId,
          shapes: currentShapes
        };
        
        // Get next level info but don't apply it yet
        const nextPuzzle = puzzleManager.nextPuzzle();
        
        // If nextPuzzle returns false, it means we can't proceed (all packs complete or next pack locked)
        if (!nextPuzzle) {
          // Open the packs modal so player can choose what to unlock/play
          if (onPackPress) {
            onPackPress();
          }
          return;
        }
        
        const nextLevel = levelManager.getCurrentLevel();
        const newPuzzle = puzzleManager.getCurrentPuzzle();
        const nextShapes = nextLevel.shapes; // Store next level shapes
        
        // Check if this is a level change (not just a puzzle change within the same level)
        const isLevelChange = nextLevel.id !== currentLevelInfo.id;
        
        // Show interstitial ad for level changes, except from level 1 to level 2 and when in autoplay mode
        if (isLevelChange && !(currentLevelInfo.id === 1 && nextLevel.id === 2) && !isAutoplay) {
          try {
            const { showInterstitialAd } = await import('../utils/interstitialAd');
            await showInterstitialAd();
          } catch (error) {
            console.error('Error showing interstitial ad:', error);
          }
        }
        
        // Update current puzzle index
        setCurrentPuzzleIndex(puzzleManager.getCurrentPuzzleIndex());
        
        const isDifferentSize = newPuzzle.grid.length !== currentGridSize;
        
        if (isDifferentSize) {
          // For different grid sizes, first shrink shapes, then switch grid, then grow new shapes
          Animated.sequence([
            // First shrink the current shapes
            Animated.timing(shapeScale, {
              toValue: 0,
              duration: 150,
              useNativeDriver: true,
            })
          ]).start(() => {
            // After shapes are shrunk, update all the data
            setIsSolved(false);
            setMoveHistory([]);
            setRedoStack([]);
            
            const gridSize = newPuzzle.grid.length;
            const newCellSize = calculateCellSize(gridSize);
            setCurrentGridSize(gridSize);
            setCellSize(newCellSize);

            // Update the grid and shapes (no fade out/in)
            setGrid(newPuzzle.grid as CellValue[][]);
            setCurrentShapes(nextShapes);
            
            // Grow in the new shapes
            Animated.timing(shapeScale, {
              toValue: 1,
              duration: 300,
              useNativeDriver: true,
            }).start(() => {
              // Update UI state after animation is complete
              setCurrentLevelId(levelManager.getCurrentLevel().id);
              setCurrentPuzzleIndex(puzzleManager.getCurrentPuzzleIndex());
              setTotalPuzzles(levelManager.getCurrentLevel().puzzles.length);
              setShowWelcome(false);
            });
          });
        } else {
          // For same-size grids, only animate the shapes
          Animated.sequence([
            // First fade out the shapes
            Animated.timing(shapeScale, {
              toValue: 0,
              duration: 150,
              useNativeDriver: true,
            })
          ]).start(() => {
            // Reset solved state
            setIsSolved(false);
            
            // Clear move history and redo stack
            setMoveHistory([]);
            setRedoStack([]);
            
            // Update grid data
            setGrid(newPuzzle.grid as CellValue[][]);
            
            // Set new shapes just before growing them in
            setCurrentShapes(nextShapes);
            // Grow in the new shapes
            Animated.timing(shapeScale, {
              toValue: 1,
              duration: 300,
              useNativeDriver: true,
            }).start(() => {
              // Update UI state after animation is complete
              setCurrentLevelId(levelManager.getCurrentLevel().id);
              setCurrentPuzzleIndex(puzzleManager.getCurrentPuzzleIndex());
              setTotalPuzzles(levelManager.getCurrentLevel().puzzles.length);
              setShowWelcome(false);
            });
          });
        }
      }, 500);
    } else if (isFilled) {
      // Only show failure message if all cells are filled and solution is incorrect
      const timeout = setTimeout(showFailureMessage, 2000);
      setFailureTimeout(timeout);
    }
  };

  // Add effect to preload reward ad when hints reach 0
  useEffect(() => {
    if (hintCount === 0) {
      console.log('Preloading reward ad for hints');
      preloadRewardedAd();
    }
  }, [hintCount]);

  const handleHint = async () => {
    // Don't show hints if the board is solved
    if (isSolved) return;

    // If there's already a hint showing, apply it and clear
    if (hint && hint.row !== -1) {
      setGrid(prevGrid => {
        const newGrid = prevGrid.map(row => [...row]);
        newGrid[hint.row][hint.col] = hint.value as CellValue;
        
        // Add to move history
        setMoveHistory(prev => [...prev, {
          row: hint.row,
          col: hint.col,
          previousValue: null,
          newValue: hint.value as CellValue
        }]);
        
        // Clear redo stack
        setRedoStack([]);
        
        // Check for completion
        void checkCompletion(newGrid);
        
        return newGrid;
      });

      // Clear the hint
      Animated.timing(hintOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setHint(null);
      });
      
      return;
    }

    // Only check and decrement hint count if not in autoplay mode
    if (!isAutoplay) {
      const canUseHint = await hintManager.useHint();
      if (!canUseHint) {
        // Show the hint reward modal
        setShowHintReward(true);
        return;
      }
      // Update hint count
      const newHintCount = hintManager.getHints();
      setHintCount(newHintCount);
      
      // If this was the last hint, show the reward modal
      if (newHintCount === 0) {
        setShowHintReward(true);
      }
    }

    // Play hint sound only when showing a new hint
    playSound('hint');

    // Get all rules
    const rules = ruleManager.getRules();
    const currentLevel = levelManager.getCurrentLevel();
    const puzzle = puzzleManager.getCurrentPuzzle();
    
    // Validate puzzle data
    if (!puzzle || !puzzle.grid || !Array.isArray(puzzle.grid) || puzzle.grid.length !== currentGridSize) {
      console.log('Invalid puzzle data, skipping hint');
      return;
    }
    
    // Try each rule in order
    for (const rule of rules) {
      try {
        const step = rule.findStep(grid, currentGridSize, currentShapes);
        if (step) {
          setHint({
            row: step.row,
            col: step.col,
            value: step.value,
            message: step.message,
            hintCellSets: step.hintCellSets,
            rule: step.rule
          });
          
          // Fade in the hint message
          Animated.timing(hintOpacity, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true,
          }).start();
          
          return;
        }
      } catch (error) {
        continue; // Skip this rule if it errors and try the next one
      }
    }
    
    // If no hint was found
    setHint({
      row: -1,
      col: -1,
      value: -1,
      message: "No hints available at this stage.",
      rule: ''
    });
    
    // Fade in the no-hint message
    Animated.timing(hintOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleWatchAd = async () => {
    try {
      // Show the ad
      await showRewardedAd(async (reward) => {
        // Add 5 hints after watching the ad
        await hintManager.addHints(5);
        // Preload the next ad
        preloadRewardedAd();
        // Force a refresh of the game page
        navigation.setParams({ refreshHints: Date.now() });
        
        // Set flag to trigger pulse animation
        setHintsJustAdded(true);
      });
    } catch (error) {
      console.error('Error showing reward ad:', error);
      Alert.alert(
        'Error',
        'Failed to show ad. Please try again later.',
        [{ text: 'OK', style: 'cancel' }]
      );
    } finally {
      setShowHintReward(false);
    }
  };

  const toggleAutoplay = () => {
    if (isAutoplay) {
      // Stop autoplay
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        setAutoplayInterval(null);
      }
      onAutoplayChange(false);
    } else {
      // Start autoplay
      onAutoplayChange(true);
      const interval = setInterval(() => {
        handleHint();
      }, 400); // timing to start autoplay
      setAutoplayInterval(interval);
    }
  };

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
      }
    };
  }, [autoplayInterval]);

  // Stop autoplay when puzzle is solved
  useEffect(() => {
    if (isSolved && isAutoplay) {
      // Don't stop autoplay, just wait for the next level to load
      setTimeout(() => {
        // Reset solved state after the level transition
        setIsSolved(false);
      }, 2800); // Wait for the success message and transition
    }
  }, [isSolved, isAutoplay]);

  // Add effect to handle autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isAutoplay && !isSolved && grid.length > 0) {  // Add check for grid initialization
      interval = setInterval(() => {
        // If there's already a hint showing, apply it
        if (hint && hint.row !== -1) {
          setGrid(prevGrid => {
            const newGrid = prevGrid.map(row => [...row]);
            newGrid[hint.row][hint.col] = hint.value as CellValue;
            
            // Add to move history
            setMoveHistory(prev => [...prev, {
              row: hint.row,
              col: hint.col,
              previousValue: null,
              newValue: hint.value as CellValue
            }]);
            
            // Clear redo stack
            setRedoStack([]);
            
            // Check for completion
            void checkCompletion(newGrid);
            
            return newGrid;
          });

          // Clear the hint
          Animated.timing(hintOpacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            setHint(null);
          });
        } else {
          // Get a new hint
          handleHint();
        }
      }, 400); // continuous hint usage interval
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoplay, isSolved, hint, grid]);  // Add grid to dependencies

  useEffect(() => {
    // Hide status bar
    StatusBar.setHidden(true);
    
    // Initialize the grid and cell size
    const puzzle = puzzleManager.getCurrentPuzzle();
    const currentLevel = levelManager.getCurrentLevel();
    const gridSize = puzzle.grid.length;
    const initialCellSize = calculateCellSize(gridSize);
    setCellSize(initialCellSize);
    setGrid(puzzle.grid as CellValue[][]);
    setCurrentGridSize(gridSize);
    setCurrentLevelId(currentLevel.id);
    setCurrentPuzzleIndex(puzzleManager.getCurrentPuzzleIndex());
    setTotalPuzzles(currentLevel.puzzles.length);
    
    // Cleanup when component unmounts
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  // Only recalculate cell size when width changes
  useEffect(() => {
    const puzzle = puzzleManager.getCurrentPuzzle();
    if (puzzle && puzzle.grid) {
      setCellSize(calculateCellSize(puzzle.grid.length));
    }
  }, [width]);

  useEffect(() => {
    if (!hasStartedGame && showWelcome) {
      // Fade in
      Animated.timing(welcomeOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        // After 5 seconds, fade out
        setTimeout(() => {
          Animated.timing(welcomeOpacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start(() => {
            setShowWelcome(false);
            setHasStartedGame(true);
          });
        }, 5000);
      });
    }
  }, [hasStartedGame, showWelcome]);

  const dismissWelcomeMessage = () => {
    Animated.timing(welcomeOpacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setShowWelcome(false);
    });
  };

  const handleCellPress = (row: number, col: number) => {
    // Clear hint when user makes a move
    if (hint) {
      Animated.timing(hintOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setHint(null);
      });
    }

    // Don't allow cell presses if the board is solved
    if (isSolved) return;

    const puzzle = puzzleManager.getCurrentPuzzle();
    if (puzzle.grid[row][col] !== null) return; // Don't modify initial values

    setGrid(prevGrid => {
      const newGrid = prevGrid.map(row => [...row]); // Create a deep copy
      const currentValue = newGrid[row][col];
      let newValue: CellValue;
      
      // Cycle through: 0 -> 1 -> null
      if (currentValue === null) {
        newValue = 0;
      } else if (currentValue === 0) {
        newValue = 1;
      } else {
        newValue = null;
      }

      // If we're clearing the cell (newValue is null), remove the last move for this cell
      if (newValue === null) {
        setMoveHistory(prev => {
          const lastMoveIndex = prev.findIndex(move => move.row === row && move.col === col);
          if (lastMoveIndex !== -1) {
            return prev.slice(0, lastMoveIndex);
          }
          return prev;
        });
      } else {
        // If we're setting a value, check if we already have a move for this cell
        setMoveHistory(prev => {
          const existingMoveIndex = prev.findIndex(move => move.row === row && move.col === col);
          const newMove: Move = {
            row,
            col,
            previousValue: currentValue,
            newValue
          };

          if (existingMoveIndex !== -1) {
            // Replace the existing move
            const newHistory = [...prev];
            newHistory[existingMoveIndex] = newMove;
            return newHistory;
          } else {
            // Add a new move
            return [...prev, newMove];
          }
        });
      }

      setRedoStack([]); // Clear redo stack when new move is made
      newGrid[row][col] = newValue;
      void checkCompletion(newGrid);
      return newGrid;
    });
  };

  const handleUndo = () => {
    if (moveHistory.length === 0) return;

    // Play undo sound
    playSound('undoRedo');

    // Clear any existing hint
    if (hint) {
      Animated.timing(hintOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setHint(null);
      });
    }

    setGrid(prevGrid => {
      const newGrid = prevGrid.map(row => [...row]);
      const lastMove = moveHistory[moveHistory.length - 1];
      
      // Apply the undo by setting the cell back to null
      newGrid[lastMove.row][lastMove.col] = null;
      
      // Update history
      setMoveHistory(prev => prev.slice(0, -1));
      setRedoStack(prev => [...prev, lastMove]);
      
      return newGrid;
    });
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;

    // Play redo sound
    playSound('undoRedo');

    // Clear any existing hint
    if (hint) {
      Animated.timing(hintOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setHint(null);
      });
    }

    setGrid(prevGrid => {
      const newGrid = prevGrid.map(row => [...row]);
      const moveToRedo = redoStack[redoStack.length - 1];
      
      // Apply the redo by setting the cell to its recorded value
      newGrid[moveToRedo.row][moveToRedo.col] = moveToRedo.newValue;
      
      // Update stacks
      setRedoStack(prev => prev.slice(0, -1));
      setMoveHistory(prev => [...prev, moveToRedo]);
      
      return newGrid;
    });
  };

  const renderCell = (value: CellValue, row: number, col: number) => {
    const puzzle = puzzleManager.getCurrentPuzzle();
    if (!puzzle || !puzzle.grid) {
      return null;
    }

    // Use the current grid state to determine initial cells, not the puzzle manager
    const isInitial = puzzle.grid[row]?.[col] !== null;
    const isHintCell = hint && hint.row === row && hint.col === col;
    const isHintSetCell = hint?.hintCellSets?.some(cell => cell.row === row && cell.col === col);
    const isErrorCell = hint?.rule === 'error' && hint?.hintCellSets?.some(cell => cell.row === row && cell.col === col);
    
    return (
      <TouchableOpacity
        key={`${row}-${col}`}
        activeOpacity={1}
        style={[
          styles.cell,
          {
            width: cellSize,
            height: cellSize,
            backgroundColor: (isHintSetCell || isHintCell) ? '#1a1a1a' : (isInitial ? '#2c2c2c' : '#1f1f1f'),
            borderColor: isErrorCell ? '#ff4444' : isHintCell ? '#ffd700' : isHintSetCell ? '#ccc' : '#3f3f3f',
            borderWidth: isErrorCell ? 2 : isHintCell ? 2 : (puzzle.grid.length <= 6 ? 1 : 0.5),
          }
        ]}
        onPress={() => handleCellPress(row, col)}
      >
        {value !== null && currentShapes && (
          <Animated.View style={{ transform: [{ scale: shapeScale }] }}>
            <Svg 
              width={cellSize * 0.8}
              height={cellSize * 0.8}
              viewBox="0 0 100 100"
              fill="none"
            >
                <Path 
                d={value === 0 ? currentShapes[0].path : currentShapes[1].path}
                fill={value === 0 ? currentShapes[0].fill : currentShapes[1].fill}
                />
            </Svg>
          </Animated.View>
        )}
      </TouchableOpacity>
    );
  };

  const getDifficultyLabel = (difficulty: number): string => {
    if (difficulty < 3) return 'Easy';
    if (difficulty < 7) return 'Medium';
    if (difficulty < 11) return 'Hard';
    return 'Expert';
  };

  // Add this new component for the progress dots
  const ProgressDots = () => {
    const packDataManager = PackDataManager.getInstance();
    const packId = levelManager.getCurrentPackNumber();
    const levelId = levelManager.getCurrentLevelNumber();
    const dots = [];

    for (let i = 0; i < totalPuzzles; i++) {
      let dotColor = '#404040'; // Default gray for remaining puzzles
      
      if (i === currentPuzzleIndex) {
        dotColor = '#2196F3'; // Blue for current puzzle, regardless of completion
      } else if (packDataManager.isPuzzleCompleted(packId, levelId, i)) {
        dotColor = '#4CAF50'; // Green for completed puzzles
      }
      
      dots.push(
        <View
          key={i}
          style={[
            styles.progressDot,
            {
              backgroundColor: dotColor,
              transform: [{ scale: i === currentPuzzleIndex ? 1.2 : 1 }], // Make current dot slightly larger
            },
          ]}
        />
      );
    }
    return (
      <TouchableOpacity 
        style={styles.progressDotsContainer}
        onPress={() => {
          const currentLevel = levelManager.getCurrentLevel();
          const currentIndex = puzzleManager.getCurrentPuzzleIndex();
          const nextIndex = (currentIndex + 1) % currentLevel.puzzles.length;
          
          // Get next puzzle info but don't apply it yet
          puzzleManager.setCurrentPuzzleIndex(nextIndex);
          const newPuzzle = puzzleManager.getCurrentPuzzle();
          const newShapes = currentLevel.shapes;
          
          const isDifferentSize = newPuzzle.grid.length !== currentGridSize;
          
          if (isDifferentSize) {
            // First fade out the board while keeping current shapes
            Animated.timing(boardOpacity, {
              toValue: 0,
              duration: 300,
              useNativeDriver: true,
            }).start(() => {
              // After board is invisible, update all the data
              setIsSolved(false);
              setMoveHistory([]);
              setRedoStack([]);
              
              const gridSize = newPuzzle.grid.length;
              const newCellSize = calculateCellSize(gridSize);
              setCurrentGridSize(gridSize);
              setCellSize(newCellSize);

              // Update the grid and shapes first
              setGrid(newPuzzle.grid as CellValue[][]);
              setCurrentShapes(newShapes);
              
              // Reset shape scale
              shapeScale.setValue(0);
              
              // Then fade in the new board
              Animated.timing(boardOpacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
              }).start(() => {
                // Set new shapes just before growing them in
                setCurrentShapes(newShapes);
                Animated.timing(shapeScale, {
                  toValue: 1,
                  duration: 300,
                  useNativeDriver: true,
                }).start(() => {
                  // Update UI state after animation is complete
                  setCurrentLevelId(currentLevel.id);
                  setCurrentPuzzleIndex(nextIndex);
                  setTotalPuzzles(currentLevel.puzzles.length);
                  setShowWelcome(false);
                });
              });
            });
          } else {
            // For same-size grids, only animate the shapes
            Animated.sequence([
              // First fade out the shapes
              Animated.timing(shapeScale, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true,
              })
            ]).start(() => {
              // Reset solved state
              setIsSolved(false);
              
              // Clear move history and redo stack
              setMoveHistory([]);
              setRedoStack([]);
              
              // Update grid data
              setGrid(newPuzzle.grid as CellValue[][]);
              
              // Set new shapes just before growing them in
              setCurrentShapes(newShapes);
              // Grow in the new shapes
              Animated.timing(shapeScale, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
              }).start(() => {
                // Update UI state after animation is complete
                setCurrentLevelId(levelManager.getCurrentLevel().id);
                setCurrentPuzzleIndex(nextIndex);
                setTotalPuzzles(currentLevel.puzzles.length);
                setShowWelcome(false);
              });
            });
          }
        }}
      >
        {dots}
      </TouchableOpacity>
    );
  };

  // Update tutorial opacity when hint changes
  useEffect(() => {
    Animated.timing(tutorialOpacity, {
      toValue: (hint || failureMessage) ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [hint, failureMessage]);



  const resetGame = async () => {
    try {
      console.log('GameBoard - resetting hints and game state');
      
      // Reset hints and wait for it to complete
      await hintManager.resetHints();
      
      // Now set the hint count directly to 5
      setHintCount(5);
      
      // Clear the current puzzle state to start from the beginning
      const { stateManager } = await import('../utils/stateManager');
      await stateManager.clearGameState();
    } catch (error) {
      console.error('Error resetting game:', error);
    }
  };

  // Load hint count on mount
  useEffect(() => {
    const initializeHints = async () => {
      // Initialize hints
      await hintManager.initialize();
      const hints = hintManager.getHints();
      setHintCount(hints);
      setHasLoadedInitialHints(true);
    };
    initializeHints();
  }, []);

  // Add this useEffect after other useEffects
  useEffect(() => {
    // Preload interstitial ad when starting puzzles that are one less than ad trigger points
    if (!isAutoplay && (currentPuzzleIndex + 1) % 10 === 9) {
      //console.log(`Preloading interstitial ad for puzzle ${currentPuzzleIndex + 1}`);
      preloadInterstitialAd();
    }
  }, [currentPuzzleIndex, isAutoplay]);

  // Add effect to handle hint badge pulse animation
  useEffect(() => {
    // Pulse if hints were just added through watching an ad
    if (hintsJustAdded) {
      // Create pulse animation sequence
      Animated.sequence([
        Animated.timing(hintBadgeScale, {
          toValue: 1.3,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(hintBadgeScale, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(hintBadgeScale, {
          toValue: 1.3,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(hintBadgeScale, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(hintBadgeScale, {
          toValue: 1.3,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(hintBadgeScale, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Reset the flag after animation completes
        setHintsJustAdded(false);
      });
    }
  }, [hintsJustAdded]);

  // Add effect to listen for hint count updates
  useEffect(() => {
    const refreshHints = async () => {
      const hints = hintManager.getHints();
      setHintCount(hints);
    };
    refreshHints();
  }, [route.params?.refreshHints]);

  // Effect to handle puzzle pack selection via route changes
  useEffect(() => {
    // When route params change (like returning from puzzle packs), check for puzzle changes
    const puzzle = puzzleManager.getCurrentPuzzle();
    const currentLevel = levelManager.getCurrentLevel();
    
    if (puzzle && puzzle.grid) {
      const puzzleGrid = puzzle.grid as CellValue[][];
      const currentGrid = grid;
      
      // Check if we need to update the grid
      let needsUpdate = false;
      
      // Check dimensions first
      if (puzzleGrid.length !== currentGrid.length || 
          (puzzleGrid[0] && currentGrid[0] && puzzleGrid[0].length !== currentGrid[0].length)) {
        needsUpdate = true;
      } else {
        // Check if initial cells match
        for (let row = 0; row < puzzleGrid.length; row++) {
          for (let col = 0; col < puzzleGrid[row].length; col++) {
            if (puzzleGrid[row][col] !== null && currentGrid[row][col] !== puzzleGrid[row][col]) {
              needsUpdate = true;
              break;
            }
          }
          if (needsUpdate) break;
        }
      }
      
      if (needsUpdate) {
        console.log('Route change detected puzzle update');
        // Reset game state and update grid
        setIsSolved(false);
        setMoveHistory([]);
        setRedoStack([]);
        setGrid(puzzleGrid);
        setCurrentGridSize(puzzleGrid.length);
        setCellSize(calculateCellSize(puzzleGrid.length));
        setCurrentLevelId(currentLevel.id);
        setCurrentShapes(currentLevel.shapes);
        setCurrentPuzzleIndex(puzzleManager.getCurrentPuzzleIndex());
        setTotalPuzzles(currentLevel.puzzles.length);
        
        // Clear any existing hints
        if (hint) {
          setHint(null);
          hintOpacity.setValue(0);
        }
      }
    }
  }, [route.params]);



  // Effect to ensure correct puzzle is always loaded
  useEffect(() => {
    const puzzle = puzzleManager.getCurrentPuzzle();
    const currentLevel = levelManager.getCurrentLevel();
    
    if (puzzle && puzzle.grid) {
      const puzzleGrid = puzzle.grid as CellValue[][];
      
      // Check for any significant change: grid size, level, puzzle index, or shapes
      const gridSizeChanged = puzzleGrid.length !== grid.length;
      const levelChanged = currentLevel.id !== currentLevelId;
      const puzzleIndexChanged = puzzleManager.getCurrentPuzzleIndex() !== currentPuzzleIndex;
      const shapesChanged = JSON.stringify(currentLevel.shapes) !== JSON.stringify(currentShapes);
      
      if (gridSizeChanged || levelChanged || puzzleIndexChanged || shapesChanged) {
        
        // Determine if this is a different size transition
        const isDifferentSize = gridSizeChanged || 
                               (puzzleGrid[0] && grid[0] && puzzleGrid[0].length !== grid[0].length);
        
        if (isDifferentSize) {
          loadNewPuzzle();
        } else {
          setIsSolved(false);
          setMoveHistory([]);
          setRedoStack([]);
          setGrid(puzzleGrid);
          setCurrentGridSize(puzzleGrid.length);
          setCellSize(calculateCellSize(puzzleGrid.length));
          setCurrentLevelId(currentLevel.id);
          setCurrentShapes(currentLevel.shapes);
          setCurrentPuzzleIndex(puzzleManager.getCurrentPuzzleIndex());
          setTotalPuzzles(currentLevel.puzzles.length);
          
          if (hint) {
            setHint(null);
            hintOpacity.setValue(0);
          }
        }
      }
    }
  }, [puzzleManager.getCurrentPuzzleIndex(), levelManager.getCurrentLevel().id, levelManager.getCurrentPackNumber()]);

  // Effect to handle navigation focus and ensure grid synchronization
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // When the screen comes into focus, ensure grid is synchronized
      const puzzle = puzzleManager.getCurrentPuzzle();
      const currentLevel = levelManager.getCurrentLevel();
      
      if (puzzle && puzzle.grid) {
        const puzzleGrid = puzzle.grid as CellValue[][];
        
        // Check for any significant change: grid size, level, puzzle index, or shapes
        const gridSizeChanged = puzzleGrid.length !== grid.length;
        const levelChanged = currentLevel.id !== currentLevelId;
        const puzzleIndexChanged = puzzleManager.getCurrentPuzzleIndex() !== currentPuzzleIndex;
        const shapesChanged = JSON.stringify(currentLevel.shapes) !== JSON.stringify(currentShapes);
        
        if (gridSizeChanged || levelChanged || puzzleIndexChanged || shapesChanged) {
          
          // Reset game state and update grid
          setIsSolved(false);
          setMoveHistory([]);
          setRedoStack([]);
          setGrid(puzzleGrid);
          setCurrentGridSize(puzzleGrid.length);
          setCellSize(calculateCellSize(puzzleGrid.length));
          setCurrentLevelId(currentLevel.id);
          setCurrentShapes(currentLevel.shapes);
          setCurrentPuzzleIndex(puzzleManager.getCurrentPuzzleIndex());
          setTotalPuzzles(currentLevel.puzzles.length);
          
          // Clear any existing hints
          if (hint) {
            setHint(null);
            hintOpacity.setValue(0);
          }
        }
      }
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.statsBar}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Level</Text>
            <View style={styles.statValueContainer}>
              <Text style={styles.statValue}>{levelManager.getCurrentLevelNumber()}</Text>
            </View>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Puzzle</Text>
            <TouchableOpacity 
              style={styles.statValueContainer}
              onPress={() => {
                const currentLevel = levelManager.getCurrentLevel();
                const currentIndex = puzzleManager.getCurrentPuzzleIndex();
                const nextIndex = (currentIndex + 1) % currentLevel.puzzles.length;
                
                // Get next puzzle info but don't apply it yet
                puzzleManager.setCurrentPuzzleIndex(nextIndex);
                const newPuzzle = puzzleManager.getCurrentPuzzle();
                const newShapes = currentLevel.shapes;
                
                const isDifferentSize = newPuzzle.grid.length !== currentGridSize;
                
                if (isDifferentSize) {
                  // First fade out the board while keeping current shapes
                  Animated.timing(boardOpacity, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                  }).start(() => {
                    // After board is invisible, update all the data
                    setIsSolved(false);
                    setMoveHistory([]);
                    setRedoStack([]);
                    
                    const gridSize = newPuzzle.grid.length;
                    const newCellSize = calculateCellSize(gridSize);
                    setCurrentGridSize(gridSize);
                    setCellSize(newCellSize);

                    // Update the grid and shapes first
                    setGrid(newPuzzle.grid as CellValue[][]);
                    setCurrentShapes(newShapes);
                    
                    // Reset shape scale
                    shapeScale.setValue(0);
                    
                    // Then fade in the new board
                    Animated.timing(boardOpacity, {
                      toValue: 1,
                      duration: 300,
                      useNativeDriver: true,
                    }).start(() => {
                      // Set new shapes just before growing them in
                      setCurrentShapes(newShapes);
                      Animated.timing(shapeScale, {
                        toValue: 1,
                        duration: 300,
                        useNativeDriver: true,
                      }).start(() => {
                        // Update UI state after animation is complete
                        setCurrentLevelId(currentLevel.id);
                        setCurrentPuzzleIndex(nextIndex);
                        setTotalPuzzles(currentLevel.puzzles.length);
                        setShowWelcome(false);
                      });
                    });
                  });
                } else {
                  // For same-size grids, only animate the shapes
                  Animated.sequence([
                    // First fade out the shapes
                    Animated.timing(shapeScale, {
                      toValue: 0,
                      duration: 150,
                      useNativeDriver: true,
                    })
                  ]).start(() => {
                    // Reset solved state
                    setIsSolved(false);
                    
                    // Clear move history and redo stack
                    setMoveHistory([]);
                    setRedoStack([]);
                    
                    // Update grid data
                    setGrid(newPuzzle.grid as CellValue[][]);
                    
                    // Set new shapes just before growing them in
                    setCurrentShapes(newShapes);
                    // Grow in the new shapes
                    Animated.timing(shapeScale, {
                      toValue: 1,
                      duration: 300,
                      useNativeDriver: true,
                    }).start(() => {
                      // Update UI state after animation is complete
                      setCurrentLevelId(levelManager.getCurrentLevel().id);
                      setCurrentPuzzleIndex(nextIndex);
                      setTotalPuzzles(currentLevel.puzzles.length);
                      setShowWelcome(false);
                    });
                  });
                }
              }}
            >
              <Text style={styles.statValue}>{puzzleManager.getCurrentPuzzleIndex() + 1}/{totalPuzzles}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity 
            style={styles.statItem}
            onPress={onPackPress}
          >
            <Text style={styles.statLabel}>Pack</Text>
            <View style={styles.statValueContainer}>
              <Text style={styles.statValue}>{levelManager.getCurrentPackNumber()}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <ProgressDots />

        <View style={styles.gridContainer}>
          <Animated.View style={[styles.grid, { opacity: boardOpacity }]}>
            {!hasStartedGame && showWelcome && levelManager.getCurrentLevelNumber() === 1 && levelManager.getCurrentPackNumber() === 1 && (
              <TouchableOpacity 
                activeOpacity={0.8}
                onPress={dismissWelcomeMessage}
                style={styles.welcomeTouchable}
              >
                <Animated.View style={[styles.welcomeMessage, { opacity: welcomeOpacity }]}>
                  <TouchableOpacity 
                    onPress={dismissWelcomeMessage}
                    style={styles.welcomeCloseButton}
                  >
                    <Ionicons name="close" size={20} color="#1a1a1a" />
                  </TouchableOpacity>
                  <Text style={styles.welcomeText}>Click on an empty cell{'\n'}once or twice to insert{'\n'}the proper shape.</Text>
                </Animated.View>
              </TouchableOpacity>
            )}
            {grid.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                {row.map((cell, colIndex) => renderCell(cell, rowIndex, colIndex))}
              </View>
            ))}
            {failureMessage && (
              <Animated.View style={[styles.failureMessage, { opacity: failureOpacity }]}>
                <Text style={styles.failureMainText}>{failureMessage.mainText}</Text>
                <Text style={styles.failureSubText}>{failureMessage.subText}</Text>
              </Animated.View>
            )}
          </Animated.View>
          
          {/* Success message overlay - independent of grid opacity */}
          {successMessage && (
            <Animated.View 
              style={[
                styles.successMessageOverlay, 
                { opacity: messageOpacity }
              ]}
            >
              <Animated.View 
                style={[
                  styles.successMessage, 
                  { 
                    backgroundColor: successMessage.backgroundColor,
                    borderColor: successMessage.borderColor
                  }
                ]}
              >
                <Text style={styles.successText}>{successMessage.message}</Text>
              </Animated.View>
            </Animated.View>
          )}
        </View>

        <View style={styles.messageContainer}>
          {levelManager.getCurrentPackNumber() === 1 && (
            <Animated.View style={[styles.tutorialMessage, { opacity: tutorialOpacity }]}>
              <Text style={styles.tutorialText}>
                {pack1Tutorials[`level${levelManager.getCurrentLevelNumber()}`]?.[puzzleManager.getCurrentPuzzleIndex()]}
              </Text>
            </Animated.View>
          )}

          {hint && (
            <Animated.View style={[styles.hintMessage, { opacity: hintOpacity }]}>
              <Text style={styles.hintText}>
                {hint.message.split(/<svg.*?<\/svg>/).map((part, index, array) => {
                  if (index === array.length - 1) return part;
                  const svgMatch = hint.message.match(/<svg.*?<\/svg>/g);
                  if (!svgMatch) return part;
                  const svgContent = svgMatch[index];
                  const pathMatch = svgContent.match(/<path d="([^"]*)" fill="([^"]*)"/);
                  if (!pathMatch) return part;
                  return (
                    <React.Fragment key={index}>
                      {part}
                      <View style={{ transform: [{ translateY: 5 }] }}>
                        <Svg width={20} height={20} viewBox="0 0 100 100">
                          <Path d={pathMatch[1]} fill={pathMatch[2]} />
                        </Svg>
                      </View>
                    </React.Fragment>
                  );
                })}
              </Text>
              {hint.rule === 'error' && (
                <TouchableOpacity 
                  style={styles.clearButton}
                  onPress={() => {
                    // Clear all incorrect cells
                    setGrid(prevGrid => {
                      const newGrid = prevGrid.map(row => [...row]);
                      hint.hintCellSets?.forEach(({ row, col }) => {
                        newGrid[row][col] = null;
                      });
                      return newGrid;
                    });
                    // Clear the hint
                    Animated.timing(hintOpacity, {
                      toValue: 0,
                      duration: 300,
                      useNativeDriver: true,
                    }).start(() => {
                      setHint(null);
                    });
                  }}
                >
                  <Text style={styles.clearButtonText}>Clear Errors</Text>
                </TouchableOpacity>
              )}
            </Animated.View>
          )}
        </View>

        <View style={styles.controlsContainer}>
          <TouchableOpacity 
            style={styles.button}
            onPress={handleUndo}
            disabled={!moveHistory.length}
          >
            <MaterialIcons 
              name="undo" 
              size={24} 
              color={moveHistory.length ? "#e0e0e0" : "#666666"} 
            />
            <Text style={styles.buttonText}>Undo</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={handleRedo}
            disabled={!redoStack.length}
          >
            <MaterialIcons 
              name="redo" 
              size={24} 
              color={redoStack.length ? "#e0e0e0" : "#666666"} 
            />
            <Text style={styles.buttonText}>Redo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={resetGrid}>
            <MaterialIcons name="refresh" size={24} color="#e0e0e0" />
            <Text style={styles.buttonText}>Restart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleHint}>
            <MaterialIcons name="lightbulb-outline" size={24} color="#e0e0e0" />
            <Text style={styles.buttonText}>Hint</Text>
            <Animated.View style={[styles.hintBadge, { transform: [{ scale: hintBadgeScale }] }]}>
              {hintCount > 0 ? (
                <Text style={styles.hintBadgeText}>{hintCount}</Text>
              ) : (
                <MaterialIcons name="play-arrow" size={20} color="#ffffff" />
              )}
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
      <SettingsModal
        isVisible={showSettings}
        onClose={() => setShowSettings(false)}
        onReset={resetGame}
      />
      <HintRewardModal
        isVisible={showHintReward}
        onClose={() => setShowHintReward(false)}
        onWatchAd={handleWatchAd}
        isSuccessView={false}
      />
    </View>
  );
};

export default GameBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    maxWidth: 700,
    flex: 1,
    position: 'relative',
  },
  statsBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  statItem: {
    alignItems: 'center',
    minWidth: 90,
  },
  statLabel: {
    color: '#bbbbbb',
    fontSize: 14,
    marginBottom: 6,
  },
  statValueContainer: {
    backgroundColor: '#2d2d2d',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
  },
  statValue: {
    color: '#f0f0f0',
    fontSize: 20,
    fontWeight: 'bold',
  },
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#404040',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    borderWidth: 1,
    borderColor: '#404040',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252525',
    aspectRatio: 1,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 55,
    left: 0,
    right: 0,
    gap: 10,
    paddingHorizontal: 0,
  },
  button: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    gap: 4,
    minWidth: 50,
  },
  buttonText: {
    color: '#e0e0e0',
    fontSize: 12,
  },
  successMessage: {
    padding: 20,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
  },
  successText: {
    color: '#1a1a1a',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
  failureMessage: {
    position: 'absolute',
    bottom: -95,
    left: '50%',
    transform: [{ translateX: -150 }],
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: 300,
    alignItems: 'center',
    zIndex: 2000,
    backgroundColor: '#1a1a1a',
  },
  failureMainText: {
    color: '#ff5362',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  failureSubText: {
    color: '#ff5362',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
  },
  hintMessage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#2d2d2d',
    borderWidth: 2,
    borderColor: '#ffd700',
    zIndex: 1,
  },
  hintText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  clearButton: {
    marginTop: 10,
    backgroundColor: '#ff4444',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
  },
  clearButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  titleActive: {
    color: '#ffd85d', // autoplay is active
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#e0e0e0',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressDotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingTop: 5,
    paddingBottom: 10,
    width: 100,
    alignSelf: 'center',
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#404040',
  },
  messageContainer: {
    position: 'relative',
    marginTop: 0,
    marginBottom: 10,
    zIndex: 1,
  },
  tutorialMessage: {
    padding: 15,
    paddingTop: 5,
  },
  tutorialText: {
    color: '#e0e0e0',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
  welcomeTouchable: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -130 }, { translateY: -60 }],
    zIndex: 2,
  },
  welcomeMessage: {
    backgroundColor: 'rgba(255, 196, 0, 0.9)',
    padding: 25,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#1a1a1a',
    width: 260,
  },
  welcomeText: {
    color: '#1a1a1a',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 5,
  },
  welcomeCloseButton: {
    position: 'absolute',
    top: 4,
    right: 4
  },
  hintBadge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#292929',
  },
  hintBadgeText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E0E0E0',
  },
  logoDisabled: {
    color: '#666666',
  },
  gridContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  successMessageOverlay: {
    position: 'absolute',
    top: -10,
    left: 0,
    right: 0,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
}); 