import path from 'path';

export default {
  reactStrictMode: false,
  webpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@'] = path.resolve('.');
    config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx');
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fco.dn.nexoncdn.co.kr', // image URL hostname
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ssl.nexon.com', // image URL hostname
        port: '',
        pathname: '/**',
      },
    ],
  },
};
