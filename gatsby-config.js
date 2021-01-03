module.exports = {
  siteMetadata: {
    title: 'joseph-kalayci-personal-page-gatsby',
    siteUrl: 'http://localhost:8000/',
  },
  plugins: [
    /* `gatsby-plugin-preact`, */
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        /*  stylesProvider: {
          injectFirst: true,
        }, */
      },
    },
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '256020741',
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_URL || 'http://localhost:1337',
        contentTypes: ['projects', 'skills'],
        singleTypes: [
          `about-section`,
          `contact-info`,
          'home-section',
          'portfolio-section',
        ],
        queryLimit: 1000,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    /*     'gatsby-plugin-offline', */
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
