import React from 'react';
import styled from 'styled-components';
import { Spinner } from '.';

export default ({ children, ...restProps }) => (
  <Wrapper {...restProps}>
    <div className="spinner"><Spinner size={60} /></div>
    <div className="content">{children}</div>
  </Wrapper>
);

const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
  color: #999999;
  font-size: 14px;

  .spinner {
    margin: 20px 0;
  }
`;
