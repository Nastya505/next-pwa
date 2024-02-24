/** @type {import('next').NextConfig} */
import createNextPWA from 'next-pwa';

const withPWA = createNextPWA({
  dest: 'public'
})

const nextConfig = {
  reactStrictMode: true,
};

export default withPWA(nextConfig);
