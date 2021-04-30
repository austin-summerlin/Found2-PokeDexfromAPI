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
    sortDirection: ''
  }

  async componentDidMount() {
    this.fetchPokemon();
  }

  async fetchPokemon() {
    const { nameSearch, sortDirection } = this.state;

    const response = await request
      .get(POKEDEX_API)
      .query({ pokemon: nameSearch })
      .query({ sort: 'pokemon' })
      .query({ direction: sortDirection });

    this.setState({
      pokemon: response.body.results
    });
  }

  handleSearch = ({ search, sortDirection }) => {

    this.setState(
      {
        nameSearch: search,
        sortDirection: sortDirection
      },
      () => this.fetchPokemon());
  }

  render() {

    const { pokemon } = this.state;

    return (
      <div className="App" >

        <Header />

        <section className="Search">
          <Search
            onSearch={this.handleSearch} />
          <Paging />
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