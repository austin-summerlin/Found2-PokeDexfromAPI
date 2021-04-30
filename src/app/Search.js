import { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  state = {
    search: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const onSearch = this.props.onSearch;
    const search = this.state.search;
    onSearch(search);
  }

  handleSearchChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  render() {
    const search = this.state.search;

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