import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import PokemonList from '../pokemon/PokemonList';
import Search from './Search';
import request from 'superagent';
import './App.css';

const POKEDEX_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component {
  state = {
    pokemon: []
  }

  async componentDidMount() {
    const response = await request.get(POKEDEX_API_URL);
    this.setState({ pokemon: response.body });
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
          <PokemonList pokemon={pokemon} />
        </main>

        <Footer />

      </div>
    );
  }

}

export default App;