import React from 'react'
import styled from '@emotion/styled';
import Img from "gatsby-image";
import { useColorMode } from "theme-ui";

import ExternalLink from '../components/ExternalLink';

import Section from '@components/Section';
import mediaqueries from "@styles/media";


export default function ContactSection() {

  const [colorMode] = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <CustomSection>
        <Text isDark={isDark}>
          ¿Quieres plantearme algún proyecto o simplemente saludarme 👋?<br /> Puedes hacerlo mediante <ExternalLink href="mailto:jotagmzn@gmail.com">email</ExternalLink>,
          a traves de <ExternalLink color="blue" href="https://twitter.com/Sir_JotaG">twitter</ExternalLink> o dejandome un comentario en mi canal de <ExternalLink color="red" href="https://www.youtube.com/channel/UCfEnVdbamDIjezK-22kXC9Q">youtube</ExternalLink>
        </Text>
    </CustomSection>
  )
}

const CustomSection = styled(Section)`
  padding-top: 80px;

  ${mediaqueries.tablet`
    padding-top: 60px;
  `}
`;

const Text = styled.p`
  position: relative;
  z-index: 2;
  color: ${p => p.isDark ? '#fff' : '#404040'};
  font-size: 22px;
  max-width: 56%;
  text-align: center;
  margin: 0 auto;

  ${mediaqueries.tablet`
    font-size: 16px;
    max-width: 100%;
  `}
`;