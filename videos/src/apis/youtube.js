import axios from 'axios';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: 'GENERATE-NEW-KEY', //You have to generate your own api key to get it working
   },
});
