import './scss/Button.scss';
import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends Component {
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Wyślij';
  }

  renderButton(color) {
    return (
      <button style={{ backgroundColor: color }} className="Button">
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
