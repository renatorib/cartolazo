import React, { Component } from 'react';
import styled from 'styled-components';
import R from 'ramda';
import { Block, Header, Page, Right } from '../components/atoms';
import { api, loader, scouts } from '../utils';

class Scouts extends Component {
  state = {
    data: null,
    selectedScout: 'g',
    showing: {},
  };

  componentDidMount() {
    api.setState('/atletas/mercado', 'data', this);
  }

  bindValue = value => (e) => {
    this.setState({
      [value]: e.target.value,
    });
  };

  sortByScout = scout => R.compose(
    R.reverse,
    R.sortBy(R.path(['scout', scout])),
    R.filter(atleta => atleta.scout[scout]),
  )(this.state.data.atletas);

  render() {
    const { data, selectedScout } = this.state;

    return (
      <Page>
        <Header left="IcChevronLeft" leftLink="/">
          Scouts
        </Header>
        <Wrapper>
          {loader(!data, 'Carregando atletas...', () => (
            <div>
              <Block theme="cloud">
                <strong>Selecione:</strong>
                <Right>
                  <select onChange={this.bindValue('selectedScout')} value={selectedScout}>
                    {R.values(R.mapObjIndexed((name, scout) => (
                      <option key={scout} value={scout}>{name}</option>
                    ), scouts))}
                  </select>
                </Right>
              </Block>
              {this.sortByScout(this.state.selectedScout).map(atleta => (
                <Block key={atleta.atletaId} padding={0} className="jogador">
                  <img
                    className="item"
                    height="20px"
                    src={this.state.data.clubes[atleta.clubeId].escudos['30x30']}
                    alt=""
                  />
                  <span className="item bold x-small pos">
                    {this.state.data.posicoes[atleta.posicaoId].abreviacao.toUpperCase()}
                  </span>
                  <span className="item">{atleta.apelido}</span>
                  <Right className="item">
                    <span className="small">({(atleta.scout[selectedScout] / atleta.jogosNum)}/J)</span>
                    <strong> {atleta.scout[selectedScout]}</strong>
                  </Right>
                </Block>
              ))}
            </div>
          ))}
        </Wrapper>
      </Page>
    );
  }
}

const Wrapper = styled.div`
  .jogador > div {
    display: flex;
    align-items: center;

    > .item:not(:last-child) {
      padding-right: 10px;
    }
  }

  .pos {
    letter-spacing: 1px;
    display: inline-block;
    width: 25px;
  }
`;

export default Scouts;
