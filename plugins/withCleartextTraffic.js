const { withAndroidManifest } = require('@expo/config-plugins');

const withCleartextTraffic = (config) => {
  return withAndroidManifest(config, (config) => {
    const androidManifest = config.modResults;
    const application = androidManifest.manifest.application[0];
    
    // Add usesCleartextTraffic attribute
    application.$['android:usesCleartextTraffic'] = 'true';
    
    return config;
  });
};

module.exports = withCleartextTraffic;
