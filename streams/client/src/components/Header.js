import './scss/Header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="header">
      <div className="col">
        <Link to="/" className="header__logo">
          streamY
        </Link>
      </div>
      <ul className="col header--list">
        <li className="header--list__item">
          <Link to="/" className="header--list__link">
            All Streams
          </Link>
        </li>
        <li className="header--list__item">
          <GoogleAuth />
        </li>
      </ul>
    </div>
  );
};

export default Header;
