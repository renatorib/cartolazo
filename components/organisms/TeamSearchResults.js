import React from 'react'
import styled from 'styled-components'
import { Block, Icons } from '../atoms'

const TeamSearchResults = ({ data, onClose, onSelect, icon }) => {
  const handleSelect = time => () => onSelect && onSelect(time)

  return (
    <Wrapper>
      {!data.length && (
        <Block className="empty" onClick={onClose}>
          Nenhum time encontrado
        </Block>
      )}
      {data.map(time => (
        <Block
          key={time.timeId}
          onClick={handleSelect(time)}
          theme="light"
          className="time"
        >
          <img
            src={time.urlEscudoPng || time.urlEscudoPlaceholderPng}
            alt=""
            height="30px"
            width="30px"
          />
          <div className="nome">
            <strong>{time.nome}</strong>
            <br />
            <small>{time.nomeCartola}</small>
          </div>
          {icon && (
            <div className="icon">
              <Icons name={icon} />
            </div>
          )}
        </Block>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .time > div {
    display: flex;
    align-items: center;
  }
  img {
    margin-right: 10px;
  }
  .nome {
    line-height: 1em;
  }
  .empty {
    text-align: center;
    color: #999;
  }
  .icon {
    margin-left: auto;
  }
  .icon svg {
    fill: #ddd;
  }
`

export default TeamSearchResults
