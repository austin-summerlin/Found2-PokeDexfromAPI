import React, { Component } from 'react';
import PokemonItem from './PokemonItem';
import './PokemonList.css';


class PokemonList extends Component {

  render() {

    return (
      <ul className="PokemonList">
        <PokemonItem />
        <PokemonItem />
        <PokemonItem />
        <PokemonItem />
        <PokemonItem />
        <PokemonItem />
      </ul>
    );
  }

}

export default PokemonList;