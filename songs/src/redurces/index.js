import { combineReducers } from "redux";

const songsRedurces = () => {
  return [
    { title: "No Scrubs", duration: "3:19" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Stars", duration: "4:23" },
    { title: "I want it that way", duration: "3:00" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECTED_SONG") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsRedurces,
  selectedSong: selectedSongReducer
});
