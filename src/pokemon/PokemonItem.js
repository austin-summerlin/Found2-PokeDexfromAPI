import React, { Component } from 'react';
import './PokemonItem.css';

class PokemonItem extends Component {

  render() {

    return (
      <li className="PokemonItem">
        <h2>Pokemon</h2>
        <p className="name">name</p>

        <p className="type">type</p>

        <img
          src="Ivy.png"
          alt="Pokemon"
        />

      </li>
    );
  }

}

export default PokemonItem;