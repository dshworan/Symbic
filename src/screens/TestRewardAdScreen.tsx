import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Alert } from 'react-native';

// Check if we're on web platform
const isWeb = Platform.OS === 'web';

// Import the appropriate module based on platform
let MobileAds: any;
let RewardedAd: any;
let AdEventType: any;
let RewardedAdEventType: any;

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

interface TestRewardAdScreenProps {
  onBackPress: () => void;
}

interface Reward {
  amount: number;
  type: string;
}

const TestRewardAdScreen: React.FC<TestRewardAdScreenProps> = ({ onBackPress }) => {
  const [isLoadingRewarded, setIsLoadingRewarded] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [rewardEarned, setRewardEarned] = useState(false);
  const MAX_RETRIES = 3;
  // SYMBIC APP ID
  //   ca-app-pub-7569267138426237~5058149272
  // Ad Unit ID - Reward Ad Development
  //   ca-app-pub-3940256099942544/5224354917
  // Ad Unit ID - Reward Ad Production Android
  //   ca-app-pub-7569267138426237/6876055022


  // Test Ad Unit ID
  const TEST_REWARD_AD_ID = 'ca-app-pub-3940256099942544/5224354917';
  
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
      const ad = RewardedAd.createForAdRequest(TEST_REWARD_AD_ID);
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
        'AdMob is not supported on web. Please run this on a mobile device.',
        [{ text: 'OK', style: 'cancel' }]
      );
      return;
    }
    
    setIsLoadingRewarded(true);
    setRetryCount(0);
    
    try {
      console.log(`Creating fresh rewarded ad instance with ID: ${TEST_REWARD_AD_ID}`);
      
      // Create a fresh ad instance each time
      const ad = createRewardedAd();
      if (!ad) {
        setIsLoadingRewarded(false);
        console.log('Rewarded ad not available. Grrr...');
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
      
      ad.addAdEventListener(RewardedAdEventType.EARNED_REWARD, (reward: Reward) => {
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
      
      ad.addAdEventListener(AdEventType.ERROR, (error: any) => {
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
          <Text style={styles.appId}>SYMBICApp ID: ca-app-pub-7569267138426237~5058149272</Text>
          
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
              <Text style={styles.adId}>Test ID: {TEST_REWARD_AD_ID}</Text>
              
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
                  {isLoadingRewarded ? "Loading..." : "Show Test Reward Ad"}
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
    color: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e0e0e0',
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
  rewardBox: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  rewardText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rewardSubtext: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  adButton: {
    backgroundColor: '#3498db',
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

export default TestRewardAdScreen; 