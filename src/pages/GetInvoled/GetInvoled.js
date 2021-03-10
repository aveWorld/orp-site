import React from 'react';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

import logo from '../../assets/image/logo.svg';
import Docs from '../../assets/image/icone/docs.svg';
import Screen from '../../assets/image/icone/screen.svg';

const GetInvoled = () => (
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
          <Link className="btn inner involved__btn" to="project-operators">
            Project Operators
          </Link>
          <Link className="btn inner involved__btn" to="enterpreneurs">
            Entrepreneurs
          </Link>
          <Link className="btn inner involved__btn" to="tech-integrators">
            Tech Integrators
          </Link>
          <Link className="btn inner involved__btn" to="investors">
            Investors
          </Link>
        </div>
        <div className="involved__block">
          <h3 className="involved__block__title">Project Operators</h3>
          <p className="involved__block__text">
            The Open Reforestation Protocol (ORP) is a solution for project operators hoping to
            digitize their reforestation efforts. The blockchain basis of the ORP introduces a novel
            collaborative funding mechanism for reforestation, allowing project owners to secure
            capital from diverse sources and meet funding goals more rapidly. ORP builds trust in
            reforestation projects, attracting more investment and leading to more trees being
            planted around the world.
          </p>
          <Button label="Use ORP" customClass="" handleClick={() => {}} />
          <div className="involved__docs">
            <Link className="involved__doc">
              <ReactSVG src={Docs} />
              <span className="involved__doc__text">One Pager</span>
            </Link>
            <Link className="involved__doc">
              <ReactSVG src={Screen} />
              <span className="involved__doc__text">Slide Deck</span>
            </Link>
          </div>
        </div>
        <div className="involved__block">
          <h3 className="involved__block__title">Entrepreneurs</h3>
          <p className="involved__block__text">
            ORP provides entrepreneurs with an opportunity to integrate with the restoration
            economy. The protocol’s modernized reforestation system aligns the value chains of
            project operators with reforestation entrepreneurs. Developers and founders have the
            opportunity to build solutions on top of reforestation projects, or even integrate with
            the projects themselves.
          </p>
          <div className="involved__docs">
            <Link className="involved__doc">
              <ReactSVG src={Docs} />
              <span className="involved__doc__text">One Pager</span>
            </Link>
            <Link className="involved__doc">
              <ReactSVG src={Screen} />
              <span className="involved__doc__text">Slide Deck</span>
            </Link>
          </div>
        </div>
        <div className="involved__block">
          <h3 className="involved__block__title">Technology Integrators</h3>
          <p className="involved__block__text">
            ORP is a hub for global reforestation initiatives. As a reforestation technology
            provider, you have the opportunity to connect with ORP and connect your service to the
            suite of projects building on ORP. Technology integrators have the opportunity to
            improve the veracity of reforestation projects while also reaching the world’s largest
            audience of reforestation projects.
          </p>
          <div className="involved__docs">
            <Link className="involved__doc">
              <ReactSVG src={Docs} />
              <span className="involved__doc__text">One Pager</span>
            </Link>
            <Link className="involved__doc">
              <ReactSVG src={Screen} />
              <span className="involved__doc__text">Slide Deck</span>
            </Link>
          </div>
        </div>
        <div className="involved__block">
          <h3 className="involved__block__title">Investors</h3>
          <p className="involved__block__text">
            Restoring degraded and deforested lands is not only a boon for the environment but a
            lucrative opportunity for investors looking to make a difference in the world. ORP
            offers investors a unique window of opportunity to participate in an industry whose
            success would mitigate the severity of the climate crisis, improve the livelihoods of
            global communities, and create huge returns for early backers.
          </p>
          <div className="involved__docs">
            <Link className="involved__doc">
              <ReactSVG src={Docs} />
              <span className="involved__doc__text">One Pager</span>
            </Link>
            <Link className="involved__doc">
              <ReactSVG src={Screen} />
              <span className="involved__doc__text">Slide Deck</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GetInvoled;
