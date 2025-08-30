const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Add comprehensive alias configuration to match tsconfig.json paths
config.resolver.alias = {
  '@': path.resolve(__dirname),
  '@/components': path.resolve(__dirname, 'components'),
  '@/hooks': path.resolve(__dirname, 'hooks'),
  '@/constants': path.resolve(__dirname, 'constants'),
  '@/assets': path.resolve(__dirname, 'assets'),
  '@/app': path.resolve(__dirname, 'app'),
};

// Ensure resolver can find aliased modules
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

// Add file extensions
config.resolver.sourceExts = [...config.resolver.sourceExts, 'jsx', 'ts', 'tsx'];

module.exports = config;
