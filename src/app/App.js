import React, { Component } from 'react';
import request from 'superagent';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import PokemonList from '../pokemon/PokemonList';
import './App.css';

const POKEDEX_API = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component {
  state = {
    pokemon: []
  }

  async componentDidMount() {
    const response = await request.get(POKEDEX_API);
    this.setState({ pokemon: response.body.results });
  }

  handleSearch = async (search) => {
    console.log('App search got', search);
    const response = await request.get(POKEDEX_API)
      .query({ pokemon: search });

    this.setState({ pokemon: response.body.results });
  }

  render() {
    const pokemon = this.state.pokemon;

    return (
      <div className="App" >

        <Header />

        <section className="Search">
          <Search onSearch={this.handleSearch} />
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