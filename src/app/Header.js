import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className="Header">

        <img
          className="logo"
          alt="Ivy"
          src="Ivy.png"
        />

        <h1>Ivy's Pokedex</h1>

      </header>
    );
  }

}

export default Header;