import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Block, Icons } from '.';

export default ({ children, left, leftLink, right, rightLink }) => (
  <Wrapper>
    <Block theme="orange" padding={3}>
      <div className="left">
        {left && <Link href={leftLink}><Icons name={left} /></Link>}
      </div>
      <div className="center">
        <Title>{children}</Title>
      </div>
      <div className="right">
        {right && <Link href={rightLink}><Icons name={right} /></Link>}
      </div>
    </Block>
  </Wrapper>
);

const Wrapper = styled.div`
  .left { float: left; cursor: pointer; };
  .right { float: right; cursor: pointer; };
  .center { width: 100%; text-align: center; line-height: 25px; };

  svg {
    vertical-align: middle;
    height: 25px !important;
    width: 25px !important;
  };
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  padding: 0;
  margin: 0;
`;
