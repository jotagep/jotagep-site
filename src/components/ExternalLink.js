import React from 'react';
import styled from '@emotion/styled';

export default function ExternalLink({children, color}) {
  return (
    <Anchor {...color  && {className: color}} >
      <span>{children}</span>
    </Anchor>
  )
}

const Anchor = styled.a`
  color: ${p => p.theme.colors.accent};



  span {
    display: inline-block;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0.5px;
      width: 0%;
      height: 1.5px;
      transition: width 0.4s ease;
      background-color: ${p => p.theme.colors.accent};
    }
  }

  &.blue {
    color:  #00acee;

    span {
      &::after {
        background-color: #00acee
      }
    }
  }

  &.red {
    color:  #c4302b;

    span {
      &::after {
        background-color: #c4302b
      }
    }
  }

  &:hover {
    span {
      &::after {
        width: 100%;
      }
    }
  }
`;