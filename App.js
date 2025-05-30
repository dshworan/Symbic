import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GameProvider } from './src/context/GameContext';
import Game from './src/components/Game';
import { initializeGame } from './src/utils/gameInitializer';
import { loadPuzzle } from './src/utils/puzzleLoader';

export default function App() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [puzzle, setPuzzle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const setupGame = async () => {
      try {
        console.log('Starting game initialization...');
        await initializeGame();
        console.log('Game initialized successfully');
        setIsInitialized(true);

        console.log('Loading puzzle...');
        const loadedPuzzle = await loadPuzzle();
        console.log('Puzzle loaded:', loadedPuzzle);
        setPuzzle(loadedPuzzle);
      } catch (err) {
        console.error('Error during game setup:', err);
        setError(err.message);
      }
    };

    setupGame();
  }, []);

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {!isInitialized ? (
        <Text style={styles.welcomeText}>Welcome to Symbic!</Text>
      ) : (
        <GameProvider>
          <Game puzzle={puzzle} />
        </GameProvider>
      )}
      {/* Debug Panel */}
      <View style={styles.debugPanel}>
        <Text style={styles.debugText}>Debug Info:</Text>
        <Text style={styles.debugText}>Initialized: {isInitialized ? 'Yes' : 'No'}</Text>
        <Text style={styles.debugText}>Puzzle Loaded: {puzzle ? 'Yes' : 'No'}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
  debugPanel: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
  debugText: {
    color: 'white',
    fontSize: 14,
  },
});