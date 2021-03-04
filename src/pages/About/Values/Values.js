import React from 'react';
import { Link } from 'react-router-dom';

const Values = ({ refProp }) => (
  <section className="value">
    <div className="value__wrapper">
      <h2 className="gen-title">
        Values
      </h2>
      <div className="value__desc">
        <p>
          <span>Transparency</span>
          - Transparency is woven into the DNA of ORP, from project monitoring to reforestation data storage. Because reforestation projects are decentralized and visible to all stakeholders—and also the public— ORP ensures that project operators cannot disguise the truth.
        </p>
        <p>
          <span>Inclusivity</span>
          - ORP creates an ecosystem that encourages wide participation by project operators, investors, technology operators and NGOs to work harmoniously on carbon sequestration initiatives. The incentive model of ORP creates synergies between different stakeholders by encouraging collaboration and punishing bad actors.  Pre-existing projects can seamlessly link to the protocol and unlock new value chains, in virtue of its open-source and collaborative design. Each stakeholder has an important role to play, while the incentive structure promotes collaboration and disincentivizes malicious behavior.
        </p>
        <p>
          <span>Longevity </span>
          - Reforestation data is stored on the blockchain forever, and can never be changed or hidden from stakeholders.  Longevity of reforestation project information is particularly important in carbon markets, where accurate and ongoing project monitoring is the foundation of carbon credit value. Furthermore, ORP will provide entire life-cycle monitoring of all projects using the protocol as a means of preventing premature forest destruction.
        </p>
      </div>
      <h2 className="gen-title" ref={refProp}>Documentation</h2>
      <div className="value__docs">
        <Link className="value__doc" />
        <Link className="value__doc" />
        <Link className="value__doc" />
      </div>
    </div>
  </section>
);

export default Values;
