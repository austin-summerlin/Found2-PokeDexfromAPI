import React, { Component } from 'react';
import './PokemonItem.css';

class PokemonItem extends Component {

  render() {
    const { poke } = this.props;

    return (
      <li className="PokemonItem">
        <h4>{poke.pokemon}</h4>

        <p className="id">Pokedex: #{poke.id}</p>
        <p className="type">Type: {poke.type_1}</p>
        <p className="type2">Type: {poke.type_2}</p>
        <p className="hp">HP: {poke.hp}</p>

        <img
          src={poke.url_image}
          alt={poke.pokemon}
        />
      </li>
    );
  }

}

export default PokemonItem;