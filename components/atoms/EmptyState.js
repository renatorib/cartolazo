import React from 'react';
import styled from 'styled-components';
import { Icons } from '.';

export default ({ icon, children, ...restProps }) => (
  <Wrapper {...restProps}>
    <Icons name={icon} size={100} />
    <div className="content">{children}</div>
  </Wrapper>
);

const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
  color: #999999;
  fill: #AAAAAA;
  font-size: 14px;
`;
