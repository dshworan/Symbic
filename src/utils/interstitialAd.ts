import { Platform, Alert } from 'react-native';

// Check if we're on web platform
const isWeb = Platform.OS === 'web';

// Import the appropriate module based on platform
let MobileAds: any;
let InterstitialAd: any;
let AdEventType: any;

// Initialize modules based on platform
const initializeModules = async () => {
  if (isWeb) {
    // Use mock implementation for web
    const MockAdMob = await import('./mock-admob');
    MobileAds = MockAdMob.default;
    InterstitialAd = MockAdMob.default.InterstitialAd;
    AdEventType = MockAdMob.default.AdEventType;
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
};

const IS_TEST_MODE = true; // true=TEST, false=PROD

// Ad Unit ID
const INTERSTITIAL_AD_ID = IS_TEST_MODE
  ? 'ca-app-pub-3940256099942544/1033173712' // Test ad unit ID
  : Platform.OS === 'android'
    ? 'ca-app-pub-7569267138426237/2000725188'  // Live Android ID (SYMBIC)
    : 'ca-app-pub-7569267138426237/2000725188'; // Live iOS ID (SYMBIC)

// Create ad ref
let interstitialAdRef: any = null;

// Initialize AdMob
const initializeAdMob = async () => {
  // Initialize modules first
  await initializeModules();
  
  // Skip initialization on web
  if (isWeb || !MobileAds) return;

  try {
    await MobileAds.default().initialize();
    //console.log('✅ AdMob initialized');
    
    // Create initial ad instance
    interstitialAdRef = InterstitialAd.createForAdRequest(INTERSTITIAL_AD_ID);
  } catch (error) {
    console.error('AdMob initialization error:', error);
  }
};

// Create interstitial ad instance
const createInterstitialAd = () => {
  // Skip on web
  if (isWeb || !InterstitialAd) return null;

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
  // Don't create ad instance at startup - only when needed
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
  
  const interstitialErrorUnsubscribe = interstitialAd.addAdEventListener(AdEventType.ERROR, (error: any) => {
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
    // Create a fresh ad instance each time (like SYMBIC does)
    const freshAd = InterstitialAd.createForAdRequest(INTERSTITIAL_AD_ID);
    
    if (!freshAd) {
      Alert.alert(
        'Ad Not Available',
        'The ad module is not available. Please check if the AdMob package is installed correctly.',
        [{ text: 'OK', style: 'cancel' }]
      );
      return;
    }
    
    console.log(`Preparing to show interstitial ad with ID: ${INTERSTITIAL_AD_ID}`);
    
    // Set up listeners specifically for this showing instance
    const unsubscribeClosed = freshAd.addAdEventListener(AdEventType.CLOSED, () => {
      console.log('Interstitial ad closed');
      // Don't preload automatically - only preload when needed
    });
    
    // Show the ad if it's loaded
    if (freshAd.loaded) {
      freshAd.show();
    } else {
      // If not loaded, wait for load before showing
      const unsubscribeLoaded = freshAd.addAdEventListener(AdEventType.LOADED, () => {
        console.log('Interstitial ad loaded, showing now');
        freshAd.show();
        unsubscribeLoaded();
      });
      
      // Set error handler just for this attempt
      const unsubscribeError = freshAd.addAdEventListener(AdEventType.ERROR, (error: unknown) => {
        console.error('Interstitial ad error:', error);
        
        Alert.alert(
          'Ad Error', 
          'Failed to load interstitial ad.',
          [{ text: 'OK', style: 'cancel' }]
        );
        unsubscribeError();
      });
      
      // Try loading the ad
      freshAd.load();
      
      // Note: The cleanup functions will be called when the events fire
      // Don't unsubscribe immediately - let the listeners handle the events
    }
  } catch (error: unknown) {
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