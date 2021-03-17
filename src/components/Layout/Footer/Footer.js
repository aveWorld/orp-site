import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import Modal from '../../Modall';
import icone1 from '../../../assets/image/icone/Medium.svg';
import icone2 from '../../../assets/image/icone/twitter.svg';
import icone3 from '../../../assets/image/icone/Instagram.svg';
import icone4 from '../../../assets/image/icone/reddit.svg';
import WhitePaper from '../../../assets/pdfs/ORP_Whitepaper_V2.pdf';

const Footer = () => {
  const [isShow, setIsShow] = useState(false);
  const togglePopup = () => {
    document.body.classList.toggle('hideScroll');
    setIsShow(!isShow);
  };
  return (
    <footer className="footer ">
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
      <div className="footer__wrapper container">
        <div className="footer__top">
          <div className="footer__nav">
            <div className="footer__item">
              <span className="footer__anchor main">Protocol</span>
              <Link className="footer__anchor" onClick={() => togglePopup()}>
                Reforester
              </Link>
              <Link className="footer__anchor" onClick={() => togglePopup()}>
                Collateral Zone
              </Link>
              <Link className="footer__anchor" onClick={() => togglePopup()}>
                Validator Area
              </Link>
              <Link className="footer__anchor" onClick={() => togglePopup()}>
                Project Explorer
              </Link>
              <Link className="footer__anchor" onClick={() => togglePopup()}>
                Documentation
              </Link>
            </div>
            <div className="footer__item">
              <span className="footer__anchor  main">Developers</span>
              <a
                className="footer__anchor"
                href={WhitePaper}
                target="_blank"
                rel="noopener noreferrer"
              >
                Whitepaper
              </a>
              <Link className="footer__anchor" onClick={() => togglePopup()}>
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
              <a
                className="footer__anchor"
                href="https://twitter.com/reforestclean?s=21"
                rel="noopener noreferrer"
                target="_blank"
              >
                Twitter
              </a>
              <a
                className="footer__anchor"
                href="https://www.instagram.com/openreforestationprotocol/?igshid=azan2l8q4y6j"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
              <a
                className="footer__anchor"
                href="https://medium.com/@Openreforestation"
                rel="noopener noreferrer"
                target="_blank"
              >
                Blog
              </a>
              <a
                className="footer__anchor"
                href="https://www.reddit.com/r/orp/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Reddit
              </a>
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
            <div className="footer__item">
              <span className="footer__anchor main" to="governance">
                Governance
              </span>
              <a
                className="footer__anchor"
                href="mailto:m@openreforestation.org"
                rel="noopener noreferrer"
                target="_blank"
              >
                m@openreforestation.org
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__line" />
          <div className="footer__copy">© Open Reforestation Protocol Foundation, 2021</div>
          <div className="footer__social">
            <span>Follow us:</span>
            <div className="footer__social-list">
              <a
                href="https://medium.com/@Openreforestation"
                className="footer__social-item"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ReactSVG src={icone1} />
              </a>
              <a
                href="https://twitter.com/ReforestClean"
                className="footer__social-item"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ReactSVG src={icone2} />
              </a>
              <a
                href="https://www.instagram.com/openreforestationprotocol/?igshid=azan2l8q4y6j"
                className="footer__social-item"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ReactSVG src={icone3} />
              </a>
              <a
                href="https://www.reddit.com/r/orp/"
                className="footer__social-item"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ReactSVG src={icone4} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
