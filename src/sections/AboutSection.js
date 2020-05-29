import React from 'react'
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";
import { useColorMode } from "theme-ui";

import SectionTitle from '../components/SectionTitle';
import ExternalLink from '../components/ExternalLink';
import MeIcon from '../img/man.png';

import Section from '@components/Section';
import mediaqueries from "@styles/media";


export default function AboutSection({title}) {

  const data = useStaticQuery(graphql`
    query {
      front: file(relativePath: { eq: "foto_profile-front.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      back: file(relativePath: { eq: "foto_profile-back.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  
  const [colorMode] = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <CustomSection>
        {title && <SectionTitle title={title} icon={MeIcon} />}
        <Wrapper>
          <div>
            <Text isDark={isDark}>Soy un <b>desarrollador de aplicaciones web & móvil</b> y <b>creador de contenido</b> viviendo, actualmente, en Barcelona. Me considero un todoterreno en cuanto a programación se refiere, ya que mis dos grandes pasiones son aprender y enseñar.  </Text>
          </div>
          <div>
            <ImgContainer>
              <ImgWrapper>
                <Img fluid={data.front.childImageSharp.fluid} alt="Jotagep young"/>
              </ImgWrapper>
              <ImgWrapper>
                <Img fluid={data.back.childImageSharp.fluid} alt="Jotagep baby"/>
              </ImgWrapper>
            </ImgContainer>
          </div>
        </Wrapper>
    </CustomSection>
  )
}

const CustomSection = styled(Section)`
  padding-top: 80px;

  ${mediaqueries.tablet`
    padding-top: 60px;
  `}
`;

const Wrapper = styled.div`
  display: flex;
  padding-bottom: 80px;

  & > div {
    flex: 1;
  }

  ${mediaqueries.tablet`
    flex-direction: column;
    padding-bottom: 60px;
  `}
`;

const Text = styled.p`
  position: relative;
  z-index: 2;
  color: ${p => p.isDark ? '#fff' : '#404040'};
  font-size: 22px;

  ${mediaqueries.tablet`
    font-size: 16px;
  `}
`;

const ImgContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  margin-top: -30px;

  &:hover > div:first-of-type {
    transform: rotateY(-180deg);
  }

  & > div:last-of-type {
    transform: rotateY(180deg);
  }

  &:hover > div:last-of-type {
    transform: rotateY(0deg);
  }

  ${mediaqueries.tablet`
    margin-top: 30px;
  `}
`;

const ImgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border: 3px solid #fff;
  border-radius: 50%;
  transition: all .6s ease;
  backface-visibility: hidden;
  box-shadow: 0px 2px 6px rgba(0,0,0,0.2) ,inset 0px 0px 6px 10px rgba(0, 0, 0, 0.3);
`;