import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Svg, Path, Circle } from 'react-native-svg';
import PackLevelsModal from './PackLevelsModal';

interface PuzzlePacksModalProps {
  isVisible: boolean;
  onClose: () => void;
}

interface LevelInfo {
  id: number;
  gridSize: number;
  difficulty: number;
  puzzleCount: number;
  completedCount: number;
}

interface PackInfo {
  id: number;
  name: string;
  levels: LevelInfo[];
  isPlayable: boolean;
}

const PuzzlePacksModal: React.FC<PuzzlePacksModalProps> = ({ isVisible, onClose }) => {
  const [selectedPack, setSelectedPack] = useState<PackInfo | null>(null);

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

  // Mock data - replace with actual data from your game
  const packs: PackInfo[] = [
    {
      id: 1,
      name: "Pack 1",
      isPlayable: true,
      levels: [
        { id: 1, gridSize: 4, difficulty: 1.9, puzzleCount: 5, completedCount: 2 },
        { id: 2, gridSize: 6, difficulty: 2.2, puzzleCount: 5, completedCount: 1 },
        { id: 3, gridSize: 6, difficulty: 2.4, puzzleCount: 5, completedCount: 0 },
        { id: 4, gridSize: 6, difficulty: 2.4, puzzleCount: 5, completedCount: 0 },
      ]
    },
    {
      id: 2,
      name: "Pack 2",
      isPlayable: true,
      levels: [
        { id: 1, gridSize: 6, difficulty: 2.3, puzzleCount: 5, completedCount: 0 },
        { id: 2, gridSize: 6, difficulty: 2.8, puzzleCount: 5, completedCount: 0 },
        { id: 3, gridSize: 8, difficulty: 2.4, puzzleCount: 5, completedCount: 0 },
        { id: 4, gridSize: 8, difficulty: 2.4, puzzleCount: 5, completedCount: 0 },
      ]
    },
    {
      id: 3,
      name: "Pack 3",
      isPlayable: false,
      levels: [
        { id: 1, gridSize: 8, difficulty: 2.4, puzzleCount: 5, completedCount: 0 },
        { id: 2, gridSize: 8, difficulty: 2.7, puzzleCount: 5, completedCount: 0 },
        { id: 3, gridSize: 10, difficulty: 2.4, puzzleCount: 5, completedCount: 0 },
        { id: 4, gridSize: 10, difficulty: 2.4, puzzleCount: 5, completedCount: 0 },
      ]
    },
    {
      id: 4,
      name: "Pack 4",
      isPlayable: false,
      levels: [
        { id: 1, gridSize: 8, difficulty: 2.4, puzzleCount: 5, completedCount: 0 },
        { id: 2, gridSize: 8, difficulty: 2.7, puzzleCount: 5, completedCount: 0 },
        { id: 3, gridSize: 10, difficulty: 2.4, puzzleCount: 5, completedCount: 0 },
        { id: 4, gridSize: 10, difficulty: 2.4, puzzleCount: 5, completedCount: 0 },
      ]
    },
    {
      id: 5,
      name: "Pack 5",
      isPlayable: false,
      levels: [
        { id: 1, gridSize: 8, difficulty: 2.4, puzzleCount: 5, completedCount: 0 },
        { id: 2, gridSize: 8, difficulty: 2.7, puzzleCount: 5, completedCount: 0 },
        { id: 3, gridSize: 10, difficulty: 2.4, puzzleCount: 5, completedCount: 0 },
        { id: 4, gridSize: 10, difficulty: 2.4, puzzleCount: 5, completedCount: 0 },
      ]
    }
    
  ];

  const renderPackHeader = (pack: PackInfo) => {
    // Calculate total completed puzzles for this pack
    const totalCompleted = pack.levels.reduce((sum, level) => sum + level.completedCount, 0);
    const totalPuzzles = pack.levels.reduce((sum, level) => sum + level.puzzleCount, 0);

    return (
      <TouchableOpacity 
        style={styles.packHeader}
        onPress={() => setSelectedPack(pack)}
      >
        <View style={styles.completionCountContainer}>
          <Text style={styles.completionCount}>{totalCompleted}/{totalPuzzles}</Text>
        </View>
        <View style={styles.packTitleContainer}>
          <Text style={styles.packTitle}>{pack.name}</Text>
        </View>
        <View style={styles.packIconContainer}>
          {pack.isPlayable ? (
            <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
          ) : (
            <TouchableOpacity onPress={() => console.log('Watch ad to unlock')}>
              <Ionicons name="play-circle" size={24} color="#2196F3" />
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const renderLevelTile = (level: LevelInfo, pack: PackInfo) => (
    <TouchableOpacity 
      key={level.id}
      style={styles.levelTile}
      onPress={() => setSelectedPack(pack)}
    >
      <View style={styles.levelTileContent}>
        <Text style={styles.gridSizeText}>{level.gridSize}x{level.gridSize}</Text>
        <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(level.difficulty) }]}>
          <Text style={styles.difficultyText}>
            {getDifficultyText(level.difficulty)}
          </Text>
        </View>
        <Text style={styles.completionText}>{level.completedCount}/{level.puzzleCount}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Puzzle Packs</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#e0e0e0" />
            </TouchableOpacity>
          </View>

          <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={true}
          >
            {packs.map(pack => (
              <View key={pack.id} style={styles.packContainer}>
                {renderPackHeader(pack)}
                <View style={styles.levelsRow}>
                  {pack.levels.map(level => renderLevelTile(level, pack))}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      {selectedPack && (
        <PackLevelsModal
          isVisible={!!selectedPack}
          onClose={() => setSelectedPack(null)}
          packName={selectedPack.name}
          isPlayable={selectedPack.isPlayable}
          levels={selectedPack.levels}
        />
      )}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#292929',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e0e0e0',
  },
  closeButton: {
    padding: 5,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 10,
  },
  packContainer: {
    backgroundColor: '#292929',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#404040',
  },
  packHeader: {
    backgroundColor: '#333333',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#404040',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  completionCountContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  packTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  packIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  packTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e0e0e0',
  },
  levelsRow: {
    flexDirection: 'row',
    padding: 8,
    gap: 8,
  },
  levelTile: {
    flex: 1,
    backgroundColor: '#333333',
    borderRadius: 6,
    paddingHorizontal: 3,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#404040',
    minWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelTileContent: {
    alignItems: 'center',
    gap: 6,
  },
  gridSizeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e0e0e0',
  },
  difficultyBadge: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 4,
  },
  difficultyText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  completionText: {
    color: '#bbbbbb',
    fontSize: 12,
    marginTop: 2,
  },
  completionCount: {
    fontSize: 14,
    color: '#bbbbbb',
  },
});

export default PuzzlePacksModal; 