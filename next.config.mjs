/** @type {import('next').NextConfig} */

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Determine base path and asset prefix based on deployment environment
const getBasePath = () => {
  // For sandbox deployments served from subdomain, no base path needed
  if (process.env.DEPLOYMENT_TYPE === 'sandbox' && process.env.BRANCH_NAME) {
    return '';
  }

  // For release deployments with version tags
  if (process.env.DEPLOYMENT_TYPE === 'release' && process.env.GIT_TAG) {
    return `/releases/${process.env.GIT_TAG}`;
  }

  // For production (latest) and default cases
  return '';
};

const getAssetPrefix = () => {
  // For sandbox deployments, point assets to the subdomain
  if (process.env.DEPLOYMENT_TYPE === 'sandbox' && process.env.BRANCH_NAME) {
    return 'https://sandbox.minademian.com';
  }

  // For other deployments, use the same as basePath
  return getBasePath();
};

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: getBasePath(),
  assetPrefix: getAssetPrefix(),
};
export default nextConfig;
