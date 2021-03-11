import React from 'react';
import { ReactSVG } from 'react-svg';
import Logo from '../../../assets/image/logo.svg';

const IntroAbout = () => (
  <div className="about__sentence">
    <p className="about__sentence__text">
      According to Justin Adam, managing director for global lands at The Nature Conservancy the
      business of planting trees is going to be one of the biggest climate stories of the next 20
      years.
    </p>
    <div className="about__sentence__logo">
      <ReactSVG src={Logo} />
    </div>
  </div>
);

export default IntroAbout;
