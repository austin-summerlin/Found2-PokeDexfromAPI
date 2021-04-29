import { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  state = {
    nameFilter: '',
    sortField: '',
    typeFilter: ''
  }

  handleNameChange = ({ target }) => {
    this.setState({ nameFilter: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }


  render() {
    const { nameFilter } = this.state;

    return (
      <form className="Search" onSubmit={this.handleSubmit}>

        <input
          name="nameFilter"
          value={nameFilter}
          onChange={this.handleNameChange}
        />

        <button>🔎</button>

      </form>
    );
  }

}