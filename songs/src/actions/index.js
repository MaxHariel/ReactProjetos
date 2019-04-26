//Action creator
export const SelectedSong = song => {
  //Action
  return {
    type: "SELECTED_SONG",
    payload: song
  };
};
