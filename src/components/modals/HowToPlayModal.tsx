import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { pack1Tutorials } from '../../data/tutorials/pack1Tutorials';

interface HowToPlayModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const HowToPlayModal: React.FC<HowToPlayModalProps> = ({ isVisible, onClose }) => {
  // Combine all tutorial messages into one comprehensive guide
  const allInstructions = [
    ...pack1Tutorials.level1,
    ...pack1Tutorials.level2
  ];

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
            <Text style={styles.headerText}>How to Play</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#e0e0e0" />
            </TouchableOpacity>
          </View>

          <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={true}
          >
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Game Rules</Text>
              
              {allInstructions.map((instruction, index) => (
                <View key={index} style={styles.instructionItem}>
                  <Text style={styles.instructionText}>{instruction}</Text>
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Tips</Text>
              <View style={styles.instructionItem}>
                <Text style={styles.instructionText}>
                  • Use the hint button when you're stuck - it will show you the next logical move
                </Text>
              </View>
              <View style={styles.instructionItem}>
                <Text style={styles.instructionText}>
                  • You can restart a puzzle anytime if you think you've made mistakes
                </Text>
              </View>
              <View style={styles.instructionItem}>
                <Text style={styles.instructionText}>
                  • Use the undo/redo buttons to step through your moves
                </Text>
              </View>
              <View style={styles.instructionItem}>
                <Text style={styles.instructionText}>
                  • Puzzles get progressively harder as you advance through levels
                </Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Controls</Text>
              <View style={styles.instructionItem}>
                <Text style={styles.instructionText}>
                  • Tap empty cells to cycle through shapes (empty → shape 1 → shape 2 → empty)
                </Text>
              </View>
              <View style={styles.instructionItem}>
                <Text style={styles.instructionText}>
                  • Use the hint button to get help with the next move
                </Text>
              </View>
              <View style={styles.instructionItem}>
                <Text style={styles.instructionText}>
                  • Use undo/redo to navigate through your moves
                </Text>
              </View>
              <View style={styles.instructionItem}>
                <Text style={styles.instructionText}>
                  • Use restart to reset the current puzzle
                </Text>
              </View>
            </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '90%',
    maxWidth: 400,
    height: '95%',
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
    padding: 15,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#292929',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e0e0e0',
    marginBottom: 15,
    textAlign: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#404040',
    width: '100%',
  },
  instructionItem: {
    marginBottom: 12,
    paddingLeft: 10,
  },
  instructionText: {
    fontSize: 16,
    color: '#e0e0e0',
    lineHeight: 22,
  },
});

export default HowToPlayModal; 