import { useEffect, useState } from 'react';
import youtube from '../apis/youtube';

const useVideos = defaultSearchTerm => {
   const [videos, setVideos] = useState([]);

   useEffect(() => {
      getVideos(defaultSearchTerm);
   }, [defaultSearchTerm]);

   const getVideos = async term => {
      const { data } = await youtube.get('/search', {
         params: { q: term },
      });

      setVideos(data.items);
   };

   return [videos, getVideos];
};

export default useVideos;
