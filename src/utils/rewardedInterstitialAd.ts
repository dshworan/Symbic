import { Platform, Alert } from 'react-native';

// Type definitions for AdMob
interface Reward {
  amount: number;
  type: string;
}

interface AdInstance {
  loaded: boolean;
  load: () => void;
  show: () => void;
  addAdEventListener: (eventType: string, callback: (event?: any) => void) => () => void;
}

interface MobileAdsType {
  default: () => { initialize: () => Promise<void> };
}

// Check if we're on web platform
const isWeb = Platform.OS === 'web';

// Import the appropriate module based on platform
let MobileAds: MobileAdsType | any;
let RewardedInterstitialAd: { createForAdRequest: (adUnitId: string) => AdInstance } | any;
let AdEventType: { [key: string]: string } | any;
let RewardedAdEventType: { [key: string]: string } | any;

if (isWeb) {
  // Use mock implementation for web
  const MockAdMob = require('./mock-admob.ts');
  MobileAds = MockAdMob.default;
  RewardedInterstitialAd = MockAdMob.RewardedInterstitialAd;
  AdEventType = MockAdMob.AdEventType;
  RewardedAdEventType = MockAdMob.RewardedAdEventType;
} else {
  // Use real implementation for native
  try {
    const NativeAds = require('react-native-google-mobile-ads');
    MobileAds = NativeAds;
    RewardedInterstitialAd = NativeAds.RewardedInterstitialAd;
    AdEventType = NativeAds.AdEventType;
    RewardedAdEventType = NativeAds.RewardedAdEventType;
  } catch (error) {
    console.error('Failed to import AdMob:', error);
  }
}

const IS_TEST_MODE = true; // true=TEST, false=PROD

const REWARDED_INTERSTITIAL_AD_ID = IS_TEST_MODE
  ? 'ca-app-pub-3940256099942544/5354046379' // Test ad unit ID
  : Platform.OS === 'android'
    ? 'ca-app-pub-7569267138426237/7716195069'  // Live Android ID
    : 'ca-app-pub-7569267138426237/7716195069'; // Live iOS ID

// Track if preload is in progress
let isPreloading = false;
let lastPreloadTime = 0;
const PRELOAD_COOLDOWN = 2000; // 2 seconds cooldown between preloads

// Initialize AdMob
const initializeAdMob = async (): Promise<void> => {
  // Skip on web
  if (isWeb || !MobileAds) return;

  try {
    await MobileAds.default().initialize();
    //console.log('✅ AdMob initialized for rewarded interstitial');
  } catch (error) {
    //console.error('AdMob initialization error:', error);
  }
};

// Helper function to create a fresh rewarded interstitial ad instance
const createRewardedInterstitialAd = (): AdInstance | null => {
  if (isWeb || !RewardedInterstitialAd) return null;
  
  try {
    const ad = RewardedInterstitialAd.createForAdRequest(REWARDED_INTERSTITIAL_AD_ID);
    return ad;
  } catch (error) {
    console.error('Failed to create rewarded interstitial ad:', error);
    return null;
  }
};

