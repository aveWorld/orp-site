import React from 'react';
import { ReactSVG } from 'react-svg';
import Logo from '../../../assets/image/logo.svg';

export default function Docs() {
  return (
    <div className="about__docs">
      <div className="about__docs__wrapper">
        <div className="about__docs__title">
          <ReactSVG src={Logo} />
          <h3 className="gen-title">Documentation</h3>
        </div>
        <div className="about__docs__pdfs">
          <h5>Download the PDFs</h5>
          <div className="about__docs__pdfs__wrapper">
            <a className="btn inner" href="#">
              ORP Whitepaper
            </a>
            <a className="btn inner" href="#">
              Mechanism Design & Crypto-Economics
            </a>
            <a className="btn inner" href="#">
              NFT Research Analysis & Architecture
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
