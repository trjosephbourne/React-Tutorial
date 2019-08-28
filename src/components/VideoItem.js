import React, { Component } from "react";

export default class VideoItem extends Component {
  render() {
    const video = this.props.video;
    return (
      <div>
        <img src={video.snippet.thumbnails.medium.url} />
        {video.snippet.title}
      </div>
    );
  }
}
