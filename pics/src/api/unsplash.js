import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.unsplash.com/',
   headers: {
      Authorization: 'Client-ID 0dDDZvoIB2RoxLU7Vt3sSlXxHJ7cojPM9IOtT2cqan0',
   },
});
