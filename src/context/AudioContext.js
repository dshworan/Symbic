import React, { createContext, useContext, useState, useEffect } from 'react';
import { Audio } from 'expo-av';

const AudioContext = createContext();

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

export const AudioProvider = ({ children }) => {
  const [sounds, setSounds] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadSounds = async () => {
      try {
        // Initialize audio
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
          staysActiveInBackground: true,
          shouldDuckAndroid: true,
        });

        // Load all sounds
        const soundFiles = {
          incorrect: require('../assets/sounds/incorrect.mp3'),
          correct: require('../assets/sounds/correct.mp3'),
          shuffle: require('../assets/sounds/shuffle-tiles.mp3'),
          hintWon: require('../assets/sounds/hint-won.mp3'),
          showHint: require('../assets/sounds/show-hint.mp3'),
          levelUp: require('../assets/sounds/level-up.mp3'),
          sort: require('../assets/sounds/sort.mp3'),
          switchToggle: require('../assets/sounds/switch-toggle.mp3'),
          tutorialComplete: require('../assets/sounds/tutorial-complete.mp3'),
        };

        const loadedSounds = {};
        for (const [key, file] of Object.entries(soundFiles)) {
          const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: false });
          loadedSounds[key] = sound;
        }

        if (mounted) {
          setSounds(loadedSounds);
          setIsLoaded(true);
        }
      } catch (error) {
        console.error('Error loading sounds:', error);
        if (mounted) {
          setIsLoaded(true);
        }
      }
    };

    loadSounds();

    return () => {
      mounted = false;
      // Unload all sounds
      Object.values(sounds).forEach(async (sound) => {
        try {
          if (sound) {
            const status = await sound.getStatusAsync();
            if (status.isLoaded) {
              await sound.unloadAsync();
            }
          }
        } catch (error) {
          console.error('Error unloading sound:', error);
        }
      });
    };
  }, []);

  const playSound = async (soundName) => {
    try {
      if (!soundEnabled || !isLoaded || !sounds[soundName]) {
        return;
      }

      const sound = sounds[soundName];
      const status = await sound.getStatusAsync();
      
      if (!status.isLoaded) {
        console.log(`${soundName} sound not loaded yet`);
        return;
      }

      if (status.isPlaying) {
        await sound.stopAsync();
      }
      
      await sound.setPositionAsync(0);
      await sound.playAsync();
    } catch (error) {
      console.log(`Error playing ${soundName} sound:`, error);
    }
  };

  const toggleSound = (value) => {
    if (typeof value === 'boolean') {
      setSoundEnabled(value);
    } else {
      setSoundEnabled(!soundEnabled);
    }
  };

  return (
    <AudioContext.Provider value={{ 
      playSound, 
      soundEnabled, 
      toggleSound,
      isLoaded 
    }}>
      {children}
    </AudioContext.Provider>
  );
}; 