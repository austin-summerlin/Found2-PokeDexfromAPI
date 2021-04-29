import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import PokemonList from '../pokemon/PokemonList';
import Search from './Search';
import request from 'superagent';
import './App.css';

const POKEDEX_API = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component {
  state = {
    pokemon: [],
  }

  async componentDidMount() {
    const response = await request.get(POKEDEX_API);
    this.setState({ pokemon: response.body.results });
  }

  render() {
    const { pokemon } = this.state;

    return (
      <div className="App">

        <Header />

        <section className="Search">
          <Search />
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