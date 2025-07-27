import { Platform, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showRewardedInterstitialAd, preloadRewardedInterstitialAd } from './rewardedInterstitialAd';
import { trackGameEvent } from './firebase';

// Check if we're on web platform
const isWeb = Platform.OS === 'web';

// Type definitions
interface Reward {
  amount: number;
  type: string;
}

type RewardCallback = (reward: Reward) => void;

interface InterstitialAdInstance {
  load: () => void;
  show: () => void;
  addAdEventListener: (eventType: string, callback: (data?: any) => void) => () => void;
}

interface AdMobModule {
  default: {
    initialize: () => Promise<void>;
  };
  initialize?: () => Promise<void>;
  InterstitialAd: {
    createForAdRequest: (adUnitId: string) => InterstitialAdInstance;
  };
  RewardedAd: {
    createForAdRequest: (adUnitId: string) => RewardedAdInstance;
  };
  RewardedInterstitialAd: {
    createForAdRequest: (adUnitId: string) => RewardedAdInstance;
  };
  AdEventType: {
    LOADED: string;
    CLOSED: string;
    ERROR: string;
  };
  RewardedAdEventType: {
    LOADED: string;
    EARNED_REWARD: string;
  };
}

interface RewardedAdInstance {
  addAdEventListener: (eventType: string, callback: (data?: any) => void) => () => void;
  load: () => void;
  show: () => void;
}

// Import the appropriate module based on platform
let MobileAds: AdMobModule | null = null;
let RewardedAd: AdMobModule['RewardedAd'] | null = null;
let AdEventType: AdMobModule['AdEventType'] | null = null;
let RewardedAdEventType: AdMobModule['RewardedAdEventType'] | null = null;

// Initialize modules based on platform
const initializeModules = async (): Promise<void> => {
  if (isWeb) {
    // Use mock implementation for web
    const MockAdMob = await import('./mock-admob');
    MobileAds = MockAdMob.default;
    RewardedAd = MockAdMob.default.RewardedAd;
    AdEventType = MockAdMob.default.AdEventType;
    RewardedAdEventType = MockAdMob.default.RewardedAdEventType;
  } else {
    // Use real implementation for native
    try {
      const NativeAds: AdMobModule = require('react-native-google-mobile-ads');
      MobileAds = NativeAds;
      RewardedAd = NativeAds.RewardedAd;
      AdEventType = NativeAds.AdEventType;
      RewardedAdEventType = NativeAds.RewardedAdEventType;
    } catch (error) {
      console.error('Failed to import AdMob:', error);
    }
  }
};

const IS_TEST_MODE = true; // true=TEST, false=PROD

const REWARD_AD_ID = IS_TEST_MODE
  ? 'ca-app-pub-3940256099942544/5224354917' // Test ad unit ID
  : Platform.OS === 'android'
    ? 'ca-app-pub-7569267138426237/6876055022'  // Live Android ID
    : 'ca-app-pub-7569267138426237/6876055022'; // Live iOS ID

// Initialize AdMob
const initializeAdMob = async (): Promise<void> => {
  // Initialize modules first
  await initializeModules();
  
  // Skip on web
  if (isWeb || !MobileAds) return;

  try {
    // Try different possible structures for the AdMob module
    if (MobileAds.default && typeof MobileAds.default.initialize === 'function') {
      await MobileAds.default.initialize();
      // console.log('✅ AdMob initialized in reward ad utility');
    } else if (MobileAds && typeof (MobileAds as any).initialize === 'function') {
      await (MobileAds as any).initialize();
      // console.log('✅ AdMob initialized in reward ad utility');
    } else if (MobileAds && typeof MobileAds.initialize === 'function') {
      await MobileAds.initialize();
      // console.log('✅ AdMob initialized in reward ad utility');
    } else {
      // If none of the above work, try to find the initialize function
      const mobileAdsObj = MobileAds as any;
      if (mobileAdsObj && typeof mobileAdsObj.initialize === 'function') {
        await mobileAdsObj.initialize();
        // console.log('✅ AdMob initialized in reward ad utility');
      } else {
        // Since ads are working, this might be a different module structure
        // The module might be auto-initialized or have a different initialization pattern
        // console.log('ℹ️ AdMob module loaded successfully - ads should work');
      }
    }
  } catch (error) {
    console.error('AdMob initialization error:', error);
  }
};

// Helper function to create a fresh rewarded ad instance
const createRewardedAd = (): RewardedAdInstance | null => {
  if (isWeb || !RewardedAd) return null;
  
  try {
    const ad = RewardedAd.createForAdRequest(REWARD_AD_ID);
    return ad;
  } catch (error) {
    console.error('Failed to create rewarded ad:', error);
    return null;
  }
};

