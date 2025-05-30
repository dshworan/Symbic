const successMessages = [
  "Nice!",
  "Good Job!",
  "Excellent!",
  "Perfect!",
  "Well Done!",
  "Amazing!",
  "Brilliant!",
  "Fantastic!",
  "Outstanding!",
  "Superb!"
];

const successColors = [
  "#4CAF50", // Green
  "#FF9800", // Orange
  "#E91E63", // Pink
  "#00BCD4", // Cyan
  "#FF5722", // Deep Orange
  "#3F51B5" // Indigo
];

export const getRandomSuccessMessage = () => {
  const randomIndex = Math.floor(Math.random() * successMessages.length);
  return {
    message: successMessages[randomIndex],
    color: successColors[randomIndex]
  };
}; 