import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LevelInfo } from '../../data/packDataManager';
import PackDataManager from '../../data/packDataManager';
import { useNavigation } from '@react-navigation/native';
import { levelManager } from '../../data/levels/levelManager';
import { puzzleManager } from '../../utils/puzzleManager';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

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
}

const PackLevelsModal: React.FC<PackLevelsModalProps> = ({ isVisible, onClose, packName, isPlayable, levels, onCloseSettings, onNavigatePack, onStartGame }) => {
  const packDataManager = PackDataManager.getInstance();
  const packId = parseInt(packName.split(' ')[1]);
  const navigation = useNavigation<NavigationProp>();

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

  const handlePuzzlePress = (level: LevelInfo, puzzleIndex: number) => {
    if (!packDataManager.isPuzzlePlayable(packId, level.level, puzzleIndex)) {
      console.log('Puzzle is locked');
      return;
    }

    console.log('Starting puzzle game:', { 
      packId, 
      level: level.level, 
      puzzleIndex,
      gridSize: level.size
    });

    // Set the current pack and level
    levelManager.setCurrentPack(packId);
    levelManager.setCurrentLevel(level.level);
    puzzleManager.setCurrentPuzzleIndex(puzzleIndex);

    // Ensure the puzzle is loaded
    const puzzle = puzzleManager.getCurrentPuzzle();
    if (!puzzle) {
      console.error('Failed to load puzzle');
      return;
    }

    // Close all modals and start game
    if (onStartGame) {
      onStartGame();
    }

    // Navigate to the game screen
    navigation.navigate('Game');
  };

  const handleUnlockWithAd = () => {
    console.log('Unlocking pack', packId);
    packDataManager.unlockPack(packId);
    onClose();
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
        onPress={() => handlePuzzlePress(level, index)}
      >
        <Text style={[
          styles.puzzleNumber,
          isCompleted && styles.completedPuzzleNumber,
          !isPuzzlePlayable && styles.lockedPuzzleNumber
        ]}>
          {puzzleNumber}
        </Text>
        {isCompleted && (
          <View style={styles.checkmarkContainer}>
            <Ionicons name="checkmark" size={14} color="#FFFFFF" style={{ fontWeight: 'bold' }} />
          </View>
        )}
        {!isPuzzlePlayable && (
          <View style={styles.lockContainer}>
            <Ionicons name="lock-closed" size={16} color="#aaaaaa" />
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
            <TouchableOpacity 
              onPress={() => onNavigatePack?.('prev')} 
              style={styles.navButton}
            >
              <Ionicons name="chevron-back" size={32} color="#e0e0e0" />
            </TouchableOpacity>
            
            <Text style={styles.headerText}>{packName}</Text>
            
            <TouchableOpacity 
              onPress={() => onNavigatePack?.('next')} 
              style={styles.navButton}
            >
              <Ionicons name="chevron-forward" size={32} color="#e0e0e0" />
            </TouchableOpacity>
          </View>

          <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={true}
          >
            {levels.map(level => renderLevelSection(level))}
          </ScrollView>
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
  },
  navButton: {
    padding: 8,
    width: 48,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e0e0e0',
    flex: 1,
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
    backgroundColor: '#2a2a2a',
    borderColor: '#404040',
    opacity: 0.8,
  },
  puzzleNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  completedPuzzleNumber: {
    color: '#FFFFFF',
  },
  lockedPuzzleNumber: {
    color: '#666666',
  },
  checkmarkContainer: {
    position: 'absolute',
    top: 3,
    right: 3,
  },
  lockContainer: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
});

export default PackLevelsModal; 