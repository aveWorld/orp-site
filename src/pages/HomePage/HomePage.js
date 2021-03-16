import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import Button from '../../components/Button';
import schem from '../../assets/image/schem.svg';
import logo from '../../assets/image/logo.svg';
import icone1 from '../../assets/image/icone/keep.svg';
import icone2 from '../../assets/image/icone/grass.svg';
import icone3 from '../../assets/image/icone/draw.svg';
import icone4 from '../../assets/image/icone/tree.svg';
import trees from '../../assets/image/icone/trees.svg';
import connDots from '../../assets/image/icone/connDots.svg';
import satelite from '../../assets/image/icone/satelite.svg';
import tag from '../../assets/image/icone/tag.svg';

import iconeSocial1 from '../../assets/image/icone/Medium.svg';
import iconeSocial2 from '../../assets/image/icone/twitersoc.svg';
import iconeSocial3 from '../../assets/image/icone/Instagram.svg';
import iconeSocial4 from '../../assets/image/icone/reditsoc.svg';
import Modal from '../../components/Modall';

const HomePage = () => {
  const [isShow, setIsShow] = useState(false);
  const history = useHistory();
  const clickToRoute = (path, step) => {
    history.push({
      pathname: path,
      state: { pathStep: step },
    });
  };

  const togglePopup = () => {
    document.body.classList.toggle('hideScroll');
    setIsShow(!isShow);
  };

  return (
    <section className="homepage">
      <div className="homepage__wraper container-block">
        <div className="homepage__first-block">
          <div className="homepage__logo">
            <ReactSVG src={logo} />
          </div>
          <h2 className="gen-title">The Open Reforestation Protocol</h2>
          <div className="homepage__desc">
            A Cloud Platform for Transparent MRV and Data-backed Carbon Credits
          </div>
          <div className="homepage__wrapper-panel">
            <div className="homepage__wrapper-btn">
              <Button label="Use ORP" customClass="inner" handleClick={() => togglePopup()} />
            </div>
            <div className="homepage__wrapper-btn">
              <Button
                label="Documentation"
                customClass="inner"
                handleClick={() => clickToRoute('/about', 2)}
              />
            </div>
            <div className="homepage__wrapper-btn">
              <Button
                label="FAQ"
                customClass="inner"
                handleClick={() => clickToRoute('/about', 3)}
              />
            </div>
            {isShow && (
              <Modal
                label="Coming Soon - Inquiries can be sent to"
                anchor={{ href: 'mailto:m@openreforestation.org', label: 'openreforestation.org' }}
                close={() => togglePopup()}
              />
            )}
          </div>
        </div>
        <div className="homepage__second-block">
          <h3 className="homepage__sub-title">
            Collaborative Verification For Any Reforestation Project
          </h3>
          <div className="homepage__desc">
            The Open Reforestation Protocol (ORP) provides an open and accessible platform for
            monitoring, reporting, and verifying the entire lifecycle of a reforestation project.
          </div>

          <div className="homepage__schem">
            <ReactSVG src={schem} />
          </div>
        </div>
        <div className="homepage__third-block">
          <h3 className="homepage__sub-title">
            Digital Management For The Future of Reforestation
          </h3>
          <div className="homepage__wrap-desc">
            <div className="homepage__desc">
              With ORP, honest reporting and accurate monitoring brings accountability and
              transparency to the tree planting process.
            </div>
          </div>
          <div className="homepage__tech">
            <Link className="homepage__tech-anchor" to="/">
              <span className="gen">Collateral Zone</span>
              <ReactSVG src={icone1} />
              <span className="inner">Back Projects and Yield ORP</span>
            </Link>
            <Link className="homepage__tech-anchor" to="/">
              <span className="gen">Reforester</span>
              <ReactSVG src={icone2} />
              <span className="inner">Open source dashboard for uploading project data</span>
            </Link>
            <Link className="homepage__tech-anchor" to="/">
              <span className="gen">Validator Area</span>
              <ReactSVG src={icone3} />
              <span className="inner">Verify and challenge data to earn network fees</span>
            </Link>
            <Link className="homepage__tech-anchor" to="/">
              <span className="gen">Project Explorer</span>
              <ReactSVG src={icone4} />
              <span className="inner">Track all projects across the globe</span>
            </Link>
          </div>
        </div>
        <div className="homepage__four-block">
          <h3 className="homepage__sub-title">Climate Tech 2.0</h3>
          <div className="homepage__climate">
            <div className="homepage__climate-item" onClick={() => togglePopup()}>
              <ReactSVG src={trees} />
              <span className="gen">Jumpstarting the Reforestation Economy</span>
            </div>
            <div className="homepage__climate-item" onClick={() => togglePopup()}>
              <ReactSVG src={satelite} />
              <span className="gen">Technology Integrators</span>
            </div>
            <div className="homepage__climate-item" onClick={() => togglePopup()}>
              <ReactSVG src={connDots} />
              <span className="gen">Green Software Products </span>
              <span className="inner">
                Already supporting reforestation? Connect with a project!
              </span>
            </div>
            <div className="homepage__climate-item" onClick={() => togglePopup()}>
              <ReactSVG src={tag} />
              <span className="gen">SDKs and APIs</span>
            </div>
          </div>
        </div>
        <div className="homepage__five-block">
          <h3 className="homepage__sub-title">A Global Ecosystem For A Global Crisis</h3>
          <div className="homepage__desc homepage__five-block__desc">
            Keep up with ORP on Social Media
          </div>
          <div className="homepage__eco">
            <a
              className="homepage__eco-item"
              href="https://medium.com/@Openreforestation"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ReactSVG src={iconeSocial1} />
              <span>Blog</span>
            </a>
            <a
              className="homepage__eco-item"
              href="https://twitter.com/ReforestClean"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ReactSVG src={iconeSocial2} />
              <span>Twitter</span>
            </a>
            <a
              className="homepage__eco-item"
              href="https://www.instagram.com/openreforestationprotocol/?igshid=azan2l8q4y6j"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ReactSVG src={iconeSocial3} />

              <span>Instagram</span>
            </a>
            <a
              className="homepage__eco-item"
              href="https://www.reddit.com/r/orp/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ReactSVG src={iconeSocial4} />

              <span>Reddit</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