// Show the rewarded interstitial ad
const showRewardedInterstitialAd = async (onRewardEarned?: (reward: Reward) => void): Promise<boolean | void> => {
  if (isWeb) {
    Alert.alert(
      'Web Platform',
      'AdMob is not supported on web. Please run this on a mobile device.',
      [{ text: 'OK', style: 'cancel' }]
    );
    return;
  }
  
  // Add a small delay to prevent conflicts with recent preloads
  await new Promise(resolve => setTimeout(resolve, 100));
  
  let retryCount = 0;
  const MAX_RETRIES = 3;
  
  try {
    // Create a fresh ad instance each time
    const ad = createRewardedInterstitialAd();
    if (!ad) {
      //console.log('Rewarded interstitial ad not available.');
      return false; // Return false to indicate failure
    }
    
    // Add all event listeners first, then load
    ad.addAdEventListener(RewardedAdEventType.LOADED, () => {
      //console.log('Rewarded interstitial ad loaded, showing now');
      retryCount = 0; // Reset retry count on success
      ad.show();
    });
    
    ad.addAdEventListener(RewardedAdEventType.EARNED_REWARD, (reward: Reward) => {
      console.log('User earned reward from rewarded interstitial:', reward);

      if (onRewardEarned) {
        onRewardEarned(reward);
      }
      Alert.alert(
        'Reward Earned!', 
        `You earned ${reward.amount} ${reward.type}!`,
        [{ text: 'Claim', style: 'default' }]
      );
    });
    
    ad.addAdEventListener(AdEventType.CLOSED, () => {
      console.log('Rewarded interstitial ad closed');
      retryCount = 0; // Reset retry count after successful completion
    });
    
    ad.addAdEventListener(AdEventType.ERROR, (error: any) => {
      console.error('Rewarded interstitial ad error:', error?.code || error);
      
      const currentRetryCount = retryCount + 1;
      retryCount = currentRetryCount;
      
      if (currentRetryCount < MAX_RETRIES) {
        console.log(`Retrying rewarded interstitial ad load (attempt ${currentRetryCount + 1}/${MAX_RETRIES})...`);
        // Shorter delay with each retry
        const retryDelay = 300 * (currentRetryCount + 1);
        setTimeout(() => {
          console.log(`Retrying ad load after ${retryDelay}ms delay`);
          ad.load();
        }, retryDelay);
      } else {
        console.log('Rewarded interstitial ad failed after all retries');
        return false; // Return false to indicate failure
      }
    });
    
    // Load the ad after all listeners are set up, with a delay to let SDK settle
    console.log(`Waiting 50ms before loading rewarded interstitial ad with ID: ${REWARDED_INTERSTITIAL_AD_ID}...`);
    setTimeout(() => {
      console.log('Now loading rewarded interstitial ad after delay');
      ad.load();
    }, 50); // 50ms buffer
    
    return true; // Return true to indicate success
  } catch (error) {
    console.error('Error setting up rewarded interstitial ad:', error);
    return false; // Return false to indicate failure
  }
};

// Preload the rewarded interstitial ad
const preloadRewardedInterstitialAd = async (): Promise<void> => {
  // Skip on web
  if (isWeb || !RewardedInterstitialAd) return;
  
  const now = Date.now();
  
  // Prevent multiple simultaneous preloads and add cooldown
  if (isPreloading) {
    console.log('Rewarded interstitial preload already in progress, skipping...');
    return;
  }
  
  // Check cooldown to prevent too frequent preloads
  if (now - lastPreloadTime < PRELOAD_COOLDOWN) {
    console.log('Rewarded interstitial preload cooldown active, skipping...');
    return;
  }
  
  try {
    isPreloading = true;
    lastPreloadTime = now;
    //console.log('Preloading rewarded interstitial ad...');
    const ad = createRewardedInterstitialAd();
    if (!ad) {
      isPreloading = false;
      return;
    }
    
    // Set up event listeners for rewarded interstitial ad
    ad.addAdEventListener(RewardedAdEventType.LOADED, () => {
      console.log('C) Rewarded interstitial ad preloaded and ready');
      // Don't reset isPreloading here - let it stay true for a bit to prevent rapid re-preloads
      setTimeout(() => {
        isPreloading = false;
      }, 1000); // Keep preload flag for 1 second after success
    });
    
    ad.addAdEventListener(AdEventType.ERROR, (error: any) => {
      console.error('Rewarded interstitial ad preload error:', error);
      // Don't reset isPreloading here - let it stay true for a bit to prevent rapid re-preloads
      setTimeout(() => {
        isPreloading = false;
      }, 1000); // Keep preload flag for 1 second after error
    });

    // Load the ad with a small delay
    setTimeout(() => {
      ad.load();
    }, 50);
    
  } catch (error) {
    console.error('Error preloading rewarded interstitial ad:', error);
    isPreloading = false;
  }
};

// Initialize everything
const initialize = async (): Promise<void> => {
  await initializeAdMob();
  // Don't preload automatically - only load when needed
};

export {
  initialize,
  showRewardedInterstitialAd,
  preloadRewardedInterstitialAd
}; 