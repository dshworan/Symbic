import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AudioProvider } from './src/context/AudioContext';
import { adManager } from './src/utils/adManager'; // adjust path if needed
import { initialize as initializeInterstitialAds } from './src/utils/interstitialAd';
import { GameScreen } from './src/screens/GameScreen';
import TestInterstitialAdScreen from './src/screens/TestInterstitialAdScreen';
import TestRewardAdScreen from './src/screens/TestRewardAdScreen';
import LiveInterstitialAdScreen from './src/screens/LiveInterstitialAdScreen';
import LiveRewardAdScreen from './src/screens/LiveRewardAdScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  // ✅ Initialize AdManager and Interstitial Ads once when app starts
  useEffect(() => {
    const initAds = async () => {
      await adManager.init();
      await initializeInterstitialAds();
    };

    initAds();
  }, []);

  return (
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
            component={TestRewardAdScreen}
            options={{ title: 'Test Reward Ad' }}
          />
          <Stack.Screen 
            name="LiveInterstitialAd" 
            component={LiveInterstitialAdScreen}
            options={{ title: 'Live Interstitial Ad' }}
          />
          <Stack.Screen 
            name="LiveRewardAd" 
            component={LiveRewardAdScreen}
            options={{ title: 'Live Reward Ad' }}
          />
        </Stack.Navigator>
      </AudioProvider>
    </NavigationContainer>
  );
}
