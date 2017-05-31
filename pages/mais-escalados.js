import React, { Component } from 'react';
import styled from 'styled-components';
import { Block, Header, Right, Page } from '../components/atoms';
import { api, loader } from '../utils';

class MaisEscalados extends Component {
  state = {
    status: null,
    destaques: null,
  };

  componentWillMount() {
    api.setState('/mercado/status', 'status', this);
    api.setState('/mercado/destaques', 'destaques', this);
  }

  render() {
    const { destaques, status } = this.state;

    return (
      <Page>
        <Header left="IcChevronLeft" leftLink="/">
          Mais escalados
        </Header>
        <Wrapper>
          {loader(!destaques || !status, 'Carregando jogadores...', () => (
            <div>
              <Block theme="cloud">
                <strong>Rodada {status.rodadaAtual}</strong>
                <Right className="bold">{status.timesEscalados}</Right>
              </Block>
              {destaques.map((destaque, i) => (
                <Jogador
                  {...destaque}
                  total={status.timesEscalados}
                  key={destaque.atleta.atletaId}
                  ordem={i + 1}
                />
              ))}
            </div>
          ))}
        </Wrapper>
      </Page>
    );
  }
}

const Jogador = ({ atleta, posicao, escalacoes, escudoClube, ordem, total }) => (
  <Block theme="light" padding={0} key={atleta.atletaId} className="destaque">
    <span className="item ord small">{ordem < 10 ? `0${ordem}` : ordem} </span>
    <span className="item img"><img src={escudoClube} height={20} alt="" /></span>
    <span className="item pos x-small bold">{posicao.substring(0, 3).toUpperCase()} </span>
    <span className="item name">{atleta.apelido}</span>
    <Right className="item data small">
      {Math.round((escalacoes / total) * 100)}% - <span className="bold">{escalacoes}</span>
    </Right>
  </Block>
);

const Wrapper = styled.div`
  .destaque > div {
    display: flex;
    align-items: center;

    > .item:not(:last-of-type) {
      padding-right: 10px;
    }
  }

  .pos {
    letter-spacing: 1px;
    display: inline-block;
    width: 25px;
  }

  .data {
    padding-left: 10px;
    margin-left: auto;
    background: white;
    white-space: nowrap;
  }

  .name {
    white-space: nowrap;
    overflow-x: hidden;
    display: block;
    text-overflow: ellipsis;
  }
`;

export default MaisEscalados;
