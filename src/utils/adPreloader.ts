// Ad preloader utility - only preload ads when needed
// This follows the TRIOS-APP pattern of not preloading at startup

import { Platform } from 'react-native';

// Check if we're on web platform
const isWeb = Platform.OS === 'web';

// Import ad utilities
import { preloadInterstitialAd } from './interstitialAd';
import { preloadRewardedAd } from './rewardAd';
import { preloadRewardedInterstitialAd } from './rewardedInterstitialAd';

// Track preload states to prevent multiple simultaneous preloads
let isPreloadingInterstitial = false;
let isPreloadingRewarded = false;
let isPreloadingRewardedInterstitial = false;

// Preload interstitial ad when needed (e.g., before showing a modal that might show an ad)
export const preloadInterstitialWhenNeeded = async (): Promise<void> => {
  if (isWeb || isPreloadingInterstitial) {
    return;
  }

  try {
    isPreloadingInterstitial = true;
    console.log('🔄 Preloading interstitial ad for upcoming use...');
    await preloadInterstitialAd();
  } catch (error) {
    console.error('Error preloading interstitial ad:', error);
  } finally {
    // Reset flag after a delay to prevent rapid re-preloads
    setTimeout(() => {
      isPreloadingInterstitial = false;
    }, 2000);
  }
};

// Preload rewarded ad when needed (e.g., when hint modal appears)
export const preloadRewardedWhenNeeded = async (): Promise<void> => {
  if (isWeb || isPreloadingRewarded) {
    return;
  }

  try {
    isPreloadingRewarded = true;
    console.log('🔄 Preloading rewarded ad for upcoming use...');
    await preloadRewardedAd();
  } catch (error) {
    console.error('Error preloading rewarded ad:', error);
  } finally {
    // Reset flag after a delay to prevent rapid re-preloads
    setTimeout(() => {
      isPreloadingRewarded = false;
    }, 2000);
  }
};

// Preload rewarded interstitial ad when needed (fallback for rewarded ads)
export const preloadRewardedInterstitialWhenNeeded = async (): Promise<void> => {
  if (isWeb || isPreloadingRewardedInterstitial) {
    return;
  }

  try {
    isPreloadingRewardedInterstitial = true;
    console.log('🔄 Preloading rewarded interstitial ad for upcoming use...');
    await preloadRewardedInterstitialAd();
  } catch (error) {
    console.error('Error preloading rewarded interstitial ad:', error);
  } finally {
    // Reset flag after a delay to prevent rapid re-preloads
    setTimeout(() => {
      isPreloadingRewardedInterstitial = false;
    }, 2000);
  }
};

// Preload all ad types when needed (e.g., when entering a level that might need ads)
export const preloadAllAdsWhenNeeded = async (): Promise<void> => {
  if (isWeb) {
    return;
  }

  console.log('🔄 Preloading all ad types for upcoming use...');
  
  // Preload in parallel
  await Promise.allSettled([
    preloadInterstitialWhenNeeded(),
    preloadRewardedWhenNeeded(),
    preloadRewardedInterstitialWhenNeeded()
  ]);
};

// Check if ads are currently being preloaded
export const getPreloadStatus = () => ({
  interstitial: isPreloadingInterstitial,
  rewarded: isPreloadingRewarded,
  rewardedInterstitial: isPreloadingRewardedInterstitial
}); 