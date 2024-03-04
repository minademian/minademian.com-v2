/** @type {import('next').NextConfig} */

import { dir } from 'console';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

/*
  output: 'export',
  distDir: 'v2.0',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
*/
export default nextConfig;
