import React, { useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import Logo from '../../assets/image/logo.svg';
import Icon1 from '../../assets/image/icone/OCC.svg';
import Icon2 from '../../assets/image/icone/DAO.svg';
import Icon3 from '../../assets/image/icone/palm-black.svg';

const Governance = () => {
  const location = useLocation();
  const myRef1 = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      block: 'start',
    });
  };
  const navigateToBlock = () => {
    const { state } = location;
    let value;
    if (state) {
      value = state.pathStep;
    }
    if (value) {
      switch (value) {
        case 1: {
          return scrollToRef(myRef1);
        }
        default: {
          return null;
        }
      }
    }
  };

  useEffect(() => {
    navigateToBlock();
  });
  return (
    <div className="govern">
      <div className="govern__wrapper">
        <div className="govern__title">
          <ReactSVG src={Logo} />
          <h2 className="gen-title">Governance</h2>
        </div>
        <div className="govern__desc" ref={myRef1}>
          The ORP ecosystem is an open-source platform governed by a diverse range of stakeholders.
          These stakeholders are responsible for verifying data uploaded onto the protocol,
          providing collateral for new projects on the protocol, and for designating rules and
          mechanics within the ecosystem.
        </div>
        <div className="govern__btn">
          <Link to="/" className="btn inner">
            Governance Forum
          </Link>
        </div>
        <div className="govern__item">
          <div className="govern__item__logo">
            <ReactSVG src={Logo} />
          </div>
          <div className="govern__item__text">
            <h5>ORP Token</h5>
            <p>
              The ORP token is a utility and governance token on the ORP protocol and it exists for
              three purposes: it gives you access to verifying the veracity of data uploaded onto
              the protocol, governance rights, and carbon credits.
            </p>
          </div>
        </div>
        <div className="govern__item">
          <div className="govern__item__logo">
            <ReactSVG src={Icon1} />
          </div>
          <div className="govern__item__text">
            <h5>Open Carbon Credits (OCCs)</h5>
            <p>
              Open Carbon credits are data-backed carbon credits sourced from reforestation projects
              on the protocol. Carbon credits are minted in proportion to the data uploaded by a
              project over time. The design of the protocol is such that 5% of every Open Carbon
              Credit is distributed out to ORP token holders.
            </p>
          </div>
        </div>
        <div className="govern__item">
          <div className="govern__item__logo">
            <ReactSVG src={Logo} />
            <ReactSVG src={Icon2} />
          </div>
          <div className="govern__item__text">
            <h5>ORP DAO</h5>
            <p>
              Governance surrounding protocol related metrics on ORP is handled by the ORP DAO. The
              ORP DAO is made up of a community of token holders abiding by specified governance
              procedures for making decisions related to the needs and growth of the protocol.
            </p>
          </div>
        </div>
        <div className="govern__item">
          <div className="govern__item__logo">
            <ReactSVG src={Icon3} />
          </div>
          <div className="govern__item__text">
            <h5>ORP Foundation</h5>
            <p>
              The Open Reforestation Foundation is a nonprofit entity in charge of managing the
              growth and progressive decentralization of ORP. The ORP foundation is responsible for
              growing the ORP ecosystem to be self-sustaining and autonomously run for the long-term
              future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Governance;
