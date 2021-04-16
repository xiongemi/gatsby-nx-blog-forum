module.exports = {
  siteMetadata: {
    title: `forum`,
    description: `This is a gatsby application created by Nx.`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,

    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: 'AIzaSyAKzdIaHfrX8fMuHV53Q1pB9aYq7DajESM',
          authDomain: 'treehole-1fd5b.firebaseapp.com',
          databaseURL: 'https://treehole-1fd5b.firebaseio.com',
          projectId: 'treehole-1fd5b',
          storageBucket: 'treehole-1fd5b.appspot.com',
          messagingSenderId: '473924780706',
          appId: '1:473924780706:web:4cdd4c85631bdc90840dfb',
          measurementId: 'G-689X5N5HH0',
        },
        features: {
          auth: true,
          database: true,
          firestore: true,
          storage: false,
          messaging: false,
          functions: false,
        },
      },
    },

    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: false,
        ref: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: require.resolve(`@nrwl/gatsby/plugins/nx-gatsby-ext-plugin`),
      options: {
        path: __dirname,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `forum`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`,
      },
    },
  ],
};
