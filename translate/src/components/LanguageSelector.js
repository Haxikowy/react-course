import './scss/LanguageSelector.scss';
import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div className="LanguageSelector">
        Select a language:
        <i
          onClick={() => this.context.onLanguageChange('english')}
          className="flag gb"
        />
        <i
          onClick={() => this.context.onLanguageChange('polish')}
          className="flag pl"
        />
      </div>
    );
  }
}

export default LanguageSelector;
