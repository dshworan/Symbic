import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as NavigationBar from 'expo-navigation-bar';
import { AudioProvider } from './src/context/AudioContext';
import { adManager } from './src/utils/adManager'; // adjust path if needed
import { initialize as initializeInterstitialAds } from './src/utils/interstitialAd';
import { initializeFirebase } from './src/utils/firebase';
import { GameScreen } from './src/screens/GameScreen';
import TestInterstitialAdScreen from './src/screens/TestInterstitialAdScreen';
import TestRewardAdScreen from './src/screens/TestRewardAdScreen';
import LiveInterstitialAdScreen from './src/screens/LiveInterstitialAdScreen';
import LiveRewardAdScreen from './src/screens/LiveRewardAdScreen';

// Wrapper components to provide required props
const TestRewardAdWrapper = ({ navigation }: any) => (
  <TestRewardAdScreen onBackPress={() => navigation.goBack()} />
);

const LiveInterstitialAdWrapper = ({ navigation }: any) => (
  <LiveInterstitialAdScreen onBackPress={() => navigation.goBack()} />
);

const LiveRewardAdWrapper = ({ navigation }: any) => (
  <LiveRewardAdScreen onBackPress={() => navigation.goBack()} />
);

const Stack = createNativeStackNavigator();

export default function App() {
  // ✅ Initialize Firebase, AdManager and Interstitial Ads once when app starts
  useEffect(() => {
    const initServices = async () => {
      try {
        // Initialize Firebase first (but don't block if it fails)
        //console.log('🚀 Initializing Firebase...');
        await initializeFirebase();
      } catch (error) {
        //console.warn('⚠️ Firebase initialization failed, continuing without analytics:', error);
      }
      
      try {
        // Then initialize ads
        //console.log('🚀 Initializing AdManager...');
        await adManager.init();
        //console.log('🚀 Initializing Interstitial Ads...');
        await initializeInterstitialAds();
      } catch (error) {
        //console.error('❌ Failed to initialize ads:', error);
      }
    };

    initServices();
  }, []);

  // Style the navigation bar with dark background and light icons
  useEffect(() => {
    const styleNavBar = async () => {
      try {
        await NavigationBar.setBackgroundColorAsync('#1E1E1E'); // solid dark background
        await NavigationBar.setButtonStyleAsync('light');        // white nav icons
        //console.log('🎨 Navigation bar styled with dark background');
      } catch (error) {
        //console.warn('⚠️ Failed to style navigation bar:', error);
      }
    };
    styleNavBar();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AudioProvider>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#1a1a1a',
              },
              headerTintColor: '#e0e0e0',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen 
              name="Game" 
              component={GameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="TestInterstitialAd" 
              component={TestInterstitialAdScreen}
              options={{ title: 'Test Interstitial Ad' }}
            />
            <Stack.Screen 
              name="TestRewardAd" 
              component={TestRewardAdWrapper}
              options={{ title: 'Test Reward Ad' }}
            />
            <Stack.Screen 
              name="LiveInterstitialAd" 
              component={LiveInterstitialAdWrapper}
              options={{ title: 'Live Interstitial Ad' }}
            />
            <Stack.Screen 
              name="LiveRewardAd" 
              component={LiveRewardAdWrapper}
              options={{ title: 'Live Reward Ad' }}
            />
          </Stack.Navigator>
        </AudioProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
