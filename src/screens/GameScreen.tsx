import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';
import GameBoard from '../components/GameBoard';
import { puzzleManager } from '../utils/puzzleManager';
import SettingsModal from '../components/modals/SettingsModal';

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

export const GameScreen: React.FC = () => {
  const [resetKey, setResetKey] = useState(0);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const handleTitlePress = () => {
    puzzleManager.resetToFirstPuzzle();
    setResetKey(prev => prev + 1); // Force GameBoard to re-render
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {/* Left section - empty for now */}
        </View>
        <View style={styles.headerCenter}>
          <View style={styles.titleContainer}>
            <Logo />
            <TouchableOpacity onPress={handleTitlePress}>
              <Text style={styles.title}>SYMBIC</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity 
            style={styles.settingsButton} 
            onPress={() => setIsSettingsVisible(true)}
          >
            <Ionicons name="settings-outline" size={24} color="#e0e0e0" />
          </TouchableOpacity>
        </View>
      </View>
      <GameBoard key={resetKey} />
      <SettingsModal 
        isVisible={isSettingsVisible}
        onClose={() => setIsSettingsVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: '#1a1a1a',
  },
  headerLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoContainer: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
  },
  logoGrid: {
    width: 28,
    height: 28,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 0, // Removed gap
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e0e0e0',
  },
  settingsButton: {
    padding: 8,
  },
}); 