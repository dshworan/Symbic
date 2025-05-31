import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch, TextInput } from 'react-native';
import { Audio } from 'expo-av';
import Svg, { Path, Circle, G } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ConfirmationModal from './ConfirmationModal';
import HelpModal from './HelpModal';
import AboutModal from './AboutModal';
import TestInterstitialAdScreen from '../../screens/TestInterstitialAdScreen';
import TestRewardAdScreen from '../../screens/TestRewardAdScreen';
import LiveInterstitialAdScreen from '../../screens/LiveInterstitialAdScreen';
import LiveRewardAdScreen from '../../screens/LiveRewardAdScreen';
import TilesModal from './TilesModal';
import LevelsModal from './LevelsModal';
import LevelTitlesModal from './LevelTitlesModal';

const SettingsModal = ({ isVisible, onClose, onResetGame, soundEnabled, onToggleSound, navigation, onGameStateChange, onRollNewTiles }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showInterstitialAds, setShowInterstitialAds] = useState(false);
  const [showRewardAds, setShowRewardAds] = useState(false);
  const [showLiveInterstitialAds, setShowLiveInterstitialAds] = useState(false);
  const [showLiveRewardAds, setShowLiveRewardAds] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showTilesModal, setShowTilesModal] = useState(false);
  const [showLevelsModal, setShowLevelsModal] = useState(false);
  const [showLevelTitlesModal, setShowLevelTitlesModal] = useState(false);
  const [switchSound, setSwitchSound] = useState(null);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [levelInput, setLevelInput] = useState('');

  // Check for admin mode on mount
  useEffect(() => {
    const checkAdminMode = async () => {
      try {
        const adminMode = await AsyncStorage.getItem('trios_admin_mode');
        //console.log('Checking admin mode:', adminMode);
        setIsAdminMode(adminMode === 'true');
      } catch (error) {
        //console.error('Error checking admin mode:', error);
      }
    };
    checkAdminMode();
  }, []);

  // Also check admin mode when modal becomes visible
  useEffect(() => {
    if (isVisible) {
      const checkAdminMode = async () => {
        try {
          const adminMode = await AsyncStorage.getItem('trios_admin_mode');
          //console.log('Checking admin mode on visibility:', adminMode);
          setIsAdminMode(adminMode === 'true');
        } catch (error) {
          //console.error('Error checking admin mode:', error);
        }
      };
      checkAdminMode();
    }
  }, [isVisible]);

  // Load the switch toggle sound
  useEffect(() => {
    const loadSwitchSound = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require('../../assets/sounds/switch-toggle.mp3')
        );
        setSwitchSound(sound);
      } catch (error) {
        console.error('Error loading switch sound:', error);
      }
    };

    loadSwitchSound();

    // Cleanup function to unload sound
    return () => {
      if (switchSound) {
        switchSound.unloadAsync();
      }
    };
  }, []);

  // Function to play the switch toggle sound
  const playSwitchSound = async () => {
    try {
      if (switchSound) {
        await switchSound.setPositionAsync(0);
        await switchSound.playAsync();
      }
    } catch (error) {
      console.error('Error playing switch sound:', error);
    }
  };

  const handleSoundToggle = () => {
    playSwitchSound();
    onToggleSound();
  };

  const handleResetPress = () => {
    setShowResetConfirm(true);
  };

  const handleConfirmReset = () => {
    // Close the confirmation modal
    setShowResetConfirm(false);
    
    // Call the reset function
    onResetGame();
    
    // Close the settings modal
    onClose();
  };

  const handleCancelReset = () => {
    setShowResetConfirm(false);
  };

  const handleInterstitialAdsPress = () => {
    setShowInterstitialAds(true);
  };

  const handleRewardAdsPress = () => {
    setShowRewardAds(true);
  };

  const handleBackFromInterstitialAds = () => {
    setShowInterstitialAds(false);
  };

  const handleBackFromRewardAds = () => {
    setShowRewardAds(false);
  };

  const handleLiveInterstitialAdsPress = () => {
    setShowLiveInterstitialAds(true);
  };

  const handleLiveRewardAdsPress = () => {
    setShowLiveRewardAds(true);
  };

  const handleBackFromLiveInterstitialAds = () => {
    setShowLiveInterstitialAds(false);
  };

  const handleBackFromLiveRewardAds = () => {
    setShowLiveRewardAds(false);
  };

  const handleHelpPress = () => {
    setShowHelp(true);
  };

  const handleAboutPress = () => {
    setShowAbout(true);
  };

  const handleCloseHelp = () => {
    setShowHelp(false);
  };

  const handleCloseAbout = () => {
    setShowAbout(false);
  };

  const handleAdminModeEnabled = () => {
    setShowAbout(false); // Close about modal
    onClose(); // Close settings modal
  };

  const handleTilesPress = () => {
    setShowTilesModal(true);
  };

  const handleLevelsPress = () => {
    setShowLevelsModal(true);
  };

  const handleTutorialPress = () => {
    onClose(); // Close the settings modal
    navigation.navigate('Tutorial'); // Navigate to tutorial screen
  };

  const handleExitAdminMode = async () => {
    try {
      await AsyncStorage.removeItem('trios_admin_mode');
      setIsAdminMode(false);
    } catch (error) {
      console.error('Error exiting admin mode:', error);
    }
  };

  // Add function to handle level change
  const handleLevelChange = async () => {
    try {
      const newLevel = parseInt(levelInput);
      if (isNaN(newLevel) || newLevel < 1) {
        return; // Invalid input
      }
      
      // Calculate new score (level * 10 - 10 to get the minimum score for that level)
      const newScore = (newLevel * 10) - 10;
      
      // Save new score to AsyncStorage
      await AsyncStorage.setItem('trios_score', newScore.toString());
      
      // Reset the input
      setLevelInput('');
      
      // Update game state with new level and score
      onGameStateChange({
        score: newScore,
        level: newLevel,
        hintsRemaining: 5, // Reset hints to default
        moves: 0
      });
      
      // Close the modal
      onClose();

      // Add a small delay and then trigger rollNewTiles
      setTimeout(() => {
        if (onRollNewTiles) {
          onRollNewTiles();
        }
      }, 500);
    } catch (error) {
      console.error('Error changing level:', error);
    }
  };

  const handleLevelTitlesPress = () => {
    setShowLevelTitlesModal(true);
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
            {/* Header */}
            <View style={styles.modalHeader}>
              <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Settings</Text>
            </View>
            
            <ScrollView 
              style={styles.modalContent}
              contentContainerStyle={styles.scrollViewContent}
            >
              {/* Game Settings */}
              <View style={styles.contentBox}>
                <Text style={styles.sectionTitle}>Game Settings</Text>
                <View style={styles.settingRow}>
                  <Text style={styles.settingLabel}>Sound</Text>
                  <TouchableOpacity 
                    style={styles.toggleContainer}
                    onPress={handleSoundToggle}
                  >
                    <View style={[styles.toggle, soundEnabled && styles.toggleActive]}>
                      <View style={[styles.toggleHandle, soundEnabled && styles.toggleHandleActive]} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              
              {/* Info Buttons */}
              <View style={styles.contentBox}>
                <Text style={styles.sectionTitle}>Info</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity 
                    style={[styles.navButton, styles.helpButton]}
                    onPress={handleHelpPress}
                  >
                    <View style={styles.iconContainer}>
                      <Svg width="18" height="18" viewBox="0 0 24 24">
                        <Circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                        <Path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        <Circle cx="12" cy="17" r="0.5" stroke="#FFFFFF" strokeWidth="2" fill="#FFFFFF" />
                      </Svg>
                    </View>
                    <Text style={styles.buttonText}>Help</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={[styles.navButton, styles.tutorialButton]}
                    onPress={handleTutorialPress}
                  >
                    <View style={styles.iconContainer}>
                      <Svg width="18" height="18" viewBox="0 0 24 24">
                        <Path d="M5 3 19 12 5 21 5 3z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </Svg>
                    </View>
                    <Text style={styles.buttonText}>Tutorial</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={[styles.navButton, styles.aboutButton]}
                    onPress={handleAboutPress}
                  >
                    <View style={styles.iconContainer}>
                      <Svg width="18" height="18" viewBox="0 0 24 24">
                        <Path d="M18 20a6 6 0 0 0-12 0" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        <Circle cx="12" cy="10" r="4" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                        <Circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                      </Svg>
                    </View>
                    <Text style={styles.buttonText}>About</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              {/* Reset Button */}
              <View style={styles.contentBox}>
                <Text style={styles.sectionTitle}>Reset</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity 
                    style={[styles.navButton, styles.resetButton]}
                    onPress={handleResetPress}
                  >
                    <View style={styles.iconContainer}>
                      <Svg width="18" height="18" viewBox="0 0 24 24">
                        <Path d="M3 2v6h6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        <Path d="M3 13a9 9 0 1 0 3-7.7L3 8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </Svg>
                    </View>
                    <Text style={styles.buttonText}>Reset Game</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              {/* Admin Dev Section - Only visible in admin mode */}
              {isAdminMode && (
                <View style={[styles.contentBox, styles.adminBox]}>
                  <Text style={styles.sectionTitle}>Admin</Text>

                  <View style={styles.levelInputContainer}>
                      <TextInput
                        style={styles.levelInput}
                        placeholder="Enter level"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                        value={levelInput}
                        onChangeText={setLevelInput}
                      />
                      <TouchableOpacity 
                        style={[styles.navButton, styles.levelButton]}
                        onPress={handleLevelChange}
                      >
                        <Text style={[styles.buttonText, styles.levelButtonText]}>Set Level</Text>
                      </TouchableOpacity>
                    </View>

                  <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                      style={[styles.navButton, styles.levelsButton]}
                      onPress={handleLevelsPress}
                    >
                      <View style={styles.iconContainer}>
                        <Svg width="18" height="18" viewBox="0 0 24 24">
                          <Path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                          <Path d="M8 8h8M8 12h8M8 16h8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
                        </Svg>
                      </View>
                      <Text style={styles.buttonText}>View 1000 Levels</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                      style={[styles.navButton, styles.tilesButton]}
                      onPress={handleTilesPress}
                    >
                      <View style={styles.iconContainer}>
                        <Svg width="18" height="18" viewBox="0 0 24 24">
                          <Path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                          <Path d="M8 8h8M8 12h8M8 16h8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
                        </Svg>
                      </View>
                      <Text style={styles.buttonText}>View All Tiles</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                      style={[styles.navButton, styles.levelTitlesButton]}
                      onPress={handleLevelTitlesPress}
                    >
                      <View style={styles.iconContainer}>
                        <Svg width="18" height="18" viewBox="0 0 24 24">
                          <Path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                          <Path d="M8 8h8M8 12h8M8 16h8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
                        </Svg>
                      </View>
                      <Text style={styles.buttonText}>Level Award Titles</Text>
                    </TouchableOpacity>

                    <View style={styles.spacer} />

                    <TouchableOpacity 
                      style={[styles.navButton, styles.devButton]}
                      onPress={handleInterstitialAdsPress}
                    >
                      <View style={styles.iconContainer}>
                        <Svg width="18" height="18" viewBox="0 0 24 24">
                          <Path d="M12 2v20M2 12h20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
                        </Svg>
                      </View>
                      <Text style={styles.buttonText}>Test Interstitial Ads</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                      style={[styles.navButton, styles.rewardButton]}
                      onPress={handleRewardAdsPress}
                    >
                      <View style={styles.iconContainer}>
                        <Svg width="18" height="18" viewBox="0 0 24 24">
                          <Path d="M12 2v20M2 12h20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
                        </Svg>
                      </View>
                      <Text style={styles.buttonText}>Test Reward Ads</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                      style={[styles.navButton, styles.liveDevButton]}
                      onPress={handleLiveInterstitialAdsPress}
                    >
                      <View style={styles.iconContainer}>
                        <Svg width="18" height="18" viewBox="0 0 24 24">
                          <Path d="M12 2v20M2 12h20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
                        </Svg>
                      </View>
                      <Text style={styles.buttonText}>Live Interstitial Ads</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                      style={[styles.navButton, styles.liveRewardButton]}
                      onPress={handleLiveRewardAdsPress}
                    >
                      <View style={styles.iconContainer}>
                        <Svg width="18" height="18" viewBox="0 0 24 24">
                          <Path d="M12 2v20M2 12h20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
                        </Svg>
                      </View>
                      <Text style={styles.buttonText}>Live Reward Ads</Text>
                    </TouchableOpacity>

                    <View style={styles.spacer} />

                    <TouchableOpacity 
                      style={[styles.navButton, styles.exitAdminButton]}
                      onPress={handleExitAdminMode}
                    >
                      <View style={styles.iconContainer}>
                        <Svg width="18" height="18" viewBox="0 0 24 24">
                          <Path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          <Path d="M16 17l5-5-5-5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          <Path d="M21 12H9" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </Svg>
                      </View>
                      <Text style={styles.buttonText}>Exit Admin Mode</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>

      {showResetConfirm && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={showResetConfirm}
          onRequestClose={() => setShowResetConfirm(false)}
        >
          <ConfirmationModal
            isVisible={showResetConfirm}
            title="Reset Game"
            message="Are you sure you want to reset your game? This will set your score to 0 and restore hints to default."
            onConfirm={handleConfirmReset}
            onCancel={handleCancelReset}
          />
        </Modal>
      )}

      {/* Help Modal */}
      <HelpModal 
        isVisible={showHelp}
        onClose={handleCloseHelp}
      />

      {/* About Modal */}
      <AboutModal 
        isVisible={showAbout}
        onClose={handleCloseAbout}
        onAdminModeEnabled={handleAdminModeEnabled}
      />

      {/* Interstitial Ad Testing Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showInterstitialAds}
        onRequestClose={handleBackFromInterstitialAds}
      >
        <TestInterstitialAdScreen onBackPress={handleBackFromInterstitialAds} />
      </Modal>

      {/* Reward Ad Testing Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showRewardAds}
        onRequestClose={handleBackFromRewardAds}
      >
        <TestRewardAdScreen onBackPress={handleBackFromRewardAds} />
      </Modal>

      {/* Live Interstitial Ad Testing Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showLiveInterstitialAds}
        onRequestClose={handleBackFromLiveInterstitialAds}
      >
        <LiveInterstitialAdScreen onBackPress={handleBackFromLiveInterstitialAds} />
      </Modal>

      {/* Live Reward Ad Testing Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showLiveRewardAds}
        onRequestClose={handleBackFromLiveRewardAds}
      >
        <LiveRewardAdScreen onBackPress={handleBackFromLiveRewardAds} />
      </Modal>

      {/* Tiles Modal */}
      <TilesModal
        isVisible={showTilesModal}
        onClose={() => setShowTilesModal(false)}
      />

      {/* Levels Modal */}
      <LevelsModal
        isVisible={showLevelsModal}
        onClose={() => setShowLevelsModal(false)}
      />

      {/* Level Titles Modal */}
      <LevelTitlesModal
        isVisible={showLevelTitlesModal}
        onClose={() => setShowLevelTitlesModal(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  modalView: {
    width: '90%',
    maxWidth: 500,
    height: '90%',
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
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#292929',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 28,
    color: '#E0E0E0',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E0E0E0',
  },
  modalContent: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 15,
  },
  contentBox: {
    backgroundColor: '#292929',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
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
    color: '#E0E0E0',
    textAlign: 'center',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#404040',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333333',
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
  },
  settingLabel: {
    color: '#E0E0E0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  toggleContainer: {
    alignItems: 'center',
  },
  toggle: {
    width: 50,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#555555',
    padding: 3,
  },
  toggleActive: {
    backgroundColor: '#4CAF50',
  },
  toggleHandle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  toggleHandleActive: {
    transform: [{ translateX: 24 }],
  },
  buttonContainer: {
    gap: 10,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 6,
    marginBottom: 10,
    position: 'relative',
  },
  helpButton: {
    backgroundColor: '#3498db',
  },
  tutorialButton: {
    backgroundColor: '#2ecc71', // tutorial
  },
  aboutButton: {
    backgroundColor: '#9b59b6', // about
  },
  resetButton: {
    backgroundColor: '#e74c3c', // reset
  },
  devButton: {
    backgroundColor: '#f39c12', // test interstitial ads
  },
  rewardButton: {
    backgroundColor: '#e67e22', // test reward ads
  },
  liveDevButton: {
    backgroundColor: '#27ae60', // live interstitial ads
  },
  liveRewardButton: {
    backgroundColor: '#16a085', // live reward ads
  },
  tilesButton: {
    backgroundColor: '#4A90E2', // view all tiles
  },
  exitAdminButton: {
    backgroundColor: '#7f8c8d', // exit admin mode
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  iconContainer: {
    width: 18,
    marginRight: 10,
  },
  spacer: {
    height: 15,
  },
  adminBox: {
    marginTop: 25,
  },
  levelInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  levelInput: {
    flex: 1,
    backgroundColor: '#4e4e4e',
    color: '#FFFFFF',
    padding: 14,
    borderRadius: 6,
    fontSize: 16,
    width: '50%',
    marginBottom: 10,
    height: 46,
  },
  levelButton: {
    backgroundColor: '#185baa',
    flex: 1,
    width: '50%',
    paddingLeft: 24,
  },
  levelButtonText: {
    position: 'relative',
    left: 'auto',
    right: 'auto',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 18,
  },
  levelsButton: {
    backgroundColor: '#8e44ad',
  },
  levelTitlesButton: {
    backgroundColor: '#6f59b6',
  },
});

export default SettingsModal; 