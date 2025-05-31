import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AboutModal from './AboutModal';

interface SettingsModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isVisible, onClose }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [hapticEnabled, setHapticEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Settings</Text>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Ionicons name="close" size={24} color="#e0e0e0" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView}>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Game Settings</Text>
                
                <View style={styles.settingItem}>
                  <View style={styles.settingInfo}>
                    <Text style={styles.settingLabel}>Sound Effects</Text>
                    <Text style={styles.settingDescription}>Enable or disable game sounds</Text>
                  </View>
                  <Switch
                    value={soundEnabled}
                    onValueChange={setSoundEnabled}
                    trackColor={{ false: '#404040', true: '#2196F3' }}
                    thumbColor={soundEnabled ? '#2196F3' : '#f4f3f4'}
                  />
                </View>

                <View style={styles.settingItem}>
                  <View style={styles.settingInfo}>
                    <Text style={styles.settingLabel}>Haptic Feedback</Text>
                    <Text style={styles.settingDescription}>Enable or disable vibration feedback</Text>
                  </View>
                  <Switch
                    value={hapticEnabled}
                    onValueChange={setHapticEnabled}
                    trackColor={{ false: '#404040', true: '#2196F3' }}
                    thumbColor={hapticEnabled ? '#2196F3' : '#f4f3f4'}
                  />
                </View>

                <View style={styles.settingItem}>
                  <View style={styles.settingInfo}>
                    <Text style={styles.settingLabel}>Dark Mode</Text>
                    <Text style={styles.settingDescription}>Toggle dark/light theme</Text>
                  </View>
                  <Switch
                    value={darkMode}
                    onValueChange={setDarkMode}
                    trackColor={{ false: '#404040', true: '#2196F3' }}
                    thumbColor={darkMode ? '#2196F3' : '#f4f3f4'}
                  />
                </View>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Game Controls</Text>
                
                <TouchableOpacity style={[styles.button, styles.tutorialButton]}>
                  <View style={styles.buttonContent}>
                    <Ionicons name="help-circle-outline" size={24} color="#ffffff" style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Tutorial</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={[styles.button, styles.aboutButton]}
                  onPress={() => setShowAbout(true)}
                >
                  <View style={styles.buttonContent}>
                    <Ionicons name="information-circle-outline" size={24} color="#ffffff" style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>About</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.resetButton]}>
                  <View style={styles.buttonContent}>
                    <Ionicons name="warning-outline" size={24} color="#ffffff" style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Reset Progress</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <AboutModal 
        isVisible={showAbout}
        onClose={() => setShowAbout(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalView: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: '80%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
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
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e0e0e0',
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  settingInfo: {
    flex: 1,
    marginRight: 10,
  },
  settingLabel: {
    fontSize: 16,
    color: '#e0e0e0',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 12,
    color: '#999',
  },
  button: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    position: 'absolute',
    left: 15,
  },
  buttonText: {
    color: '#e0e0e0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#e74c3c',
  },
  tutorialButton: {
    backgroundColor: '#3498db',
  },
  aboutButton: {
    backgroundColor: '#2ecc71',
  },
});

export default SettingsModal; 