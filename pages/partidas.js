import React, { Component } from 'react';
import styled from 'styled-components';
import R from 'ramda';
import { Block, Header, Page } from '../components';
import { api, loader, date } from '../utils';

class Partidas extends Component {
  state = {
    partidas: null,
    showing: {},
  };

  componentWillMount() {
    api.setState('/partidas', 'partidas', this);
  }

  show = (id) => {
    this.setState(prev => ({
      showing: {
        ...prev.showing,
        [id]: !prev.showing[id],
      },
    }));
  }

  render() {
    const { partidas } = this.state;

    return (
      <Page>
        <Header left="IcChevronLeft" leftLink="/">
          Partidas
        </Header>
        <Wrapper>
          {loader(!partidas, 'Carregando partidas...', () => (
            <div>
              <Block theme="cloud">
                <strong>Rodada {partidas.rodada}</strong>
              </Block>
              {partidas.partidas.map(partida => (
                <Partida
                  id={partida.clubeCasaId}
                  key={partida.clubeCasaId}
                  {...partida}
                  visitante={partidas.clubes[partida.clubeVisitanteId]}
                  mandante={partidas.clubes[partida.clubeCasaId]}
                  show={this.show}
                  showing={this.state.showing}
                />
              ))}
            </div>
          ))}
        </Wrapper>
      </Page>
    );
  }
}

const Partida = ({
  mandante, visitante, aproveitamentoMandante,
  aproveitamentoVisitante, partidaData, local,
  placarOficialMandante, placarOficialVisitante,
  clubeCasaPosicao, clubeVisitantePosicao,
  showing, show, id,
}) => (
  <Block padding={showing[id] ? 2 : 1} className="partida" onClick={() => show(id)}>
    {showing[id] && (
      <div className="data small">
        <span className="bold">{date.formatDate(partidaData, 'dd/mm')} </span>
        <span className="local">{local} </span>
        <span className="bold">{date.formatDate(partidaData, 'hh:ii')}</span>
      </div>
    )}
    <div className="confronto mono">
      <span className="pos">{clubeCasaPosicao}º</span>
      <span className="bullets">
        {aproveitamentoMandante.map((apv, i) => (
          <span className={`bullet ${apv} ${i === 4 && 'big'}`} />
        ))}
      </span>
      <span className="nome">{mandante.abreviacao}</span>
      <span><img src={mandante.escudos['60x60']} height="20" alt="" /></span>
      <div className="placar">
        <span>{placarOficialMandante}</span>
        <span>x</span>
        <span>{placarOficialVisitante}</span>
      </div>
      <span><img src={visitante.escudos['60x60']} height="20" alt="" /></span>
      <span className="nome">{visitante.abreviacao}</span>
      <span className="bullets">
        {R.reverse(aproveitamentoVisitante).map((apv, i) => (
          <span className={`bullet ${apv} ${i === 0 && 'big'}`} />
        ))}
      </span>
      <span className="pos">{clubeVisitantePosicao}º</span>
    </div>
  </Block>
);

const Wrapper = styled.div`
  .partida {
    transition: transform 100ms ease;
  }

  .partida:active {
    transform: scale(0.975);
  }

  .confronto {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;

    > * {
      padding-right: 10px;
    }
  }

  .data {
    width: 100%;
    text-align: center;
    background-color: #fafafa;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom: 15px;
  }

  .placar {
    display: flex;
    justify-content: space-between;
    width: 50px;
  }

  .mono {
    font-family: monospace;
  }

  .local {
    padding: 0 7px;
  }

  .bullets {
    display: flex;
    align-items: center;
  }

  .bullet {
    width: 5px;
    margin: 0 1px;
    height: 5px;
    border-radius: 99px;
    background: #fafafa;

    &.d { background-color: red; }
    &.v { background-color: green; }
    &.e { background-color: #ccc; }
    &.big { height: 7px; width: 7px; }
  }

  .pos {
    font-size: 14px;
    color: #AAA;
    width: 30px;
    text-align: center;
    font-family: 'Roboto';
  }

  @media (max-width: 359px) {
    .pos {
      font-size: 10px;
      width: 20px;
    }

    .nome {
      display: none;
    }
  }
`;

export default Partidas;
