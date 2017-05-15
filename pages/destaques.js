import React, { Component } from 'react';
import styled from 'styled-components';
import { Block, Header, Right, Page } from '../components';
import { api, loader } from '../utils';

class Destaques extends Component {
  state = {
    status: null,
    destaques: null,
  };

  componentDidMount() {
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
                <JogadorDestaque
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

const JogadorDestaque = ({ atleta, posicao, escalacoes, escudoClube, ordem, total }) => (
  <Block theme="light" padding={0} key={atleta.atletaId} className="destaque">
    <span className="small">{ordem < 10 ? `0${ordem}` : ordem} </span>
    <span className="img"><img src={escudoClube} height={20} alt="" /></span>
    <span className="pos x-small bold">{posicao.substring(0, 3).toUpperCase()} </span>
    <span className="name">{atleta.apelido}</span>
    <Right className="small data">
      {Math.round((escalacoes / total) * 100)}% - <span className="bold">{escalacoes}</span>
    </Right>
  </Block>
);

const Wrapper = styled.div`
  .destaque > div {
    position: relative;
  }

  .pos {
    letter-spacing: 1px;
    display: inline-block;
    width: 25px;
  }

  .data {
    position: absolute;
    right: 0;
    padding: 1px 10px;
    background: white;
  }

  .name {
    white-space: nowrap;
  }
`;

export default Destaques;
