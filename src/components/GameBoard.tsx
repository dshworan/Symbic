import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { CellValue } from '../types/puzzle';
import { puzzleManager } from '../utils/puzzleManager';

export const GameBoard: React.FC = () => {
  const { width } = useWindowDimensions();
  const [cellSize, setCellSize] = useState(0);
  const [grid, setGrid] = useState<CellValue[][]>([]);

  useEffect(() => {
    const puzzle = puzzleManager.getCurrentPuzzle();
    setGrid(puzzle.grid);
    
    // Calculate cell size based on screen width, with max-width of 700
    const maxWidth = Math.min(width, 700);
    const padding = 40; // 20px padding on each side
    const availableWidth = maxWidth - padding;
    const size = Math.floor(availableWidth / puzzle.gridSize);
    setCellSize(size);
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
      
      return newGrid;
    });
  };

  const renderCell = (value: CellValue, row: number, col: number) => {
    const puzzle = puzzleManager.getCurrentPuzzle();
    const isInitial = puzzle.grid[row][col] !== null;
    
    return (
      <TouchableOpacity
        key={`${row}-${col}`}
        style={[
          styles.cell,
          {
            width: cellSize,
            height: cellSize,
            backgroundColor: isInitial ? '#404040' : 
                           value === 1 ? '#1a237e' : 
                           value === 0 ? '#bf360c' : '#2d2d2d'
          }
        ]}
        onPress={() => handleCellPress(row, col)}
      >
        <Text style={[
          styles.cellText,
          {
            color: isInitial ? '#e0e0e0' :
                   value === 1 ? '#90caf9' :
                   value === 0 ? '#ffab91' : '#ffffff'
          }
        ]}>
          {value !== null ? value.toString() : ''}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.statsBar}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Score</Text>
            <Text style={styles.statValue}>0</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Level</Text>
            <Text style={styles.statValue}>{puzzleManager.getLevel()}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Difficulty</Text>
            <Text style={styles.statValue}>{puzzleManager.getDifficulty().toFixed(1)}</Text>
          </View>
        </View>

        <View style={styles.grid}>
          {grid.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((cell, colIndex) => renderCell(cell, rowIndex, colIndex))}
            </View>
          ))}
        </View>

        <View style={styles.controlsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Undo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Redo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Restart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Hint</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 20,
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
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#2d2d2d',
    borderRadius: 8,
  },
  statItem: {
    alignItems: 'center',
    minWidth: 80,
  },
  statLabel: {
    color: '#e0e0e0',
    fontSize: 14,
    marginBottom: 4,
  },
  statValue: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  grid: {
    alignItems: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    borderWidth: 1,
    borderColor: '#404040',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#2d2d2d',
    borderRadius: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    backgroundColor: '#424242',
    padding: 10,
    borderRadius: 5,
    minWidth: 80,
    alignItems: 'center',
  },
  buttonText: {
    color: '#e0e0e0',
    fontSize: 16,
  },
}); 