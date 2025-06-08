// Mock implementation of AdMob for web platform
const mockAdMob = {
  default: () => ({
    initialize: async () => {
      console.log('Mock AdMob initialized');
      return Promise.resolve();
    }
  }),
  InterstitialAd: {
    createForAdRequest: (adUnitId) => ({
      loaded: false,
      load: () => {
        console.log('Mock interstitial ad load called');
        return Promise.resolve();
      },
      show: () => {
        console.log('Mock interstitial ad show called');
        return Promise.resolve();
      },
      addAdEventListener: (eventType, callback) => {
        console.log(`Mock interstitial ad event listener added for ${eventType}`);
        return () => {
          console.log(`Mock interstitial ad event listener removed for ${eventType}`);
        };
      }
    })
  },
  RewardedAd: {
    createForAdRequest: (adUnitId) => ({
      loaded: false,
      load: () => {
        console.log('Mock rewarded ad load called');
        return Promise.resolve();
      },
      show: () => {
        console.log('Mock rewarded ad show called');
        return Promise.resolve();
      },
      addAdEventListener: (eventType, callback) => {
        console.log(`Mock rewarded ad event listener added for ${eventType}`);
        return () => {
          console.log(`Mock rewarded ad event listener removed for ${eventType}`);
        };
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
    ERROR: 'error',
    CLOSED: 'closed',
    REWARDED: 'rewarded'
  }
};

module.exports = mockAdMob; 