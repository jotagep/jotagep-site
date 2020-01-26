import React from 'react';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';

import { globalStyles } from '@narative/gatsby-theme-novela/src/styles/global';

export default function Index() {
  return (
    <Section>
      <Global styles={globalStyles} />
      Hola cracks
    </Section>
  )
}

const Section = styled.section`
  display: block;
  width: 100%;
  height: 100vh;
  background-color: red;
  color: #fff;
`;