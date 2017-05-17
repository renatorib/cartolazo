import React, { Component } from 'react';
import styled from 'styled-components';
import R from 'ramda';
import {
  Header, EmptyState,
  BlockInput, Bottom,
  Page,
} from '../components';
import { storage, loader } from '../utils';

const Wrapper = styled.div``;

class Lista extends Component {
  static getInitialProps({ query }) {
    return { ...query };
  }

  state = {
    loaded: false,
    filter: '',
    list: {},
  };

  componentDidMount() {
    const { id } = this.props;
    const lists = storage.get('lists');

    this.setState({ // eslint-disable-line
      list: R.find(R.propEq('id', id), lists) || {},
      loaded: true,
    });
  }

  render() {
    const { list, loaded } = this.state;

    return (
      <Page>
        <Header left="IcChevronLeft" leftLink="/parciais">
          {list.name || '...'}
        </Header>
        <Wrapper>
          {loader(!loaded, 'Carregando lista...', () => (
            !list ? (
              <EmptyState icon="IcClose">
                <strong>Essa lista não existe.</strong>
              </EmptyState>
            ) : (
              <div>
                {list.name}
              </div>
            )
          ))}

          <Bottom height={100}>
            <BlockInput
              placeholder="Crie uma nova lista"
              icon="IcAdd"
              clearOnSubmit
              onSubmit={this.createList}
            />
          </Bottom>
        </Wrapper>
      </Page>
    );
  }
}

export default Lista;
