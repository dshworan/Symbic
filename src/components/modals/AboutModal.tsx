import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PrivacyPolicyModal from './PrivacyPolicyModal';

interface AboutModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isVisible, onClose }) => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const handleEmailPress = () => {
    Linking.openURL('mailto:symbic@shworan.com');
  };

  const handleLinkedInPress = () => {
    Linking.openURL('https://www.linkedin.com/in/daveshworan/');
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
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>About</Text>
              <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Ionicons name="close" size={24} color="#e0e0e0" />
              </TouchableOpacity>
            </View>
            
            <ScrollView 
              style={styles.modalContent}
              contentContainerStyle={styles.scrollViewContent}
            >
              <View style={styles.contentBox}>
                <Text style={styles.sectionTitle}>About SYMBIC</Text>
                <Text style={[styles.paragraph, { fontWeight: 'bold', color: '#3498db' }]}>
                Test your logic. Sharpen your intuition. Master the grid!
                </Text>
                <Text style={styles.paragraph}>
                Symbic is a logic-based pattern-matching puzzle game that challenges your brain and tests your problem-solving skills. 
                </Text>
                <Text style={styles.versionText}>Version: 1.0.0</Text>
                <Text style={styles.paragraph}>
                  Created by: Dave Shworan
                </Text>
                <Text style={styles.paragraph}>
                  © 2024 All Rights Reserved
                </Text>
              </View>
              
              <View style={styles.contentBox}>
                <Text style={styles.paragraph}>
                  From the developer: I had a lot of fun making this game. 
                  I would love to hear your feedback! Email me at{' '} 
                  <Text style={styles.emailLink} onPress={handleEmailPress}>
                    symbic@shworan.com
                  </Text>
                </Text>
                <TouchableOpacity 
                  style={styles.socialButton}
                  onPress={handleLinkedInPress}
                >
                  <Ionicons name="logo-linkedin" size={20} color="#e0e0e0" />
                  <Text style={styles.socialButtonText}>Connect on LinkedIn</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity 
                style={styles.privacyButton}
                onPress={() => setShowPrivacyPolicy(true)}
              >
                <Text style={styles.privacyButtonText}>Privacy Policy</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <PrivacyPolicyModal 
        isVisible={showPrivacyPolicy}
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
    backgroundColor: '#121212',
  },
  modalView: {
    width: '90%',
    maxWidth: 400,
    height: '95%',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#292929',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  closeButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E0E0E0',
    marginLeft: 10,
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
  emailLink: {
    color: '#3498db',
    textDecorationLine: 'underline',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0077B5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  socialButtonText: {
    color: '#E0E0E0',
    fontSize: 16,
    marginLeft: 8,
  },
  privacyButton: {
    backgroundColor: '#404040',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  privacyButtonText: {
    color: '#E0E0E0',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AboutModal; 