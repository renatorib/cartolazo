import React, { Component } from 'react'
import styled from 'styled-components'
import R from 'ramda'
import { Block, BlockSearch, Header, Right, Page } from '../components/atoms'
import { api, loader, string } from '../utils'

const { standardize } = string

class Parciais extends Component {
  state = {
    filter: '',
    data: null,
  }

  componentDidMount() {
    api.setState('/atletas/pontuados', 'data', this)
  }

  handleFilter = e => {
    this.setState({
      filter: e.target.value,
    })
  }

  refresh = () => {
    this.setState({ data: null })
    api.setState('/atletas/pontuados', 'data', this)
  }

  render() {
    const { data, filter } = this.state

    const showPlayers = mapper =>
      R.compose(
        R.map(mapper),
        R.reverse,
        R.sortBy(R.prop('pontuacao')),
        R.filter(atleta =>
          R.contains(standardize(filter), standardize(atleta.apelido))
        ),
        R.filter(atleta => atleta.apelido)
      )(data.atletas ? Object.values(data.atletas) : [])

    return (
      <Page>
        <Header
          left="IcChevronLeft"
          leftLink="/"
          right="IcRefresh"
          rightClick={this.refresh}
        >
          Parciais dos Atletas
        </Header>
        <BlockSearch onChange={this.handleFilter} />
        <Wrapper>
          {loader(!data, 'Carregando jogadores...', () => {
            const { clubes, posicoes } = data
            return (
              <div>
                {showPlayers(
                  atleta =>
                    atleta.apelido && (
                      <PontuacaoAtleta
                        key={`${atleta.apelido}-${atleta.clubeId}`}
                        atleta={atleta}
                        clube={clubes[atleta.clubeId]}
                        posicao={posicoes[atleta.posicaoId]}
                      />
                    )
                )}
              </div>
            )
          })}
        </Wrapper>
      </Page>
    )
  }
}

const pontuacaoColor = (pontuacao = 0) => {
  if (pontuacao >= 0) return 'green'
  if (pontuacao < 0) return 'red'
  return ''
}

const PontuacaoAtleta = ({ atleta, clube, posicao }) => (
  <Block theme="light" padding={0} key={atleta.atletaId} className="atleta">
    <span className="item img">
      <img src={clube && clube.escudos['30x30']} height={20} alt="" />
    </span>
    <span className="item pos x-small bold">
      {posicao && posicao.abreviacao.toUpperCase()}{' '}
    </span>
    <span className="item name">{atleta.apelido}</span>
    <Right className="item data">
      <span className={`bold ${pontuacaoColor(atleta.pontuacao)}`}>
        {atleta.pontuacao && atleta.pontuacao.toFixed(2)}
      </span>
    </Right>
  </Block>
)

const Wrapper = styled.div`
  .atleta > div {
    display: flex;
    align-items: center;

    > .item:not(:last-of-type) {
      padding-right: 10px;
    }
  }

  .pos {
    letter-spacing: 1px;
    display: inline-block;
    width: 25px;
  }

  .data {
    padding-left: 10px;
    margin-left: auto;
    background: white;
    white-space: nowrap;
  }

  .name {
    white-space: nowrap;
    overflow-x: hidden;
    display: block;
    text-overflow: ellipsis;
  }
`

export default Parciais
