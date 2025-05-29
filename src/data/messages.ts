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
  "#2196F3", // Blue
  "#9C27B0", // Purple
  "#FF9800", // Orange
  "#E91E63", // Pink
  "#00BCD4", // Cyan
  "#8BC34A", // Light Green
  "#FF5722", // Deep Orange
  "#3F51B5", // Indigo
  "#009688", // Teal
];

export const getRandomSuccessMessage = () => {
  const randomIndex = Math.floor(Math.random() * successMessages.length);
  return {
    message: successMessages[randomIndex],
    color: successColors[randomIndex]
  };
}; 