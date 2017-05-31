import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Block, Icons } from '.';

export default ({ children, left, leftLink, leftClick, right, rightLink, rightClick }) => (
  <Wrapper>
    <Block theme="orange" padding={3}>
      <div className="left">
        {left && leftLink && <Link href={leftLink}><Icons name={left} /></Link>}
        {left && leftClick && <Icons onClick={leftClick} name={left} />}
      </div>
      <div className="right">
        {right && rightLink && <Link href={rightLink}><Icons name={right} /></Link>}
        {right && rightClick && <Icons onClick={rightClick} name={right} />}
      </div>

      <div className="center">
        <Title>{children}</Title>
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
