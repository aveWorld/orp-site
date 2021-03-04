import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import Button from '../../components/Button';
import schem from '../../assets/image/schem.png';
import logo from '../../assets/image/logo.svg';
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

  return (
    <section className="homepage">
      <div className="homepage__wraper container-block">
        <div className="homepage__first-block">
          <div className="homepage__logo">
            <ReactSVG src={logo} />
          </div>
          <h2 className="gen-title">
            The Open Reforestation Protocol
          </h2>
          <div className="homepage__desc">
            A Cloud Platform for Transparent MRV and Data-backed carbon credits

          </div>
          <div className="homepage__wrapper-panel">
            <div className="homepage__wrapper-btn"><Button label="Use ORP" customClass="inner" handleClick={() => setIsShow(!isShow)} /></div>
            <div className="homepage__wrapper-btn"><Button label="Documentation" customClass="inner" handleClick={() => clickToRoute('/about', 2)} /></div>
            <div className="homepage__wrapper-btn"><Button label="FAQ" customClass="inner" handleClick={() => clickToRoute('/about', 3)} /></div>
            {isShow && (
            <Modal
              label='App Coming Soon- Inquiries can be sent to <a href="mailto:m@openreforestation.org">m@openreforestation.org</a>'
              close={() => setIsShow(!isShow)}
            />
            )}
          </div>
        </div>
        <div className="homepage__second-block">
          <h3 className="homepage__sub-title">Collaborative verification for any reforestation project</h3>
          <div className="homepage__desc">
            The Open Reforestation Protocol (ORP) provides an open and accessible platform for monitoring, verifying, and reporting the entire lifecycle of a reforestation project.
          </div>

          <div className="homepage__schem">
            <img src={schem} alt="schem" />
          </div>
        </div>
        <div className="homepage__third-block">
          <h3 className="homepage__sub-title">Digital Management for the Future of Reforestation</h3>
          <div className="homepage__wrap-desc">
            <div className="homepage__desc">
              With ORP, honest reporting and accurate monitoring brings accountability and transparency to the tree planting process.
            </div>
          </div>
          <div className="homepage__tech">
            <Link className="homepage__tech-anchor">
              <span className="gen">Collateral Zone</span>
              <span className="inner">
                Back Projects
                and Yield ORP.
              </span>
            </Link>
            <Link className="homepage__tech-anchor">
              <span className="gen">Reforester</span>
              <span className="inner">
                Open source
                dashboard for
                uploading project
                data.
              </span>
            </Link>
            <Link className="homepage__tech-anchor">
              <span
                className="gen"
              >
                Validator Area
              </span>
              <span className="inner">
                Verify and challenge
                data to earn
                network fees.
              </span>
            </Link>
            <Link className="homepage__tech-anchor">
              <span className="gen">Project Explorer</span>
              <span className="inner">
                Track all projects
                across the globe.
              </span>
            </Link>
          </div>
        </div>
        <div className="homepage__four-block">
          <h3 className="homepage__sub-title">Jumpstarting Climate Tech 2.0</h3>
          <div className="homepage__climate">
            <Link className="homepage__climate-item"><span className="gen">Jumpstarting the Reforestation Economy</span></Link>
            <Link className="homepage__climate-item">
              <span className="gen">
                Technology Integrators
              </span>
              <span className="inner">
                Integrate your reforestation
                technology on the protocol
              </span>
            </Link>
            <Link className="homepage__climate-item">
              <span className="gen">Green Software Products </span>
              <span className="inner">Already supporting reforestation? Connect with a project!</span>
            </Link>
            <Link className="homepage__climate-item">
              <span className="gen">SDKs and APIs</span>
            </Link>
          </div>

        </div>
        <div className="homepage__five-block">
          <h3 className="homepage__sub-title">A global ecosystem for a global crisis.</h3>
          <div className="homepage__wrap-desc second">
            <div className="homepage__desc bold">
              The business of planting trees is going to be one of the biggest climate stories of the next 20 years.
            </div>
            <div className="homepage__desc italic"> Justin Adam, managing director for global lands at The Nature Conservancy</div>
          </div>
          <div className="homepage__eco">
            <Link className="homepage__eco-item"><span>Discord</span></Link>
            <Link className="homepage__eco-item">
              <span>Twitter</span>
            </Link>
            <Link
              className="homepage__eco-item"
            >
              <span>Clubhouse</span>
            </Link>
            <Link className="homepage__eco-item">
              <span>Reddit</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomePage;