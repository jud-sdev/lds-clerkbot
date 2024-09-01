/** @type {import('next').NextConfig} */
import fs from "fs";
import withLlamaIndex from "llamaindex/next";
import webpack from "./webpack.config.mjs";

// Read the base configuration from next.config.json
const nextConfig = JSON.parse(fs.readFileSync("./next.config.json", "utf-8"));

// Set the custom Webpack configuration
nextConfig.webpack = webpack;

// Check if the 'output' option is set to 'export' in next.config.json
if (nextConfig.output === "export") {
  // Handle the static export scenario
  console.log("Using static export mode. Make sure to serve the out directory with a static server.");
}

// Wrap the configuration with withLlamaIndex to add necessary modifications for llamaindex
export default withLlamaIndex(nextConfig);