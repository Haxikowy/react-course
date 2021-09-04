import '../css/App.css';
import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Loader from './Loader';
import youtube from '../apis/youtube';

class App extends React.Component {
   state = {
      videos: [],
      selectedVideo: null,
   };

   onFormSubmit = async term => {
      const response = await youtube.get('/search', {
         params: { q: term },
      });
      this.setState({
         videos: response.data.items,
         selectedVideo: response.data.items[0],
      });
   };

   onVideoSelect = video => {
      this.setState({ selectedVideo: video });
   };

   render() {
      if (!this.state.videos.length) {
         return (
            <div style={{ padding: '2em 0' }} className="ui container">
               <SearchBar onFormSubmit={this.onFormSubmit} />
               <main style={{ minHeight: '500px' }} className="ui segment">
                  <Loader text="Search for video" />
               </main>
            </div>
         );
      }
      return (
         <div style={{ padding: '2em 0' }} className="ui container">
            <SearchBar onFormSubmit={this.onFormSubmit} />
            <main className="ui segment">
               <VideoDetail video={this.state.selectedVideo} />
               <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
               />
            </main>
         </div>
      );
   }
}

export default App;
