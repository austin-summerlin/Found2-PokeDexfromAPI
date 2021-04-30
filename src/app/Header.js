import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className="Header">

        <img
          className="logo"
          alt="Ivy"
          src="Ivy2.png"
        />
      </header>
    );
  }

}

export default Header;