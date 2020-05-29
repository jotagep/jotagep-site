import React, { useRef, useEffect, useState} from 'react';
import styled from '@emotion/styled';
import Typed from 'typed.js';
import { useColorMode } from "theme-ui";

import Section from '@components/Section';
import mediaqueries from "@styles/media";

import Dibujo from '../img/illustration.svg';

const colors = ['#61DBFB','#7BCDF4', '#663399', '#41B883', '#B52E31']

export default function HeroSection() {

  const phrase1 = useRef(null);
  const [color, setColor] = useState(colors[0]);
  const [colorMode] = useColorMode();
  const isDark = colorMode === 'dark';

  useEffect(() => {
    let typed1 = null
    if (phrase1.current) {
      typed1 = new Typed(phrase1.current, {
        strings: ['React', 'Flutter', 'Gatsby', 'Vue', 'Angular'],
        typeSpeed: 70,
        backSpeed: 60,
        backDelay: 3000,
        loop: true,
        showCursor: false,
        preStringTyped: (arrayPos, self) => {
          setColor(colors[arrayPos]);
        }
      });
    }

    return () => {
      if (typed1) {
        typed1.destroy();
      }
    }
  }, []);

  return (
    <Section>
      <Wrapper>
        <TextColumn isDark={isDark}>
          Diseño y desarrollo
          <br /> 
          de <Phrase ref={phrase1} isDark={isDark} color={color}></Phrase> apps.
        </TextColumn>
        <Illustration>
          <img src={Dibujo} alt="Coding illustration" />
        </Illustration>
      </Wrapper>
    </Section>
  )
}

const Wrapper = styled.div`
  padding: 0px 0px;
  display: flex;
  align-items: center;

  ${mediaqueries.desktop`
    flex-direction: column;
    align-items: stretch;
  `}
`;

const TextColumn = styled.div`
  font-size: 60px;
  color: ${p => p.isDark ? '#fff' : '#404040'};
  flex: 1;
  line-height: 1.2;

  ${mediaqueries.desktop`
    padding-top: 80px;
    text-align: center;
    font-size: 50px;
  `}
  ${mediaqueries.phablet`
    padding-top: 60px;
    font-size: 35px;
  `}
`;

const Illustration = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  img {
    height: 420px;
    width: auto;
  }

  ${mediaqueries.desktop`
    justify-content: center;
  `}

  ${mediaqueries.phablet`
    padding-bottom: 30px;
    img {
      height: auto;
      width: 100%;
    }
  `}
`;

const Phrase = styled.span`
  color: ${p => p.color};
  ${p => !p.isDark && ({
    textShadow: '0px 1px 2px rgba(0,0,0,.05)'
  })}
`