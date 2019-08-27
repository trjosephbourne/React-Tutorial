import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

export class App extends Component {
  onSearchSubmit(term) {
    console.log(term);
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 3d2b6b17f0f94e40a70657dcb6884fba1ac8b6cdbda882bdf4813eaf1821f6e2"
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
