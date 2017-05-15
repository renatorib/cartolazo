import React, { Component } from 'react';
import { BlockLink, Header, Page } from '../components';

const links = [{
  href: '/destaques',
  children: 'Mais escalados da rodada',
}, {
  href: '/parciais',
  children: 'Parciais',
}];

class Index extends Component {
  componentDidMount() {
    // silent
  }

  render() {
    return (
      <Page>
        <Header>Next Status</Header>

        {links.map(link => (
          <BlockLink icon="IcChevronRightTiny" {...link} />
        ))}
      </Page>
    );
  }
}

export default Index;
