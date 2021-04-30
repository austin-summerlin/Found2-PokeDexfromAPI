import React, { Component } from 'react';
import request from 'superagent';
import Header from './Header';
import Footer from './Footer';
import Paging from './Paging';
import Search from './Search';
import PokemonList from '../pokemon/PokemonList';
import './App.css';

const POKEDEX_API = `https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=22`;

class App extends Component {
  state = {
    pokemon: [],
    nameSearch: '',
    typeFilter: undefined,
    sortDirection: '',
    page: 1
  }

  async componentDidMount() {
    this.fetchPokemon();
  }

  async fetchPokemon() {
    const { nameSearch, typeFilter, sortDirection, page } = this.state;

    const response = await request
      .get(POKEDEX_API)
      .query({ pokemon: nameSearch })
      .query({ sort: 'pokemon' })
      .query({ type: typeFilter })
      .query({ direction: sortDirection })
      .query({ page: page });

    this.setState({
      pokemon: response.body.results
    });
  }

  handleSearch = ({ search, typeFilter, sortDirection }) => {

    this.setState(
      {
        nameSearch: search,
        typeFilter: typeFilter,
        sortDirection: sortDirection,
        page: 1
      },
      () => this.fetchPokemon());

  }

  handlePrevPage = () => {
    this.setState(
      { page: Math.max(this.state.page - 1, 1) },
      () => this.fetchPokemon()
    );
  }

  handleNextPage = () => {
    this.setState(
      { page: this.state.page + 1 },
      () => this.fetchPokemon()
    );
  }

  render() {

    const { pokemon, typeFilter, page } = this.state;

    return (
      <div className="App" >
        <div>
          <Header />
          <Search
            onSearch={this.handleSearch}
            pokemon={pokemon}
            typeFilter={typeFilter}
          />
        </div>
        <h1>Ivy's Pokédex</h1>
        <section className="Search">

          <Paging
            page={page}
            onPrev={this.handlePrevPage}
            onNext={this.handleNextPage}
          />

        </section>

        <main>
          <PokemonList pokemonprop={pokemon} />

        </main>

        <Footer />


      </div>
    );
  }
}

export default App;