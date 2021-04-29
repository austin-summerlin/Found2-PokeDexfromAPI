import React, { Component } from 'react';
import PokemonItem from './PokemonItem';
import './PokemonList.css';


class PokemonList extends Component {

  render() {
    const { pokemonprop } = this.props;
    return (
      <ul className="PokemonList">
        {pokemonprop.map(poke => (
          <PokemonItem key={poke._id} poke={poke} />
        ))}
      </ul>
    );
  }

}

export default PokemonList;