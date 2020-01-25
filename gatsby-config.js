module.exports = {
  siteMetadata: {
    title: `JOTAGEP - Front End Developer`,
    name: `Jotagep`,
    siteUrl: `https://jotagep.netlify.com`,
    description: `Website personal sobre desarrollo web y javascript`,
    author: `@jotagep`,
    hero: {
      heading: `Welcome to Novela, the simplest way to start publishing with Gatsby.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/Sir_JotaG`,
      },
      {
        name: `github`,
        url: `https://github.com/jotagep`,
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/img`,
        name: 'uploads'
      }
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        rootPath: "/",
        basePath: "/",
        authorsPage: true,
        mailchimp: false,
        sources: {
          local: true,
          contentful: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jotagep starter Website`,
        short_name: `Jotagep starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ]
}
