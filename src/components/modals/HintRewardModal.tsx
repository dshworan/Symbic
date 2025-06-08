import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface HintRewardModalProps {
  isVisible: boolean;
  onClose: () => void;
  onWatchAd: () => void;
}

const HintRewardModal: React.FC<HintRewardModalProps> = ({ isVisible, onClose, onWatchAd }) => {
  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="lightbulb" size={48} color="#ffd700" />
          </View>
          
          <Text style={styles.title}>Need more hints?</Text>
          <Text style={styles.message}>Watch an ad for</Text>
          <Text style={styles.reward}>5 FREE HINTS!</Text>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.button, styles.cancelButton]} 
              onPress={onClose}
            >
              <Text style={styles.buttonText}>No Thanks</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, styles.watchButton]} 
              onPress={onWatchAd}
            >
              <MaterialIcons name="play-circle-outline" size={24} color="#fff" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Watch Ad</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    paddingTop: 34,
    paddingHorizontal: 20,
    paddingBottom: 30,
    width: 330,
    maxWidth: 500,
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#666',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#252525',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#ffd700',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  message: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 4,
    textAlign: 'center',
  },
  reward: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 12,
    marginTop: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  cancelButton: {
    backgroundColor: '#333',
    borderColor: '#444',
  },
  watchButton: {
    backgroundColor: '#4CAF50',
    borderColor: '#45a049',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonIcon: {
    marginRight: 8,
  },
});

export default HintRewardModal; 