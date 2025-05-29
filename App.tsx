import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { GameScreen } from './src/screens/GameScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1a1a' }}>
      <StatusBar barStyle="light-content" />
      <GameScreen />
    </SafeAreaView>
  );
} 