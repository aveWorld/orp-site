import React from 'react';
import { ReactSVG } from 'react-svg';
import Logo from '../../../assets/image/logo.svg';

const Values = () => (
  <section className="value">
    <div className="value__title">
      <ReactSVG src={Logo} />
      <h3 className="gen-title">Values</h3>
    </div>
    <div className="value__block">
      <div className="value__block__title">
        <div className="value__block__title__text">TRANSPARENCY</div>
        <div className="value__block__title__text">INCLUSIVITY</div>
        <div className="value__block__title__text">LONGEVITY</div>
      </div>
      <div className="value__block__line" />
      <div className="value__block__body">
        <p className="value__block__body__text">
          <span>TRANSPARENCY</span>
          {' '}
          is woven into the DNA of ORP, from project monitoring to
          reforestation data storage. Because reforestation projects are decentralized and visible
          to all stakeholders—and also the public— ORP ensures that project operators cannot
          disguise the truth.
        </p>
        <p className="value__block__body__text">
          ORP creates an
          {' '}
          <span>INCLUSIVE</span>
          {' '}
          ecosystem that encourages wide participation by
          project operators, investors, technology operators and NGOs to work harmoniously on carbon
          sequestration initiatives. The incentive model of ORP creates synergies between different
          stakeholders by encouraging collaboration and punishing bad actors. Pre-existing projects
          can seamlessly link to the protocol and unlock new value chains, in virtue of its
          open-source and collaborative design. Each stakeholder has an important role to play,
          while the incentive structure promotes collaboration and disincentivizes malicious
          behavior.
        </p>
        <p className="value__block__body__text">
          <span>LONGEVITY</span>
          {' '}
          of reforestation project information is particularly important in
          carbon markets, where accurate and ongoing project monitoring is the foundation of carbon
          credit value. Reforestation data is stored on the blockchain forever, and can never be
          changed or hidden from stakeholders. Furthermore, ORP will provide entire life-cycle
          monitoring of all projects using the protocol as a means of preventing premature forest
          destruction.
          {' '}
        </p>
      </div>
    </div>
  </section>
);

export default Values;
