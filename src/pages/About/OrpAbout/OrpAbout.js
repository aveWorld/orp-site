import React from 'react';
import { ReactSVG } from 'react-svg';
import Logo from '../../../assets/image/logo.svg';
import LogoWhite from '../../../assets/image/logo-white.svg';
import Cloud from '../../../assets/image/icone/cloud.svg';
import Dots from '../../../assets/image/icone/sixDots.svg';
import Earth from '../../../assets/image/icone/earth.svg';

const OrpAbout = ({ refProp }) => (
  <div className="about__orp" ref={refProp}>
    <div className="about__orp__wrapper">
      <h2 className="gen-title">
        About <ReactSVG src={Logo} />
      </h2>
      <p className="about__text">
        ORP provides the digital infrastructure for collecting, uploading, confirming, and
        visualizing reforestation data. ORP is an open-source and permissionless protocol for
        reforestation projects to transparently measure, report, and verify (MRV) the entire life
        cycle of their trees.
      </p>
    </div>
    <div className="about__orp__block">
      <div className="about__orp__block__title">
        <ReactSVG src={LogoWhite} />
        <p>inaugurates a paradigm shift in reforestation management</p>
      </div>
      <div className="about__orp__block__item">
        <ReactSVG src={Cloud} />
        <p>Standardized data structure for all reforestation projects</p>
      </div>
      <div className="about__orp__block__item">
        <ReactSVG src={Dots} />
        <p>Creation of data-backed carbon credits</p>
      </div>
      <div className="about__orp__block__item">
        <ReactSVG src={Earth} />
        <p>
          An Ecosystem for connecting and integrating different stakeholders concerned about the
          future of reforestation and restoration
        </p>
      </div>
    </div>
  </div>
);

export default OrpAbout;
