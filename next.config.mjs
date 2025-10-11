/** @type {import('next').NextConfig} */

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getBasePath = () => {
  if (process.env.DEPLOYMENT_TYPE === 'sandbox' && process.env.BRANCH_NAME) {
    const sanitizedBranch = process.env.BRANCH_NAME
      .replace(/[^a-zA-Z0-9.-]/g, '-')
      .replace(/--+/g, '-')
      .replace(/^-|-$/g, '');
    return `/${sanitizedBranch}`;
  }

  if (process.env.DEPLOYMENT_TYPE === 'release' && process.env.GIT_TAG) {
    return `/releases/${process.env.GIT_TAG}`;
  }

  return '';
};

const getAssetPrefix = () => {
  if (process.env.DEPLOYMENT_TYPE === 'sandbox' && process.env.BRANCH_NAME) {
    const sanitizedBranch = process.env.BRANCH_NAME
      .replace(/[^a-zA-Z0-9.-]/g, '-')
      .replace(/--+/g, '-')
      .replace(/^-|-$/g, '');
    return `https://sandbox.minademian.com/${sanitizedBranch}`;
  }

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

  // 👇 Add this section
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'videos/[name].[hash][ext]',
      },
    });

    return config;
  },
};

export default nextConfig;