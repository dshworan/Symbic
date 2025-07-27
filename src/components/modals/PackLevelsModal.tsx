import React, { useState, useRef } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LevelInfo } from '../../data/packDataManager';
import PackDataManager from '../../data/packDataManager';
import { useNavigation } from '@react-navigation/native';
import { levelManager } from '../../data/levels/levelManager';
import { puzzleManager } from '../../utils/puzzleManager';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { showRewardedAd } from '../../utils/rewardAd';
import { MaterialIcons } from '@expo/vector-icons';

type RootStackParamList = {
  Game: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Game'>;

interface PackLevelsModalProps {
  isVisible: boolean;
  onClose: () => void;
  packName: string;
  isPlayable: boolean;
  levels: LevelInfo[];
  onCloseSettings?: () => void;
  onNavigatePack?: (direction: 'prev' | 'next') => void;
  onStartGame?: () => void;
  onPackUnlocked?: () => void;
}

const PackLevelsModal: React.FC<PackLevelsModalProps> = ({ isVisible, onClose, packName, isPlayable, levels, onCloseSettings, onNavigatePack, onStartGame, onPackUnlocked }) => {
  const packDataManager = PackDataManager.getInstance();
  const packId = parseInt(packName.split(' ')[1]);
  const navigation = useNavigation<NavigationProp>();
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [unlockButtonScale] = useState(new Animated.Value(1));
  const [contentOpacity] = useState(new Animated.Value(1));
  const [contentTranslateX] = useState(new Animated.Value(0));
  const isAnimating = useRef(false);

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty < 3) return '#4CAF50'; // Easy - Green
    if (difficulty < 7) return '#2196F3'; // Medium - Blue
    if (difficulty < 11) return '#c426df'; // Hard - Purple
    return '#F44336'; // Expert - Red
  };

  const getDifficultyText = (difficulty: number) => {
    if (difficulty < 3) return 'Easy';
    if (difficulty < 7) return 'Medium';
    if (difficulty < 11) return 'Hard';
    return 'Expert';
  };

  const handlePuzzlePress = async (level: LevelInfo, puzzleIndex: number) => {
    if (!packDataManager.isPuzzlePlayable(packId, level.level, puzzleIndex)) {
      //console.log('Puzzle is locked');
      return;
    }

    //console.log('Starting puzzle game:', { 
      //packId, 
      //level: level.level, 
      //puzzleIndex,
      //gridSize: level.size
    //});

    // Check if this is a pack change (different pack than currently playing)
    const currentPack = levelManager.getCurrentPackNumber();
    const isPackChange = packId !== currentPack;
    
    // Check if this pack was recently unlocked
    const isRecentlyUnlocked = packDataManager.isRecentlyUnlocked(packId);
    
    console.log('🔍 Pack selection check:', {
      packId,
      currentPack,
      isPackChange,
      isRecentlyUnlocked,
      shouldShowAd: isPackChange && !isRecentlyUnlocked
    });
    
    // Show interstitial ad for pack changes, except for recently unlocked packs
    if (isPackChange && !isRecentlyUnlocked) {
      console.log('🎯 Attempting to show interstitial ad for pack selection...');
      try {
        const { showInterstitialAd } = await import('../../utils/interstitialAd');
        await showInterstitialAd();
        console.log('✅ Interstitial ad shown successfully for pack selection');
      } catch (error) {
        console.error('❌ Error showing interstitial ad:', error);
      }
    } else {
      console.log('🚫 Interstitial ad not shown for pack selection:', {
        reason: isRecentlyUnlocked ? 'recently unlocked pack' : 'same pack'
      });
    }
    
    // Clear the "recently unlocked" flag when user starts playing this pack
    if (isRecentlyUnlocked) {
      packDataManager.clearRecentlyUnlocked(packId);
      console.log(`🎉 User started playing recently unlocked pack ${packId} - cleared recently unlocked flag`);
    }

    // Set the current pack and level (both are 1-based in LevelManager)
    levelManager.setCurrentPack(packId);
    // Convert level.level (1-based) to 0-based index for LevelManager
    levelManager.setCurrentLevel(level.level);
    puzzleManager.setCurrentPuzzleIndex(puzzleIndex);

    // Save the current state
    const { stateManager } = await import('../../utils/stateManager');
    await stateManager.saveGameState(packId, level.level, puzzleIndex);

    // Ensure the puzzle is loaded
    const puzzle = puzzleManager.getCurrentPuzzle();
    if (!puzzle) {
      //console.error('Failed to load puzzle');
      return;
    }

    // Close all modals and start game
    if (onStartGame) {
      onStartGame();
    }

    // Navigate to the game screen
    navigation.navigate('Game');
  };

  const handleUnlockWithAd = async () => {
    try {
      await showRewardedAd(() => {
        // Unlock the pack after watching the ad
        packDataManager.unlockPack(packId);
        // Call the callback to notify parent component
        if (onPackUnlocked) {
          onPackUnlocked();
        }
        onClose();
      });
    } catch (error) {
      //console.error('Error showing reward ad:', error);
      Alert.alert(
        'Error',
        'Failed to show ad. Please try again later.',
        [{ text: 'OK', style: 'cancel' }]
      );
    }
  };

  const handleLockedPuzzlePress = () => {
    // Pulse animation sequence
    Animated.sequence([
      Animated.timing(unlockButtonScale, {
        toValue: 1.1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(unlockButtonScale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleNavigatePack = (direction: 'prev' | 'next') => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    // Start exit animation
    Animated.parallel([
      Animated.timing(contentOpacity, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(contentTranslateX, {
        toValue: direction === 'next' ? -50 : 50,
        duration: 150,
        useNativeDriver: true,
      })
    ]).start(() => {
      // Call the navigation callback
      onNavigatePack?.(direction);
      
      // Reset position for next animation
      contentTranslateX.setValue(direction === 'next' ? 50 : -50);
      
      // Start enter animation
      Animated.parallel([
        Animated.timing(contentOpacity, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(contentTranslateX, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        })
      ]).start(() => {
        isAnimating.current = false;
      });
    });
  };

  const renderPuzzleSquare = (index: number, level: LevelInfo) => {
    const isPuzzlePlayable = packDataManager.isPuzzlePlayable(packId, level.level, index);
    const isCompleted = packDataManager.isPuzzleCompleted(packId, level.level, index);
    const puzzleNumber = index + 1;

    return (
      <TouchableOpacity 
        key={index}
        style={[
          styles.puzzleSquare,
          isCompleted && styles.completedPuzzle,
          !isPuzzlePlayable && styles.lockedPuzzle
        ]}
        onPress={() => {
          if (!isPuzzlePlayable) {
            handleLockedPuzzlePress();
            return;
          }
          handlePuzzlePress(level, index);
        }}
      >
        {isPuzzlePlayable ? (
          <>
            <Text style={[
              styles.puzzleNumber,
              isCompleted && styles.completedPuzzleNumber
            ]}>
              {puzzleNumber}
            </Text>
            {isCompleted && (
              <View style={styles.checkmarkContainer}>
                <Ionicons name="checkmark" size={14} color="#FFFFFF" style={{ fontWeight: 'bold' }} />
              </View>
            )}
          </>
        ) : (
          <View style={styles.lockContainer}>
            <Ionicons name="lock-closed" size={20} color="#777777" />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const renderLevelSection = (level: LevelInfo) => {
    const completedCount = packDataManager.getCompletedPuzzleCount(packId, level.level);

    return (
      <View key={level.level} style={styles.levelSection}>
        <View style={styles.levelContent}>
          <View style={styles.levelInfo}>
            <View style={styles.levelHeader}>
              <Text style={styles.levelTitle}>{level.size}x{level.size}</Text>
              <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(level.difficulty) }]}>
                <Text style={styles.difficultyText}>
                  {getDifficultyText(level.difficulty)}
                </Text>
              </View>
            </View>
            <View style={styles.puzzleGrid}>
              {Array.from({ length: level.puzzles }).map((_, index) => 
                renderPuzzleSquare(index, level)
              )}
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#e0e0e0" />
            </TouchableOpacity>
          </View>

          <View style={styles.navigationContainer}>
            <View style={styles.navButton}>
              <TouchableOpacity 
                onPress={() => handleNavigatePack('prev')} 
              >
                <Ionicons name="chevron-back" size={32} color="#e0e0e0" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.titleContainer}>
              <Text style={styles.headerText}>{packName}</Text>
            </View>
            
            <View style={styles.navButton}>
              <TouchableOpacity 
                onPress={() => handleNavigatePack('next')} 
              >
                <Ionicons name="chevron-forward" size={32} color="#e0e0e0" />
              </TouchableOpacity>
            </View>
          </View>

          <Animated.View style={[
            styles.scrollView,
            {
              opacity: contentOpacity,
              transform: [{ translateX: contentTranslateX }]
            }
          ]}>
            <ScrollView 
              contentContainerStyle={styles.scrollViewContent}
              showsVerticalScrollIndicator={true}
            >
              {levels.map(level => renderLevelSection(level))}
            </ScrollView>
          </Animated.View>

          {!isPlayable && (
            <View style={styles.unlockButtonContainer}>
              <Animated.View style={{ transform: [{ scale: unlockButtonScale }] }}>
                <TouchableOpacity 
                  style={styles.unlockButton} 
                  onPress={handleUnlockWithAd}
                >
                  <Text style={styles.unlockButtonText}>Unlock Pack {packId}</Text>
                  <MaterialIcons name="play-circle-outline" size={32} color="#ffffff" />
                </TouchableOpacity>
              </Animated.View>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  modalView: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '95%'
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  closeButton: {
    padding: 10,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#292929',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    marginTop: 60,
    height: 60,
  },
  navButton: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e0e0e0',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  scrollViewContent: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    gap: 20,
  },
  levelSection: {
    backgroundColor: '#292929',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#404040',
  },
  levelContent: {
    flexDirection: 'column',
    gap: 12,
  },
  levelInfo: {
    width: 284,
    alignSelf: 'center',
    flexDirection: 'column',
    gap: 8,
  },
  levelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    paddingHorizontal: 10,
  },
  levelTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e0e0e0',
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  difficultyText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  puzzleGrid: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
  },
  puzzleSquare: {
    width: 48,
    height: 48,
    backgroundColor: '#2196F3',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  completedPuzzle: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  lockedPuzzle: {
    backgroundColor: '#363636',
    borderColor: '#474747',
  },
  puzzleNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  completedPuzzleNumber: {
    color: '#FFFFFF',
  },
  checkmarkContainer: {
    position: 'absolute',
    top: 3,
    right: 3,
  },
  lockContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unlockButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#292929',
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  unlockButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  unlockButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5 ,
  },
});

export default PackLevelsModal; 