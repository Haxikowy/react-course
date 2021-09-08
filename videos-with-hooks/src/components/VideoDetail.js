import React from 'react';
import Loader from './Loader';
import YoutubeEmbed from './YoutubeEmbed';

const VideoDetail = ({ video }) => {
   if (!video) {
      return (
         <div
            style={{ minHeight: '300px' }}
            className="video-detail ui segment">
            <Loader text="Click on video to get more details" />
         </div>
      );
   }

   return (
      <div className="video-detail ui segment">
         <YoutubeEmbed embedId={video.id.videoId} />
         <h4 className="ui header">{video.snippet.title}</h4>
         <p className="ui meta">{video.snippet.channelTitle}</p>
         <p className="ui description">{video.snippet.description}</p>
      </div>
   );
};

export default VideoDetail;
