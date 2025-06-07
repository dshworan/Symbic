import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, useWindowDimensions, Animated, StatusBar } from 'react-native';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  isAutoplay: boolean;
  onAutoplayChange: (value: boolean) => void;
  onPackPress?: () => void;
}

const Logo: React.FC = () => {
  const size = 14; // Reduced from 20 to 14

  return (
    <View style={styles.logoContainer}>
      <View style={styles.logoGrid}>
        {/* Top Left - Diamond */}
        <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <Path 
            d="M50 5L95 50L50 95L5 50L50 5Z" 
            fill="#FFD700" // Yellow diamond
          />
        </Svg>
        {/* Top Right - Circle */}
        <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <Path 
            d="M91.5 50C91.5 72.9198 72.9198 91.5 50 91.5C27.0802 91.5 8.5 72.9198 8.5 50C8.5 27.0802 27.0802 8.5 50 8.5C72.9198 8.5 91.5 27.0802 91.5 50Z" 
            fill="#2196F3" // Blue circle
          />
        </Svg>
        {/* Bottom Left - Circle */}
        <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <Path 
            d="M91.5 50C91.5 72.9198 72.9198 91.5 50 91.5C27.0802 91.5 8.5 72.9198 8.5 50C8.5 27.0802 27.0802 8.5 50 8.5C72.9198 8.5 91.5 27.0802 91.5 50Z" 
            fill="#2196F3" // Blue circle
          />
        </Svg>
        {/* Bottom Right - Diamond */}
        <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <Path 
            d="M50 5L95 50L50 95L5 50L50 5Z" 
            fill="#FFD700" // Yellow diamond
          />
        </Svg>
      </View>
    </View>
  );
};

const SCORE_STORAGE_KEY = '@game_score';

