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
  "Superb!",
  "Boom!",
  "You're On Fire!",
  "Crushed It!",
  "Nailed It!",
  "On a Roll!",
  "Nicely Done!",
  "Onward!",
  "You're a Pro!",
  "Genius!"
];

export const getRandomSuccessMessage = () => {
  const randomIndex = Math.floor(Math.random() * successMessages.length);
  return {
    message: successMessages[randomIndex]
  };
}; 