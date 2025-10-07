/** @type {import('next').NextConfig} */

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getBasePath = () => {
  // For sandbox deployments, use sanitized branch name as base path since subdomain serves from /branch-name/
  if (process.env.DEPLOYMENT_TYPE === 'sandbox' && process.env.BRANCH_NAME) {
    // Sanitize branch name to match server directory structure
    const sanitizedBranch = process.env.BRANCH_NAME
      .replace(/[^a-zA-Z0-9.-]/g, '-')  // Replace invalid chars with dash
      .replace(/--+/g, '-')             // Replace multiple dashes with single dash
      .replace(/^-|-$/g, '');           // Remove leading/trailing dashes
    return `/${sanitizedBranch}`;
  }

  if (process.env.DEPLOYMENT_TYPE === 'release' && process.env.GIT_TAG) {
    return `/releases/${process.env.GIT_TAG}`;
  }

  return '';
};

const getAssetPrefix = () => {
  // For sandbox deployments, use absolute URL with sanitized branch path
  if (process.env.DEPLOYMENT_TYPE === 'sandbox' && process.env.BRANCH_NAME) {
    // Sanitize branch name to match server directory structure
    const sanitizedBranch = process.env.BRANCH_NAME
      .replace(/[^a-zA-Z0-9.-]/g, '-')  // Replace invalid chars with dash
      .replace(/--+/g, '-')             // Replace multiple dashes with single dash
      .replace(/^-|-$/g, '');           // Remove leading/trailing dashes
    return `https://sandbox.minademian.com/${sanitizedBranch}`;
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
