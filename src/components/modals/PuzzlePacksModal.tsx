import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Svg, Path, Circle } from 'react-native-svg';
import PackLevelsModal from './PackLevelsModal';
import PackDataManager from '../../data/packDataManager';
import type { PackInfo } from '../../data/packDataManager';

interface PuzzlePacksModalProps {
  isVisible: boolean;
  onClose: () => void;
  onCloseSettings?: () => void;
}

const PuzzlePacksModal: React.FC<PuzzlePacksModalProps> = ({ isVisible, onClose, onCloseSettings }) => {
  const [selectedPack, setSelectedPack] = useState<PackInfo | null>(null);
  const [packs, setPacks] = useState<PackInfo[]>([]);
  const packDataManager = PackDataManager.getInstance();

  useEffect(() => {
    if (isVisible) {
      setPacks(packDataManager.getPacks());
    }
  }, [isVisible]);

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

  const renderPackHeader = (pack: PackInfo) => {
    return (
      <TouchableOpacity 
        style={styles.packHeader}
        onPress={() => setSelectedPack(pack)}
      >
        <View style={styles.completionCountContainer}>
          <Text style={styles.completionCount}>{pack.completedPuzzles}/{pack.levels.reduce((sum, level) => sum + level.puzzles, 0)}</Text>
        </View>
        <View style={styles.packTitleContainer}>
          <Text style={styles.packTitle}>Pack {pack.id}</Text>
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

  const renderLevelTile = (level: PackInfo['levels'][0], pack: PackInfo) => (
    <TouchableOpacity 
      key={level.level}
      style={styles.levelTile}
      onPress={() => setSelectedPack(pack)}
    >
      <View style={styles.levelTileContent}>
        <Text style={styles.gridSizeText}>{level.size}x{level.size}</Text>
        <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(level.difficulty) }]}>
          <Text style={styles.difficultyText}>
            {getDifficultyText(level.difficulty)}
          </Text>
        </View>
        <Text style={styles.completionText}>
          {packDataManager.getCompletedPuzzleCount(pack.id, level.level)}/{level.puzzles}
        </Text>
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
            <TouchableOpacity onPress={() => {
              setSelectedPack(null);
              onClose();
            }} style={styles.closeButton}>
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
          onClose={() => {
            setSelectedPack(null);
            onClose();
          }}
          packName={`Pack ${selectedPack.id}`}
          isPlayable={selectedPack.isPlayable}
          levels={selectedPack.levels}
          onCloseSettings={onCloseSettings}
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