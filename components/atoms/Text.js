import styled from 'styled-components'

export default styled.span`
  font-size: ${props => props.size || '16px'};
  text-align: ${props => props.align || 'left'};
`
