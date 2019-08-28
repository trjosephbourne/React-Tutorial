import React, { Component } from "react";
import VideoItem from "./VideoItem";

export default class VideoList extends Component {
  render() {
    const onVideoSelect = this.props.onVideoSelect;
    const renderedList = this.props.videos.map(video => {
      return (
        <VideoItem
          key={video.id.videoId}
          onVideoSelect={onVideoSelect}
          video={video}
        />
      );
    });

    return <div className="ui relaxed divided list">{renderedList}</div>;
  }
}
