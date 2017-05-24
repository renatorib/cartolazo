import React, { Component } from 'react';
import styled from 'styled-components';
import R from 'ramda';
import { Block, Header, Page } from '../components';
import { api, loader, date } from '../utils';

const sortByDate = prop => R.sortWith([
  R.ascend(R.prop(prop)),
]);

class Partidas extends Component {
  state = {
    partidas: null,
    showing: {},
  };

  componentDidMount() {
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
              {sortByDate('partidaData')(partidas.partidas).map(partida => (
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


const posColor = (pos) => {
  if (pos <= 4) return 'green';
  if (pos >= 16) return 'red';

  return '';
};

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
      <span className="retrospect">
        <span className={`pos ${posColor(clubeCasaPosicao)}`}>
          {clubeCasaPosicao}º
        </span>
        <span className="bullets">
          {aproveitamentoMandante.map((apv, i) => i >= 2 && (
            <span key={i} className={`bullet ${apv} ${i === 4 && 'big'}`} />
          ))}
        </span>
      </span>

      <span className="time">
        <span className="nome">{mandante.abreviacao}{' '}</span>
        <img src={mandante.escudos['60x60']} height="20" alt="" />
      </span>

      <div className="placar">
        <span>{placarOficialMandante}</span>
        <span>x</span>
        <span>{placarOficialVisitante}</span>
      </div>

      <span className="time">
        <img src={visitante.escudos['60x60']} height="20" alt="" />
        <span className="nome">{' '}{visitante.abreviacao}</span>
      </span>

      <span className="retrospect">
        <span className="bullets">
          {R.reverse(aproveitamentoVisitante).map((apv, i) => i < 3 && (
            <span key={i} className={`bullet ${apv} ${i === 0 ? 'big' : ''}`} />
          ))}
        </span>

        <span className={`pos ${posColor(clubeVisitantePosicao)}`}>
          {clubeVisitantePosicao}º
        </span>
      </span>
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
    justify-content: space-between;
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
    width: 4ch;
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
    width: 6px;
    height: 6px;
    margin: 0 1px;
    border-radius: 99px;
    background: #fafafa;

    &.d { background-color: red; }
    &.v { background-color: green; }
    &.e { background-color: #ccc; }
    &.big { height: 8px; width: 8px; }
  }

  .pos {
    font-size: 12px;
    width: 30px;
    text-align: center;
    font-family: 'Roboto';
    opacity: 0.8;
    font-weight: 400;
  }

  .retrospect {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 329px) {
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
