import React from 'react'
import styled from 'styled-components'

export default ({ children, ...restProps }) => (
  <Wrapper {...restProps}>
    <div className="spacer" />
    <div className="fixed">{children}</div>
  </Wrapper>
)

const Wrapper = styled.div`
  .spacer {
    width: 100%;
    height: ${props => (props.height ? `${props.height}px` : '60px')};
  }

  .fixed {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
  }
`
