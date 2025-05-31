import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

// Import all images
const colorsImage = require('../../assets/images/1colors.png');
const shapesImage = require('../../assets/images/2shapes.png');
const numbersImage = require('../../assets/images/3numbers.png');
const patternsImage = require('../../assets/images/4patterns.png');
const sample1Image = require('../../assets/images/sample1.png');
const sample2Image = require('../../assets/images/sample2.png');
const sample3Image = require('../../assets/images/sample3.png');
const sample4Image = require('../../assets/images/sample4.png');
const sample5Image = require('../../assets/images/sample5.png');

const HelpModal = ({ isVisible, onClose }) => {
  return (
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
            <Text style={styles.modalTitle}>Help</Text>
          </View>
          
          <ScrollView 
            style={styles.modalContent}
            contentContainerStyle={styles.scrollViewContent}
          >
            <View style={styles.contentBox}>
              <Text style={styles.sectionTitle}>How to Play TRIOS</Text>
              <Text style={styles.paragraph}>
                TRIOS is a pattern-matching game where you find a TRIO of 3 tiles that follow specific rules. 
                It isn't as easy as it sounds! With time, your brain will learn to spot the patterns.
              </Text>
            </View>
            
            <View style={styles.contentBox}>
              <Text style={styles.sectionTitle}>What Is a Valid TRIO?</Text>
              <Text style={styles.paragraph}>
                A valid TRIO is 3 tiles where <Text style={styles.boldText}>each</Text> attribute 
                (color, shape, number, and pattern) is <Text style={styles.boldText}>either</Text>:
              </Text>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>All the same on all three tiles, OR</Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>All different on all three tiles</Text>
              </View>
              <Text style={styles.paragraph}>
                There are four attributes to check:
              </Text>
              
              <View style={styles.attributesContainer}>
                <View style={styles.attributeSection}>
                  <Text style={styles.attributeTitle}>Colors</Text>
                  <Image source={colorsImage} style={styles.attributeImage} resizeMode="contain" />
                  <Text style={styles.attributeDetail}>Red, Green, Blue</Text>
                </View>

                <View style={styles.attributeSection}>
                  <Text style={styles.attributeTitle}>Shapes</Text>
                  <Image source={shapesImage} style={styles.attributeImage} resizeMode="contain" />
                  <Text style={styles.attributeDetail}>Diamond, Circle, Square</Text>
                </View>

                <View style={styles.attributeSection}>
                  <Text style={styles.attributeTitle}>Dots (Number)</Text>
                  <Image source={numbersImage} style={styles.attributeImage} resizeMode="contain" />
                  <Text style={styles.attributeDetail}>1, 2, or 3 Dots</Text>
                </View>

                <View style={styles.attributeSection}>
                  <Text style={styles.attributeTitle}>Patterns</Text>
                  <Image source={patternsImage} style={styles.attributeImage} resizeMode="contain" />
                  <Text style={styles.attributeDetail}>Solid, Outline, Dashed</Text>
                </View>
              </View>
            </View>
            
            <View style={styles.contentBox}>
              <Text style={styles.sectionTitle}>Examples of Valid TRIOS</Text>
              
              <Image source={sample3Image} style={styles.exampleImage} resizeMode="contain" />
              <Text style={styles.exampleCaption}>
                Color All Same • Dots All Same • Shapes All Different • Pattern All Same (Solid)
              </Text>

              <View style={styles.separator} />
              
              <Image source={sample5Image} style={styles.exampleImage} resizeMode="contain" />
              <Text style={styles.exampleCaption}>
                Color All Different • Dots All Same • Shapes All Different • Pattern All Same (Line)
              </Text>
              
              <View style={styles.separator} />
              
              <Image source={sample2Image} style={styles.exampleImage} resizeMode="contain" />
              <Text style={styles.exampleCaption}>
                Color All Different • Dots All Same • Shapes All Different • Pattern All Different
              </Text>
              
              <View style={styles.separator} />
              
              <Image source={sample1Image} style={styles.exampleImage} resizeMode="contain" />
              <Text style={styles.exampleCaption}>
                Color All Same • Dots All Different • Shapes All Different • Pattern All Different
              </Text>
              
              <View style={styles.separator} />
              
              <Image source={sample4Image} style={styles.exampleImage} resizeMode="contain" />
              <Text style={styles.exampleCaption}>
                Color All Different • Dots All Different • Shapes All Different • Pattern All Different
              </Text>
              
            </View>
            
            <View style={styles.contentBox}>
              <Text style={styles.sectionTitle}>Game Controls</Text>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Click</Text> on 3 tiles to select them
                </Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Solutions</Text> shows how many valid TRIOS are possible on the current game board
                </Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Use <Text style={styles.boldText}>New Tiles</Text> to shuffle new tiles
                </Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Use <Text style={styles.boldText}>Hint</Text> if you get stuck
                </Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Use <Text style={styles.boldText}>Sort</Text> to sort the tiles by color, shape, number, or pattern
                </Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Each valid TRIO you find adds 1 to your score
                </Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  You have limited Free Hints, but you will earn more.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
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
  },
  paragraph: {
    fontSize: 16,
    color: '#B0B0B0',
    marginBottom: 15,
    lineHeight: 22,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#E0E0E0',
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingLeft: 5,
  },
  bullet: {
    fontSize: 16,
    color: '#B0B0B0',
    marginRight: 10,
    fontWeight: 'bold',
  },
  bulletText: {
    fontSize: 16,
    color: '#B0B0B0',
    flex: 1,
    lineHeight: 22,
  },
  attributesContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  attributeSection: {
    marginBottom: 20,
    alignItems: 'center',
  },
  attributeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E0E0E0',
    marginBottom: 8,
  },
  attributeDetail: {
    fontSize: 15,
    color: '#B0B0B0',
    marginTop: 5,
  },
  attributeImage: {
    width: '90%',
    height: 80,
    marginVertical: 5,
  },
  exampleImage: {
    width: '100%',
    height: 100,
    marginVertical: 10,
  },
  exampleCaption: {
    fontSize: 15,
    color: '#B0B0B0',
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 10,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#404040',
    marginVertical: 15,
  },
});

export default HelpModal; 