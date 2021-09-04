import axios from 'axios';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: 'AIzaSyBZ1JhX8L3Cp3g81lqXU8RlLJb_RA_OViY',
   },
});
