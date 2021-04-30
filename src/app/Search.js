import { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  state = {
    search: '',
    sortField: '',
    hpFilter: '',

  }

  // handleHpFilter = ({ target }) => {
  //   this.setState({ hpFilter: target.value });
  // }

  handleSearchChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleSortChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  render() {
    const { search, sortField//,hpFilter 
    } = this.state;
    // const { hps } = this.props;

    return (
      <form className="Search" onSubmit={this.handleSubmit}>
        <input
          name="search"
          value={search}
          onChange={this.handleSearchChange}
        />
        <select
          name="sortField"
          value={sortField}
          onChange={this.handleSortChange}
        >
          <option value="">sort by...</option>
          <option value='asc'>ascending</option>
          <option value='desc'>descending</option>
        </select>
        {/* <select
          name="hpFilter"
          value={hpFilter}
          onChange={this.handleHpFilter}
        >
          <option value="">Sort By</option>
          {hps.map(hp => (
            <option
              key={hp}
              value={hp}
            > {hp}
            </option>
          ))}

        </select> */}
        {/* <p>Attack:</p>
        <select
          name="attackFilter"
          value={attackFilter}
          onChange={this.handleAttackFilter}
        >
          <option value="">Sort by...</option>
          {attacks.map(attack => (
            <option
              key={attack}
              value={attack}
            > {attack}
            </option>
          ))}
        </select>
        <p>Defense:</p>
        <select
          name="defenseFilter"
          value={defenseFilter}
          onChange={this.handleDefenseFilter}
        >
          <option value="">Sort by...</option>
          {defenses.map(defense => (
            <option
              key={defense}
              value={defense}
            > {defense}
            </option>
          ))}
        </select>
        <p>All Data:</p>
        <select
          name="sortField"
          value={sortField}
          onChange={this.handleSearchChange}
        >
          <option value="">Sort by...</option>
          <option value="title">title</option>
          <option value="horns">horns</option>
        </select> */}
        <button>🔎</button>
      </form>
    );
  }

}