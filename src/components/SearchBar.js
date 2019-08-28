import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  onInputChange = ev => {
    this.setState({ term: ev.target.value });
  };

  onFormSubmit = ev => {
    ev.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
