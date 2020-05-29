import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Container from '../components/Container';
import LastPost from '../sections/LastPost';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';

import LinkidnSection from '../sections/LinkidnSection';
import ContactSection from '../sections/ContactSection';

import { local } from '@narative/gatsby-theme-novela/src/gatsby/data/data.normalize';

export default function Index({data}) {
  const lastArticles = data.lastArticles.edges.map(item => local.articles(item));

  return (
    <Layout>
      <Container>
        <HeroSection />
        <LastPost 
          title="Últimos posts"
          articles={lastArticles}
        />
        <AboutSection 
          title="Sobre mí"
        />
        <LinkidnSection />
        <ContactSection />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    lastArticles: allArticle(limit: 4, sort: {fields: date, order: DESC}) {
      edges {
        node {
          id
          slug
          secret
          title
          author
          date(formatString: "MMMM Do, YYYY")
          dateForSEO: date
          timeToRead
          excerpt
          subscription
          hero {
            full: childImageSharp {
              fluid(maxWidth: 944, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            regular: childImageSharp {
              fluid(maxWidth: 653, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            narrow: childImageSharp {
              fluid(maxWidth: 457, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            seo: childImageSharp {
              fixed(width: 1200, quality: 100) {
                src
              }
            }
          }
        }
      }
    }
  }
` ;