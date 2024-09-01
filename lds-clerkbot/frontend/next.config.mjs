// next.config.js

/** @type {import('next').NextConfig} */

// Import necessary modules
import withLlamaIndex from 'llamaindex/next';
import webpackConfig from './webpack.config.mjs';

// Define Next.js configuration
const nextConfig = {
  // Enable React Strict Mode for highlighting potential problems
  reactStrictMode: true,

  // Specify output format; remove 'export' to enable SSR
  // Use 'standalone' if deploying to platforms like Docker
  output: 'standalone',

  // Custom Webpack configuration
  webpack: (config, { isServer }) => {
    // Merge custom webpack configurations
    config = { ...config, ...webpackConfig };

    // Example: Modify config based on whether it's server-side or client-side
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Disable 'fs' module on the client-side
      };
    }

    // Return the modified config
    return config;
  },

  // Additional Next.js configurations can be added here
  // For example:
  // env: {
  //   CUSTOM_ENV_VARIABLE: 'your-value',
  // },
};

// Export the configuration wrapped with withLlamaIndex
export default withLlamaIndex(nextConfig);

