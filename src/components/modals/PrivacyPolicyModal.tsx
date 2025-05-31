import React from 'react';
import { View, Text, Modal, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

interface PrivacyPolicyModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isVisible, onClose }) => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.title}>Privacy Policy</Text>
            <Text style={styles.lastUpdated}>Last Updated: May 6, 2024</Text>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Introduction</Text>
              <Text style={styles.text}>
                Welcome to SYMBIC ("we", "our", or "us"). We respect your privacy and are committed to protecting your information. This Privacy Policy explains how we handle your information when you use our mobile application.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Information We Collect</Text>
              <Text style={styles.text}>
                SYMBIC is a casual game and does not collect personally identifiable information directly from users. However, we may work with third-party services that collect limited data automatically.
              </Text>
              <Text style={styles.bulletPoint}>• Ad Data: We use Google AdMob to serve in-game ads. AdMob may collect device information, usage data, and app interaction events to personalize ads and measure performance.</Text>
              <Text style={styles.bulletPoint}>• Analytics: We may integrate third-party analytics (e.g., Firebase) in the future to help us understand how users interact with our app. These tools may collect aggregated, anonymous usage data to improve gameplay and performance.</Text>
              <Text style={styles.bulletPoint}>• Game Progress: Your game progress (like scores and levels) is stored locally on your device. It is not shared or uploaded to our servers.</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Children's Privacy</Text>
              <Text style={styles.text}>
                SYMBIC is not intended for children under the age of 13. We do not knowingly collect personal data from children. If you believe a child has provided us with personal information, please contact us so we can take appropriate action.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Data Security</Text>
              <Text style={styles.text}>
                We implement reasonable safeguards to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure. We encourage you to keep your device protected and up-to-date.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Your Choices</Text>
              <Text style={styles.bulletPoint}>• You may disable ad personalization through your device settings.</Text>
              <Text style={styles.bulletPoint}>• You can reset advertising identifiers in your phone's privacy settings.</Text>
              <Text style={styles.bulletPoint}>• You may opt out of analytics collection when we enable that feature in the future.</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Changes to This Policy</Text>
              <Text style={styles.text}>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with a new "Last Updated" date.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Contact Us</Text>
              <Text style={styles.text}>
                If you have any questions about this Privacy Policy, you can contact us at:
              </Text>
              <Text style={styles.text}>
                Dave Shworan{'\n'}
                Email: symbic@shworan.com{'\n'}
                Address: 1925 Delanice Way, Nanoose Bay, BC, Canada, V9P 9B3
              </Text>
            </View>
          </ScrollView>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    width: '90%',
    height: '90%',
    padding: 20,
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E0E0E0',
    marginBottom: 8,
    textAlign: 'center',
  },
  lastUpdated: {
    fontSize: 14,
    color: '#999',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E0E0E0',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#CCC',
    lineHeight: 24,
    marginBottom: 10,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#CCC',
    lineHeight: 24,
    marginBottom: 8,
    paddingLeft: 10,
  },
  closeButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PrivacyPolicyModal; 