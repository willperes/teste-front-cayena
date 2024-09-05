/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: '@import "./src/theme/mixins.scss";',
},
};

export default nextConfig;
