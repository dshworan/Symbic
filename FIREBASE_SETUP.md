# Firebase Analytics Setup for SYMBIC

## Overview
This project uses React Native Firebase for analytics instead of Expo Analytics. Firebase Analytics requires native code and cannot be tested with Expo Go or `npx expo run:android`.

## Current Implementation
- **Ad Events**: `ad_shown`, `ad_completed`, `ad_failed`
- **Business Events**: `pack_unlocked`, `hint_used`
- **Firebase Packages**: `@react-native-firebase/app`, `@react-native-firebase/analytics`
- **Build Method**: EAS Build required

## Testing Firebase Analytics

### 1. Build and Test
```bash
# Build for testing
eas build --profile preview --platform android

# Or for production
eas build --profile production --platform android
```

### 2. Web Platform Testing
Firebase Analytics is automatically disabled when running in a web browser to prevent errors. You'll see console messages like:
- "Firebase Analytics skipped on web platform"
- "Analytics event skipped on web: [event_name]"

This allows you to test the app in a browser without Firebase errors.

### 3. Verify Events
After installing the built APK, check the console logs for:
- "Firebase Analytics initialized successfully"
- Analytics events when you:
  - Show ads (interstitial, rewarded)
  - Complete ads
  - Fail ads
  - Unlock packs
  - Use hints

### 4. Firebase Console
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `symbic-55449`
3. Navigate to Analytics > Events
4. Look for the events:
   - `ad_shown`
   - `ad_completed`
   - `ad_failed`
   - `pack_unlocked`
   - `hint_used`

## Required Firebase Configuration Files

### For Android
You need to add `google-services.json` to the project root (already present).

### For iOS
You'll need to add `GoogleService-Info.plist` to the iOS folder when you add iOS support.

## Current Tracking Events

### Ad Events:
- `ad_shown` - When any ad is displayed
- `ad_completed` - When user completes watching an ad
- `ad_failed` - When ad fails to load (with error code)

### Business Events:
- `pack_unlocked` - When a puzzle pack is unlocked via ad
- `hint_used` - When player uses a hint

### Custom Events:
- `test_event` - For testing Firebase connection
- Any custom events via `logCustomEvent()`

## Current Tracking Locations:
- `src/utils/firebase.ts` - Core Firebase implementation
- `src/utils/adManager.ts` - Ad success/failure tracking
- `src/utils/rewardAd.ts` - Rewarded ad tracking
- `src/utils/interstitialAd.ts` - Interstitial ad tracking
- `App.tsx` - Firebase initialization

## Firebase Utilities Available

### Basic Tracking:
```typescript
import { trackGameEvent } from './src/utils/firebase';

trackGameEvent.adShown('interstitial');
trackGameEvent.adCompleted('rewarded');
trackGameEvent.adFailed('rewarded', 'network_error');
trackGameEvent.packUnlocked(1);
trackGameEvent.hintUsed('level_1_1');
```

### Advanced Features:
```typescript
import { initializeFirebase, setUserProperties, logCustomEvent } from './src/utils/firebase';

// Initialize Firebase
await initializeFirebase();

// Set user properties
await setUserProperties({
  user_type: 'premium',
  app_version: '1.0.0'
});

// Log custom events
await logCustomEvent('level_completed', {
  level_id: '1_1',
  time_spent: 120,
  hints_used: 2
});
```

## Testing Firebase Connection

Use the test utility to verify Firebase is working:

```typescript
import { testFirebaseAnalytics, testFirebaseConnection } from './src/utils/firebaseTest';

// Test connection
testFirebaseConnection();

// Test analytics
testFirebaseAnalytics();
```

## Next Steps
1. Test with EAS Build
2. Verify events appear in Firebase Console
3. Add more tracking events as needed
4. Set up Firebase project and add configuration files if not done

## Notes
- Firebase Analytics has a delay (usually 24-48 hours) before events appear in the console
- Debug events may appear faster in the DebugView section
- All ad events are automatically tracked when using the ad utilities
- Business events need to be manually called where appropriate 