import React, { Component } from "react";

export default class VideoDetail extends Component {
  render() {
    const video = this.props.video;
    if (!video) {
      return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
      <div>
        <div className="ui embed">
          <iframe title="Video Title" src={videoSrc} />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
}
