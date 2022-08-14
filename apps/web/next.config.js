// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTMFactory = require('next-transpile-modules');

const withTM = withTMFactory([]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
};

module.exports = withTM(nextConfig);
