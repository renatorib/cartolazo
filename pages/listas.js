import React, { Component } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import R from 'ramda';
import {
  Header, BlockSearch, EmptyState,
  BlockInput, Bottom, BlockLink,
  Page,
} from '../components';
import { storage, loader } from '../utils';

const Wrapper = styled.div``;

class Listas extends Component {
  state = {
    filter: '',
    loaded: false,
    lists: [],
  };

  componentDidMount() {
    this.setState({ // eslint-disable-line
      lists: storage.get('lists') || [],
      loaded: true,
    });
  }

  updateLists = () => {
    storage.set('lists', this.state.lists);
  };

  createList = (name) => {
    const list = { id: v4(), name, times: [] };
    this.setState({
      lists: [...this.state.lists, list],
    }, this.updateLists);
  };

  handleFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  }

  render() {
    const { lists, filter, loaded } = this.state;
    const showLists = mapper => R.compose(
      R.map(mapper),
      R.filter(list => R.contains(filter.toLowerCase(), list.name.toLowerCase())),
    )(lists);

    return (
      <Page>
        <Header left="IcChevronLeft" leftLink="/">
          Parciais dos Times
        </Header>
        <Wrapper>

          {lists.length > 6 && (
            <BlockSearch onChange={this.handleFilter} />
          )}

          {loader(!loaded, 'Carregando listas...', () => (
            lists.length === 0 ? (
              <EmptyState icon="IcDocuments">
                <strong>Você ainda não tem nenhuma lista.</strong><br />
                Crie uma lista no campo fixado na parte de baixo da sua tela
                e adicione times para acompanhar suas parciais.
              </EmptyState>
            ) : (
              showLists(list => (
                <BlockLink key={list.id} href={`/lista?id=${list.id}`} icon="IcChevronRightTiny">
                  {list.name}
                </BlockLink>
              ))
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

export default Listas;
