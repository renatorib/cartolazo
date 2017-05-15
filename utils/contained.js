import React from 'react';
import { Container } from '../components';

export default Styled => ({ children, ...restProps }) => (
  <Styled {...restProps}><Container>{children}</Container></Styled>
);
