import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Tablet detection based on screen size and platform
export const isTablet = () => {
  const { width, height } = Dimensions.get('window');
  const aspectRatio = height / width;
  
  // iPad detection
  if (Platform.OS === 'ios') {
    // iPad typically has aspect ratio less than 1.6
    return aspectRatio < 1.6 && (width >= 768 || height >= 768);
  }
  
  // Android tablet detection
  if (Platform.OS === 'android') {
    // Android tablets typically have width >= 600dp
    return width >= 600;
  }
  
  // Web tablet detection
  if (Platform.OS === 'web') {
    return width >= 768;
  }
  
  return false;
};

// Get responsive dimensions based on device type
export const getResponsiveDimensions = () => {
  const isTabletDevice = isTablet();
  
  return {
    isTablet: isTabletDevice,
    maxGridWidth: isTabletDevice ? 500 : 700, // Updated to match maxContentWidth
    maxContentWidth: isTabletDevice ? 500 : 700,
    cellSizeMultiplier: isTabletDevice ? 1.3 : 1,
    fontSizeMultiplier: isTabletDevice ? 1.2 : 1,
    spacingMultiplier: isTabletDevice ? 1.4 : 1,
    buttonSizeMultiplier: isTabletDevice ? 1.3 : 1,
  };
};

// Get optimal cell size for different grid sizes on tablets
export const getOptimalCellSize = (gridSize: number, screenWidth: number) => {
  const { isTablet, maxGridWidth, maxContentWidth } = getResponsiveDimensions();
  
  if (!isTablet) {
    // Use existing logic for phones
    const maxWidth = Math.min(screenWidth, 700);
    const padding = 20;
    const gridBorder = 2; // 1px border on each side of the grid
    const cellBorders = (gridSize - 1) * 2; // borders between cells
    const totalBorderSpace = gridBorder + cellBorders;
    const availableWidth = maxWidth - padding - totalBorderSpace;
    return Math.floor(availableWidth / gridSize);
  }
  
  // Tablet-specific sizing - use the actual container width
  const containerWidth = maxContentWidth; // Use the constrained container width
  const padding = 60; // Reasonable padding on tablets
  const gridBorder = 2; // 1px border on each side of the grid
  const cellBorders = (gridSize - 1) * 2; // borders between cells
  const totalBorderSpace = gridBorder + cellBorders;
  const availableWidth = containerWidth - padding - totalBorderSpace;
  
  // Calculate base size without multiplier
  let baseSize = Math.floor(availableWidth / gridSize);
  
  // Set conservative limits for the 500px container
  let minCellSize = 35;
  let maxCellSize = 70;
  
  // Adjust limits based on grid size
  if (gridSize >= 10) {
    minCellSize = 30;
    maxCellSize = 55;
  } else if (gridSize >= 8) {
    minCellSize = 35;
    maxCellSize = 60;
  } else if (gridSize >= 6) {
    minCellSize = 40;
    maxCellSize = 65;
  }
  
  // Apply constraints
  baseSize = Math.max(minCellSize, Math.min(maxCellSize, baseSize));
  
  return baseSize; // Don't apply multiplier to prevent overflow
};

// Get responsive font sizes
export const getResponsiveFontSize = (baseSize: number) => {
  const { fontSizeMultiplier } = getResponsiveDimensions();
  return Math.round(baseSize * fontSizeMultiplier);
};

// Get responsive spacing
export const getResponsiveSpacing = (baseSpacing: number) => {
  const { spacingMultiplier } = getResponsiveDimensions();
  return Math.round(baseSpacing * spacingMultiplier);
}; 