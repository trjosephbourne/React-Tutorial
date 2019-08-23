import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = ev => {
    ev.preventDefault();
    console.log(`Sent ${this.state.term}`);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="text-search">Image Search</label>
            <input
              id="text-search"
              type="text"
              onChange={ev => this.setState({ term: ev.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
