import React, { useEffect } from 'react';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { useColorMode } from 'theme-ui';

import { globalStyles } from '@styles/global';

import SEO from "@components/SEO";
import ArticlesContextProvider from '@sections/articles/Articles.List.Context';

import Header from './Header';
import Footer from './Footer';

export default function Layout({
  children
}) {
  const [colorMode] = useColorMode();

  useEffect(() => {
    if (typeof window !== 'undefined' && window) {
      window.postMessage({ theme: colorMode }, '*');
    }
  }, [colorMode]);

  return (
    <ArticlesContextProvider>
      <Container>
        <SEO />
        <Global styles={globalStyles} />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </Container>
    </ArticlesContextProvider>
  )
}

const Container = styled.div`
  position: relative;
  background: ${p => p.theme.colors.background};
  transition: ${p => p.theme.colorModeTransition};
  min-height: 100vh;
`;