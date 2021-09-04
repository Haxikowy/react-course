import React from 'react';
import VideoItem from './VideoItem';
import Loader from './Loader';

const VideoList = ({ videos, onVideoSelect }) => {
   if (!videos.length) {
      return (
         <div className="video-list ui segment">
            <Loader text="Search for a video" />
         </div>
      );
   }

   const renderedList = videos.map(video => {
      return (
         <VideoItem
            onVideoSelect={onVideoSelect}
            key={video.id.videoId}
            video={video}
         />
      );
   });
   return (
      <div className="video-list ui segment">
         <div className="ui relaxed divided list">{renderedList}</div>
      </div>
   );
};
export default VideoList;
