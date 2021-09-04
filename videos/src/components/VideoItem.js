import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
   return (
      <div
         onClick={() => onVideoSelect(video)}
         style={{ display: 'flex', cursor: 'pointer' }}
         className="video-item item">
         <img
            className="ui small image"
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
         />
         <div className="content">
            <span className="header">{video.snippet.title}</span>
            {video.snippet.channelTitle}
         </div>
      </div>
   );
};

export default VideoItem;
