import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';
import GameBoard from '../components/GameBoard';
import { puzzleManager } from '../utils/puzzleManager';
import SettingsModal from '../components/modals/SettingsModal';
import { levelManager } from '../data/levels/levelManager';
import PuzzlePacksModal from '../components/modals/PuzzlePacksModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute, RouteProp } from '@react-navigation/native';
import { initializeGame } from '../utils/gameInitializer';
import { getResponsiveDimensions, getResponsiveFontSize } from '../utils/deviceUtils';

type RootStackParamList = {
  Game: {
    refreshAdmin?: number;
  };
};

type GameScreenRouteProp = RouteProp<RootStackParamList, 'Game'>;

const Logo: React.FC<{ isAutoplay: boolean; onAutoplayChange: (value: boolean) => void }> = ({ isAutoplay, onAutoplayChange }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const route = useRoute<GameScreenRouteProp>();

  // Check admin status every time the component renders
  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const adminStatus = await AsyncStorage.getItem('@admin_status');
        const newAdminStatus = adminStatus === 'true';
        setIsAdmin(newAdminStatus);
      } catch (error) {
        console.error('Error checking admin status:', error);
        setIsAdmin(false);
      }
    };
    checkAdminStatus();
  }); // Remove the dependency array to check on every render

  const handleTitlePress = () => {
    //console.log('Logo clicked, admin status:', isAdmin);
    if (isAdmin) {
      //console.log('Logo: toggling autoplay');
      onAutoplayChange(!isAutoplay);
    } else {
      //console.log('Logo: not in admin mode, ignoring click');
    }
  };

  return (
    <View style={styles.headerCenter}>
      {isAdmin ? (
        <TouchableOpacity onPress={handleTitlePress}>
          <Text style={[styles.title, isAutoplay && styles.titleActive]}>SYMBIC</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.title}>SYMBIC</Text>
      )}
    </View>
  );
};

export const GameScreen: React.FC = () => {
  const [resetKey, setResetKey] = useState(0);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [currentLevelId, setCurrentLevelId] = useState(levelManager.getCurrentLevel().id);
  const [showPuzzlePacks, setShowPuzzlePacks] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isGameInitialized, setIsGameInitialized] = useState(false);

  // Initialize the game when the screen mounts
  useEffect(() => {
    const setupGame = async () => {
      try {
        //console.log('=== GAMESCREEN INITIALIZATION START ===');
        await initializeGame();
        //console.log('=== GAMESCREEN INITIALIZATION COMPLETE ===');
        setIsGameInitialized(true);
      } catch (error) {
        //console.error('Error during game initialization in GameScreen:', error);
        setIsGameInitialized(true); // Still set to true to prevent infinite loading
      }
    };

    setupGame();
  }, []);

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const adminStatus = await AsyncStorage.getItem('@admin_status');
        //console.log('GameScreen checking admin status:', adminStatus);
        setIsAdmin(adminStatus === 'true');
      } catch (error) {
        //console.error('Error checking admin status:', error);
      }
    };
    checkAdminStatus();
  }, []);

  const handleTitlePress = () => {
    if (isAdmin) {
      setIsAutoplay(!isAutoplay);
    }
  };

  const handleReset = () => {
    setResetKey(prev => prev + 1); // Force GameBoard to remount
  };

  // Update currentLevelId when level changes
  React.useEffect(() => {
    const checkLevel = () => {
      const newLevelId = levelManager.getCurrentLevel().id;
      if (newLevelId !== currentLevelId) {
        //console.log('Level changed in GameScreen:', newLevelId);
        setCurrentLevelId(newLevelId);
        // Don't force remount - let GameBoard handle its own transitions
        // setResetKey(prev => prev + 1);
      }
    };

    // Check every 100ms for level changes
    const interval = setInterval(checkLevel, 100);
    return () => clearInterval(interval);
  }, [currentLevelId]);

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity 
            style={styles.difficultyContainer}
            onPress={() => setShowPuzzlePacks(true)}
          >
            <Svg width={20} height={20} viewBox="0 0 24 24">
              <Path 
                d="M14.986 15.424l0.75 5.652-3.221-1.933c-0.311-0.184-0.703-0.196-1.029 0l-3.221 1.933 0.751-5.651c0.921 0.371 1.929 0.575 2.984 0.575s2.063-0.205 2.986-0.576zM15.332 12.991c-0.058 0.030-0.113 0.065-0.163 0.105-0.92 0.573-2.005 0.904-3.169 0.904-1.657 0-3.156-0.67-4.243-1.757s-1.757-2.586-1.757-4.243 0.67-3.156 1.757-4.243 2.586-1.757 4.243-1.757 3.156 0.67 4.243 1.757 1.757 2.586 1.757 4.243-0.67 3.156-1.757 4.243c-0.278 0.278-0.583 0.529-0.911 0.748zM7.14 14.355l-1.131 8.513c-0.073 0.547 0.312 1.050 0.86 1.123 0.234 0.031 0.461-0.022 0.646-0.134l4.485-2.691 4.486 2.691c0.474 0.284 1.088 0.131 1.372-0.343 0.122-0.203 0.163-0.431 0.134-0.646l-1.13-8.515c0.28-0.215 0.546-0.448 0.795-0.697 1.446-1.446 2.343-3.447 2.343-5.656s-0.897-4.21-2.343-5.657-3.448-2.343-5.657-2.343-4.21 0.897-5.657 2.343-2.343 3.448-2.343 5.657 0.897 4.21 2.343 5.657c0.25 0.25 0.516 0.483 0.796 0.698z"
                fill={getDifficultyColor(puzzleManager.getDifficulty())}
              />
            </Svg>
            <Text style={styles.difficultyText}>{getDifficultyLabel(puzzleManager.getDifficulty())}</Text>
          </TouchableOpacity>
        </View>
        <Logo isAutoplay={isAutoplay} onAutoplayChange={setIsAutoplay} />
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
        onPackPress={() => setShowPuzzlePacks(true)}
        onComplete={() => {
          // Handle level completion
          if (levelManager.nextLevel()) {
            setCurrentLevelId(levelManager.getCurrentLevel().id);
            // Don't force remount - let GameBoard handle its own transitions
            // setResetKey(prev => prev + 1);
          }
        }}
        onBack={() => {
          // Handle going back
          if (levelManager.previousLevel()) {
            setCurrentLevelId(levelManager.getCurrentLevel().id);
            // Don't force remount - let GameBoard handle its own transitions
            // setResetKey(prev => prev + 1);
          }
        }}
      />
      <SettingsModal 
        isVisible={isSettingsVisible}
        onClose={() => setIsSettingsVisible(false)}
        onReset={handleReset}

      />
      <PuzzlePacksModal
        isVisible={showPuzzlePacks}
        onClose={() => setShowPuzzlePacks(false)}
      />
      </View>
    </View>
  );
};

