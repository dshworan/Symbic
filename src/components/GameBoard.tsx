import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, useWindowDimensions, Animated, StatusBar } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { MaterialIcons } from '@expo/vector-icons';
import { CellValue } from '../types/puzzle';
import { puzzleManager } from '../utils/puzzleManager';
import { shapeSets } from '../data/shapes/shapeSets';
import { getRandomSuccessMessage } from '../data/messages';

const GameBoard: React.FC = () => {
  const { width } = useWindowDimensions();
  const [cellSize, setCellSize] = useState(0);
  const [grid, setGrid] = useState<CellValue[][]>([]);
  const [score, setScore] = useState(0);
  const [successMessage, setSuccessMessage] = useState<{ message: string; color: string } | null>(null);
  const [failureMessage, setFailureMessage] = useState<string | null>(null);
  const [messageOpacity] = useState(new Animated.Value(0));
  const [failureOpacity] = useState(new Animated.Value(0));
  const [shapeScale] = useState(new Animated.Value(1));
  const [boardOpacity] = useState(new Animated.Value(1));
  const [failureTimeout, setFailureTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [currentPuzzleId, setCurrentPuzzleId] = useState(puzzleManager.getCurrentPuzzle().id);
  const [currentGridSize, setCurrentGridSize] = useState(puzzleManager.getCurrentPuzzle().gridSize);

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
    // Clear any pending failure message
    if (failureTimeout) {
      clearTimeout(failureTimeout);
      setFailureTimeout(null);
    }
    setFailureMessage(null);
    failureOpacity.setValue(0);

    const newPuzzle = puzzleManager.getCurrentPuzzle();
    if (!newPuzzle || !newPuzzle.grid) {
      console.error('Invalid puzzle data:', newPuzzle);
      return;
    }

    const isDifferentSize = newPuzzle.gridSize !== currentGridSize;

    if (isDifferentSize) {
      // Fade out the entire board
      Animated.timing(boardOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        try {
          // Calculate new cell size before updating the grid
          const newCellSize = calculateCellSize(newPuzzle.gridSize);
          setCellSize(newCellSize);
          
          // Update grid and size
          setGrid([...newPuzzle.grid]);
          setCurrentGridSize(newPuzzle.gridSize);
          setCurrentPuzzleId(newPuzzle.id);
          
          // Reset shape scale to 0
          shapeScale.setValue(0);
          
          // Fade in the new board
          Animated.timing(boardOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            // After grid is visible, grow in the shapes
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
          setCurrentPuzzleId('');
        }
      });
    } else {
      // Just animate the shapes for same-size grids
      Animated.timing(shapeScale, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        try {
          setGrid([...newPuzzle.grid]);
          setCurrentPuzzleId(newPuzzle.id);
          
          Animated.timing(shapeScale, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }).start();
        } catch (error) {
          console.error('Error during shape animation:', error);
          // Fallback to safe state
          setGrid([]);
          setCurrentPuzzleId('');
        }
      });
    }
  };

  const showSuccessMessage = (messageData: { message: string; color: string }) => {
    setSuccessMessage(messageData);
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
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(failureOpacity, {
        toValue: 0,
        duration: 500,
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
      // Clear any pending failure message
      if (failureTimeout) {
        clearTimeout(failureTimeout);
        setFailureTimeout(null);
      }
      setFailureMessage(null);
      failureOpacity.setValue(0);

      // Wait 1 second before showing success message
      setTimeout(() => {
        showSuccessMessage(getRandomSuccessMessage());
        setScore(prev => prev + 1);
        setTimeout(() => {
          puzzleManager.nextPuzzle();
          resetGrid();
        }, 2000);
      }, 1000);
    } else if (hasUserModifications) {
      const timeout = setTimeout(showFailureMessage, 2000);
      setFailureTimeout(timeout);
    }
  };

  useEffect(() => {
    // Hide status bar
    StatusBar.setHidden(true);
    
    // Initialize the grid and cell size
    const puzzle = puzzleManager.getCurrentPuzzle();
    const initialCellSize = calculateCellSize(puzzle.gridSize);
    setCellSize(initialCellSize);
    setGrid([...puzzle.grid]);
    setCurrentGridSize(puzzle.gridSize);
    setCurrentPuzzleId(puzzle.id);
    
    // Cleanup when component unmounts
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  useEffect(() => {
    const puzzle = puzzleManager.getCurrentPuzzle();
    if (puzzle.id !== currentPuzzleId) {
      resetGrid();
    }
  }, [currentPuzzleId]);

  useEffect(() => {
    // Only recalculate cell size when width changes
    const puzzle = puzzleManager.getCurrentPuzzle();
    setCellSize(calculateCellSize(puzzle.gridSize));
  }, [width]);

  const handleCellPress = (row: number, col: number) => {
    const puzzle = puzzleManager.getCurrentPuzzle();
    if (puzzle.grid[row][col] !== null) return; // Don't modify initial values

    setGrid(prevGrid => {
      const newGrid = prevGrid.map(row => [...row]); // Create a deep copy
      const currentValue = newGrid[row][col];
      
      // Cycle through: 0 -> 1 -> null
      if (currentValue === null) {
        newGrid[row][col] = 0;
      } else if (currentValue === 0) {
        newGrid[row][col] = 1;
      } else {
        newGrid[row][col] = null;
      }
      
      checkCompletion(newGrid);
      return newGrid;
    });
  };

  const renderCell = (value: CellValue, row: number, col: number) => {
    const puzzle = puzzleManager.getCurrentPuzzle();
    if (!puzzle || !puzzle.grid) {
      return null;
    }

    const isInitial = puzzle.grid[row]?.[col] !== null;
    const shapeSet = shapeSets.find(set => set.id === puzzle.shapeSetId);
    
    return (
      <TouchableOpacity
        key={`${row}-${col}`}
        activeOpacity={1}
        style={[
          styles.cell,
          {
            width: cellSize,
            height: cellSize,
            borderWidth: puzzle.gridSize <= 6 ? 1 : 0.5
          }
        ]}
        onPress={() => handleCellPress(row, col)}
      >
        {value !== null && shapeSet && (
          <Animated.View style={{ transform: [{ scale: shapeScale }] }}>
            <Svg 
              width={cellSize * 0.8}
              height={cellSize * 0.8}
              viewBox="0 0 100 100"
              fill="none"
            >
              {value === 0 ? (
                <Path 
                  d="M91.5 50C91.5 72.9198 72.9198 91.5 50 91.5C27.0802 91.5 8.5 72.9198 8.5 50C8.5 27.0802 27.0802 8.5 50 8.5C72.9198 8.5 91.5 27.0802 91.5 50Z" 
                  fill={shapeSet.colors.shape1}
                />
              ) : (
                <Path 
                  d="M50 5L95 50L50 95L5 50L50 5Z" 
                  fill={shapeSet.colors.shape2}
                />
              )}
            </Svg>
          </Animated.View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.statsBar}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Score</Text>
            <View style={styles.statValueContainer}>
              <Text style={styles.statValue}>{score}</Text>
            </View>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Level</Text>
            <View style={styles.statValueContainer}>
              <Text style={styles.statValue}>{puzzleManager.getLevel()}</Text>
            </View>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Difficulty</Text>
            <View style={styles.statValueContainer}>
              <Text style={styles.statValue}>{puzzleManager.getDifficulty().toFixed(1)}</Text>
            </View>
          </View>
        </View>

        <Animated.View style={[styles.grid, { opacity: boardOpacity }]}>
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
                  backgroundColor: successMessage.color 
                }
              ]}
            >
              <Text style={styles.successText}>{successMessage.message}</Text>
            </Animated.View>
          )}
        </Animated.View>

        {failureMessage && (
          <Animated.View style={[styles.failureMessage, { opacity: failureOpacity }]}>
            <Text style={styles.failureText}>{failureMessage}</Text>
          </Animated.View>
        )}

        <View style={styles.controlsContainer}>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="undo" size={24} color="#e0e0e0" />
            <Text style={styles.buttonText}>Undo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="redo" size={24} color="#e0e0e0" />
            <Text style={styles.buttonText}>Redo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={resetGrid}>
            <MaterialIcons name="refresh" size={24} color="#e0e0e0" />
            <Text style={styles.buttonText}>Restart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="lightbulb-outline" size={24} color="#e0e0e0" />
            <Text style={styles.buttonText}>Hint</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GameBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 10,
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
    padding: 10,
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
    minWidth: 100,
  },
  statLabel: {
    color: '#e0e0e0',
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
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
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
    backgroundColor: '#2d2d2d',
    aspectRatio: 1,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 45,
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
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
    zIndex: 1000,
  },
  successText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  failureMessage: {
    alignItems: 'center',
    marginTop: 10,
  },
  failureText: {
    color: '#ff6b6b',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 