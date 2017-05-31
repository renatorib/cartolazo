import React from 'react';
import { Container } from '../components/atoms';

export default Styled => ({ children, ...restProps }) => (
  <Styled {...restProps}><Container>{children}</Container></Styled>
);
