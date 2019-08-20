const path = require('path');
const package = require('./package.json');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const { createFilePath } = require('gatsby-source-filesystem');

let url = package && package.homepage ? package.homepage.trim() : '';
if (url.slice(-1) !== '/') {
    url += '/';
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  fmImagesToRelative(node);
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
      {
          allMarkdownRemark(
              filter: {
                  frontmatter: {
                      templateKey: {
                          glob: "*"
                      }
                  }
              }
          ) {
              edges {
                  node {
                      id
                      fields {
                          slug
                      }
                      frontmatter {
                          templateKey
                      }
                  }
              }
          }
      }
  `).then(result => {
      if (result.errors) {
          result.errors.forEach(e => console.error(e.toString()))
          return Promise.reject(result.errors)
      }

      const pages = result.data.allMarkdownRemark.edges;
      const now = new Date();

      pages.forEach(edge => {
          createPage({
              path: edge.node.fields.slug,
              component: path.resolve(
                  `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
              ),
              context: {
                  id: edge.node.id,
                  url,
                  pageUrl: `${url}${edge.node.fields.slug}`,
                  date: [ now.getFullYear(), ("0" + (now.getMonth() + 1)).slice(-2), ("0" + now.getDate()).slice(-2) ].join('-')
              },
          });
      });
});
}