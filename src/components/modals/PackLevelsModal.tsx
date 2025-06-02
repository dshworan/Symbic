import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PackLevelsModalProps {
  isVisible: boolean;
  onClose: () => void;
  packName: string;
  levels: {
    id: number;
    gridSize: number;
    difficulty: number;
    puzzleCount: number;
    completedCount: number;
  }[];
}

const PackLevelsModal: React.FC<PackLevelsModalProps> = ({ isVisible, onClose, packName, levels }) => {
  const getDifficultyColor = (difficulty: number) => {
    switch (difficulty) {
      case 1: return '#4CAF50'; // Easy - Green
      case 2: return '#2196F3'; // Medium - Blue
      case 3: return '#c426df'; // Hard - Purple
      case 4: return '#F44336'; // Expert - Red
      default: return '#9E9E9E'; // Default - Grey
    }
  };

  const renderPuzzleSquare = (isCompleted: boolean, index: number) => (
    <TouchableOpacity 
      key={index}
      style={[
        styles.puzzleSquare,
        isCompleted && styles.completedPuzzle
      ]}
      onPress={() => console.log('Start puzzle', index + 1)}
    >
      {isCompleted && (
        <Ionicons name="checkmark" size={16} color="#FFFFFF" />
      )}
    </TouchableOpacity>
  );

  const renderLevelSection = (level: typeof levels[0]) => (
    <View key={level.id} style={styles.levelSection}>
      <View style={styles.levelContent}>
        <View style={styles.levelInfo}>
          <View style={styles.levelHeader}>
            <Text style={styles.levelTitle}>{level.gridSize}x{level.gridSize}</Text>
            <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(level.difficulty) }]}>
              <Text style={styles.difficultyText}>
                {level.difficulty === 1 ? 'Easy' : 
                 level.difficulty === 2 ? 'Medium' : 
                 level.difficulty === 3 ? 'Hard' : 'Expert'}
              </Text>
            </View>
          </View>
          <View style={styles.puzzleGrid}>
            {Array.from({ length: level.puzzleCount }).map((_, index) => 
              renderPuzzleSquare(index < level.completedCount, index)
            )}
          </View>
        </View>
      </View>
    </View>
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
            <TouchableOpacity onPress={onClose} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#e0e0e0" />
            </TouchableOpacity>
            <Text style={styles.headerText}>{packName}</Text>
            <View style={styles.placeholder} />
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
    height: '90%'
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
  backButton: {
    padding: 5,
  },
  placeholder: {
    width: 34, // Same width as back button for centering
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
    backgroundColor: '#333333',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#404040',
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedPuzzle: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
});

export default PackLevelsModal; 