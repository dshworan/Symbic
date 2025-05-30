import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import GameBoard from '../components/GameBoard';
import { puzzleManager } from '../utils/puzzleManager';

export const GameScreen: React.FC = () => {
  const [resetKey, setResetKey] = useState(0);

  const handleTitlePress = () => {
    puzzleManager.resetToFirstPuzzle();
    setResetKey(prev => prev + 1); // Force GameBoard to re-render
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleTitlePress}>
        <Text style={styles.title}>Symbic</Text>
      </TouchableOpacity>
      <GameBoard key={resetKey} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#E0E0E0',
    textAlign: 'center',
    padding: 10,
  },
}); 