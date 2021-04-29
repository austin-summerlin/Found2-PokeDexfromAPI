import { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  state = {
    search: '',
  }

  handleNameChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }


  render() {
    const { search } = this.state;

    return (
      <form className="Search" onSubmit={this.handleSubmit}>

        <input
          name="search"
          value={search}
          onChange={this.handleSearchChange}
        />

        <button>🔎</button>

      </form>
    );
  }

}