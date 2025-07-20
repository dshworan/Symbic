import React, { useState } from 'react';
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
  
  // Range-based navigation state - dynamically calculate ranges based on available packs
  // This automatically adapts when you add more packs to the level manager
  const totalPacks = levelManager.getTotalPacks();
  console.log('Total packs available:', totalPacks);
  
  // Calculate ranges dynamically - 10 packs per range
  const packsPerRange = 10;
  const PACK_RANGES = Array.from(
    { length: Math.ceil(totalPacks / packsPerRange) },
    (_, i) => {
      const start = i * packsPerRange + 1;
      const end = Math.min((i + 1) * packsPerRange, totalPacks);
      return {
        start,
        end,
        label: `${start}-${end}`
      };
    }
  );
  
  const [selectedRange, setSelectedRange] = useState(PACK_RANGES.length > 0 ? PACK_RANGES[0] : null);

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

  // Calculate which packs to show for the selected range
  const currentPacks = selectedRange ? Array.from(
    { length: Math.min(selectedRange.end - selectedRange.start + 1, totalPacks - selectedRange.start + 1) },
    (_, i) => selectedRange.start - 1 + i // Convert to 0-based index
  ).filter(packIndex => packIndex < totalPacks) : []; // Ensure we don't exceed available packs

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

          {PACK_RANGES.length > 0 && selectedRange && (
            <>
              <View style={styles.tabsWrapper}>
                <ScrollView 
                  horizontal 
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.tabsContainer}
                >
                  {PACK_RANGES.map((range) => (
                    <TouchableOpacity
                      key={range.label}
                      style={[
                        styles.tab,
                        selectedRange.label === range.label && styles.selectedTab
                      ]}
                      onPress={() => setSelectedRange(range)}
                    >
                      <Text style={[
                        styles.tabText,
                        selectedRange.label === range.label && styles.selectedTabText
                      ]}>
                        {range.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

              <ScrollView style={styles.scrollView}>
                <View style={styles.content}>
                  {currentPacks.map(packIndex => renderPack(packIndex))}
                </View>
              </ScrollView>
            </>
          )}
          
          {PACK_RANGES.length === 0 && (
            <View style={styles.noPacksContainer}>
              <Text style={styles.noPacksText}>No packs available</Text>
            </View>
          )}
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
    maxWidth: 500,
    height: '95%',
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
  tabsWrapper: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  tab: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#292929',
    minWidth: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedTab: {
    backgroundColor: '#4CAF50',
  },
  tabText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  selectedTabText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  noPacksContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noPacksText: {
    color: '#888888',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ShapesAndColorsTestModal; 