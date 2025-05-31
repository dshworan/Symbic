import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Alert } from 'react-native';

// Check if we're on web platform
const isWeb = Platform.OS === 'web';

// Import the appropriate module based on platform
let MobileAds;
let RewardedAd;
let AdEventType;
let RewardedAdEventType;

if (isWeb) {
  // Use mock implementation for web
  const MockAdMob = require('../utils/mock-admob');
  MobileAds = MockAdMob.default;
  RewardedAd = MockAdMob.RewardedAd;
  AdEventType = MockAdMob.AdEventType;
  RewardedAdEventType = MockAdMob.RewardedAdEventType;
} else {
  // Use real implementation for native
  try {
    const NativeAds = require('react-native-google-mobile-ads');
    MobileAds = NativeAds;
    RewardedAd = NativeAds.RewardedAd;
    AdEventType = NativeAds.AdEventType;
    RewardedAdEventType = NativeAds.RewardedAdEventType;
  } catch (error) {
    console.error('Failed to import AdMob:', error);
  }
}

const TestRewardAdScreen = ({ onBackPress }) => {
  const [isLoadingRewarded, setIsLoadingRewarded] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [rewardEarned, setRewardEarned] = useState(false);
  const MAX_RETRIES = 3;
  
  // Ad Unit ID - Using explicit test ID for development
  const REWARD_AD_ID = 'ca-app-pub-3940256099942544/5224354917';
  
  // Initialize AdMob
  useEffect(() => {
    // Skip on web
    if (isWeb || !MobileAds) return;

    const initializeAdMob = async () => {
      try {
        await MobileAds.default().initialize();
        console.log('✅ AdMob initialized in rewarded test screen');
      } catch (error) {
        console.error('AdMob initialization error:', error);
      }
    };

    initializeAdMob();
  }, []);
  
  // Helper function to create a fresh rewarded ad instance
  const createRewardedAd = () => {
    if (isWeb || !RewardedAd) return null;
    
    try {
      const ad = RewardedAd.createForAdRequest(REWARD_AD_ID);
      return ad;
    } catch (error) {
      console.error('Failed to create rewarded ad:', error);
      return null;
    }
  };

  const showRewardedAd = async () => {
    if (isWeb) {
      Alert.alert(
        'Web Platform',
        'AdMob is not supported on web. Please run this on a mobile device or emulator.',
        [{ text: 'OK', style: 'cancel' }]
      );
      return;
    }
    
    setIsLoadingRewarded(true);
    setRetryCount(0);
    
    try {
      console.log(`Creating fresh rewarded ad instance with ID: ${REWARD_AD_ID}`);
      
      // Create a fresh ad instance each time
      const ad = createRewardedAd();
      if (!ad) {
        setIsLoadingRewarded(false);
        Alert.alert(
          'Ad Not Available',
          'The ad module is not available. Please check if the AdMob package is installed correctly.',
          [{ text: 'OK', style: 'cancel' }]
        );
        return;
      }
      
      // Add all event listeners first, then load
      ad.addAdEventListener(RewardedAdEventType.LOADED, () => {
        console.log('Rewarded ad loaded, showing now');
        setRetryCount(0); // Reset retry count on success
        ad.show();
      });
      
      ad.addAdEventListener(RewardedAdEventType.EARNED_REWARD, (reward) => {
        console.log('User earned reward:', reward);
        setRewardEarned(true);
        Alert.alert(
          'Reward Earned!', 
          `You earned ${reward.amount} ${reward.type}!`,
          [{ text: 'Claim', style: 'default' }]
        );
      });
      
      ad.addAdEventListener(AdEventType.CLOSED, () => {
        console.log('Rewarded ad closed');
        setIsLoadingRewarded(false);
        setRetryCount(0); // Reset retry count after successful completion
      });
      
      ad.addAdEventListener(AdEventType.ERROR, (error) => {
        console.error('Rewarded ad error:', error?.code || error);
        
        const currentRetryCount = retryCount + 1;
        setRetryCount(currentRetryCount);
        
        if (currentRetryCount < MAX_RETRIES) {
          console.log(`Retrying rewarded ad load (attempt ${currentRetryCount + 1}/${MAX_RETRIES})...`);
          // Shorter delay with each retry
          const retryDelay = 300 * (currentRetryCount + 1);
          setTimeout(() => {
            console.log(`Retrying ad load after ${retryDelay}ms delay`);
            ad.load();
          }, retryDelay);
        } else {
          Alert.alert(
            'Ad Error', 
            `Failed to load rewarded ad after ${MAX_RETRIES} attempts. Error code: ${error?.code || 'unknown'}`,
            [{ text: 'OK', style: 'cancel' }]
          );
          setIsLoadingRewarded(false);
        }
      });
      
      // Load the ad after all listeners are set up, with a delay to let SDK settle
      console.log('Waiting 50ms before loading rewarded ad...');
      setTimeout(() => {
        console.log('Now loading rewarded ad after delay');
        ad.load();
      }, 50); // 50ms buffer
      
    } catch (error) {
      console.error('Error setting up rewarded ad:', error);
      Alert.alert(
        'Ad Error', 
        'Failed to set up rewarded ad. Please try again later.',
        [{ text: 'OK', style: 'cancel' }]
      );
      setIsLoadingRewarded(false);
    }
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Test Reward Ad</Text>
        </View>
        
        <View style={styles.content}>
          <Text style={styles.title}>Rewarded Ad Test</Text>
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
              <Text style={styles.adId}>Test ID: {REWARD_AD_ID}</Text>
              
              {rewardEarned && (
                <View style={styles.rewardBox}>
                  <Text style={styles.rewardText}>Reward Earned! 🎁</Text>
                  <Text style={styles.rewardSubtext}>You would receive in-game currency or items here.</Text>
                </View>
              )}
              
              <TouchableOpacity 
                style={[styles.adButton, isLoadingRewarded && styles.adButtonDisabled]}
                onPress={showRewardedAd}
                disabled={isLoadingRewarded}
              >
                <Text style={styles.adButtonText}>
                  {isLoadingRewarded ? "Loading..." : "Show Reward Ad"}
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
    maxHeight: '90%',
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
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  content: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  appId: {
    fontSize: 14,
    color: '#888',
    marginBottom: 24,
    textAlign: 'center',
  },
  adSection: {
    width: '100%',
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  adId: {
    fontSize: 12,
    color: '#888',
    marginBottom: 12,
    textAlign: 'center',
  },
  webNotice: {
    backgroundColor: '#3a2020',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  webNoticeText: {
    fontSize: 16,
    color: '#ff8080',
    textAlign: 'center',
    marginBottom: 4,
  },
  rewardBox: {
    backgroundColor: '#2ecc71',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    width: '90%',
    alignItems: 'center',
  },
  rewardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  rewardSubtext: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
  },
  adButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  adButtonDisabled: {
    opacity: 0.6,
  },
  adButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TestRewardAdScreen; 