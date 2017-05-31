import React, { Component } from 'react';
import styled from 'styled-components';
import normalize from 'normalize-for-search';
import R from 'ramda';
import {
  Header, EmptyState,
  BlockInput, Bottom,
  Page, BlockLink,
} from '../components/atoms';
import { TeamSearchResults } from '../components/organisms';
import { api, storage, loader, exists, renderif } from '../utils';

class Lista extends Component {
  static getInitialProps({ query }) {
    return { query };
  }

  state = {
    loaded: false,
    filter: '',
    list: {},
    search: null,
  };

  componentDidMount() {
    this.setState({ // eslint-disable-line
      list: this.findList() || {},
      loaded: true,
    });
  }

  findList = () => {
    const { query } = this.props;
    const lists = storage.get('lists');

    return R.find(R.propEq('id', query.id), lists);
  }

  listExists = () => !!this.state.list.name;

  handleSearchTeams = (search) => {
    api.setState(`/times?q=${normalize(search)}`, 'search', this);
  };

  clearSearch = () => {
    this.setState({ search: null });
  };

  getTeam = ({ timeId }) => {
    const list = this.findList();
    return !!R.find(R.propEq('timeId', timeId), list);
  };

  isTeamAlreadyAdded = time => !!this.getTeam(time);

  handleAdd = (time) => {
    const lists = storage.get('lists');
    const list = R.clone(this.findList());

    const newTimes = R.append(time, list.times);
    const newList = { ...list, times: newTimes };
    const newLists = R.map(olist => olist.id !== newList.id ? olist : newList, lists);

    this.setState({ list: newList });
    storage.set('lists', newLists);
  };

  render() {
    const { list, loaded, search } = this.state;

    return (
      <Page>
        <Header left="IcChevronLeft" leftLink="/parciais">
          {list.name || '...'}
        </Header>
        <Wrapper>
          {loader(!loaded, 'Carregando lista...', () => (
            exists(!this.listExists(), 'Essa lista não existe', () => (
              renderif(search, () => (
                <div>
                  <BlockLink onClick={this.clearSearch} icon="IcClose" theme="cloud">
                    Resultados da pesquisa
                  </BlockLink>
                  <TeamSearchResults
                    icon="IcAdd"
                    data={search}
                    onSelect={this.handleAdd}
                    onClose={this.clearSearch}
                  />
                </div>
              ), () => (
                <div>Minha lista porra</div>
              ))
            ))
          ))}
        </Wrapper>
        {this.listExists() && (
          <Bottom height={100}>
            <BlockInput
              placeholder="Adicionar time"
              icon="IcAdd"
              onSubmit={this.handleSearchTeams}
            />
          </Bottom>
        )}
      </Page>
    );
  }
}

const Wrapper = styled.div``;

export default Lista;
