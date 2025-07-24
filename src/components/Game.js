import React from 'react';
import { View, StyleSheet } from 'react-native';
import GameBoard from './GameBoard';

const Game = ({ puzzle }) => {
  console.log('Game component - puzzle prop:', puzzle ? 'received' : 'null');
  
  return (
    <View style={styles.container}>
      <GameBoard puzzle={puzzle} />
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