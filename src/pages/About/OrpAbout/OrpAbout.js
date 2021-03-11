import React from 'react';
import { ReactSVG } from 'react-svg';
import Logo from '../../../assets/image/logo.svg';

const OrpAbout = ({ refProp }) => (
  <div className="about__orp" ref={refProp}>
    <h2 className="gen-title">
      About
      {' '}
      <ReactSVG src={Logo} />
    </h2>
    <p className="about__text">
      ORP provides the digital infrastructure for collecting, uploading, confirming, and visualizing
      reforestation data. ORP is an open-source and permissionless protocol for reforestation
      projects to transparently measure, report, and verify (MRV) the entire life cycle of their
      trees.
    </p>
    <div className="about__list">
      <div className="about__punk">
        ORP inaugurates a paradigm shift in reforestation management:
        {' '}
      </div>
      <div className="about__punk">
        - Standardized data structure for all reforestation projects
      </div>
      <div className="about__punk">- Creation of data-backed carbon credits</div>
      <div className="about__punk">
        - An Ecosystem for connecting and integrating different stakeholders concerned about the
        future of reforestation and restoration.
      </div>
    </div>
    {/* <div className="about__video"> */}
    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
    {/* <iframe */}
    {/*  src="https://www.youtube.com/embed/FWi2bn40ma4" */}
    {/*  frameBorder="0" */}
    {/*  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" */}
    {/*  allowFullScreen */}
    {/* /> */}
    {/* </div> */}
  </div>
);

export default OrpAbout;
