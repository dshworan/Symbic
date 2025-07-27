import { Platform, Alert } from 'react-native';
import MockAdMob from './mock-admob';
import { PackDataManager } from '../data/packDataManager';
import { trackGameEvent } from './firebase';

// Check if we're on web platform
const isWeb = Platform.OS === 'web';

// Import the appropriate module based on platform
let MobileAds: any;
let InterstitialAd: any;
let AdEventType: any;

if (isWeb) {
  // Use mock implementation for web
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
    ? 'ca-app-pub-7569267138426237/2000725188'  // Live Android ID (SYMBIC)
    : 'ca-app-pub-7569267138426237/2000725188'; // Live iOS ID (SYMBIC)

class AdManager {
  private static instance: AdManager;
  private packDataManager: PackDataManager;
  private interstitialAdRef: any = null;
  private isInitialized: boolean = false;

  private constructor() {
    this.packDataManager = PackDataManager.getInstance();
  }

  public static getInstance(): AdManager {
    if (!AdManager.instance) {
      AdManager.instance = new AdManager();
    }
    return AdManager.instance;
  }

  public async init() {
    if (this.isInitialized) return;
    
    try {
      if (isWeb || !MobileAds) {
        console.log('Skipping AdMob initialization on web platform');
        return;
      }

      await MobileAds.default().initialize();
      //console.log('✅ AdMob initialized');
      
      // Don't create ad instance at startup - only when needed
      this.isInitialized = true;
    } catch (error) {
      console.error('❌ Failed to initialize AdMob:', error);
    }
  }

  private createInterstitialAd() {
    if (isWeb || !InterstitialAd) return null;

    try {
      this.interstitialAdRef = InterstitialAd.createForAdRequest(INTERSTITIAL_AD_ID);
      return this.interstitialAdRef;
    } catch (error) {
      console.error('Failed to create interstitial ad:', error);
      return null;
    }
  }

  public async showAdAndUnlockPack(packId: number): Promise<boolean> {
    if (isWeb) {
      Alert.alert(
        'Web Platform',
        'AdMob is not supported on web. Please run this on a mobile device.',
        [{ text: 'OK', style: 'cancel' }]
      );
      // Still unlock the pack for testing
      this.packDataManager.unlockPack(packId);
      return true;
    }

    try {
      // Create a fresh ad instance
      const interstitial = this.createInterstitialAd();
      
      if (!interstitial) {
        console.error('Failed to create interstitial ad');
        this.packDataManager.unlockPack(packId);
        return true;
      }

      return new Promise((resolve) => {
        let isAdCompleted = false;
        let unsubscribeFunctions: (() => void)[] = [];

        const handleLoaded = () => {
          console.log('Ad loaded successfully');
        };

        const handleClosed = () => {
          console.log('Ad closed');
          isAdCompleted = true;
          this.packDataManager.unlockPack(packId);
          trackGameEvent.adCompleted('interstitial');
          trackGameEvent.packUnlocked(packId);
          
          // Clean up listeners
          unsubscribeFunctions.forEach(unsubscribe => unsubscribe());
          resolve(true);
        };

        const handleError = (error: any) => {
          console.error('Ad error:', error);
          
          // Track ad failure
          trackGameEvent.adFailed('interstitial', error?.code || 'unknown');
          
          // Don't process if ad was already completed
          if (isAdCompleted) return;
          
          // If ad fails, still unlock the pack for testing
          this.packDataManager.unlockPack(packId);
          
          // Clean up listeners
          unsubscribeFunctions.forEach(unsubscribe => unsubscribe());
          resolve(true);
        };

        // Add listeners
        const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, handleLoaded);
        const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, handleClosed);
        const unsubscribeError = interstitial.addAdEventListener(AdEventType.ERROR, handleError);
        
        // Store unsubscribe functions for cleanup
        unsubscribeFunctions = [unsubscribeLoaded, unsubscribeClosed, unsubscribeError];

        interstitial.load();
        interstitial.show();

        // Cleanup listeners after 30 seconds if ad doesn't show
        setTimeout(() => {
          if (!isAdCompleted) {
            unsubscribeFunctions.forEach(unsubscribe => unsubscribe());
            resolve(false);
          }
        }, 30000);
      });
    } catch (error) {
      console.error('Error showing ad:', error);
      // If there's an error, still unlock the pack for testing
      this.packDataManager.unlockPack(packId);
      return true;
    }
  }

  public async showInterstitialAd(): Promise<boolean> {
    if (isWeb) {
      Alert.alert(
        'Web Platform',
        'AdMob is not supported on web. Please run this on a mobile device.',
        [{ text: 'OK', style: 'cancel' }]
      );
      return false;
    }

    try {
      // Create a fresh ad instance
      const interstitial = this.createInterstitialAd();
      
      if (!interstitial) {
        console.error('Failed to create interstitial ad');
        return false;
      }

      console.log(`Preparing to show interstitial ad with ID: ${INTERSTITIAL_AD_ID}`);

      return new Promise((resolve) => {
        let isAdCompleted = false;
        let unsubscribeFunctions: (() => void)[] = [];

        const handleClosed = () => {
          console.log('Interstitial ad closed');
          isAdCompleted = true;
          trackGameEvent.adCompleted('interstitial');
          
          // Clean up listeners
          unsubscribeFunctions.forEach(unsubscribe => unsubscribe());
          resolve(true);
        };

        const handleError = (error: any) => {
          console.error('Interstitial ad error:', error);
          
          // Track ad failure
          trackGameEvent.adFailed('interstitial', error?.code || 'unknown');
          
          // Don't process if ad was already completed
          if (isAdCompleted) return;
          
          // Clean up listeners
          unsubscribeFunctions.forEach(unsubscribe => unsubscribe());
          resolve(false);
        };

        const handleLoaded = () => {
          console.log('Interstitial ad loaded, showing now');
          interstitial.show();
        };

        // Add listeners
        const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, handleClosed);
        const unsubscribeError = interstitial.addAdEventListener(AdEventType.ERROR, handleError);
        
        // Show the ad if it's loaded
        if (interstitial.loaded) {
          interstitial.show();
        } else {
          // If not loaded, wait for load before showing
          const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, handleLoaded);
          unsubscribeFunctions = [unsubscribeLoaded, unsubscribeClosed, unsubscribeError];
          
          // Try loading the ad
          interstitial.load();
        }

        // Cleanup listeners after 30 seconds if ad doesn't show
        setTimeout(() => {
          if (!isAdCompleted) {
            unsubscribeFunctions.forEach(unsubscribe => unsubscribe());
            resolve(false);
          }
        }, 30000);
      });
    } catch (error) {
      console.error('Error showing interstitial ad:', error);
      return false;
    }
  }

  // Removed preloadInterstitialAd method - ads are only preloaded when needed
}

export const adManager = AdManager.getInstance(); 