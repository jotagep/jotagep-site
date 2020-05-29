import React from 'react'
import styled from '@emotion/styled';

import SectionTitle from '../components/SectionTitle';

import Section from '@components/Section';
import ArticlesList from '@sections/articles/Articles.List';
import mediaqueries from "@styles/media";

import WriteIcon from '../img/write.png';

export default function LastPost({articles, title}) {
  return (
    <Section>
      <LastPostContainer>
        <SectionTitle title={title} icon={WriteIcon} />
        <ArticlesList articles={articles} alwaysShowAllDetails />
      </LastPostContainer>
    </Section>
  )
}

const LastPostContainer = styled.div`
  background: linear-gradient(
    180deg,
    ${p => p.theme.colors.card} 0%,
    rgba(249, 250, 252, 0) 91.01%
  );
  border-radius: 8px;
  padding: 88px 98px;
  padding-top: 68px;
  position: relative;
  z-index: 1;
  ${mediaqueries.desktop_medium`
    padding: 80px;
    padding-top: 60px;
  `}
  ${mediaqueries.desktop`
    padding: 0;
    background: transparent;
  `}
`;