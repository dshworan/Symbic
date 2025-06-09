import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Svg, Path } from 'react-native-svg';
import { AssetManager } from '../../data/assets/assetManager';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { levelManager } from '../../data/levels/levelManager';
import { puzzleManager } from '../../utils/puzzleManager';

type RootStackParamList = {
  Game: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface ShapesAndColorsTestModalProps {
  visible: boolean;
  onClose: () => void;
  onCloseSettings?: () => void;
}

const ShapesAndColorsTestModal: React.FC<ShapesAndColorsTestModalProps> = ({ visible, onClose, onCloseSettings }) => {
  const assetManager = AssetManager.getInstance();
  const navigation = useNavigation<NavigationProp>();

  // Helper function to render a shape
  const renderShape = (shape: any) => {
    return (
      <Svg width="60" height="60" viewBox="0 0 100 100">
        <Path d={shape.path} fill={shape.fill} />
      </Svg>
    );
  };

  const handleLevelPress = (packIndex: number, levelIndex: number) => {
    // Set the current pack and level (both are 1-based in LevelManager)
    levelManager.setCurrentPack(packIndex + 1);
    levelManager.setCurrentLevel(levelIndex + 1);
    puzzleManager.setCurrentPuzzleIndex(0);

    // Close both modals
    onClose();
    if (onCloseSettings) {
      onCloseSettings();
    }

    // Navigate to the game screen
    navigation.navigate('Game');
  };

  // Helper function to render a pack
  const renderPack = (packIndex: number) => {
    const levels = [];
    for (let levelIndex = 0; levelIndex < 4; levelIndex++) {
      const { shapes, colors } = assetManager.getLevelAssets(packIndex, levelIndex);
      
      // Log the data for this level
      //console.log(`Pack ${packIndex + 1} Level ${levelIndex + 1}: ${shapes.map(s => s.id).join(',')} : ${colors.join(',')}`);

      levels.push(
        <TouchableOpacity 
          key={levelIndex} 
          style={styles.levelContainer}
          onPress={() => handleLevelPress(packIndex, levelIndex)}
        >
          <Text style={styles.levelText}>Level {levelIndex + 1}</Text>
          <View style={styles.shapesContainer}>
            {shapes.map((shape, index) => (
              <View key={index} style={styles.shapeContainer}>
                {renderShape(shape)}
                <Text style={styles.shapeText}>{shape.id}</Text>
                <Text style={styles.colorText}>{colors[index]}</Text>
              </View>
            ))}
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <View key={packIndex} style={styles.packContainer}>
        <Text style={styles.packTitle}>Pack {packIndex + 1}</Text>
        {levels}
      </View>
    );
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Level Shapes & Colors</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#e0e0e0" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.scrollView}>
            <View style={styles.content}>
              {Array.from({ length: 10 }, (_, i) => renderPack(i))}
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    width: '90%',
    maxHeight: '95%',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e0e0e0',
  },
  closeButton: {
    padding: 5,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingBottom: 20,
  },
  packContainer: {
    marginBottom: 30,
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 15,
  },
  packTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e0e0e0',
    marginBottom: 15,
  },
  levelContainer: {
    marginBottom: 10,
    backgroundColor: '#333333',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  levelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e0e0e0',
  },
  shapesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  shapeContainer: {
    alignItems: 'center',
    margin: 10,
  },
  shapeText: {
    color: '#e0e0e0',
    marginTop: 5,
    fontSize: 14,
  },
  colorText: {
    color: '#888888',
    fontSize: 12,
    marginTop: 2,
  },
});

export default ShapesAndColorsTestModal; 