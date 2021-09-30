import './scss/App.scss';
import React from 'react';

import { LanguageStore } from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <LanguageStore>
            <LanguageSelector />
            <ColorContext.Provider value="#BF7331">
              <UserCreate />
            </ColorContext.Provider>
          </LanguageStore>
        </div>
      </div>
    );
  }
}

export default App;
