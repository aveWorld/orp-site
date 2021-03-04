import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button';

const Footer = () => (
  <footer className="footer ">
    <div className="footer__wrapper container">
      <div className="footer__top">
        <div className="footer__nav">
          <div className="footer__item">
            <span className="footer__anchor main" to="/">Protocol</span>
            <Link className="footer__anchor" to="/">Reforester</Link>
            <Link className="footer__anchor" to="/">Collateral Zone</Link>
            <Link className="footer__anchor" to="/">Validator Area</Link>
            <Link className="footer__anchor" to="/">Project Explorer</Link>
            <Link className="footer__anchor" to="/">Documentation</Link>
          </div>
          <div className="footer__item">
            <span className="footer__anchor  main">Developers</span>
            <Link className="footer__anchor" to="/">Whitepaper</Link>
            <Link className="footer__anchor" to="/">Documentation</Link>
            <Link className="footer__anchor" to="/">Github</Link>
          </div>
          <div className="footer__item">
            <span className="footer__anchor main">Entrepreneurs</span>
            <Link className="footer__anchor" to="entrepreneurs">Value Proposition</Link>
            <Link className="footer__anchor" to="/">Documentation</Link>

          </div>

          <div className="footer__item">
            <span className="footer__anchor main" to="governance">Governance</span>
            <Link className="footer__anchor" to={{ pathname: '/governance', state: { pathStep: 1 } }}>ORP Token</Link>
            <Link className="footer__anchor" to="/">OCC</Link>
            <Link className="footer__anchor" to="/">Documentation</Link>
            <Link className="footer__anchor" to="/">Forum</Link>

          </div>
          <div className="footer__item">
            <span className="footer__anchor main" to="/">Community</span>
            <Link className="footer__anchor" to="/">Twitter</Link>
            <Link className="footer__anchor" to="/">Discord</Link>
            <Link className="footer__anchor" to="/">Reddit</Link>
            <Link className="footer__anchor" to="/">Clubhouse</Link>
          </div>
          <div className="footer__item main">
            <span className="footer__anchor main" to="about">About</span>
            <Link className="footer__anchor" to={{ pathname: '/about', state: { pathStep: 1 } }}>Blog</Link>
            <Link className="footer__anchor" to={{ pathname: '/about', state: { pathStep: 2 } }}>Documentation</Link>
            <Link className="footer__anchor" to={{ pathname: '/about', state: { pathStep: 3 } }}>
              FAQ
            </Link>
            <Link className="footer__anchor" to="/">Team</Link>
            <Link className="footer__anchor" to="/">How it Works</Link>
          </div>

        </div>
        <div className="footer__reg">
          <Button label="Register" customClass="reg" handleClick={() => {}} />
          <Button label="Log in" customClass="log" handleClick={() => {}} />
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__line" />
        <div className="footer__copy">© Open Reforestation Protocol Foundation, 2021</div>
        <div className="footer__social">
          <span>Follow us:</span>
          <div className="footer__social-list">
            <div className="footer__social-item" />
            <div className="footer__social-item" />
            <div className="footer__social-item" />
            <div className="footer__social-item" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
