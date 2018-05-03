import React from 'react'
import styled from 'styled-components'
import { Block, Icons } from '.'

export default ({ ...restProps }) => (
  <Wrapper>
    <Block {...restProps} theme="cloud" className="search">
      <Icons name="IcSearch" size={20} />
      <input type="text" placeholder="Pesquisar" {...restProps} />
    </Block>
  </Wrapper>
)

const Wrapper = styled.div`
  .search {
    padding: 0;
  }
  .search > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  svg {
    width: 25px;
    fill: #777;
    vertical-align: middle;
  }
  input {
    height: 50px;
    padding: 0 10px;
    flex: 1;
    background: transparent;
    border: none;
  }
`
