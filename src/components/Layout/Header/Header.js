import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import Button from '../../Button';
import logo from '../../../assets/image/logo.svg';
import Modal from '../../Modall';

import WhitePaper from '../../../assets/pdfs/ORP Whitepaper V2.pdf';

// import
const Header = () => {
  const [classActive, setClassActive] = useState('');
  const [isShow, setIsShow] = useState(false);
  const togglePopup = () => {
    document.body.classList.toggle('hideScroll');
    setIsShow(!isShow);
  };
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
          <div className="header__dropdown">
            <div className="header__item">Protocol</div>
            <div className="header__dropdown__content">
              <a href={WhitePaper} target="_blank" rel="noopener noreferrer">
                Whitepaper
              </a>
              <a href="#">Reforester</a>
              <a href="#">Collateral Zone</a>
              <a href="#">Validator Area</a>
              <a href="#">Project Explorer</a>
            </div>
          </div>
          <div className="header__dropdown">
            <div className="header__item">Developers</div>
            <div className="header__dropdown__content">
              <a href="#">NFT Whitepaper</a>
              <a href="#">Documentation</a>
              <a href="#">GitHub</a>
            </div>
          </div>
          <NavLink
            activeClassName="active"
            to="/get-involved"
            className="header__item"
            onClick={toogleClass}
          >
            Get Involved
          </NavLink>
          <NavLink
            activeClassName="active"
            to="governance"
            className="header__item"
            onClick={toogleClass}
          >
            Governance
          </NavLink>
          <div className="header__dropdown">
            <div className="header__item">Community</div>
            <div className="header__dropdown__content">
              <a
                href="https://twitter.com/reforestclean?s=21"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/openreforestationprotocol/?igshid=azan2l8q4y6j"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a href="https://www.reddit.com/r/orp/" target="_blank" rel="noopener noreferrer">
                Reddit
              </a>
              <a
                href="https://medium.com/@Openreforestation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </div>
          </div>
          <NavLink
            activeClassName="active"
            to="about"
            className="header__item"
            onClick={toogleClass}
          >
            About
          </NavLink>
          <div className="header__wrapper-btn">
            <Button label="Use ORP" customClass="reg-top" handleClick={() => togglePopup()} />
            {isShow && (
              <Modal
                mainLabel="Coming Soon"
                subLabel="Inquiries can be sent to"
                anchor={{
                  href: 'mailto:m@openreforestation.org',
                  label: 'm@openreforestation.org',
                }}
                close={() => togglePopup()}
              />
            )}
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
