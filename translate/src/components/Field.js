import './scss/Field.scss';
import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === 'english' ? 'Name' : 'Nazwa';
    return (
      <div className="Field">
        <label htmlFor="name">{text}</label>
        <input id="name" autoComplete="off" />
      </div>
    );
  }
}

export default Field;
