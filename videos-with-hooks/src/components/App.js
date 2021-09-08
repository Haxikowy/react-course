import '../css/App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Loader from './Loader';
import useVideos from '../hooks/useVideos';

const App = () => {
   const [selectedVideo, setSelectedVideo] = useState(null);
   const [videos, getVideos] = useVideos('torchlight');

   useEffect(() => {
      setSelectedVideo(videos[0]);
   }, [videos]);

   if (!videos.length) {
      return (
         <div style={{ padding: '2em 0' }} className="ui container">
            <SearchBar onFormSubmit={getVideos} />
            <main style={{ minHeight: '500px' }} className="ui segment">
               <Loader text="Search for video" />
            </main>
         </div>
      );
   }
   return (
      <div style={{ padding: '2em 0' }} className="ui container">
         <SearchBar onFormSubmit={getVideos} />
         <main className="ui segment">
            <VideoDetail video={selectedVideo} />
            <VideoList
               onVideoSelect={video => setSelectedVideo(video)}
               videos={videos}
            />
         </main>
      </div>
   );
};

export default App;
