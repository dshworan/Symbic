import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

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
        console.log('=== APP.JS INITIALIZATION START ===');
        console.log('Starting game initialization...');
        await initializeGame();
        console.log('Game initialized successfully');
        setIsInitialized(true);

        console.log('Loading puzzle...');
        const loadedPuzzle = await loadPuzzle();
        console.log('Puzzle loaded:', loadedPuzzle);
        setPuzzle(loadedPuzzle);
        console.log('=== APP.JS INITIALIZATION COMPLETE ===');
      } catch (err) {
        console.error('Error during game setup:', err);
        setError(err.message);
      }
    };

    setupGame();
  }, []);

  console.log('App.js render - isInitialized:', isInitialized, 'puzzle:', puzzle ? 'loaded' : 'null');

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
          <Game puzzle={puzzle} />
        )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
  errorText: {
    fontSize: 18,
    color: '#ff4444',
    textAlign: 'center',
    padding: 20,
  },
});