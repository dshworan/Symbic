// Mock implementation of AdMob for web platform
const MockAdMob = {
  default: () => ({
    initialize: async () => {
      console.log('Mock AdMob initialized');
      return Promise.resolve();
    }
  }),
  InterstitialAd: {
    createForAdRequest: (adUnitId) => ({
      addAdEventListener: (eventType, callback) => {
        console.log(`Mock ad event listener added for ${eventType}`);
        return () => console.log(`Mock ad event listener removed for ${eventType}`);
      },
      load: () => {
        console.log('Mock interstitial ad load called');
      },
      show: () => {
        console.log('Mock interstitial ad show called');
      },
      loaded: false
    })
  },
  AdEventType: {
    LOADED: 'loaded',
    ERROR: 'error',
    CLOSED: 'closed'
  }
};

export default MockAdMob; 