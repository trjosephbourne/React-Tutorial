import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

export class App extends Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const nums = [1, 2, 3];
    console.log(nums.map(n => n + 5));
    console.log(term);
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    console.log(this);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
