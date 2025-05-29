import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, Platform, AppState } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameBoard from './src/components/GameBoard';
import SettingsIcon from './src/components/SettingsIcon';
import SettingsModal from './src/components/modals/SettingsModal';
import { setStatusBarHidden } from 'expo-status-bar';
import { Audio } from 'expo-av';
import { initialize, showInterstitialAd, preloadInterstitialAd } from './src/utils/interstitialAd';
import { showRewardedAd, preloadRewardedAd } from './src/utils/rewardAd';
import { getColorsForLevel } from './src/utils/colorSelector';
import { getColorHex } from './src/utils/colors';
import { TutorialProvider } from './src/contexts/TutorialContext';
import { AudioProvider, useAudio } from './src/contexts/AudioContext';
import TutorialScreen from './src/screens/TutorialScreen';
import { getLevelTitle, getLevelColor } from './src/utils/levelTitles';
import Svg, { Circle, Path, G } from 'react-native-svg';

// Constants for storage keys
const STORAGE_KEYS = {
  GAME_STATE: 'trios_game_state',
  SCORE: 'trios_score',
  LEVEL: 'trios_level',
  HINTS: 'trios_hints',
  SOUND_ENABLED: 'trios_sound_enabled'
};

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const [gameStarted, setGameStarted] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [savedGameState, setSavedGameState] = useState(null);
  const { soundEnabled, toggleSound } = useAudio();
  const [iconColors, setIconColors] = useState({
    red: getColorHex(getColorsForLevel(1)[0]),
    green: getColorHex(getColorsForLevel(1)[1]),
    blue: getColorHex(getColorsForLevel(1)[2])
  });
  const iconRef = useRef([]);
  const gameBoardRef = useRef(null);
  const [isAdminMode, setIsAdminMode] = useState(false);

  // Add a ref to track if we're currently saving state
  const isSavingRef = useRef(false);

  // Update icon colors when level changes
  useEffect(() => {
    if (savedGameState?.level) {
      const colors = getColorsForLevel(savedGameState.level);
      setIconColors({
        red: getColorHex(colors[0]),
        green: getColorHex(colors[1]),
        blue: getColorHex(colors[2])
      });
    }
  }, [savedGameState?.level]);

  // Hide status bar on mount and load saved game state
  useEffect(() => {
    // Hide the status bar
    setStatusBarHidden(true, 'fade');
    
    // Initialize audio
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: true,
      shouldDuckAndroid: true,
    });

    // Initialize ad system and preload ads
    const initializeAds = async () => {
      await initialize();
      // Only preload ads after initialization is complete
      setTimeout(() => {
        preloadInterstitialAd();
        preloadRewardedAd();
      }, 1000); // Wait a second before preloading
    };
    
    initializeAds();

    // Load saved game state and settings
    loadGameState();
    loadSettings();
    
    return () => {
      // Cleanup
      Audio.setAudioModeAsync({
        playsInSilentModeIOS: false,
        staysActiveInBackground: false,
        shouldDuckAndroid: false,
      });
    };
  }, []);

  // Check if we should show tutorial for new users
  useEffect(() => {
    const checkTutorialStatus = async () => {
      try {
        const tutorialShown = await AsyncStorage.getItem('trios_tutorial_shown');
        // Only show tutorial for new users who haven't seen it
        if (tutorialShown === null) {
          navigation.navigate('Tutorial');
        } else {
          // Only start the game after confirming tutorial is not needed
          setGameStarted(true);
        }
      } catch (error) {
        console.error('Error checking tutorial status:', error);
        // If there's an error, start the game anyway
        setGameStarted(true);
      }
    };
    checkTutorialStatus();
  }, []); // Remove savedGameState dependency since we don't need it

  // Check for admin mode on mount and when app state changes
  useEffect(() => {
    const checkAdminMode = async () => {
      try {
        const adminMode = await AsyncStorage.getItem('trios_admin_mode');
        //console.log('Checking admin mode:', adminMode === 'true');
        setIsAdminMode(adminMode === 'true');
        // If not in admin mode, ensure autoplay is off
        if (adminMode !== 'true' && autoPlay) {
          setAutoPlay(false);
        }
      } catch (error) {
        //console.error('Error checking admin mode:', error);
      }
    };

    // Check immediately
    checkAdminMode();

    // Also check when app comes to foreground
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active') {
        //console.log('Checking admin mode on visibility:', isAdminMode);
        checkAdminMode();
      }
    });

    return () => {
      subscription.remove();
    };
  }, [autoPlay]); // Add autoPlay to dependencies

  // Add focus effect to show game board when returning from tutorial
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Check if tutorial has been shown
      const checkTutorialShown = async () => {
        const tutorialShown = await AsyncStorage.getItem('trios_tutorial_shown');
        if (tutorialShown === 'true') {
          setGameStarted(true);
        }
      };
      checkTutorialShown();
    });

    return unsubscribe;
  }, [navigation]);

  // Function to load game state from AsyncStorage
  const loadGameState = async () => {
    try {
      // Load score and hints
      const [score, hints] = await Promise.all([
        AsyncStorage.getItem(STORAGE_KEYS.SCORE),
        AsyncStorage.getItem(STORAGE_KEYS.HINTS)
      ]);
      
      //console.log('Loading from storage:', { score, hints });
      
      // If we have saved state, use it
      if (score !== null) {
        const scoreValue = parseInt(score);
        const levelValue = Math.floor(scoreValue / 10) + 1;
        const gameState = {
          score: scoreValue,
          hints: hints ? parseInt(hints) : 5
        };
        
        //console.log('Setting saved game state:', gameState);
        setSavedGameState(gameState);
        
        // Update icon colors immediately when loading saved state
        const colors = getColorsForLevel(levelValue);
        setIconColors({
          red: getColorHex(colors[0]),
          green: getColorHex(colors[1]),
          blue: getColorHex(colors[2])
        });
      } else {
        console.log('No saved state found, initializing new game');
        // If no saved state, initialize with default values
        const initialGameState = {
          score: 0,
          hints: 5
        };
        setSavedGameState(initialGameState);
        
        // Only save initial state if we don't have any saved state
        if (score === null) {
          await AsyncStorage.multiSet([
            [STORAGE_KEYS.SCORE, '0'],
            [STORAGE_KEYS.HINTS, '5']
          ]);
        }
      }
    } catch (error) {
      console.error('Failed to load game state:', error);
      // If there's an error, initialize with default values
      const initialGameState = {
        score: 0,
        hints: 5
      };
      setSavedGameState(initialGameState);
    }
  };

  // Function to handle game state changes
  const handleGameStateChange = (gameState) => {
    const { score, hintsRemaining } = gameState;
    const level = Math.floor(score / 10) + 1;
    
    // Update local state
    setSavedGameState({
      score,
      hints: hintsRemaining,
      level
    });

    // Save to storage (only score and hints)
    saveGameState(score, hintsRemaining);
  };

  // Function to save game state to AsyncStorage
  const saveGameState = async (score, hints) => {
    try {
      // Save score and hints
      await AsyncStorage.multiSet([
        [STORAGE_KEYS.SCORE, score.toString()],
        [STORAGE_KEYS.HINTS, hints.toString()]
      ]);
      //console.log('Saved game state:', { score, hints });
    } catch (error) {
      //console.error('Failed to save game state:', error);
    }
  };

  // Function to reset game state
  const resetGame = async () => {
    try {
      // Clear saved game state
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.SCORE,
        STORAGE_KEYS.HINTS,
        'trios_tutorial_shown' // Also reset tutorial state
      ]);
      
      // Set initial game state
      const initialGameState = {
        score: 0,
        hints: 5
      };
      
      // Save initial state
      await AsyncStorage.multiSet([
        [STORAGE_KEYS.SCORE, '0'],
        [STORAGE_KEYS.HINTS, '5']
      ]);
      
      // Reset local state
      setSavedGameState(initialGameState);
      
      // Reset game board if it's mounted
      if (gameBoardRef.current && typeof gameBoardRef.current.startNewGame === 'function') {
        gameBoardRef.current.startNewGame();
      }
      
      // Navigate to tutorial
      navigation.navigate('Tutorial');
    } catch (error) {
      console.error('Failed to reset game:', error);
    }
  };

  // Function to load settings from AsyncStorage
  const loadSettings = async () => {
    try {
      // Load sound settings
      const soundEnabledStr = await AsyncStorage.getItem(STORAGE_KEYS.SOUND_ENABLED);
      
      // For new users (no setting exists), explicitly set and save true
      if (soundEnabledStr === null) {
        await AsyncStorage.setItem(STORAGE_KEYS.SOUND_ENABLED, 'true');
        toggleSound(true);
      } else {
        // For existing users, use their saved preference
        toggleSound(soundEnabledStr === 'true');
      }

      // Load admin mode
      const adminMode = await AsyncStorage.getItem('trios_admin_mode');
      setIsAdminMode(adminMode === 'true');

      // If we're not in admin mode, ensure autoplay is off
      if (adminMode !== 'true' && autoPlay) {
        setAutoPlay(false);
      }
    } catch (error) {
      console.error('Failed to load settings:', error);
      // Set default values if loading fails
      toggleSound(true); // Default to true on error
      setIsAdminMode(false);
      setAutoPlay(false);
    }
  };

  // Function to save settings to AsyncStorage
  const saveSettings = async (soundEnabled) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.SOUND_ENABLED, soundEnabled.toString());
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  };

  // Function to toggle sound setting - now uses AudioContext's toggleSound
  const handleToggleSound = async () => {
    toggleSound();
    await saveSettings(!soundEnabled);
  };

  const toggleAutoPlay = async () => {
    //console.log('Toggle autoplay called, admin mode:', isAdminMode);
    // Double check admin mode before allowing toggle
    const currentAdminMode = await AsyncStorage.getItem('trios_admin_mode');
    if (currentAdminMode !== 'true') {
      //console.log('Autoplay blocked - not in admin mode');
      return;
    }
    setAutoPlay(!autoPlay);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {gameStarted && (
            <View style={styles.levelTitleContainer}>
              <Svg width="18" height="18" viewBox="0 0 24 24" style={styles.levelIcon}>
                <Path 
                  d="M14.986 15.424l0.75 5.652-3.221-1.933c-0.311-0.184-0.703-0.196-1.029 0l-3.221 1.933 0.751-5.651c0.921 0.371 1.929 0.575 2.984 0.575s2.063-0.205 2.986-0.576zM15.332 12.991c-0.058 0.030-0.113 0.065-0.163 0.105-0.92 0.573-2.005 0.904-3.169 0.904-1.657 0-3.156-0.67-4.243-1.757s-1.757-2.586-1.757-4.243 0.67-3.156 1.757-4.243 2.586-1.757 4.243-1.757 3.156 0.67 4.243 1.757 1.757 2.586 1.757 4.243-0.67 3.156-1.757 4.243c-0.278 0.278-0.583 0.529-0.911 0.748zM7.14 14.355l-1.131 8.513c-0.073 0.547 0.312 1.050 0.86 1.123 0.234 0.031 0.461-0.022 0.646-0.134l4.485-2.691 4.486 2.691c0.474 0.284 1.088 0.131 1.372-0.343 0.122-0.203 0.163-0.431 0.134-0.646l-1.13-8.515c0.28-0.215 0.546-0.448 0.795-0.697 1.446-1.446 2.343-3.447 2.343-5.656s-0.897-4.21-2.343-5.657-3.448-2.343-5.657-2.343-4.21 0.897-5.657 2.343-2.343 3.448-2.343 5.657 0.897 4.21 2.343 5.657c0.25 0.25 0.516 0.483 0.796 0.698z"
                  fill={getLevelColor(savedGameState ? Math.floor((savedGameState.score || 0) / 10) + 1 : 1)}
                />
              </Svg>
              <Text style={styles.levelTitle}>
                {getLevelTitle(savedGameState ? Math.floor((savedGameState.score || 0) / 10) + 1 : 1)}
              </Text>
            </View>
          )}
        </View>
        
        <View style={styles.headerCenter}>
          <TouchableOpacity 
            style={[styles.gameIcon, autoPlay && styles.gameIconAutoPlay]} 
            onPress={toggleAutoPlay}
            activeOpacity={1}
          >
            <View style={[styles.iconSquare, styles.iconSquare1, { backgroundColor: iconColors.red, borderColor: autoPlay ? '#ff0000' : '#fff' }]} />
            <View style={[styles.iconSquare, styles.iconSquare2, { backgroundColor: iconColors.green, borderColor: autoPlay ? '#ff0000' : '#fff' }]} />
            <View style={[styles.iconSquare, styles.iconSquare3, { backgroundColor: iconColors.blue, borderColor: autoPlay ? '#ff0000' : '#fff' }]} />
          </TouchableOpacity>
          <Text style={styles.title}>TRIOS</Text>
        </View>
        
        <View style={styles.headerRight}>
          <SettingsIcon onPress={toggleSettings} />
        </View>
      </View>
      
      {gameStarted && (
        <GameBoard 
          ref={gameBoardRef}
          onBackPress={() => setGameStarted(false)} 
          autoPlay={autoPlay}
          initialGameState={savedGameState}
          onGameStateChange={handleGameStateChange}
          soundEnabled={soundEnabled}
        />
      )}
      
      <SettingsModal 
        isVisible={showSettings} 
        onClose={toggleSettings}
        onResetGame={resetGame}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        navigation={navigation}
        onGameStateChange={handleGameStateChange}
        onRollNewTiles={() => gameBoardRef.current?.rollNewTiles()}
      />
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AudioProvider>
        <TutorialProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Tutorial" component={TutorialScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </TutorialProvider>
      </AudioProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Match header background color
    ...Platform.select({
      android: {
        paddingTop: 0,
      },
    }),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: Platform.OS === 'ios' ? 40 : 22,
    paddingBottom: 10,
    backgroundColor: '#1E1E1E',
    maxWidth: 470,
    height: 80,
    alignSelf: 'center',
    width: '100%',
  },
  headerLeft: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  headerCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  headerRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E0E0E0',
  },
  settingsIconContainer: {
    position: 'absolute',
    right: 14,
    top: 14,
  },
  gameIcon: {
    width: 32,
    height: 32,
    marginTop: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gameIconAutoPlay: {
    // Remove the background color change
  },
  iconSquare: {
    width: 16,
    height: 16,
    borderRadius: 3,
    borderWidth: 1,
  },
  iconSquare1: {
    marginLeft: 1,
    marginRight:1,
    marginBottom: -2,
  },
  iconSquare2: {
    // backgroundColor is now set dynamically
  },
  iconSquare3: {
    // backgroundColor is now set dynamically
  },
  levelTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
  levelIcon: {
    marginTop: 0,
  },
  levelTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#c6c6c6',
  },
});
