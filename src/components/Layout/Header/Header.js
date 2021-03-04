import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import Button from '../../Button';
import logo from '../../../assets/image/logo.svg';
// import
const Header = () => {
  const [classActive, setClassActive] = useState('');

  const toogleClass = () => {
    if (window.innerWidth <= 768) {
      document.body.classList.toggle('hideScroll');
      // eslint-disable-next-line no-unused-expressions
      classActive ? setClassActive('') : setClassActive('open');
    }
  };
  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__logo">
          <Link to="/">
            <ReactSVG className="svg" src={logo} />
          </Link>
        </div>
        <div className={`header__nav ${classActive}`}>
          <Link activeClassName="active" to="/soon" className="header__item" onClick={toogleClass}>Products</Link>
          <Link activeClassName="active" to="/soon" className="header__item" onClick={toogleClass}>Developers</Link>
          <NavLink activeClassName="active" to="entrepreneurs" className="header__item" onClick={toogleClass}>Entrepreneurs</NavLink>
          <NavLink activeClassName="active" to="governance" className="header__item" onClick={toogleClass}>Governance</NavLink>
          <Link activeClassName="active" to="/" className="header__item" onClick={toogleClass}>Community</Link>
          <NavLink activeClassName="active" to="about" className="header__item" onClick={toogleClass}>About</NavLink>
          <div className="header__wrapper-btn" onClick={toogleClass}>
            <Button label="Use ORP" customClass="reg-top" handleClick={() => {}} />
          </div>
        </div>
        <div className={`header__burger ${classActive}`} onClick={toogleClass}>
          <span />
          <span />
          <span />
        </div>

      </div>
    </header>
  );
};

export default Header;