// Dynamic styles based on device type
const getDynamicStyles = () => {
  const { isTablet, maxContentWidth } = getResponsiveDimensions();
  
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1a1a1a',
      maxWidth: maxContentWidth,
      alignSelf: 'center',
      width: '100%',
    },
    outerContainer: {
      flex: 1,
      backgroundColor: '#1a1a1a',
      alignItems: 'center',
    },
    header: {
      flexDirection: 'row' as const,
      justifyContent: 'space-between' as const,
      alignItems: 'center' as const,
      paddingTop: isTablet ? 35 : 25,
      paddingBottom: isTablet ? 10 : 5,
      paddingHorizontal: isTablet ? 25 : 15,
      backgroundColor: '#1a1a1a',
    },
    headerLeft: {
      flex: 1,
      alignItems: 'flex-start' as const,
    },
    headerCenter: {
      flex: 1,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
    },
    headerRight: {
      flex: 1,
      alignItems: 'flex-end' as const,
    },
    title: {
      fontSize: getResponsiveFontSize(24),
      fontWeight: 'bold' as const,
      color: '#e0e0e0',
    },
    titleActive: {
      color: '#4CAF50',
    },
    settingsButton: {
      padding: isTablet ? 8 : 5,
    },
    difficultyText: {
      color: '#e0e0e0',
      fontSize: getResponsiveFontSize(13),
      fontWeight: '500' as const,
    },
    difficultyContainer: {
      flexDirection: 'row' as const,
      alignItems: 'center' as const,
      gap: isTablet ? 4 : 2,
    },
  });
};

const styles = getDynamicStyles();

const getDifficultyLabel = (difficulty: number): string => {
  if (difficulty < 3) return 'Easy';
  if (difficulty < 7) return 'Medium';
  if (difficulty < 11) return 'Hard';
  return 'Expert';
};

const getDifficultyColor = (difficulty: number): string => {
  if (difficulty < 3) return '#4CAF50'; // Green for Easy
  if (difficulty < 7) return '#2196F3'; // Blue for Medium
  if (difficulty < 11) return '#c426df'; // Purple for Hard
  return '#F44336'; // Red for Expert
}; 