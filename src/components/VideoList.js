import React, { Component } from "react";
import VideoItem from "./VideoItem";

export default class VideoList extends Component {
  render() {
    const renderedList = this.props.videos.map(video => {
      return <VideoItem video={video} />;
    });

    return <div>{renderedList}</div>;
  }
}
