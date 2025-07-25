import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Alert } from 'react-native';

// Check if we're on web platform
const isWeb = Platform.OS === 'web';

// Import the appropriate module based on platform
let MobileAds: any;
let InterstitialAd: any;
let AdEventType: any;

// Initialize modules based on platform
const initializeModules = async () => {
  if (isWeb) {
    // Use mock implementation for web
    const MockAdMob = await import('../utils/mock-admob');
    MobileAds = MockAdMob.default;
    InterstitialAd = MockAdMob.default.InterstitialAd;
    AdEventType = MockAdMob.default.AdEventType;
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
};

interface LiveInterstitialAdScreenProps {
  onBackPress: () => void;
}

const LiveInterstitialAdScreen: React.FC<LiveInterstitialAdScreenProps> = ({ onBackPress }) => {
  const [isLoadingInterstitial, setIsLoadingInterstitial] = useState(false);
  
  // Production Ad Unit IDs
  const PROD_ANDROID_INTERSTITIAL_AD_ID = 'ca-app-pub-7569267138426237/2000725188';
  const PROD_IOS_INTERSTITIAL_AD_ID = '00000000000000000000000000';
  
  // Get the appropriate ad ID based on platform
  const INTERSTITIAL_AD_ID = Platform.OS === 'android' ? PROD_ANDROID_INTERSTITIAL_AD_ID : PROD_IOS_INTERSTITIAL_AD_ID;
  
  // Create ad ref
  const interstitialAdRef = useRef<any>(null);
  
  // Initialize AdMob
  useEffect(() => {
    const initializeAdMob = async () => {
      // Initialize modules first
      await initializeModules();
      
      // Skip initialization on web
      if (isWeb || !MobileAds) return;

      try {
        await MobileAds.default().initialize();
        //console.log('✅ AdMob initialized in live interstitial test screen');
      } catch (error) {
        console.error('AdMob initialization error:', error);
      }
    };

    initializeAdMob();
  }, []);
  
  // Create interstitial ad instance
  useEffect(() => {
    // Skip on web
    if (isWeb || !InterstitialAd) return;

    try {
      interstitialAdRef.current = InterstitialAd.createForAdRequest(INTERSTITIAL_AD_ID);
    } catch (error) {
      console.error('Failed to create interstitial ad:', error);
    }
  }, []);
  
  // Preload the interstitial ad when component mounts
  useEffect(() => {
    // Skip on web
    if (isWeb || !AdEventType) return;
    
    const interstitialAd = interstitialAdRef.current;
    if (!interstitialAd) return;
    
    // Set up event listeners for interstitial ad
    const interstitialLoadedUnsubscribe = interstitialAd.addAdEventListener(AdEventType.LOADED, () => {
      console.log('Live interstitial ad preloaded and ready');
    });
    
    const interstitialErrorUnsubscribe = interstitialAd.addAdEventListener(AdEventType.ERROR, (error: any) => {
      console.error('Live interstitial ad preload error:', error);
    });

    // Load the ad
    console.log('Preloading live interstitial ad...');
    interstitialAd.load();
    
    // Clean up listeners when component unmounts
    return () => {
      interstitialLoadedUnsubscribe();
      interstitialErrorUnsubscribe();
    };
  }, []);
  
  const showInterstitialAd = async () => {
    if (isWeb) {
      Alert.alert(
        'Web Platform',
        'AdMob is not supported on web. Please run this on a mobile device or emulator.',
        [{ text: 'OK', style: 'cancel' }]
      );
      return;
    }
    
    const interstitialAd = interstitialAdRef.current;
    if (!interstitialAd) {
      Alert.alert(
        'Ad Not Available',
        'The ad module is not available. Please check if the AdMob package is installed correctly.',
        [{ text: 'OK', style: 'cancel' }]
      );
      return;
    }
    
    setIsLoadingInterstitial(true);
    
    try {
      console.log(`Preparing to show live interstitial ad with ID: ${INTERSTITIAL_AD_ID}`);
      
      // Set up listeners specifically for this showing instance
      const unsubscribeClosed = interstitialAd.addAdEventListener(AdEventType.CLOSED, () => {
        console.log('Live interstitial ad closed');
        setIsLoadingInterstitial(false);
        // Preload the next ad
        interstitialAd.load();
      });
      
      // Show the ad if it's loaded
      if (interstitialAd.loaded) {
        interstitialAd.show();
      } else {
        // If not loaded, show loading indicator and wait for load before showing
        const unsubscribeLoaded = interstitialAd.addAdEventListener(AdEventType.LOADED, () => {
          console.log('Live interstitial ad loaded, showing now');
          interstitialAd.show();
          unsubscribeLoaded();
        });
        
        // Set error handler just for this attempt
        const unsubscribeError = interstitialAd.addAdEventListener(AdEventType.ERROR, (error: any) => {
          console.error('Live interstitial ad error:', error);
          Alert.alert(
            'Ad Error', 
            'Failed to load live interstitial ad.',
            [{ text: 'OK', style: 'cancel' }]
          );
          setIsLoadingInterstitial(false);
          unsubscribeError();
        });
        
        // Try loading the ad
        interstitialAd.load();
        
        return () => {
          unsubscribeLoaded();
          unsubscribeError();
          unsubscribeClosed();
        };
      }
      
      return () => {
        unsubscribeClosed();
      };
    } catch (error) {
      console.error('Error setting up live interstitial ad:', error);
      Alert.alert(
        'Ad Error', 
        'Failed to set up live interstitial ad.',
        [{ text: 'OK', style: 'cancel' }]
      );
      setIsLoadingInterstitial(false);
    }
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        
        <View style={styles.content}>
          <Text style={styles.title}>Live Interstitial Ad Test</Text>
          <Text style={styles.appId}>App ID: ca-app-pub-7569267138426237~6830607970</Text>
          
          {isWeb ? (
            <View style={styles.webNotice}>
              <Text style={styles.webNoticeText}>
                AdMob is not supported on web platforms.
              </Text>
              <Text style={styles.webNoticeText}>
                Please run this app on a mobile device or emulator.
              </Text>
            </View>
          ) : (
            <View style={styles.adSection}>
              <Text style={styles.adId}>Live ID: {INTERSTITIAL_AD_ID}</Text>
              
              <TouchableOpacity 
                style={[styles.adButton, isLoadingInterstitial && styles.adButtonDisabled]}
                onPress={showInterstitialAd}
                disabled={isLoadingInterstitial}
              >
                <Text style={styles.adButtonText}>
                  {isLoadingInterstitial ? 'Loading...' : 'Show Live Interstitial Ad'}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
    paddingBottom: 10,
    backgroundColor: '#1E1E1E',
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e0e0e0',
    marginLeft: 10,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e0e0e0',
    marginBottom: 10,
  },
  appId: {
    fontSize: 14,
    color: '#999',
    marginBottom: 20,
  },
  webNotice: {
    backgroundColor: '#2a2a2a',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  webNoticeText: {
    color: '#e0e0e0',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  adSection: {
    width: '100%',
    alignItems: 'center',
  },
  adId: {
    fontSize: 14,
    color: '#999',
    marginBottom: 20,
  },
  adButton: {
    backgroundColor: '#aa0000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  adButtonDisabled: {
    backgroundColor: '#666',
  },
  adButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LiveInterstitialAdScreen; 