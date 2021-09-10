import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
   renderList() {
      return this.props.songs.map(song => {
         return (
            <li className="song-list--item" key={song.title}>
               <h2 className="song-list--item__title">{song.title}</h2>
               <button
                  onClick={() => this.props.selectSong(song)}
                  className="song-list--item__btn">
                  Select
               </button>
            </li>
         );
      });
   }
   render() {
      return <ul className="song-list">{this.renderList()}</ul>;
   }
}

const mapStateToProps = state => {
   return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
