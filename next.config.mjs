/** @type {import('next').NextConfig} */

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Determine base path based on deployment environment
const getBasePath = () => {
  // For sandbox deployments, use just the branch name as base path (served from subdomain)
  if (process.env.DEPLOYMENT_TYPE === 'sandbox' && process.env.BRANCH_NAME) {
    return `/${process.env.BRANCH_NAME}`;
  }
  
  // For release deployments with version tags
  if (process.env.DEPLOYMENT_TYPE === 'release' && process.env.GIT_TAG) {
    return `/releases/${process.env.GIT_TAG}`;
  }
  
  // For production (latest) and default cases
  return '';
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
  assetPrefix: getBasePath(),
};
export default nextConfig;
