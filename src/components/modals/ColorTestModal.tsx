import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ColorTestModalProps {
  visible: boolean;
  onClose: () => void;
}

const colors = [
  // Reds
  { name: "red", hex: "#e74c3c" },
  { name: "orange", hex: "#e47c21" },
  { name: "maroon", hex: "#b03b3b" },
  { name: "burgundy", hex: "#984358" },
  { name: "coral", hex: "#e3354f" },
  { name: "ruby", hex: "#ad3440" },
  { name: "burntorange", hex: "#e28e18" },
  { name: "magenta", hex: "#c71585" },
  { name: "plum", hex: "#915959" },
  { name: "pink", hex: "#d81b60" },
  // Greens
  { name: "green", hex: "#2ecc71" },
  { name: "teal", hex: "#0cbb98" },
  { name: "olive", hex: "#808000" },
  { name: "emerald", hex: "#4d9350" },
  { name: "mint", hex: "#339e77" },
  { name: "lime", hex: "#4ccd4c" },
  { name: "seafoam", hex: "#3cb371" },
  { name: "deepteal", hex: "#1c8278" },
  { name: "lightgreen", hex: "#56b35b" },
  { name: "forest", hex: "#45b045" },
  // Blues
  { name: "blue", hex: "#3498db" },
  { name: "purple", hex: "#7a45d9" },
  { name: "cyan", hex: "#2d7695" },
  { name: "navy", hex: "#596fb1" },
  { name: "sky", hex: "#0277bd" },
  { name: "indigo", hex: "#744596" },
  { name: "lavender", hex: "#8e44ad" },
  { name: "sapphire", hex: "#1b5fc5" },
  { name: "babyblue", hex: "#1976d2" },
  { name: "charcoal", hex: "#537388" }
];

const ColorTestModal: React.FC<ColorTestModalProps> = ({ visible, onClose }) => {
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
            <Text style={styles.title}>Color Test</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#e0e0e0" />
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={true}
          >
            <View style={styles.colorGrid}>
              {colors.map((color, index) => (
                <View key={index} style={styles.colorItem}>
                  <View style={[styles.colorCircle, { backgroundColor: color.hex }]} />
                  <Text style={styles.colorName}>{color.name}</Text>
                  <Text style={styles.colorHex}>{color.hex}</Text>
                </View>
              ))}
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
    borderRadius: 10,
    width: '90%',
    maxWidth: 600,
    height: '90%',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#e0e0e0',
    fontSize: 24,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 5,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 0,
    paddingBottom: 20,
  },
  colorItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  colorCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#333',
  },
  colorName: {
    color: '#e0e0e0',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  colorHex: {
    color: '#999',
    fontSize: 12,
  },
});

export default ColorTestModal; 