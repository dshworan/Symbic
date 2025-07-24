import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Alert } from 'react-native';
import { MobileAds, RewardedAd, RewardedAdEventType, AdEventType } from 'react-native-google-mobile-ads';

const isWeb = Platform.OS === 'web';

interface TestRewardAdScreenProps {
  onBackPress: () => void;
}

interface Reward {
  amount: number;
  type: string;
}

const TestRewardAdScreen: React.FC<TestRewardAdScreenProps> = ({ onBackPress }) => {
  const [isLoadingRewarded, setIsLoadingRewarded] = useState(false);
  const [rewardEarned, setRewardEarned] = useState(false);
  const MAX_RETRIES = 3;
  const retryCountRef = useRef(0);

  // Test Ad Unit ID
  const TEST_REWARD_AD_ID = 'ca-app-pub-3940256099942544/5224354917';

  const rewardedAdRef = useRef<ReturnType<typeof RewardedAd.createForAdRequest> | null>(null);

  // Initialize AdMob
  useEffect(() => {
    if (isWeb) return;

    const initializeAdMob = async () => {
      try {
        await MobileAds().initialize();
        //console.log('✅ AdMob initialized in rewarded test screen');
      } catch (error) {
        console.error('AdMob initialization error:', error);
      }
    };

    initializeAdMob();
  }, []);

  // Create RewardedAd instance once
  useEffect(() => {
    if (isWeb) return;

    try {
      rewardedAdRef.current = RewardedAd.createForAdRequest(TEST_REWARD_AD_ID);
      console.log('✅ RewardedAd instance created');
    } catch (error) {
      console.error('Failed to create RewardedAd:', error);
    }

    return () => {
      rewardedAdRef.current = null;
    };
  }, []);

  const showRewardedAd = async () => {
    if (isWeb) {
      Alert.alert('Web Platform', 'AdMob is not supported on web. Please run this on a mobile device.', [
        { text: 'OK', style: 'cancel' },
      ]);
      return;
    }

    const ad = rewardedAdRef.current;

    if (!ad) {
      Alert.alert(
        'Ad Not Available',
        'The ad module is not available. Please check if the AdMob package is installed correctly.',
        [{ text: 'OK', style: 'cancel' }]
      );
      return;
    }

    setIsLoadingRewarded(true);
    retryCountRef.current = 0;

    const handleLoaded = () => {
      console.log('Rewarded ad loaded, showing now');
      ad.show();
    };

    const handleEarnedReward = (reward: Reward) => {
      console.log('User earned reward:', reward);
      setRewardEarned(true);
      Alert.alert('Reward Earned!', `You earned ${reward.amount} ${reward.type}!`, [{ text: 'Claim', style: 'default' }]);
    };

    const handleClosed = () => {
      console.log('Rewarded ad closed');
      setIsLoadingRewarded(false);
    };

    const handleError = (error: any) => {
      console.error('Rewarded ad error:', error?.code || error);
      const currentRetry = retryCountRef.current + 1;
      retryCountRef.current = currentRetry;

      if (currentRetry < MAX_RETRIES) {
        console.log(`Retrying rewarded ad load (attempt ${currentRetry + 1}/${MAX_RETRIES})...`);
        const retryDelay = 300 * (currentRetry + 1);
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
    };

    // Add listeners
    const unsubscribeLoaded = ad.addAdEventListener(RewardedAdEventType.LOADED, handleLoaded);
    const unsubscribeReward = ad.addAdEventListener(RewardedAdEventType.EARNED_REWARD, handleEarnedReward);
    const unsubscribeClosed = ad.addAdEventListener(AdEventType.CLOSED, handleClosed);
    const unsubscribeError = ad.addAdEventListener(AdEventType.ERROR, handleError);

    // Load ad
    console.log('Loading rewarded ad...');
    ad.load();

    // Clean up listeners after ad interaction
    return () => {
      unsubscribeLoaded();
      unsubscribeReward();
      unsubscribeClosed();
      unsubscribeError();
    };
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>

        <View style={styles.content}>
          <Text style={styles.title}>Rewarded Ad Test</Text>
          <Text style={styles.appId}>SYMBIC App ID: ca-app-pub-3940256099942544~3347511713 (test)</Text>

          {isWeb ? (
            <View style={styles.webNotice}>
              <Text style={styles.webNoticeText}>AdMob is not supported on web platforms.</Text>
              <Text style={styles.webNoticeText}>Please run this app on a mobile device or emulator.</Text>
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
                <Text style={styles.adButtonText}>{isLoadingRewarded ? 'Loading...' : 'Show Test Reward Ad'}</Text>
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
    height: '90%',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
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