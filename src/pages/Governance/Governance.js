import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../components/Button';

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
        <h2 className="gen-title">
          Governance
        </h2>

        <div className="govern__desc" ref={myRef1}>The ORP ecosystem is an open-source platform governed by a diverse range of stakeholders.  These stakeholders are responsible for verifying data uploaded onto the protocol, providing collateral for new projects on the protocol, and for designating rules and mechanics within the ecosystem.</div>
        <div className="govern__wrapper-btn">
          <Button label="Governance Forum" customClass="gov" handleClick={() => {}} />
        </div>
        <div className="govern__text">
          <h4 className="govern__title">
            ORP Token
          </h4>
          <div className="govern__desc">
            The ORP token is a utility and governance token on the ORP protocol and it exists for three purposes: it gives you access to verifying the veracity of data uploaded onto the protocol, governance rights, and carbon credits.
          </div>
        </div>
        <div className="govern__text">
          <h4 className="govern__title">Open Carbon Credits (OCCs)</h4>
          <div className="govern__desc">
            Open Carbon credits are data-backed carbon credits sourced from reforestation projects on the protocol.  Carbon credits are minted in proportion to the data uploaded by a project over time.  The design of the protocol is such that 5% of every ORP token minted is distributed out to orp token holders.
          </div>
        </div>
        <div className="govern__text">
          <h4 className="govern__title">ORP DAO</h4>
          <div className="govern__desc">Governance surrounding protocol related metrics on ORP is handled by the ORP DAO.  The ORP DAO is made up of a community of token holders abiding by specified governance  procedures for making decisions related to the needs and growth of the protocol.</div>
        </div>
        <div className="govern__text">
          <h4 className="govern__title">ORP Foundation</h4>
          <div className="govern__desc">
            The Open Reforestation Foundation is a nonprofit entity in charge of managing the growth and progressive decentralization of ORP.  The ORP foundation is responsible for growing the ORP ecosystem to be self-sustaining and autonomously run for the long-term future.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Governance;
