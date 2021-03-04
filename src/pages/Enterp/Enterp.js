import React from 'react';
import VideoSlider from '../../components/VideoSlaer/VideoSlider';

const Enterp = () => (
  <section className="enterp">
    <div className="enterp__wrapper">
      <div className="enterp__first-block">
        <h2 className="gen-title">
          Entrepreneurs
        </h2>
        <div className="enterp__desc">
          ORP provides entrepreneurs with an opportunity to integrate with the restoration economy.  ORP modernizes reforestation by aligning the value chains of project operators with reforestation entrepreneurs.  Developers and founders have the opportunity to build solutions on top reforestation projects, or even integrate with the projects themselves.
        </div>
        <VideoSlider />
      </div>
      <div>
        <h2 className="gen-title">
          Technology Integrators
        </h2>
        <div className="enterp__desc second">
          ORP is a hub for global reforestation initiatives.  As a reforestation technology provider, you have the opportunity to connect with ORP and connect your service to the suite of projects building on ORP.  Technology integrators have the opportunity to improve the veracity of reforestation projects while also reaching the world’s largest audience of reforestation projects.
        </div>
        <VideoSlider />
      </div>
    </div>

  </section>
);

export default Enterp;
