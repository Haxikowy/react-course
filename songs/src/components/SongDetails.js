import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ song }) => {
   if (!song) return null;
   return (
      <div className="song-details">
         <h1 className="song-details__h1">Details for:</h1>
         <p className="song-details__title">Title: {song.title}</p>
         <p className="song-details__duration">Duration: {song.duration}</p>
      </div>
   );
};

const mapStateToProps = state => {
   return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
