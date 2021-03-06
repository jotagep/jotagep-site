/**
 * This react helmt code is adapted from
 * https://themeteorchef.com/tutorials/reusable-seo-with-react-helmet.
 *
 * A great tutorial explaining how to setup a robust version of an
 * SEO friendly react-helmet instance.
 *
 *
 * Use the Helmt on pages to generate SEO and meta content!
 *
 * Usage:
 * <SEO
 *   title={title}
 *   description={description}
 *   image={image}
 * />
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

interface HelmetProps {
  title: string;
  description?: string;
  pathname: string;
  image?: string;
  url?: string;
  canonical?: string;
  published?: string;
  timeToRead?: string;
  isArticle?: boolean;
}

const seoQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
            description
            social {
              name
              url
            }
            siteUrl
            title
          }
        }
      }
    }
  }
`;

const themeUIDarkModeWorkaroundScript = [
  {
    type: 'text/javascript',
    innerHTML: `
    (function() {
      try {
        var mode = localStorage.getItem('theme-ui-color-mode');
        if (!mode) {
          localStorage.setItem('theme-ui-color-mode', 'light');
        }
      } catch (e) {}
    })();
  `,
  },
];

const SEO: React.FC<HelmetProps> = ({
  title,
  description,
  children,
  url,
  image,
  published,
  pathname,
  timeToRead,
  isArticle = true
}) => {
  const results = useStaticQuery(seoQuery);
  const site = results.allSite.edges[0].node.siteMetadata;
  const twitter = site.social.find(option => option.name === 'twitter') || {};

  const fullURL = (path: string) =>
    path ? `${site.siteUrl}${path}` : site.siteUrl;

  // If no image is provided lets looks for a default novela static image
  image = image ? image : '/preview.jpg';
  
  const finalDescription = description || site.description;

  const metaTags = [
    {
      name: 'robots',
      content: 'index, follow'
    },
    { itemprop: 'name', content: title || site.title },
    { itemprop: 'description', content: description || site.description },
    { itemprop: 'image', content: fullURL(image) },
    { name: 'description', content: description || site.description },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: site.name },
    { name: 'twitter:title', content: title || site.title },
    { name: 'twitter:description', content: description || site.description },
    { name: 'twitter:creator', content: twitter.url },
    {
      name: 'twitter:image',
      content: fullURL(image),
    },

    { property: 'og:title', content: title || site.title },
    { property: 'og:url', content: fullURL(pathname) },
    { property: 'og:image', content: fullURL(image) },
    { property: 'og:type', content: isArticle ? 'article':'website'},
    { property: 'og:description', content: description || site.description },
    { property: 'og:site_name', content: site.name },
  ];

  if (published) {
    metaTags.push({ name: 'article:published_time', content: published });
  }

  if (timeToRead) {
    metaTags.push({ name: 'twitter:label1', content: 'Tiempo de lectura' });
    metaTags.push({ name: 'twitter:data1', content: `${timeToRead} min de lectura` });
  }

  return (
    <Helmet
      title={title || site.title}
      htmlAttributes={{ lang: 'es' }}
      script={themeUIDarkModeWorkaroundScript}
      meta={metaTags}
    >
      {fullURL(pathname) ? <link rel="canonical" href={fullURL(pathname)} /> : null}
      <link
        href="https://fonts.googleapis.com/css?family=Merriweather:700,700i&display=swap"
        rel="stylesheet"
      />
      {children}
    </Helmet>
  );
};

export default SEO;
