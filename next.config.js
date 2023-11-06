// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
// });

// const nextConfig = {
//   runtime: 'edge', // for Edge API Routes only
//   unstable_allowDynamic: [
//     // allows a single file
//     '/lib/utilities.js',
//     // use a glob to allow anything in the function-bind 3rd party module
//     '/node_modules/function-bind/**',
//   ],
//   reactStrictMode: true,
//   swcMinify: true,
//   pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
// };

// module.exports = withMDX(nextConfig);



const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})