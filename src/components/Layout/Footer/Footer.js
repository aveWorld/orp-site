import React from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import icone1 from '../../../assets/image/icone/Medium.svg';
import icone2 from '../../../assets/image/icone/twitter.svg';
import icone3 from '../../../assets/image/icone/Instagram.svg';
import icone4 from '../../../assets/image/icone/reddit.svg';

const Footer = () => (
  <footer className="footer ">
    <div className="footer__wrapper container">
      <div className="footer__top">
        <div className="footer__nav">
          <div className="footer__item">
            <span className="footer__anchor main">Protocol</span>
            <Link className="footer__anchor" to="/soon">
              Reforester
            </Link>
            <Link className="footer__anchor" to="/soon">
              Collateral Zone
            </Link>
            <Link className="footer__anchor" to="/soon">
              Validator Area
            </Link>
            <Link className="footer__anchor" to="/soon">
              Project Explorer
            </Link>
            <Link className="footer__anchor" to="/soon">
              Documentation
            </Link>
          </div>
          <div className="footer__item">
            <span className="footer__anchor  main">Developers</span>
            <Link className="footer__anchor" to="soon">
              Whitepaper
            </Link>
            <Link className="footer__anchor" to="soon">
              Documentation
            </Link>
            <a
              className="footer__anchor"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/open-reforestation-protocol"
            >
              Github
            </a>
          </div>
          <div className="footer__item">
            <span className="footer__anchor main">Get Involved</span>
            <Link className="footer__anchor" to="/get-involved">
              Value Proposition
            </Link>
            <Link className="footer__anchor" to="/get-involved">
              Documentation
            </Link>
          </div>

          <div className="footer__item">
            <span className="footer__anchor main" to="governance">
              Governance
            </span>
            <Link
              className="footer__anchor"
              to={{ pathname: '/governance', state: { pathStep: 1 } }}
            >
              ORP Token
            </Link>
            <Link className="footer__anchor" to="governance">
              OCC
            </Link>
            <Link className="footer__anchor" to="governance">
              Documentation
            </Link>
            <Link className="footer__anchor" to="governance">
              Forum
            </Link>
          </div>
          <div className="footer__item">
            <span className="footer__anchor main">Community</span>
            <Link className="footer__anchor" to="/">
              Twitter
            </Link>
            <Link className="footer__anchor" to="/">
              Discord
            </Link>
            <Link className="footer__anchor" to="/">
              Reddit
            </Link>
            <Link className="footer__anchor" to="/">
              Clubhouse
            </Link>
          </div>
          <div className="footer__item main">
            <span className="footer__anchor main">About</span>
            <Link className="footer__anchor" to={{ pathname: '/about', state: { pathStep: 1 } }}>
              Blog
            </Link>
            <Link className="footer__anchor" to={{ pathname: '/about', state: { pathStep: 2 } }}>
              Documentation
            </Link>
            <Link className="footer__anchor" to={{ pathname: '/about', state: { pathStep: 3 } }}>
              FAQ
            </Link>
            <Link className="footer__anchor" to="/">
              Team
            </Link>
            <Link className="footer__anchor" to="/">
              How it Works
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__line" />
        <div className="footer__copy">© Open Reforestation Protocol Foundation, 2021</div>
        <div className="footer__social">
          <span>Follow us:</span>
          <div className="footer__social-list">
            <Link to="/" className="footer__social-item">
              <ReactSVG src={icone1} />
            </Link>
            <a
              href="https://twitter.com/ReforestClean"
              className="footer__social-item"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ReactSVG src={icone2} />
            </a>
            <Link to="/" className="footer__social-item">
              <ReactSVG src={icone3} />
            </Link>
            <Link to="/" className="footer__social-item">
              <ReactSVG src={icone4} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
