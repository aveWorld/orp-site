import React from 'react';
import { ReactSVG } from 'react-svg';
import Logo from '../../../assets/image/logo.svg';
import NFTResearch from '../../../assets/pdfs/NFT Research Paper V2.pdf';
import WhitePaper from '../../../assets/pdfs/ORP Whitepaper V2.pdf';
import Mechanism from '../../../assets/pdfs/ORP Mechanism Design V2.pdf';

export default function Docs({ refProp }) {
  return (
    <div className="about__docs" ref={refProp}>
      <div className="about__docs__wrapper">
        <div className="about__docs__title">
          <ReactSVG src={Logo} />
          <h3 className="gen-title">Documentation</h3>
        </div>
        <div className="about__docs__pdfs">
          <h5>Download the PDFs</h5>
          <div className="about__docs__pdfs__wrapper">
            <a className="btn inner" href={WhitePaper} target="_blank" rel="noopener noreferrer">
              ORP Whitepaper
            </a>
            <a className="btn inner" href={Mechanism} target="_blank" rel="noopener noreferrer">
              Mechanism Design & Crypto-Economics
            </a>
            <a className="btn inner" href={NFTResearch} target="_blank" rel="noopener noreferrer">
              NFT Research Analysis & Architecture
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
