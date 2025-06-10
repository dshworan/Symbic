import { Platform } from 'react-native';
import MockAdMob from './mock-admob';
import { PackDataManager } from '../data/packDataManager';

class AdManager {
  private static instance: AdManager;
  private packDataManager: PackDataManager;
  private adMob: any;

  private constructor() {
    this.packDataManager = PackDataManager.getInstance();
    this.adMob = Platform.OS === 'web' ? MockAdMob : require('react-native-google-mobile-ads').default;
    //this.initialize();
  }

  public static getInstance(): AdManager {
    if (!AdManager.instance) {
      AdManager.instance = new AdManager();
    }
    return AdManager.instance;
  }

  public async init() {
    try {
      if (this.adMob && typeof this.adMob.initialize === 'function') {
        await this.adMob.initialize();
        console.log('✅ AdMob initialized');
      } else {
        console.warn('⚠️ AdMob is not available or initialize() is missing');
      }
    } catch (error) {
      console.error('❌ Failed to initialize AdMob:', error);
    }
  }

  public async showAdAndUnlockPack(packId: number): Promise<boolean> {
    try {
      const interstitial = this.adMob.InterstitialAd.createForAdRequest(
        Platform.OS === 'web' ? 'mock-ad-unit-id' : 'ca-app-pub-3940256099942544/1033173712' // Test ad unit ID
      );

      return new Promise((resolve) => {
        const unsubscribeLoaded = interstitial.addAdEventListener(
          this.adMob.AdEventType.LOADED,
          () => {
            console.log('Ad loaded successfully');
          }
        );

        const unsubscribeClosed = interstitial.addAdEventListener(
          this.adMob.AdEventType.CLOSED,
          () => {
            console.log('Ad closed');
            this.packDataManager.unlockPack(packId);
            resolve(true);
          }
        );

        const unsubscribeError = interstitial.addAdEventListener(
          this.adMob.AdEventType.ERROR,
          (error: any) => {
            console.error('Ad error:', error);
            // If ad fails, still unlock the pack for testing
            this.packDataManager.unlockPack(packId);
            resolve(true);
          }
        );

        interstitial.load();
        interstitial.show();

        // Cleanup listeners after 30 seconds if ad doesn't show
        setTimeout(() => {
          unsubscribeLoaded();
          unsubscribeClosed();
          unsubscribeError();
          resolve(false);
        }, 30000);
      });
    } catch (error) {
      console.error('Error showing ad:', error);
      // If there's an error, still unlock the pack for testing
      this.packDataManager.unlockPack(packId);
      return true;
    }
  }
}

export const adManager = AdManager.getInstance(); 