import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import Button from '../../components/Button';

import logo from '../../assets/image/logo.svg';
import Satelite from '../../assets/image/icone/satelite.svg';
import ConnDots from '../../assets/image/icone/connDots.svg';
import Palm from '../../assets/image/icone/Palm.svg';

// 1 Pagers
import pager2 from '../../assets/pdfs/Entrepreneurs 1P.pdf';
import pager4 from '../../assets/pdfs/Investors 1P.pdf';
import pager1 from '../../assets/pdfs/Project Operators 1P.pdf';
import pager3 from '../../assets/pdfs/Tech Integrators 1P.pdf';

// Slides
import slide2 from '../../assets/pdfs/Entrepreneurs FINAL.pdf';
import slide4 from '../../assets/pdfs/Investors FINAL.pdf';
import slide1 from '../../assets/pdfs/Project Operators FINAL.pdf';
import slide3 from '../../assets/pdfs/Technology Integrators FINAL.pdf';
import Modal from '../../components/Modall';

const GetInvoled = () => {
  const [isShow, setIsShow] = useState(false);
  const togglePopup = () => {
    document.body.classList.toggle('hideScroll');
    setIsShow(!isShow);
  };
  return (
    <section className="involved">
      <div className="involved__wrapper">
        <div className="involved__first-block">
          <div className="involved__first-block__title">
            <div className="involved__logo">
              <ReactSVG src={logo} />
            </div>
            <h2 className="involved__title">Get Involved</h2>
          </div>
          <div className="involved__first-block__links">
            <a className="btn inner involved__btn" href="#operators">
              Project Operators
            </a>
            <a className="btn inner involved__btn" href="#entrepreneurs">
              Entrepreneurs
            </a>
            <a className="btn inner involved__btn" href="#integrators">
              Tech Integrators
            </a>
            <a className="btn inner involved__btn" href="#investors">
              Investors
            </a>
          </div>
          <div className="involved__block" id="operators">
            <div className="involved__block__title">
              <div className="involved__block__title__logo">
                <ReactSVG src={Palm} />
              </div>
              <h3 className="involved__block__title__text">Project Operators</h3>
              <Button
                label="Use ORP"
                customClass="inner involved__block__btn"
                handleClick={() => { togglePopup(); }}
              />
              {isShow && (
              <Modal
                mainLabel="Coming Soon"
                subLabel="Inquiries can be sent to"
                anchor={{
                  href: 'mailto:m@openreforestation.org',
                  label: 'm@openreforestation.org',
                }}
                close={() => togglePopup()}
              />
              )}
            </div>
            <p className="involved__block__text">
              The Open Reforestation Protocol (ORP) is a solution for project operators hoping to
              digitize their reforestation efforts. The blockchain basis of the ORP introduces a novel
              collaborative funding mechanism for reforestation, allowing project owners to secure
              capital from diverse sources and meet funding goals more rapidly. ORP builds trust in
              reforestation projects, attracting more investment and leading to more trees being
              planted around the world.
            </p>
            <div className="involved__pdf">
              <span>PDFs: </span>
              <a className="btn inner" href={pager1} target="_blank" rel="noopener noreferrer">
                1 Pager
              </a>
              <a className="btn inner" href={slide1} target="_blank" rel="noopener noreferrer">
                Slides
              </a>
            </div>
          </div>
          <div className="involved__block" id="entrepreneurs">
            <div className="involved__block__title">
              <div className="involved__block__title__logo">
                <ReactSVG src={ConnDots} />
              </div>
              <h3 className="involved__block__title__text">Entrepreneurs</h3>
            </div>
            <p className="involved__block__text">
              ORP provides entrepreneurs with an opportunity to integrate with the restoration
              economy. The protocol’s modernized reforestation system aligns the value chains of
              project operators with reforestation entrepreneurs. Developers and founders have the
              opportunity to build solutions on top of reforestation projects, or even integrate with
              the projects themselves.
            </p>
            <div className="involved__pdf">
              <span>PDFs: </span>
              <a className="btn inner" href={pager2} target="_blank" rel="noopener noreferrer">
                1 Pager
              </a>
              <a className="btn inner" href={slide2} target="_blank" rel="noopener noreferrer">
                Slides
              </a>
            </div>
          </div>
          <div className="involved__block" id="integrators">
            <div className="involved__block__title">
              <div className="involved__block__title__logo">
                <ReactSVG src={Satelite} />
              </div>
              <h3 className="involved__block__title__text">Technology Integrators</h3>
            </div>
            <p className="involved__block__text">
              ORP is a hub for global reforestation initiatives. As a reforestation technology
              provider, you have the opportunity to connect with ORP and connect your service to the
              suite of projects building on the protocol. Technology integrators have the opportunity
              to improve the veracity of reforestation projects while also reaching the world’s
              largest audience of reforestation projects.
            </p>
            <div className="involved__pdf">
              <span>PDFs: </span>
              <a className="btn inner" href={pager3} target="_blank" rel="noopener noreferrer">
                1 Pager
              </a>
              <a className="btn inner" href={slide3} target="_blank" rel="noopener noreferrer">
                Slides
              </a>
            </div>
          </div>
          <div className="involved__block" id="investors">
            <div className="involved__block__title">
              <div className="involved__block__title__logo">
                <ReactSVG src={Satelite} />
              </div>
              <h3 className="involved__block__title__text">Investors</h3>
            </div>
            <p className="involved__block__text">
              Restoring degraded and deforested lands is not only a boon for the environment but a
              lucrative opportunity for investors looking to make a difference in the world. ORP
              offers investors a unique window of opportunity to participate in an industry whose
              success would mitigate the severity of the climate crisis, improve the livelihoods of
              global communities, and create huge returns for early backers.
            </p>
            <div className="involved__pdf">
              <span>PDFs: </span>
              <a className="btn inner" href={pager4} target="_blank" rel="noopener noreferrer">
                1 Pager
              </a>
              <a className="btn inner" href={slide4} target="_blank" rel="noopener noreferrer">
                Slides
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvoled;
