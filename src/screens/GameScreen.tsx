import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';
import GameBoard from '../components/GameBoard';
import { puzzleManager } from '../utils/puzzleManager';
import SettingsModal from '../components/modals/SettingsModal';
import { levelManager } from '../data/levels/levelManager';

const Logo: React.FC = () => {
  const size = 14;
  const currentLevel = levelManager.getCurrentLevel();
  const shapes = currentLevel.shapes;

  return (
    <View style={styles.logoContainer}>
      <View style={styles.logoGrid}>
        {/* Top Left - First Shape */}
        <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <Path 
            d={shapes[0].path}
            fill={shapes[0].fill}
          />
        </Svg>
        {/* Top Right - Second Shape */}
        <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <Path 
            d={shapes[1].path}
            fill={shapes[1].fill}
          />
        </Svg>
        {/* Bottom Left - Second Shape */}
        <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <Path 
            d={shapes[1].path}
            fill={shapes[1].fill}
          />
        </Svg>
        {/* Bottom Right - First Shape */}
        <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <Path 
            d={shapes[0].path}
            fill={shapes[0].fill}
          />
        </Svg>
      </View>
    </View>
  );
};

export const GameScreen: React.FC = () => {
  const [resetKey, setResetKey] = useState(0);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [currentLevelId, setCurrentLevelId] = useState(levelManager.getCurrentLevel().id);

  const handleTitlePress = () => {
    setIsAutoplay(!isAutoplay);
  };

  const handleReset = () => {
    setResetKey(prev => prev + 1); // Force GameBoard to remount
  };

  // Update currentLevelId when level changes
  React.useEffect(() => {
    const checkLevel = () => {
      const newLevelId = levelManager.getCurrentLevel().id;
      if (newLevelId !== currentLevelId) {
        setCurrentLevelId(newLevelId);
      }
    };

    // Check every second for level changes
    const interval = setInterval(checkLevel, 1000);
    return () => clearInterval(interval);
  }, [currentLevelId]);

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
              <Text style={[styles.title, isAutoplay && styles.titleActive]}>SYMBIC</Text>
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
      <GameBoard 
        key={resetKey} 
        isAutoplay={isAutoplay}
        onAutoplayChange={setIsAutoplay}
      />
      <SettingsModal 
        isVisible={isSettingsVisible}
        onClose={() => setIsSettingsVisible(false)}
        onReset={handleReset}
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
    paddingTop: 25,
    paddingBottom: 5,
    paddingHorizontal: 15,
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
  title: {
    color: '#e0e0e0',
    fontSize: 26,
    fontWeight: 'bold',
  },
  titleActive: {
    color: '#ffd85d', // Yellow color to indicate autoplay is active
  },
  settingsButton: {
    padding: 5,
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
    gap: 0,
  },
}); 