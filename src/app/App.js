import React, { Component } from 'react';
import request from 'superagent';
import Header from './Header';
import Footer from './Footer';
import Paging from './Paging';
import Search from './Search';
import PokemonList from '../pokemon/PokemonList';
import './App.css';

const POKEDEX_API = `https://pokedex-alchemy.herokuapp.com/api/pokedex`;

class App extends Component {
  state = {
    pokemon: [],
    nameSearch: '',
    sortDirection: '',
    page: 1
  }

  async componentDidMount() {
    this.fetchPokemon();
  }

  async fetchPokemon() {
    const { nameSearch, sortDirection, page } = this.state;

    const response = await request
      .get(POKEDEX_API)
      .query({ pokemon: nameSearch })
      .query({ sort: 'pokemon' })
      .query({ direction: sortDirection })
      .query({ page: page });

    this.setState({
      pokemon: response.body.results
    });
  }

  handleSearch = ({ search, sortDirection, page }) => {

    this.setState(
      {
        nameSearch: search,
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
      { page: Math.max(this.state.page + 1) },
      () => this.fetchPokemon()
    );
  }

  render() {

    const { pokemon, page } = this.state;

    return (
      <div className="App" >
        <div>
          <Header />
          <Search
            onSearch={this.handleSearch} />
        </div>
        <h1>Ivy's Pokédex</h1>
        <section className="Search">
          <Paging
            page={page}
            onPrev={this.handlePrevPage}
            onNect={this.handleNextPage}
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