import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, Image } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import PrivacyPolicyModal from '../PrivacyPolicyModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const AboutModal = ({ isVisible, onClose, onAdminModeEnabled }) => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [adminClickCount, setAdminClickCount] = useState(0);
  const navigation = useNavigation();

  // Reset click count when modal opens
  useEffect(() => {
    if (isVisible) {
      setAdminClickCount(0);
    }
  }, [isVisible]);

  const handleEmailPress = () => {
    Linking.openURL('mailto:trios@shworan.com');
  };

  const handleLinkedInPress = () => {
    Linking.openURL('https://www.linkedin.com/in/daveshworan/');
  };

  const handlePrivacyPolicyPress = () => {
    setShowPrivacyPolicy(true);
  };

  const handleAdminAreaPress = async () => {
    const newCount = adminClickCount + 1;
    console.log('Admin click:', newCount);
    setAdminClickCount(newCount);
    
    if (newCount === 3) {
      console.log('Setting admin mode to true');
      await AsyncStorage.setItem('trios_admin_mode', 'true');
      // Add a small delay before closing
      setTimeout(() => {
        console.log('Closing modals');
        onAdminModeEnabled(); // Close both modals
      }, 100);
    }
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* Header */}
            <View style={styles.modalHeader}>
              <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>About</Text>
            </View>
            
            <ScrollView 
              style={styles.modalContent}
              contentContainerStyle={styles.scrollViewContent}
            >
              <View style={styles.contentBox}>
                <Text style={styles.sectionTitle}>About TRIOS</Text>
                <Text style={styles.paragraph}>
                  TRIOS is a pattern matching puzzle game. It is a great way to exercise your brain!
                </Text>
                <Text style={styles.versionText}>Version: 1.0.0</Text>
                <Text style={styles.paragraph}>
                  Created by: Dave Shworan
                </Text>
                <Text style={styles.paragraph}>
                  © 2025 All Rights Reserved
                </Text>
                <TouchableOpacity style={styles.linkButton} onPress={handlePrivacyPolicyPress}>
                  <Text style={styles.linkText}>Privacy Policy</Text>
                </TouchableOpacity>
              </View>
              
              <View style={styles.contentBox}>
                <Text style={styles.paragraph}>
                  From the developer: This is my first app ever, and I had a lot of fun making it. 
                  I would love to hear your feedback! Email me at{' '} 
                  <Text style={styles.emailLink} onPress={handleEmailPress}>
                    trios@shworan.com
                  </Text>
                </Text>
                
                <TouchableOpacity style={styles.socialButton} onPress={handleLinkedInPress}>
                  <Svg width="24" height="24" viewBox="0 0 24 24" style={styles.socialIcon}>
                    <Path 
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <Path 
                      d="M2 9h4v12H2z"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <Circle 
                      cx="4" 
                      cy="4" 
                      r="2"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      fill="none"
                    />
                  </Svg>
                </TouchableOpacity>

                {/* Hidden admin area button */}
                <TouchableOpacity 
                  style={styles.adminArea} 
                  onPress={handleAdminAreaPress}
                  activeOpacity={1}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <PrivacyPolicyModal 
        visible={showPrivacyPolicy} 
        onClose={() => setShowPrivacyPolicy(false)} 
      />
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  modalView: {
    width: '90%',
    maxWidth: 500,
    height: '90%',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#292929',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 28,
    color: '#E0E0E0',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E0E0E0',
  },
  modalContent: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 15,
  },
  contentBox: {
    backgroundColor: '#292929',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E0E0E0',
    marginBottom: 15,
    textAlign: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#404040',
    width: '100%',
  },
  paragraph: {
    fontSize: 16,
    color: '#B0B0B0',
    marginBottom: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  versionText: {
    fontSize: 16,
    color: '#B0B0B0',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  linkButton: {
    marginTop: 5,
    padding: 8,
  },
  linkText: {
    color: '#3498db',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  emailLink: {
    color: '#3498db',
    textDecorationLine: 'underline',
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0077B5',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  socialIcon: {
    marginTop: 2,
  },
  adminArea: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 50,
    height: 50,
    opacity: 0,
  },
});

export default AboutModal; 