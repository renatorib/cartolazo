/* eslint-disable global-require */
import React, { Component } from 'react';

import { Block, BlockLink, Header, Page, Right, Countdown } from '../components/atoms';
import { api, loader } from '../utils';

const linksClosed = [
  { href: '/parciais', children: 'Parciais dos Atletas' },
  { href: '/listas', children: 'Parciais dos Times' },
];

const linksOpened = [
  { href: '/mais-escalados', children: 'Mais escalados da Rodada' },
  { href: '/partidas', children: 'Partidas da Rodada' },
  { href: '/scouts', children: 'Scouts dos Atletas' },
];

const renderLink = link => (
  <BlockLink key={link.href} icon="IcChevronRightTiny" {...link} />
);

class Index extends Component {
  static async getInitialProps() {
    const { data } = await api.get('/mercado/status');
    return { status: data };
  }

  state = {
    status: null,
  };

  componentWillMount() {
    // api.setState('/mercado/status', 'status', this);
  }

  render() {
    const { status } = this.props;

    return (
      <Page>
        <Header>
          CARTOLAZO
        </Header>

        {loader(!status, null, () => {
          const { rodadaAtual, statusMercado, fechamento: { timestamp } } = status;

          return (
            <div>
              <Block theme="cloud">
                <strong>Rodada {rodadaAtual}</strong>
                <Right>
                  {statusMercado === 1 ? (
                    <small>
                      Mercado fecha <strong>em <Countdown date={timestamp * 1000} /></strong>
                    </small>
                  ) : (
                    <strong className="small red">
                      {statusMercado === 2 && 'Mercado fechado'}
                      {statusMercado === 3 && 'Mercado em manutenção'}
                      {statusMercado === 4 && 'Mercado em manutenção'}
                      {statusMercado > 4 && 'Mercado fechado'}
                    </strong>
                  )}
                </Right>
              </Block>

              {statusMercado !== 1 && linksClosed.map(renderLink)}
              {linksOpened.map(renderLink)}
            </div>
          );
        })}
      </Page>
    );
  }
}

export default Index;
