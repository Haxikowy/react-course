import '../scss/App.scss';
import React from 'react';
import SongList from './SongList';
import SongDetails from './SongDetails';

const App = () => {
   return (
      <div className="container">
         <SongList />
         <SongDetails />
      </div>
   );
};

export default App;
