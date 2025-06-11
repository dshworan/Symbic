import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch, Platform, Alert } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Svg, Path, Circle } from 'react-native-svg';
import AboutModal from './AboutModal';
import ResetConfirmationModal from './ResetConfirmationModal';
import PuzzlePacksModal from './PuzzlePacksModal';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAudio } from '../../context/AudioContext';
import { puzzleManager } from '../../utils/puzzleManager';
import { levelManager } from '../../data/levels/levelManager';
import ColorTestModal from './ColorTestModal';
import ShapesAndColorsTestModal from './ShapesAndColorsTestModal';
import PackDataManager from '../../data/packDataManager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { hintManager } from '../../utils/hintManager';
import packList from '../../data/packList';
import HintRewardModal from './HintRewardModal';
import { showRewardedAd, preloadRewardedAd } from '../../utils/rewardAd';

type RootStackParamList = {
  Game: {
    refreshHints?: number;
    refreshAdmin?: number;
  };
  TestInterstitialAd: undefined;
  TestRewardAd: undefined;
  LiveInterstitialAd: undefined;
  LiveRewardAd: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Game'>;

interface SettingsModalProps {
  isVisible: boolean;
  onClose: () => void;
  onReset: () => void;
  score: number;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isVisible, onClose, onReset, score }) => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();
  const { soundEnabled, toggleSound } = useAudio();
  const [showAbout, setShowAbout] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showPuzzlePacks, setShowPuzzlePacks] = useState(false);
  const [showColorTest, setShowColorTest] = useState(false);
  const [showShapesAndColorsTest, setShowShapesAndColorsTest] = useState(false);
  const [showClearStorageConfirm, setShowClearStorageConfirm] = useState(false);
  const [showUnlockAllConfirm, setShowUnlockAllConfirm] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMusicEnabled, setIsMusicEnabled] = useState(true);
  const [isHapticEnabled, setIsHapticEnabled] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showHintReward, setShowHintReward] = useState(false);
  const [isSuccessView, setIsSuccessView] = useState(false);

  useEffect(() => {
    checkAdminStatus();
  }, [(route.params as any)?.refreshAdmin]);

  const checkAdminStatus = async () => {
    try {
      const adminStatus = await AsyncStorage.getItem('@admin_status');
      setIsAdmin(adminStatus === 'true');
    } catch (error) {
      console.error('Error checking admin status:', error);
    }
  };

  const handleSoundToggle = async () => {
    await toggleSound();
  };

  const handleGetMoreHints = () => {
    setIsSuccessView(false);
    setShowHintReward(true);
  };

  const handleWatchAd = async () => {
    try {
      // Show the ad
      await showRewardedAd(async (reward) => {
        // Add 5 hints after watching the ad
        await hintManager.addHints(5);
        // Preload the next ad
        preloadRewardedAd();
        // Force a refresh of the game page
        navigation.setParams({ refreshHints: Date.now() });
        
        // Switch to success view
        setIsSuccessView(true);
      });
    } catch (error) {
      console.error('Error showing reward ad:', error);
      Alert.alert(
        'Error',
        'Failed to show ad. Please try again later.',
        [{ text: 'OK', style: 'cancel' }]
      );
    }
  };

  const handleCloseModal = () => {
    setShowHintReward(false);
    setIsSuccessView(false);
  };

  const handleReset = () => {
    setShowResetConfirm(true);
  };

  const confirmReset = async () => {
    // Reset the game state
    puzzleManager.resetToFirstPuzzle();
    levelManager.resetToFirstLevel();
    
    // Clear completion data
    const packDataManager = PackDataManager.getInstance();
    await packDataManager.clearCompletionData();
    
    // Reset hints
    await hintManager.resetHints();
    
    // Reset score in AsyncStorage
    try {
      await AsyncStorage.removeItem('@game_score');
    } catch (error) {
      console.error('Error resetting score:', error);
    }
    
    // Reset score in parent component
    onReset();
    
    setShowResetConfirm(false);
    onClose();
  };

  const openAdScreen = (screenName: keyof RootStackParamList) => {
    onClose();
    navigation.navigate(screenName);
  };

  const handleClearAllStorage = async () => {
    try {
      // Clear all AsyncStorage data
      await AsyncStorage.clear();
      
      // Reset all managers
      const packDataManager = PackDataManager.getInstance();
      await packDataManager.clearAllStorage();
      await hintManager.resetHints();
      
      // Force a refresh of the game page to update hint count
      navigation.setParams({ refreshHints: Date.now() });
      
      // Show success message
      Alert.alert(
        'Success',
        'All local storage has been cleared. The app will now behave like a fresh install.',
        [{ text: 'OK', onPress: onClose }]
      );
    } catch (error) {
      console.error('Error clearing storage:', error);
      Alert.alert(
        'Error',
        'Failed to clear storage. Please try again.',
        [{ text: 'OK' }]
      );
    }
  };

  const handleAdminLogout = async () => {
    try {
      console.log('Removing admin status');
      await AsyncStorage.removeItem('@admin_status');
      setIsAdmin(false);
    } catch (error) {
      console.error('Error logging out of admin:', error);
    }
  };

  const handleUnlockAllPacks = async () => {
    try {
      const packDataManager = PackDataManager.getInstance();
      // Get all packs from packList
      const allPacks = packList.map(pack => pack.pack);
      // Unlock each pack
      allPacks.forEach(packId => {
        packDataManager.unlockPack(packId);
      });
      Alert.alert('Success', 'All packs have been unlocked!');
    } catch (error) {
      console.error('Error unlocking packs:', error);
      Alert.alert('Error', 'Failed to unlock packs. Please try again.');
    } finally {
      setShowUnlockAllConfirm(false);
    }
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
                    <Text style={styles.buttonText}>{soundEnabled ? 'Disable Sound' : 'Sound is Off'}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={[styles.button, styles.hintsButton]}
                  onPress={handleGetMoreHints}
                >
                  <View style={styles.buttonContent}>
                    <View style={styles.buttonIcon}>
                      <Svg width="24" height="24" viewBox="0 0 256 256">
                        <Path d="M172.00244,196a12.0006,12.0006,0,0,1-12,12h-64a12,12,0,1,1,0-24h64A12.0006,12.0006,0,0,1,172.00244,196Zm-20,24h-48a12,12,0,1,0,0,24h48a12,12,0,0,0,0-24Zm-24-208A92.00118,92.00118,0,0,0,67.146,172.99805a11.9999,11.9999,0,0,0,15.88086-17.99414,68.00035,68.00035,0,1,1,89.94824.002A11.9999,11.9999,0,1,0,188.856,173,92.00075,92.00075,0,0,0,128.00244,12Z" fill="#FFFFFF" />
                      </Svg>
                    </View>
                    <Text style={styles.buttonText}>Get More Hints</Text>
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
              </View>
              <View style={styles.section}>
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

              {/* Admin Section */}
              {isAdmin && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Admin</Text>
                  <View style={styles.adminButtons}>
                    
                    <TouchableOpacity 
                      style={styles.adminButton}
                      onPress={() => setShowColorTest(true)}
                    >
                      <Text style={styles.adminButtonText}>Color Test</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={styles.adminButton}
                      onPress={() => setShowShapesAndColorsTest(true)}
                    >
                      <Text style={styles.adminButtonText}>Shapes & Colors Test</Text>
                    </TouchableOpacity>
                    <View style={styles.spacerLine} />
                    <TouchableOpacity 
                      style={[styles.adminButton, styles.dangerButton]}
                      onPress={() => setShowClearStorageConfirm(true)}
                    >
                      <Text style={styles.adminButtonText}>Clear All Storage</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={[styles.adminButton, styles.successButton]}
                      onPress={() => setShowUnlockAllConfirm(true)}
                    >
                      <Text style={styles.adminButtonText}>Unlock All Packs</Text>
                    </TouchableOpacity>
                    <View style={styles.spacerLine} />
                    <TouchableOpacity 
                      style={styles.adminButtonAds} 
                      onPress={() => openAdScreen('TestInterstitialAd')}
                    >
                      <Text style={styles.adminButtonText}>Test Interstitial</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={styles.adminButtonAds} 
                      onPress={() => openAdScreen('TestRewardAd')}
                    >
                      <Text style={styles.adminButtonText}>Test Reward</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={styles.adminButtonAds} 
                      onPress={() => openAdScreen('LiveInterstitialAd')}
                    >
                      <Text style={styles.adminButtonText}>Live Interstitial</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={styles.adminButtonAds} 
                      onPress={() => openAdScreen('LiveRewardAd')}
                    >
                      <Text style={styles.adminButtonText}>Live Reward</Text>
                    </TouchableOpacity>
                    <View style={styles.spacerLine} />
                    <TouchableOpacity 
                      style={[styles.adminButton, styles.logoutButton]} 
                      onPress={handleAdminLogout}
                    >
                      <Text style={styles.adminButtonText}>Logout of Admin</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}

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
        onCloseSettings={onClose}
      />

      <ColorTestModal 
        visible={showColorTest}
        onClose={() => setShowColorTest(false)}
      />

      {showShapesAndColorsTest && (
        <ShapesAndColorsTestModal
          visible={showShapesAndColorsTest}
          onClose={() => setShowShapesAndColorsTest(false)}
          onCloseSettings={onClose}
        />
      )}

      <Modal
        animationType="fade"
        transparent={true}
        visible={showClearStorageConfirm}
        onRequestClose={() => setShowClearStorageConfirm(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.confirmModalView}>
            <Text style={styles.confirmTitle}>Clear All Storage?</Text>
            <Text style={styles.confirmText}>
              This will delete all saved progress, settings, and data. This action cannot be undone.
            </Text>
            <View style={styles.confirmButtons}>
              <TouchableOpacity
                style={[styles.confirmButton, styles.cancelButton]}
                onPress={() => setShowClearStorageConfirm(false)}
              >
                <Text style={styles.confirmButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.confirmButton, styles.dangerButton]}
                onPress={() => {
                  setShowClearStorageConfirm(false);
                  handleClearAllStorage();
                }}
              >
                <Text style={styles.confirmButtonText}>Clear All</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Unlock All Packs Confirmation Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showUnlockAllConfirm}
        onRequestClose={() => setShowUnlockAllConfirm(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.confirmModalView}>
            <Text style={styles.confirmTitle}>Unlock All Packs</Text>
            <Text style={styles.confirmText}>
              This will unlock all packs in the game. This action cannot be undone.
            </Text>
            <View style={styles.confirmButtons}>
              <TouchableOpacity
                style={[styles.confirmButton, styles.cancelButton]}
                onPress={() => setShowUnlockAllConfirm(false)}
              >
                <Text style={styles.confirmButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.confirmButton, styles.successButton]}
                onPress={handleUnlockAllPacks}
              >
                <Text style={styles.confirmButtonText}>Unlock All</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <HintRewardModal
        isVisible={showHintReward}
        onClose={handleCloseModal}
        onWatchAd={handleWatchAd}
        isSuccessView={isSuccessView}
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
  adminButtonAds: {
    backgroundColor: '#1580c8',
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
  hintsButton: {
    backgroundColor: '#dd8b09',
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
  dangerButton: {
    backgroundColor: '#e74c3c',
  },
  successButton: {
    backgroundColor: '#2ecc71',
  },
  confirmModalView: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 20,
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  confirmTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e0e0e0',
    marginBottom: 15,
  },
  confirmText: {
    fontSize: 16,
    color: '#bbbbbb',
    textAlign: 'center',
    marginBottom: 20,
  },
  confirmButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 10,
  },
  confirmButton: {
    flex: 1,
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#404040',
  },
  confirmButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
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
  modalIconContainer: {
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
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 4,
    textAlign: 'center',
  },
  modalReward: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 24,
    textAlign: 'center',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  modalWatchButton: {
    backgroundColor: '#4CAF50',
    borderColor: '#45a049',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#888',
    marginTop: 10,
  },
});

export default SettingsModal; 