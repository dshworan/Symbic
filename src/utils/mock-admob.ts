// Mock implementation of AdMob for web platform
import type { AdMobModule, RewardedAdInstance, InterstitialAdInstance } from './rewardAd';

interface MockAdInstance {
  loaded: boolean;
  load: () => Promise<void>;
  show: () => Promise<void>;
  addAdEventListener: (eventType: string, callback: (data?: any) => void) => () => void;
}

const mockAdMob: AdMobModule = {
  default: {
    initialize: async (): Promise<void> => {
      console.log('Mock AdMob initialized');
      return Promise.resolve();
    }
  },
  InterstitialAd: {
    createForAdRequest: (adUnitId: string): InterstitialAdInstance => ({
      load: (): void => {
        console.log('Mock interstitial ad load called');
      },
      show: (): void => {
        console.log('Mock interstitial ad show called');
      },
      addAdEventListener: (eventType: string, callback: (data?: any) => void): void => {
        console.log(`Mock interstitial ad event listener added for ${eventType}`);
        // Simulate the event being triggered after a short delay
        if (eventType === 'loaded') {
          setTimeout(() => {
            console.log('Mock interstitial ad loaded event triggered');
            callback();
          }, 100);
        } else if (eventType === 'closed') {
          setTimeout(() => {
            console.log('Mock interstitial ad closed event triggered');
            callback();
          }, 2000);
        }
      }
    })
  },
  RewardedAd: {
    createForAdRequest: (adUnitId: string): RewardedAdInstance => ({
      load: (): void => {
        console.log('Mock rewarded ad load called');
      },
      show: (): void => {
        console.log('Mock rewarded ad show called');
      },
      addAdEventListener: (eventType: string, callback: (data?: any) => void): void => {
        console.log(`Mock rewarded ad event listener added for ${eventType}`);
        // Simulate the event being triggered after a short delay
        if (eventType === 'loaded') {
          setTimeout(() => {
            console.log('Mock rewarded ad loaded event triggered');
            callback();
          }, 100);
        } else if (eventType === 'rewarded') {
          setTimeout(() => {
            console.log('Mock rewarded ad rewarded event triggered');
            callback({ amount: 1, type: 'hint' });
          }, 2000);
        } else if (eventType === 'closed') {
          setTimeout(() => {
            console.log('Mock rewarded ad closed event triggered');
            callback();
          }, 3000);
        }
      }
    })
  },
  AdEventType: {
    LOADED: 'loaded',
    ERROR: 'error',
    CLOSED: 'closed'
  },
  RewardedAdEventType: {
    LOADED: 'loaded',
    EARNED_REWARD: 'rewarded'
  }
};

export default mockAdMob; 