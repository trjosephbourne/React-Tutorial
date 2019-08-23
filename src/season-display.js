import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Brr, it's chilly!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  console.log(props.lat);
  const season = getSeason(props.lat, new Date().getMonth());

  console.log(seasonConfig[season]);

  return (
    <div className={`season-display ${season}`}>
      <i
        className={`icon-left massive ${seasonConfig[season].iconName} icon`}
      ></i>
      <h1>{seasonConfig[season].text}</h1>
      <i
        className={`icon-right massive ${seasonConfig[season].iconName} icon`}
      ></i>
    </div>
  );
};

export default SeasonDisplay;
