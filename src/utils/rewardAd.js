import { Platform, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Check if we're on web platform
const isWeb = Platform.OS === 'web';

// Import the appropriate module based on platform
let MobileAds;
let RewardedAd;
let AdEventType;
let RewardedAdEventType;

if (isWeb) {
  // Use mock implementation for web
  const MockAdMob = require('./mock-admob');
  MobileAds = MockAdMob.default;
  RewardedAd = MockAdMob.RewardedAd;
  AdEventType = MockAdMob.AdEventType;
  RewardedAdEventType = MockAdMob.RewardedAdEventType;
} else {
  // Use real implementation for native
  try {
    const NativeAds = require('react-native-google-mobile-ads');
    MobileAds = NativeAds;
    RewardedAd = NativeAds.RewardedAd;
    AdEventType = NativeAds.AdEventType;
    RewardedAdEventType = NativeAds.RewardedAdEventType;
  } catch (error) {
    console.error('Failed to import AdMob:', error);
  }
}

const IS_TEST_MODE = true; // true=TEST, false=PROD

const REWARD_AD_ID = IS_TEST_MODE
  ? 'ca-app-pub-3940256099942544/5224354917' // Test ad unit ID
  : Platform.OS === 'android'
    ? 'ca-app-pub-7569267138426237/6876055022'  // Live Android ID
    : 'ca-app-pub-7569267138426237/6876055022'; // Live iOS ID

// Initialize AdMob
const initializeAdMob = async () => {
  // Skip on web
  if (isWeb || !MobileAds) return;

  try {
    await MobileAds.default().initialize();
    console.log('✅ AdMob initialized in reward ad utility');
  } catch (error) {
    console.error('AdMob initialization error:', error);
  }
};

// Helper function to create a fresh rewarded ad instance
const createRewardedAd = () => {
  if (isWeb || !RewardedAd) return null;
  
  try {
    const ad = RewardedAd.createForAdRequest(REWARD_AD_ID);
    return ad;
  } catch (error) {
    console.error('Failed to create rewarded ad:', error);
    return null;
  }
};

// Show the rewarded ad
const showRewardedAd = async (onRewardEarned) => {
  if (isWeb) {
    Alert.alert(
      'Web Platform',
      'AdMob is not supported on web. Please run this on a mobile device.',
      [{ text: 'OK', style: 'cancel' }]
    );
    return;
  }
  
  let retryCount = 0;
  const MAX_RETRIES = 3;
  
  try {
    // Create a fresh ad instance each time
    const ad = createRewardedAd();
    if (!ad) {
      console.log('Rewarded ad not available. Grrr...');
      Alert.alert(
        'Ad Not Available',
        'The ad module is not available. Please check if the AdMob package is installed correctly.',
        [{ text: 'OK', style: 'cancel' }]
      );
      return;
    }
    
    // Add all event listeners first, then load
    ad.addAdEventListener(RewardedAdEventType.LOADED, () => {
      console.log('Rewarded ad loaded, showing now');
      retryCount = 0; // Reset retry count on success
      ad.show();
    });
    
    ad.addAdEventListener(RewardedAdEventType.EARNED_REWARD, (reward) => {
      console.log('User earned reward:', reward);
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
      console.log('Rewarded ad closed');
      retryCount = 0; // Reset retry count after successful completion
    });
    
    ad.addAdEventListener(AdEventType.ERROR, (error) => {
      console.error('Rewarded ad error:', error?.code || error);
      
      const currentRetryCount = retryCount + 1;
      retryCount = currentRetryCount;
      
      if (currentRetryCount < MAX_RETRIES) {
        console.log(`Retrying rewarded ad load (attempt ${currentRetryCount + 1}/${MAX_RETRIES})...`);
        // Shorter delay with each retry
        const retryDelay = 300 * (currentRetryCount + 1);
        setTimeout(() => {
          console.log(`Retrying ad load after ${retryDelay}ms delay`);
          ad.load();
        }, retryDelay);
      } else {
        Alert.alert(
          'Ad Error', 
          `Failed to load rewarded ad after ${MAX_RETRIES} attempts. Error code: ${error?.code || 'unknown'}`,
          [{ text: 'OK', style: 'cancel' }]
        );
      }
    });
    
    // Load the ad after all listeners are set up, with a delay to let SDK settle
    console.log('Waiting 50ms before loading rewarded ad...');
    setTimeout(() => {
      console.log('Now loading rewarded ad after delay');
      ad.load();
    }, 50); // 50ms buffer
    
  } catch (error) {
    console.error('Error setting up rewarded ad:', error);
    Alert.alert(
      'Ad Error', 
      'Failed to set up rewarded ad. Please try again later.',
      [{ text: 'OK', style: 'cancel' }]
    );
  }
};

// Preload the rewarded ad
const preloadRewardedAd = async () => {
  // Skip on web
  if (isWeb || !RewardedAd) return;
  
  try {
    console.log('Preloading rewarded ad...');
    const ad = createRewardedAd();
    if (!ad) return;
    
    // Set up event listeners for rewarded ad
    ad.addAdEventListener(RewardedAdEventType.LOADED, () => {
      console.log('Rewarded ad preloaded and ready');
    });
    
    ad.addAdEventListener(AdEventType.ERROR, (error) => {
      console.error('Rewarded ad preload error:', error);
    });

    // Load the ad with a small delay
    setTimeout(() => {
      ad.load();
    }, 50);
    
  } catch (error) {
    console.error('Error preloading rewarded ad:', error);
  }
};

// Initialize everything
const initialize = async () => {
  await initializeAdMob();
};

export {
  initialize,
  showRewardedAd,
  preloadRewardedAd
}; 