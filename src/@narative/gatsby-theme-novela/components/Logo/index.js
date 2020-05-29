import React from 'react';

import styled from '@emotion/styled';

import LogoBrand from './logo.png';
import LogoDarkBrand from './logo_dark.png';

export default function Logo({fill}) {

  const isDark = fill !== '#fff';

  return (
    <>
    {
      isDark ?
      <LogoImage src={LogoBrand} isDark />
      :
      <LogoImage src={LogoDarkBrand} isDark />
    }
    </>
  )
}

const LogoImage = styled.img`
  height: 35px;
  width: auto;

`;