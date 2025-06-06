import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Svg, Path, Circle } from 'react-native-svg';
import AboutModal from './AboutModal';
import ResetConfirmationModal from './ResetConfirmationModal';
import PuzzlePacksModal from './PuzzlePacksModal';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAudio } from '../../context/AudioContext';
import { puzzleManager } from '../../utils/puzzleManager';
import { levelManager } from '../../data/levels/levelManager';
import ColorTestModal from './ColorTestModal';

type RootStackParamList = {
  TestInterstitialAd: undefined;
  TestRewardAd: undefined;
  LiveInterstitialAd: undefined;
  LiveRewardAd: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface SettingsModalProps {
  isVisible: boolean;
  onClose: () => void;
  onReset: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isVisible, onClose, onReset }) => {
  const navigation = useNavigation<NavigationProp>();
  const { soundEnabled, toggleSound } = useAudio();
  const [showAbout, setShowAbout] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showPuzzlePacks, setShowPuzzlePacks] = useState(false);
  const [showColorTest, setShowColorTest] = useState(false);

  const handleSoundToggle = async () => {
    await toggleSound();
  };

  const handleReset = () => {
    setShowResetConfirm(true);
  };

  const confirmReset = () => {
    // Reset the game state
    puzzleManager.resetToFirstPuzzle();
    levelManager.resetToFirstLevel();
    onReset();
    setShowResetConfirm(false);
    onClose();
  };

  const openAdScreen = (screenName: keyof RootStackParamList) => {
    onClose();
    navigation.navigate(screenName);
  };

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

            <ScrollView 
              style={styles.scrollView}
              contentContainerStyle={styles.scrollViewContent}
              showsVerticalScrollIndicator={true}
            >
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Puzzle Packs</Text>
                <TouchableOpacity 
                  style={[styles.button, styles.packsButton]}
                  onPress={() => setShowPuzzlePacks(true)}
                >
                  <View style={styles.buttonContent}>
                    <View style={styles.buttonIcon}>
                      <Svg width="24" height="24" viewBox="0 0 24 24">
                        <Path d="M3 3h7v7H3V3z" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
                        <Path d="M14 3h7v7h-7V3z" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
                        <Path d="M3 14h7v7H3v-7z" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
                        <Path d="M14 14h7v7h-7v-7z" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
                      </Svg>
                    </View>
                    <Text style={styles.buttonText}>View Puzzle Packs</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.section}>
                <TouchableOpacity 
                  style={[styles.button, styles.helpButton]}
                  onPress={handleSoundToggle}
                >
                  <View style={styles.buttonContent}>
                    <View style={styles.buttonIcon}>
                      <Svg width="24" height="24" viewBox="0 0 24 24">
                        <Path d="M11 5L6 9H2v6h4l5 4V5z" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                        <Path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                        <Path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                        {!soundEnabled && (
                          <Path d="M3 3l18 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                        )}
                      </Svg>
                    </View>
                    <Text style={styles.buttonText}>{soundEnabled ? 'Disable Sound' : 'Enable Sound'}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={[styles.button, styles.aboutButton]}
                  onPress={() => setShowAbout(true)}
                >
                  <View style={styles.buttonContent}>
                    <View style={styles.buttonIcon}>
                      <Svg width="24" height="24" viewBox="0 0 24 24">
                        <Path d="M18 20a6 6 0 0 0-12 0" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        <Circle cx="12" cy="10" r="4" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                        <Circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                      </Svg>
                    </View>
                    <Text style={styles.buttonText}>About</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={[styles.button, styles.resetButton]}
                  onPress={handleReset}
                >
                  <View style={styles.buttonContent}>
                    <View style={styles.buttonIcon}>
                      <Svg width="24" height="24" viewBox="0 0 24 24">
                        <Path d="M3 2v6h6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        <Path d="M3 13a9 9 0 1 0 3-7.7L3 8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </Svg>
                    </View>
                    <Text style={styles.buttonText}>Reset Progress</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Admin</Text>
                <View style={styles.adminButtons}>
                  <TouchableOpacity 
                    style={styles.adminButton} 
                    onPress={() => openAdScreen('TestInterstitialAd')}
                  >
                    <Text style={styles.adminButtonText}>Test Interstitial</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.adminButton} 
                    onPress={() => openAdScreen('TestRewardAd')}
                  >
                    <Text style={styles.adminButtonText}>Test Reward</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.adminButton} 
                    onPress={() => openAdScreen('LiveInterstitialAd')}
                  >
                    <Text style={styles.adminButtonText}>Live Interstitial</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.adminButton} 
                    onPress={() => openAdScreen('LiveRewardAd')}
                  >
                    <Text style={styles.adminButtonText}>Live Reward</Text>
                  </TouchableOpacity>
                  <View style={styles.spacerLine} />
                  <TouchableOpacity 
                  style={styles.adminButton}
                  onPress={() => setShowColorTest(true)}
                >
                  <Text style={styles.adminButtonText}>Color Test</Text>
                </TouchableOpacity>
                </View>
              </View>

            </ScrollView>
          </View>
        </View>
      </Modal>

      <AboutModal 
        isVisible={showAbout}
        onClose={() => setShowAbout(false)}
      />

      <ResetConfirmationModal
        isVisible={showResetConfirm}
        onConfirm={confirmReset}
        onCancel={() => setShowResetConfirm(false)}
      />

      <PuzzlePacksModal
        isVisible={showPuzzlePacks}
        onClose={() => setShowPuzzlePacks(false)}
      />

      <ColorTestModal 
        visible={showColorTest}
        onClose={() => setShowColorTest(false)}
      />
    </>
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
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#404040',
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
    padding: 10,
    borderRadius: 5,
    marginVertical: 8,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    position: 'absolute',
    left: 10,
  },
  buttonText: {
    color: '#e0e0e0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#e74c3c',
  },
  packsButton: {
    backgroundColor: '#23b360',
  },
  aboutButton: {
    backgroundColor: '#3498db',
  },
  adminButtons: {
    gap: 10,
  },
  adminButton: {
    backgroundColor: '#404040',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  adminButtonText: {
    color: '#e0e0e0',
    fontSize: 14,
    fontWeight: '500',
  },
  helpButton: {
    backgroundColor: '#9b59b6',
  },
  adminSection: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  adminTitle: {
    color: '#999',
    fontSize: 16,
    marginBottom: 15,
  },
  spacerLine: {
    height: 1, 
    backgroundColor: '#555', 
    marginVertical: 10,     
    width: '100%',          
  },
});

export default SettingsModal; 