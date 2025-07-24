import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

const TestInterstitialAdScreen = () => {
  const navigation = useNavigation();
  const [isLoadingInterstitial, setIsLoadingInterstitial] = useState(false);
  
  // Ad Unit ID - Using explicit test ID for development
  const INTERSTITIAL_AD_ID = 'ca-app-pub-3940256099942544/1033173712';
  
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
        //console.log('✅ AdMob initialized in interstitial test screen');
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
      console.log('Interstitial ad preloaded and ready');
    });
    
    const interstitialErrorUnsubscribe = interstitialAd.addAdEventListener(AdEventType.ERROR, (error: any) => {
      console.error('Interstitial ad preload error:', error);
    });

    // Load the ad
    console.log('Preloading interstitial ad...');
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
      console.log(`Preparing to show interstitial ad with ID: ${INTERSTITIAL_AD_ID}`);
      
      // Set up listeners specifically for this showing instance
      const unsubscribeClosed = interstitialAd.addAdEventListener(AdEventType.CLOSED, () => {
        console.log('Interstitial ad closed');
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
          console.log('Interstitial ad loaded, showing now');
          interstitialAd.show();
          unsubscribeLoaded();
        });
        
        // Set error handler just for this attempt
        const unsubscribeError = interstitialAd.addAdEventListener(AdEventType.ERROR, (error: any) => {
          console.error('Interstitial ad error:', error);
          Alert.alert(
            'Ad Error', 
            'Failed to load interstitial ad. Please try again later.',
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
      console.error('Error setting up interstitial ad:', error);
      Alert.alert(
        'Ad Error', 
        'Failed to set up interstitial ad. Please try again later.',
        [{ text: 'OK', style: 'cancel' }]
      );
      setIsLoadingInterstitial(false);
    }
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
       
        <View style={styles.content}>
          <Text style={styles.title}>Interstitial Ad Test</Text>
          <Text style={styles.appId}>App ID: ca-app-pub-7569267138426237~5058149272</Text>
          
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
              <Text style={styles.adId}>Test ID: {INTERSTITIAL_AD_ID}</Text>
              <TouchableOpacity 
                style={styles.adButton}
                onPress={showInterstitialAd}
                disabled={isLoadingInterstitial}
              >
                <Text style={styles.adButtonText}>
                  {isLoadingInterstitial ? "Loading..." : "Show Interstitial Ad"}
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    width: '100%',
    maxWidth: 500,
    maxHeight: '80%',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#2a2a2a',
  },
  backButton: {
    padding: 8,
    marginRight: 10,
  },
  backButtonText: {
    color: '#e0e0e0',
    fontSize: 24,
  },
  headerTitle: {
    color: '#e0e0e0',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  title: {
    color: '#e0e0e0',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  appId: {
    color: '#999',
    fontSize: 14,
    marginBottom: 20,
  },
  webNotice: {
    backgroundColor: '#2a2a2a',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  webNoticeText: {
    color: '#e0e0e0',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
  adSection: {
    marginTop: 20,
  },
  adId: {
    color: '#999',
    fontSize: 14,
    marginBottom: 15,
  },
  adButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  adButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TestInterstitialAdScreen; 