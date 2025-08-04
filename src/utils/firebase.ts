// Firebase utility for ad tracking
// Uses real Firebase Analytics on native platforms, mock on web

import { Platform } from 'react-native';

interface GameEvent {
  adFailed: (adType: string, errorCode: string) => void;
  adShown: (adType: string) => void;
  adCompleted: (adType: string) => void;
  packUnlocked: (packId: number) => void;
  hintUsed: (levelId: string) => void;
}

// Check if we're on web platform
const isWeb = Platform.OS === 'web';

// Check if we're in development mode
const isDevelopment = __DEV__;

// Import Firebase Analytics based on platform
let analytics: any = null;

if (!isWeb) {
  try {
    const { getApp } = require('@react-native-firebase/app');
    const firebaseAnalytics = require('@react-native-firebase/analytics');
    analytics = firebaseAnalytics.default(getApp());
  } catch (error) {
    console.warn('Firebase Analytics not available:', error);
  }
}

// Real Firebase Analytics implementation
const realFirebaseTracking: GameEvent = {
  adFailed: (adType: string, errorCode: string) => {
    if (analytics) {
      try {
        analytics.logEvent('ad_failed', {
          ad_type: adType,
          error_code: errorCode,
          timestamp: Date.now()
        });
      } catch (error) {
        console.warn('Failed to log ad_failed event:', error);
      }
    }
    console.log(`📊 Ad Failed: ${adType} - Error: ${errorCode}`);
  },
  
  adShown: (adType: string) => {
    if (analytics) {
      try {
        analytics.logEvent('ad_shown', {
          ad_type: adType,
          timestamp: Date.now()
        });
      } catch (error) {
        console.warn('Failed to log ad_shown event:', error);
      }
    }
    //console.log(`📊 Ad Shown: ${adType}`);
  },
  
  adCompleted: (adType: string) => {
    if (analytics) {
      try {
        analytics.logEvent('ad_completed', {
          ad_type: adType,
          timestamp: Date.now()
        });
      } catch (error) {
        //console.warn('Failed to log ad_completed event:', error);
      }
    }
    //console.log(`📊 Ad Completed: ${adType}`);
  },
  
  packUnlocked: (packId: number) => {
    if (analytics) {
      try {
        analytics.logEvent('pack_unlocked', {
          pack_id: packId,
          timestamp: Date.now()
        });
      } catch (error) {
        //console.warn('Failed to log pack_unlocked event:', error);
      }
    }
    //console.log(`📊 Pack Unlocked: ${packId}`);
  },
  
  hintUsed: (levelId: string) => {
    if (analytics) {
      try {
        analytics.logEvent('hint_used', {
          level_id: levelId,
          timestamp: Date.now()
        });
      } catch (error) {
        console.warn('Failed to log hint_used event:', error);
      }
    }
    //console.log(`📊 Hint Used: ${levelId}`);
  }
};

// Mock Firebase implementation for web platform
const mockFirebaseTracking: GameEvent = {
  adFailed: (adType: string, errorCode: string) => {
    //console.log(`📊 [MOCK] Ad Failed: ${adType} - Error: ${errorCode}`);
  },
  
  adShown: (adType: string) => {
    //console.log(`📊 [MOCK] Ad Shown: ${adType}`);
  },
  
  adCompleted: (adType: string) => {
    //console.log(`📊 [MOCK] Ad Completed: ${adType}`);
  },
  
  packUnlocked: (packId: number) => {
    //console.log(`📊 [MOCK] Pack Unlocked: ${packId}`);
  },
  
  hintUsed: (levelId: string) => {
    //console.log(`📊 [MOCK] Hint Used: ${levelId}`);
  }
};

// Export the appropriate implementation based on platform
export const trackGameEvent: GameEvent = isWeb ? mockFirebaseTracking : realFirebaseTracking;

// Additional Firebase utilities
export const initializeFirebase = async () => {
  if (isWeb) {
    console.log('Firebase initialization skipped on web platform');
    return;
  }

  // In development mode, be more lenient with Firebase initialization
  if (isDevelopment) {
    //console.log('🔧 Development mode detected - Firebase initialization will be optional');
  }

  try {
    if (analytics) {
      // Enable analytics collection
      await analytics.setAnalyticsCollectionEnabled(true);
      //console.log('✅ Firebase Analytics initialized and enabled');
    } else {
      //console.log('⚠️ Firebase Analytics not available - continuing without analytics');
    }
  } catch (error) {
    //console.error('❌ Failed to initialize Firebase Analytics:', error);
    if (isDevelopment) {
      //console.log('🔧 Continuing in development mode without Firebase');
    }
  }
};

export const setUserProperties = async (properties: Record<string, string>) => {
  if (isWeb || !analytics) return;

  try {
    for (const [key, value] of Object.entries(properties)) {
      await analytics.setUserProperty(key, value);
    }
    //console.log('✅ User properties set:', properties);
  } catch (error) {
    //console.error('❌ Failed to set user properties:', error);
  }
};

export const logCustomEvent = async (eventName: string, parameters?: Record<string, any>) => {
  if (isWeb || !analytics) return;

  try {
    await analytics.logEvent(eventName, parameters);
    //console.log(`📊 Custom Event: ${eventName}`, parameters);
  } catch (error) {
    //console.error(`❌ Failed to log custom event ${eventName}:`, error);
  }
}; 