import React, { Component } from 'react';
import { Block, BlockLink, Header, Page, Right } from '../components';
import { api, loader } from '../utils';

const links = [{
  href: '/mais-escalados',
  children: 'Mais escalados da Rodada',
}, {
  href: '/parciais',
  children: 'Parciais da Rodada',
}, {
  href: '/partidas',
  children: 'Partidas da Rodada',
}];

class Index extends Component {
  state = {
    status: null,
  };

  componentWillMount() {
    api.setState('/mercado/status', 'status', this);
  }

  render() {
    const { status } = this.state;

    return (
      <Page>
        <Header>Cartolazo</Header>

        {loader(!status, null, () => (
          <div>
            <Block theme="cloud">
              <strong>Rodada {status.rodadaAtual}</strong>
              <Right className="bold">
                Mercado {status.statusMercado ? 'Aberto' : 'Fechado'}
              </Right>
            </Block>

            {links.map(link => (
              <BlockLink icon="IcChevronRightTiny" {...link} />
            ))}
          </div>
        ))}
      </Page>
    );
  }
}

export default Index;
