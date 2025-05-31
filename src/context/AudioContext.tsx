import React, { createContext, useContext, useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import { storage } from '../utils/storage';

interface AudioContextType {
  playSound: (soundName: string) => Promise<void>;
  soundEnabled: boolean;
  toggleSound: (value?: boolean) => Promise<void>;
  isLoaded: boolean;
}

const AudioContext = createContext<AudioContextType | null>(null);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [sounds, setSounds] = useState<Record<string, Audio.Sound>>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadSounds = async () => {
      try {
        // Load sound setting from storage
        const savedSoundEnabled = await storage.getSoundEnabled();
        if (mounted) {
          setSoundEnabled(savedSoundEnabled);
        }

        // Initialize audio
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
          staysActiveInBackground: true,
          shouldDuckAndroid: true,
        });

        // Load all sounds
        const soundFiles = {
          restart: require('../assets/sounds/restart.mp3'),
          levelChange: require('../assets/sounds/level-change.mp3'),
          undoRedo: require('../assets/sounds/undo-redo.mp3'),
          hint: require('../assets/sounds/show-hint.mp3'),
        };

        const loadedSounds: Record<string, Audio.Sound> = {};
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

  const playSound = async (soundName: string) => {
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

  const toggleSound = async (value?: boolean) => {
    const newValue = typeof value === 'boolean' ? value : !soundEnabled;
    setSoundEnabled(newValue);
    await storage.setSoundEnabled(newValue);
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