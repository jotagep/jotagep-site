const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {        
        '@components': path.resolve(__dirname, 'node_modules/@narative/gatsby-theme-novela/src/components/'),
        '@icons': path.resolve(__dirname, 'node_modules/@narative/gatsby-theme-novela/src/icons/'),
        '@styles': path.resolve(__dirname, 'node_modules/@narative/gatsby-theme-novela/src/styles/'),
        '@utils': path.resolve(__dirname, 'node_modules/@narative/gatsby-theme-novela/src/utils/'),
        '@types': path.resolve(__dirname, 'node_modules/@narative/gatsby-theme-novela/src/types/'),
        '@sections': path.resolve(__dirname, 'node_modules/@narative/gatsby-theme-novela/src/sections/'),
      },
      extensions: ['.js', '.json', '.ts', '.tsx'],
    },
  });
};
