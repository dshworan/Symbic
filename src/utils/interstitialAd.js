import { Platform, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Check if we're on web platform
const isWeb = Platform.OS === 'web';

// Import the appropriate module based on platform
let MobileAds;
let InterstitialAd;
let AdEventType;

if (isWeb) {
  // Use mock implementation for web
  const MockAdMob = require('./mock-admob');
  MobileAds = MockAdMob.default;
  InterstitialAd = MockAdMob.InterstitialAd;
  AdEventType = MockAdMob.AdEventType;
} else {
  // Use real implementation for native
  try {
    const NativeAds = require('react-native-google-mobile-ads');
    MobileAds = NativeAds;
    InterstitialAd = NativeAds.InterstitialAd;
    AdEventType = NativeAds.AdEventType;
  } catch (error) {
    console.error('Failed to import AdMob:', error);
  }
}

const IS_TEST_MODE = true; // true=TEST, false=PROD

// Ad Unit ID
const INTERSTITIAL_AD_ID = IS_TEST_MODE
  ? 'ca-app-pub-3940256099942544/1033173712' // Test ad unit ID
  : Platform.OS === 'android'
    ? 'ca-app-pub-7569267138426237/2000725188'  // Live Android ID
    : 'ca-app-pub-7569267138426237/2000725188'; // Live iOS ID

// Create ad ref
let interstitialAdRef = null;

// Initialize AdMob
const initializeAdMob = async () => {
  // Skip initialization on web
  if (isWeb || !MobileAds) return;

  try {
    await MobileAds.default().initialize();
    console.log('✅ AdMob initialized');
    
    // Create initial ad instance
    interstitialAdRef = InterstitialAd.createForAdRequest(INTERSTITIAL_AD_ID);
  } catch (error) {
    console.error('AdMob initialization error:', error);
  }
};

// Create interstitial ad instance
const createInterstitialAd = () => {
  // Skip on web
  if (isWeb || !InterstitialAd) return;

  try {
    interstitialAdRef = InterstitialAd.createForAdRequest(INTERSTITIAL_AD_ID);
    return interstitialAdRef;
  } catch (error) {
    console.error('Failed to create interstitial ad:', error);
    return null;
  }
};

// Initialize everything
const initialize = async () => {
  await initializeAdMob();
  await createInterstitialAd();
};

// Preload the interstitial ad
const preloadInterstitialAd = () => {
  // Skip on web
  if (isWeb || !AdEventType) return;
  
  const interstitialAd = interstitialAdRef;
  if (!interstitialAd) return;
  
  // Set up event listeners for interstitial ad
  const interstitialLoadedUnsubscribe = interstitialAd.addAdEventListener(AdEventType.LOADED, () => {
    console.log('Interstitial ad preloaded and ready');
  });
  
  const interstitialErrorUnsubscribe = interstitialAd.addAdEventListener(AdEventType.ERROR, (error) => {
    console.error('Interstitial ad preload error:', error);
  });

  // Load the ad
  console.log('Preloading interstitial ad...');
  interstitialAd.load();
  
  // Return cleanup function
  return () => {
    interstitialLoadedUnsubscribe();
    interstitialErrorUnsubscribe();
  };
};

// Show the interstitial ad
const showInterstitialAd = async () => {
  if (isWeb) {
    Alert.alert(
      'Web Platform',
      'AdMob is not supported on web. Please run this on a mobile device.',
      [{ text: 'OK', style: 'cancel' }]
    );
    return;
  }
  
  try {
    // Create a fresh ad instance
    interstitialAdRef = InterstitialAd.createForAdRequest(INTERSTITIAL_AD_ID);
    
    if (!interstitialAdRef) {
      Alert.alert(
        'Ad Not Available',
        'The ad module is not available. Please check if the AdMob package is installed correctly.',
        [{ text: 'OK', style: 'cancel' }]
      );
      return;
    }
    
    console.log(`Preparing to show interstitial ad with ID: ${INTERSTITIAL_AD_ID}`);
    
    // Set up listeners specifically for this showing instance
    const unsubscribeClosed = interstitialAdRef.addAdEventListener(AdEventType.CLOSED, () => {
      console.log('Interstitial ad closed');
      // Preload the next ad
      interstitialAdRef.load();
    });
    
    // Show the ad if it's loaded
    if (interstitialAdRef.loaded) {
      // Add a small delay before showing to ensure the ad is ready
      setTimeout(() => {
        interstitialAdRef.show();
      }, 100);
    } else {
      // If not loaded, wait for load before showing
      const unsubscribeLoaded = interstitialAdRef.addAdEventListener(AdEventType.LOADED, () => {
        console.log('Interstitial ad loaded, showing now');
        // Add a small delay before showing to ensure the ad is ready
        setTimeout(() => {
          interstitialAdRef.show();
        }, 100);
        unsubscribeLoaded();
      });
      
      // Set error handler just for this attempt
      const unsubscribeError = interstitialAdRef.addAdEventListener(AdEventType.ERROR, (error) => {
        console.error('Interstitial ad error:', error);
        Alert.alert(
          'Ad Error', 
          'Failed to load interstitial ad.',
          [{ text: 'OK', style: 'cancel' }]
        );
        unsubscribeError();
      });
      
      // Try loading the ad
      interstitialAdRef.load();
      
      return () => {
        unsubscribeLoaded();
        unsubscribeError();
        unsubscribeClosed();
      };
    }
  } catch (error) {
    console.error('Error showing interstitial ad:', error);
    Alert.alert(
      'Ad Error', 
      'Failed to show interstitial ad.',
      [{ text: 'OK', style: 'cancel' }]
    );
  }
};

export {
  initialize,
  showInterstitialAd,
  preloadInterstitialAd
}; 