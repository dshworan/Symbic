import React from 'react';
import { View, StyleSheet } from 'react-native';
import TutorialBoard from '../components/TutorialBoard';
import { useTutorial } from '../contexts/TutorialContext';

const TutorialScreen = ({ navigation }) => {
  const { tutorialActive, startTutorial, endTutorial, skipTutorial } = useTutorial();
  
  // Start the tutorial when the screen mounts
  React.useEffect(() => {
    startTutorial();
  }, []);

  // Handle tutorial completion
  const handleTutorialComplete = async () => {
    await endTutorial();
    navigation.goBack();
  };

  // Handle tutorial skip
  const handleTutorialSkip = async () => {
    await skipTutorial();
    navigation.goBack();
  };
  
  return (
    <View style={styles.container}>
      <TutorialBoard 
        navigation={navigation}
        onComplete={handleTutorialComplete}
        onSkip={handleTutorialSkip}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
});

export default TutorialScreen; 