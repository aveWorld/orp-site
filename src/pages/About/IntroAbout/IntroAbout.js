import React from 'react';

const IntroAbout = () => (
  <div className="about__sentence">
    <p>
      According to Justin Adam, managing director for global lands at The Nature Conservancy,
    </p>
    {/* eslint-disable-next-line react/no-unescaped-entities */}
    <p className="bold italic">"The business of planting trees is going to be one of the biggest climate stories of the next 20 years."</p>
    <div className="about__desc">
      ORP is Launching On The Outset of the UN Decade of Ecosystem Restoration.
    </div>
  </div>
);

export default IntroAbout;
