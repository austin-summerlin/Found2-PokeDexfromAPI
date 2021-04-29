import React, { Component } from 'react';
import './PokemonItem.css';

class PokemonItem extends Component {

  render() {
    const { poke } = this.props;

    return (
      <li className="PokemonItem">
        <h2>{poke.pokemon}</h2>
        <p className="type">{poke.type}</p>

        <p className="hp">{poke.hp}</p>

        <img
          src={poke.url_image}
          alt={poke.pokemon}
        />

      </li>
    );
  }

}

export default PokemonItem;