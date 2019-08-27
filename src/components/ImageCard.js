import React, { Component } from "react";

export default class ImageCard extends Component {
  render() {
    const { description, urls } = this.props.img;

    return (
      <div>
        <img alt={description} src={urls.regular} />
      </div>
    );
  }
}