// Show the rewarded ad with fallback to rewarded interstitial
const showRewardedAd = async (onRewardEarned?: RewardCallback): Promise<void> => {
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
  let isAdCompleted = false;
  let unsubscribeFunctions: (() => void)[] = [];
  
  try {
    // Create a fresh ad instance each time (like the test screen)
    const ad = createRewardedAd();
    if (!ad) {
      //console.log('Rewarded ad not available, trying rewarded interstitial fallback...');
      // Try rewarded interstitial as fallback
      const fallbackSuccess = await showRewardedInterstitialAd(onRewardEarned);
      if (!fallbackSuccess) {
        Alert.alert(
          'No Ads Available',
          'No reward ads are currently available. Please try again later.',
          [{ text: 'OK', style: 'cancel' }]
        );
      }
      return;
    }
    
    // Add all event listeners first, then load (like the test screen)
    const handleLoaded = () => {
      //console.log('Rewarded ad loaded, showing now');
      retryCount = 0; // Reset retry count on success
      trackGameEvent.adShown('rewarded');
      ad.show();
    };
      
    const handleEarnedReward = (reward: Reward) => {
      //console.log('User earned reward:', reward);
      isAdCompleted = true;
      trackGameEvent.adCompleted('rewarded');

      if (onRewardEarned) {
        onRewardEarned(reward);
      }
      Alert.alert(
        'Reward Earned!', 
        `You earned ${reward.amount} ${reward.type}!`,
        [{ text: 'Claim', style: 'default' }]
      );
    };
      
    const handleClosed = () => {
      //console.log('Rewarded ad closed');
      isAdCompleted = true;
      retryCount = 0; // Reset retry count after successful completion
      
      // Clean up listeners
      unsubscribeFunctions.forEach(unsubscribe => unsubscribe());
    };
      
    const handleError = (error: any) => {
      console.error('Rewarded ad error:', error?.code || error);
      
      // Track ad failure
      trackGameEvent.adFailed('rewarded', error?.code || 'unknown');
      
      // Don't retry if ad was already completed
      if (isAdCompleted) {
        return;
      }
      
      const currentRetryCount = retryCount + 1;
      retryCount = currentRetryCount;
      
      if (currentRetryCount < MAX_RETRIES) {
        //console.log(`Retrying rewarded ad load (attempt ${currentRetryCount + 1}/${MAX_RETRIES})...`);
        // Shorter delay with each retry
        const retryDelay = 300 * (currentRetryCount + 1);
        setTimeout(() => {
          //console.log(`Retrying ad load after ${retryDelay}ms delay`);
          ad.load();
        }, retryDelay);
      } else {
        //console.log('Rewarded ad failed after all retries, trying rewarded interstitial fallback...');
        // Clean up listeners before fallback
        unsubscribeFunctions.forEach(unsubscribe => unsubscribe());
        
        // Try rewarded interstitial as fallback
        showRewardedInterstitialAd(onRewardEarned).then((fallbackSuccess) => {
          if (!fallbackSuccess) {
            Alert.alert(
              'No Ads Available',
              'No reward ads are currently available. Please try again later.',
              [{ text: 'OK', style: 'cancel' }]
            );
          }
        });
      }
    };
      
    // Add listeners (like the test screen)
    const unsubscribeLoaded = ad.addAdEventListener(RewardedAdEventType!.LOADED, handleLoaded);
    const unsubscribeReward = ad.addAdEventListener(RewardedAdEventType!.EARNED_REWARD, handleEarnedReward);
    const unsubscribeClosed = ad.addAdEventListener(AdEventType!.CLOSED, handleClosed);
    const unsubscribeError = ad.addAdEventListener(AdEventType!.ERROR, handleError);
    
    // Store unsubscribe functions for cleanup
    unsubscribeFunctions = [unsubscribeLoaded, unsubscribeReward, unsubscribeClosed, unsubscribeError];
    
    // Load ad (like the test screen - no delays)
    //console.log('Loading rewarded ad...');
    ad.load();
    
  } catch (error) {
    //console.error('Error setting up rewarded ad:', error);
    
    // Clean up listeners
    unsubscribeFunctions.forEach(unsubscribe => unsubscribe());
    
    // Try rewarded interstitial as fallback
    const fallbackSuccess = await showRewardedInterstitialAd(onRewardEarned);
    if (!fallbackSuccess) {
      Alert.alert(
        'No Ads Available',
        'No reward ads are currently available. Please try again later.',
        [{ text: 'OK', style: 'cancel' }]
      );
    }
  }
};

// Preload the rewarded ad
const preloadRewardedAd = async (): Promise<void> => {
  // Skip on web
  if (isWeb || !RewardedAd) return;
  
  try {
    // console.log('Preloading rewarded ad...');
    const ad = createRewardedAd();
    if (!ad) return;
    
    // Set up event listeners for rewarded ad
    ad.addAdEventListener(RewardedAdEventType!.LOADED, () => {
      // console.log('Rewarded ad preloaded and ready');
    });
    
    ad.addAdEventListener(AdEventType!.ERROR, (error: any) => {
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
const initialize = async (): Promise<void> => {
  await initializeAdMob();
};

export {
  initialize,
  showRewardedAd,
  preloadRewardedAd,
  type Reward,
  type RewardCallback,
  type AdMobModule,
  type RewardedAdInstance,
  type InterstitialAdInstance
}; 