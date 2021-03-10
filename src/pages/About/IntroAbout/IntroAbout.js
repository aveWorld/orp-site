import React from 'react';
import { ReactSVG } from 'react-svg';
import Logo from '../../../assets/image/logo.svg';

const IntroAbout = () => (
  <div className="about__sentence">
    <p className="bold italic">
      "The business of planting trees is going to be one of the biggest climate stories of the next
      20 years."
    </p>
    <p>-According to Justin Adam, managing director for global lands at The Nature Conservancy,</p>
    {/* eslint-disable-next-line react/no-unescaped-entities */}
    <div className="about__desc">
      <ReactSVG src={Logo} />
      <span>is Launching On The Outset of the UN Decade of Ecosystem Restoration.</span>
    </div>
  </div>
);

export default IntroAbout;
