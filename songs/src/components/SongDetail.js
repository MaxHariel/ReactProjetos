import React from "react";
import { SelectedSong } from "../actions";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  console.log(song);
  if (!song) {
    return <h4>Select a Song</h4>;
  }
  return (
    <div>
      <h3>Song Title: {song.title}</h3>
      <p>Duration: {song.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(
  mapStateToProps,
  { SelectedSong }
)(SongDetail);
