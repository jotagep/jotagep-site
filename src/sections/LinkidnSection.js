import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";
import styled from '@emotion/styled';

import SectionTitle from '../components/SectionTitle';

import Section from '@components/Section';
import mediaqueries from "@styles/media";
import ExternalLink from '../components/ExternalLink';

export default function LinkidnSection({title}) {
  
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "linkidn.png" }) {
        childImageSharp {
          fixed(width: 201, height: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return (
    <Section>
      <Container>
        {title && <SectionTitle title={title} />}
        <Row>
          <div style={{position: 'relative'}}>
            <Img fixed={data.image.childImageSharp.fixed} alt="People" />
          </div>
          <WrapperText>     
            Si estas interesad@ en conocer más mi entorno laboral y trayectoria profesional, puedes visitar mi perfil de <ExternalLink href="#">Linkedin</ExternalLink>  
          </WrapperText>
        </Row>
      </Container>
    </Section>
  )
}

const Container = styled.div`
  background-color: ${p => p.theme.colors.card}; 
  box-shadow: 0px 0px 30px -10px rgba(0,0,0,0.1);
  border-radius: 8px;
  padding: 40px 98px;
  position: relative;
  z-index: 1;
  ${mediaqueries.desktop_medium`
    padding: 40px 80px;
  `}
  ${mediaqueries.desktop`
    padding: 30px 60px;
  `}
  ${mediaqueries.phablet`
    padding: 30px 20px;
  `}
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaqueries.tablet`
    flex-direction: column;
    justify-content: center;
  `}
`;

const WrapperText = styled.div`
  text-align: right;
  max-width: 40%;
  color: ${p => p.theme.colors.grey};
  
  ${mediaqueries.tablet`
    max-width: 100%;
    text-align: center;
    margin-top: 20px;
  `}
`;