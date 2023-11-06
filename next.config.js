// next.config.js
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    // Add the configuration for handling the 'fs' module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      };
    }
    return config;
  },
};
