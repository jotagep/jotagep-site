module.exports = {
  siteMetadata: {
    title: `Jotagep - Web & Mobile Developer`,
    name: `@Sir_JotaG`,
    siteUrl: `https://jotagep.com`,
    description: `Jotagep es la web mejor sobre desarrollo móvil y web de habla hispana. Contenido sobre Flutter, React, Vue, Gatsby y mucho más en español`,
    author: `@Sir_JotaG`,
    hero: {
      heading: `Bienvenidos a jotagep, posiblemente el mejor blog sobre desarrollo web & móvil.`,
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
      {
        name: `youtube`,
        url: `https://www.youtube.com/channel/UCfEnVdbamDIjezK-22kXC9Q`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'img'
      }
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        rootPath: "/",
        basePath: "/blog",
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
        name: `Jotagep Website`,
        short_name: `Jotagep`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#7BCDF4`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              nodes {
                path
                context {
                  index
                }
              }
            }
        }`,
        resolveSiteUrl: ({site}) => {
          return site.siteMetadata.siteUrl;
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            let priority = null;

            if (node.path === '/') {
              priority = 1.0;
            } else {
              priority= 0.8;
            }

            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: 'weekly',
              priority: priority,
            }
          })
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NNKCTM5",
        defaultDataLayer: { platform: "web" },
        // DEBUG
        // includeInDevelopment: true,
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
