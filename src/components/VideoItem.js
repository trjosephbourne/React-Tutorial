import "./VideoItem.css";
import React, { Component } from "react";

export default class VideoItem extends Component {
  render() {
    const video = this.props.video;
    return (
      <div
        onClick={() => this.props.onVideoSelect(video)}
        className="video-item item"
      >
        <img className="ui image" src={video.snippet.thumbnails.medium.url} />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}
