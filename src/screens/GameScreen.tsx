import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GameBoard } from '../components/GameBoard';

export const GameScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Symbic</Text>
      <GameBoard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e0e0e0',
    textAlign: 'center',
    padding: 20,
  },
}); 