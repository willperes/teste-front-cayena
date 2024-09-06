/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    prependData: '@import "./src/theme/mixins.scss";',
},
};

export default nextConfig;
