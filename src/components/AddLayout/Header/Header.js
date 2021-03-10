import React from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import logo from '../../../assets/image/logo.svg';

export default function Header() {
  return (
    <header className="add-header">
      <div className="add-header__wrapper">
        <Link to="/" className="add-header__link">
          {' '}
          <ReactSVG src={logo} />
        </Link>
        <span className="add-header__text">
          The Open Reforestation Protocol <br /> Unique Selling Proposition for Entrepreneurs
        </span>
      </div>
    </header>
  );
}
