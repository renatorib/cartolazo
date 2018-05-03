import React from 'react'
import { Block, Right, Icons } from '.'

export default ({ icon, children, ...restProps }) => (
  <Block {...restProps} padding={2}>
    {children}
    <Right>
      <Icons name={icon} fill="#777" />
    </Right>
  </Block>
)
