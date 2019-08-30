import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Star Wars: Return of the Jedi", duration: "3:32" },
    { title: "Despicable Me", duration: "3:10" },
    { title: "Shaun of the Dead", duration: "2:43" },
    { title: "Jurassic Park", duration: "2:12" }
  ];
};

// Set to null to make sure no song is selected already
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
