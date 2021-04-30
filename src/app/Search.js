import { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  state = {
    search: '',
    sortDirection: '',
    typeFilter: '',
    hpFilter: '',

  }

  // handleHpFilter = ({ target }) => {
  //   this.setState({ hpFilter: target.value });
  // }

  handleSearchChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleSortChange = ({ target }) => {
    this.setState({ sortDirection: target.value });
  }

  handleTypeChange = ({ target }) => {
    this.setState({ typeFilter: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSearch(this.state);
    }
  }

  render() {
    const { search, typeFilter, sortDirection } = this.state;
    const { pokemon } = this.props;

    return (
      <form className="Search" onSubmit={this.handleSubmit}>
        <input
          name="search"
          value={search}
          placeholder="Search"
          onChange={this.handleSearchChange}
        />
        <select
          name="typeFilter"
          value={typeFilter}
          onChange={this.handleTypeChange}
        >
          <option value="">sort types...</option>
          {[...new Set(pokemon.map(poke => poke.type_1))]
            .map(type => (
              <option
                key={type}
                value={type}>
                {type}
              </option>
            ))}
        </select>

        <select
          name="sortDirection"
          value={sortDirection}
          onChange={this.handleSortChange}
        >
          <option value="">sort by...</option>
          <option value='asc'>A-Z</option>
          <option value='desc'>Z-A</option>
        </select>

        <button>🔎</button>
      </form>
    );
  }

}