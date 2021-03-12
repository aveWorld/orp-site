import React from 'react';
import { ReactSVG } from 'react-svg';
import Logo from '../../../assets/image/logo-white.svg';

const IntroAbout = () => (
  <div className="about__sentence">
    <div className="about__sentence__wrapper">
      <p className="about__sentence__text">
        The business of planting trees is going to be one of the biggest climate stories of the next
        20 years.
      </p>
      <div className="about__sentence__line" />
      <p className="about__sentence__text">
        <span>Justin Adam,</span> managing director for global lands at The Nature Conservancy
      </p>
    </div>
    <div className="about__sentence__logo">
      <ReactSVG src={Logo} />
    </div>
  </div>
);

export default IntroAbout;
