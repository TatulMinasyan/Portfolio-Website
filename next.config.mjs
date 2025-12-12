/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/Portfolio-Website' : '',
    assetPrefix: isProd ? '/Portfolio-Website/' : '',
};

export default nextConfig;