const GameBoard: React.FC<GameBoardProps> = ({ isAutoplay, onAutoplayChange, onPackPress }) => {
  const { width } = useWindowDimensions();
  const { playSound } = useAudio();
  const [cellSize, setCellSize] = useState(0);
  const [grid, setGrid] = useState<CellValue[][]>([]);
  const [score, setScore] = useState(0);
  const [successMessage, setSuccessMessage] = useState<{ message: string; backgroundColor: string; borderColor: string } | null>(null);
  const [failureMessage, setFailureMessage] = useState<string | null>(null);
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
  const ruleManager = new RuleManager();

  // Initialize the game board only once on mount
  useEffect(() => {
    const initializeGame = () => {
      const currentLevel = levelManager.getCurrentLevel();
      const currentPuzzle = puzzleManager.getCurrentPuzzle();
      
      setCurrentLevelId(currentLevel.id);
      setCurrentGridSize(currentPuzzle.grid.length);
      setCurrentShapes(currentLevel.shapes);
      setGrid(currentPuzzle.grid as CellValue[][]);
      setCellSize(calculateCellSize(currentPuzzle.grid.length));
      
      // Set up initial puzzle index and total puzzles
      setCurrentPuzzleIndex(puzzleManager.getCurrentPuzzleIndex());
      setTotalPuzzles(currentLevel.puzzles.length);
    };

    initializeGame();
  }, []); // Empty dependency array means this only runs once on mount

  // Effect to handle level changes
  useEffect(() => {
    const currentLevel = levelManager.getCurrentLevel();
    const puzzle = puzzleManager.getCurrentPuzzle();
    
    // If level or grid size changed, update the board
    if (currentLevel.id !== currentLevelId || puzzle.grid.length !== currentGridSize) {
      // Pause autoplay during transition
      if (isAutoplay) {
        onAutoplayChange(false);
      }

      // Fade out the board
      Animated.timing(boardOpacity, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start(() => {
        // Reset solved state
        setIsSolved(false);
        
        // Clear move history and redo stack
        setMoveHistory([]);
        setRedoStack([]);
        
        // Update grid data first
        setGrid(puzzle.grid as CellValue[][]);
        setCurrentPuzzleIndex(puzzleManager.getCurrentPuzzleIndex());
        setCurrentLevelId(currentLevel.id);
        setCurrentShapes(currentLevel.shapes);
        
        // Fade in the board
        Animated.timing(boardOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          // Restart autoplay after a delay if it was active
          if (isAutoplay) {
            setTimeout(() => {
              onAutoplayChange(true);
            }, 2000); // 2 second delay before restarting autoplay
          }
        });
      });
    }
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

  const showSuccessMessage = (messageData: { message: string; color: string }) => {
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
    setFailureMessage("Sorry, that is not the solution.");
    Animated.sequence([
      Animated.timing(failureOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.delay(1500),
      Animated.timing(failureOpacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setFailureMessage(null);
    });
  };

  const checkCompletion = (newGrid: CellValue[][]) => {
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

      // Show success message
      showSuccessMessage(getRandomSuccessMessage());
      setScore(prev => prev + 1);
      setHasStartedGame(true);

      // Wait 0.5 seconds before starting transition
      setTimeout(() => {
        // Play level change sound
        playSound('levelChange');
        
        // Store current level info
        const currentLevelInfo = {
          id: currentLevelId,
          shapes: currentShapes
        };
        
        // Get next level info but don't apply it yet
        const nextPuzzle = puzzleManager.nextPuzzle();
        const nextLevel = levelManager.getCurrentLevel();
        const newPuzzle = puzzleManager.getCurrentPuzzle();
        const nextShapes = nextLevel.shapes; // Store next level shapes
        
        // Update current puzzle index
        setCurrentPuzzleIndex(puzzleManager.getCurrentPuzzleIndex());
        
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
            setCurrentShapes(nextShapes);
            
            // Reset shape scale
            shapeScale.setValue(0);
            
            // Then fade in the new board
            Animated.timing(boardOpacity, {
              toValue: 1,
              duration: 300,
              useNativeDriver: true,
            }).start(() => {
              // Set new shapes just before growing them in
              setCurrentShapes(nextShapes);
              Animated.timing(shapeScale, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
              }).start();
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
            }).start();
          });
        }
      }, 500);
    } else if (isFilled) {
      // Only show failure message if all cells are filled and solution is incorrect
      const timeout = setTimeout(showFailureMessage, 2000);
      setFailureTimeout(timeout);
    }
  };

  const handleHint = () => {
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
        checkCompletion(newGrid);
        
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
        //console.log('Error in rule:', rule.getName(), error);
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
      }, 500);
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

    if (isAutoplay && !isSolved) {
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
            checkCompletion(newGrid);
            
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
      }, 500);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoplay, isSolved, hint]);

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
      checkCompletion(newGrid);
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
            backgroundColor: (isHintSetCell || isHintCell) ? '#1a1a1a' : (isInitial ? '#363636' : '#252525'),
            borderColor: isErrorCell ? '#ff4444' : isHintCell ? '#ffd700' : isHintSetCell ? '#ccc' : '#404040',
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
      
      if (packDataManager.isPuzzleCompleted(packId, levelId, i)) {
        dotColor = '#4CAF50'; // Green for completed puzzles
      } else if (i === currentPuzzleIndex) {
        dotColor = '#2196F3'; // Blue for current puzzle
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
    return <View style={styles.progressDotsContainer}>{dots}</View>;
  };

  // Update tutorial opacity when hint changes
  useEffect(() => {
    Animated.timing(tutorialOpacity, {
      toValue: (hint || failureMessage) ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [hint, failureMessage]);

  // Load saved score on component mount
  useEffect(() => {
    const loadScore = async () => {
      try {
        const savedScore = await AsyncStorage.getItem(SCORE_STORAGE_KEY);
        if (savedScore !== null) {
          setScore(parseInt(savedScore, 10));
          setHasStartedGame(true);
        }
      } catch (error) {
        console.error('Error loading score:', error);
      }
    };
    loadScore();
  }, []);

  // Save score whenever it changes
  useEffect(() => {
    const saveScore = async () => {
      try {
        await AsyncStorage.setItem(SCORE_STORAGE_KEY, score.toString());
      } catch (error) {
        console.error('Error saving score:', error);
      }
    };
    if (hasStartedGame) {
      saveScore();
    }
  }, [score, hasStartedGame]);

  const resetScore = async () => {
    try {
      await AsyncStorage.removeItem(SCORE_STORAGE_KEY);
      setScore(0);
      setHasStartedGame(false);
    } catch (error) {
      console.error('Error resetting score:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.statsBar}>
          <TouchableOpacity 
            style={styles.statItem}
            onPress={onPackPress}
          >
            <Text style={styles.statLabel}>Pack</Text>
            <View style={styles.statValueContainer}>
              <Text style={styles.statValue}>{levelManager.getCurrentPackNumber()}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Level</Text>
            <TouchableOpacity 
              style={styles.statValueContainer}
              onPress={() => {
                const currentLevel = levelManager.getCurrentLevel();
                const currentIndex = puzzleManager.getCurrentPuzzleIndex();
                const nextIndex = (currentIndex + 1) % currentLevel.puzzles.length;
                
                // Move to the next puzzle in the current level
                puzzleManager.setCurrentPuzzleIndex(nextIndex);
                const newPuzzle = puzzleManager.getCurrentPuzzle();
                const newShapes = currentLevel.shapes;
                
                // Update currentLevelId first to trigger the level change
                setCurrentLevelId(currentLevel.id);
                setCurrentPuzzleIndex(nextIndex);
                setTotalPuzzles(currentLevel.puzzles.length);
                setShowWelcome(false);
                
                const isDifferentSize = newPuzzle.grid.length !== currentGridSize;
                
                if (isDifferentSize) {
                  // For different size grids, animate the entire board
                  Animated.sequence([
                    // First fade out the board
                    Animated.timing(boardOpacity, {
                      toValue: 0,
                      duration: 150,
                      useNativeDriver: true,
                    })
                  ]).start(() => {
                    try {
                      // Calculate new cell size before updating the grid
                      const newCellSize = calculateCellSize(newPuzzle.grid.length);
                      setCellSize(newCellSize);
                      
                      // Update grid and size
                      setGrid(newPuzzle.grid as CellValue[][]);
                      setCurrentGridSize(newPuzzle.grid.length);
                      setCurrentLevelId(currentLevel.id);
                      setCurrentShapes(newShapes);
                      
                      // Reset shape scale to 0
                      shapeScale.setValue(0);
                      
                      // Fade in the new board
                      Animated.timing(boardOpacity, {
                        toValue: 1,
                        duration: 300,
                        useNativeDriver: true,
                      }).start(() => {
                        // After board is visible, grow in the new shapes
                        Animated.timing(shapeScale, {
                          toValue: 1,
                          duration: 300,
                          useNativeDriver: true,
                        }).start();
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
                    }).start();
                  });
                }
              }}
            >
              <Text style={styles.statValue}>{levelManager.getCurrentLevelNumber()}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Score</Text>
            <View style={styles.statValueContainer}>
              <Text style={styles.statValue}>{score}</Text>
            </View>
          </View>
        </View>

        <ProgressDots />

        <Animated.View style={[styles.grid, { opacity: boardOpacity }]}>
          {!hasStartedGame && showWelcome && (
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
          {successMessage && (
            <Animated.View 
              style={[
                styles.successMessage, 
                { 
                  opacity: messageOpacity,
                  backgroundColor: successMessage.backgroundColor,
                  borderColor: successMessage.borderColor
                }
              ]}
            >
              <Text style={styles.successText}>{successMessage.message}</Text>
            </Animated.View>
          )}
          {failureMessage && (
            <Animated.View style={[styles.failureMessage, { opacity: failureOpacity }]}>
              <Text style={styles.failureText}>{failureMessage}</Text>
            </Animated.View>
          )}
        </Animated.View>

        <View style={styles.messageContainer}>
          {levelManager.getCurrentPackNumber() === 1 && levelManager.getCurrentLevelNumber() === 1 && (
            <Animated.View style={[styles.tutorialMessage, { opacity: tutorialOpacity }]}>
              <Text style={styles.tutorialText}>
                {pack1Tutorials.level1[puzzleManager.getCurrentPuzzleIndex()]}
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
          </TouchableOpacity>
        </View>
      </View>
      <SettingsModal
        isVisible={showSettings}
        onClose={() => setShowSettings(false)}
        onReset={resetScore}
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
    marginBottom: 20,
    position: 'relative',
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
  },
  button: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  buttonText: {
    color: '#e0e0e0',
    fontSize: 12,
  },
  successMessage: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -100 }, { translateY: -50 }],
    padding: 20,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
    zIndex: 1000,
    borderWidth: 3,
  },
  successText: {
    color: '#1a1a1a',
    fontSize: 24,
    fontWeight: 'bold',
  },
  failureMessage: {
    position: 'absolute',
    bottom: -75,
    left: '50%',
    transform: [{ translateX: -155 }],
    padding: 15,
    width: 310,
    alignItems: 'center',
    zIndex: 2000,
    backgroundColor: '#1a1a1a',
  },
  failureText: {
    color: '#ff5362',
    fontSize: 16,
    fontWeight: 'bold',
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
    marginTop: 5,
    marginBottom: 10,
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
}); 