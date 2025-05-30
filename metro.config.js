// Learn more https://docs.expo.dev/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Handle platform-specific modules
const defaultSourceExts = config.resolver.sourceExts;
config.resolver.sourceExts = ['expo.ts', 'expo.tsx', 'expo.js', 'expo.jsx', ...defaultSourceExts];

// For web builds, use empty module for react-native-google-mobile-ads
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
};

config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...config.resolver.sourceExts, 'svg'],
};

config.resolver.resolveRequest = (context, moduleName, platform) => {
  // For web platform, mock native-only modules
  if (platform === 'web') {
    // Mock react-native-google-mobile-ads
    if (moduleName === 'react-native-google-mobile-ads' || 
        moduleName.startsWith('react-native-google-mobile-ads/')) {
      return {
        filePath: path.resolve(__dirname, './src/utils/mock-admob.js'),
        type: 'sourceFile',
      };
    }
    
    // Mock react-native-immersive
    if (moduleName === 'react-native-immersive') {
      return {
        filePath: path.resolve(__dirname, './src/utils/mock-navigation-bar.js'),
        type: 'sourceFile',
      };
    }
  }
  
  // Use default resolution for other modules
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config; 