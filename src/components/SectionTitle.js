import React from 'react';
import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

export default function SectionTitle({title, icon, divider = false}) {
  return (
    <div>
      <Row>
        <Title>
          {title}
        </Title>
        {icon && (
          <Icon src={icon} alt="icono" />
        )}
      </Row>
      {divider && (
        <HoritzontalRule />
      )}
    </div>
  )
}

const Row = styled.div`
  display: flex;
  margin-bottom: 30px;

  ${mediaqueries.phablet`
    margin-bottom: 20px;
  `}
`;

const Icon = styled.img`
  height: 38px;
  width: auto;
  margin-left: 16px;

  ${mediaqueries.phablet`
    height: 28px;
  `}
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  font-family: inherit;
  line-height: 1.15;
  color: ${p => p.theme.colors.primary};
  a {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.phablet`
    font-size: 28px;
  `}
`;

const HoritzontalRule = styled.div`
  position: relative;
  margin: 20px auto 40px;
  border-bottom: 1px solid ${p => p.theme.colors.horizontalRule};
  ${mediaqueries.tablet`
    margin: 20px auto;
  `}
`;