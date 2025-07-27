// Firebase test utility to verify analytics are working
import { trackGameEvent, initializeFirebase, setUserProperties, logCustomEvent } from './firebase';

export const testFirebaseAnalytics = async () => {
  console.log('🧪 Testing Firebase Analytics...');
  
  try {
    // Initialize Firebase
    await initializeFirebase();
    
    // Test user properties
    await setUserProperties({
      user_type: 'test_user',
      app_version: '1.0.0',
      platform: 'android'
    });
    
    // Test ad events
    trackGameEvent.adShown('interstitial');
    trackGameEvent.adCompleted('interstitial');
    trackGameEvent.adFailed('rewarded', 'network_error');
    
    // Test business events
    trackGameEvent.packUnlocked(1);
    trackGameEvent.hintUsed('level_1_1');
    
    // Test custom events
    await logCustomEvent('test_event', {
      test_param: 'test_value',
      timestamp: Date.now()
    });
    
    console.log('✅ Firebase Analytics test completed successfully');
    return true;
  } catch (error) {
    console.error('❌ Firebase Analytics test failed:', error);
    return false;
  }
};

export const testFirebaseConnection = () => {
  console.log('🔍 Checking Firebase connection...');
  
  try {
    // Try to import Firebase modules
    const firebase = require('@react-native-firebase/app');
    const firebaseAnalytics = require('@react-native-firebase/analytics');
    
    console.log('✅ Firebase modules loaded successfully');
    console.log('📊 Firebase Analytics available:', !!firebaseAnalytics.default());
    
    return true;
  } catch (error) {
    console.error('❌ Firebase connection failed:', error);
    return false;
  }
}; 