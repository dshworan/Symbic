import React from 'react';
import { View, StyleSheet } from 'react-native';
import GameBoard from './GameBoard';

const Game = () => {
  return (
    <View style={styles.container}>
      <GameBoard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Game; 