import React from 'react';
import { ReactSVG } from 'react-svg';
import AddLayout from '../../components/AddLayout';

import logo from '../../assets/image/logo.svg';

export default function Integrators() {
  return (
    <AddLayout>
      <section className="add-page">
        <div className="add-page__wrapper">
          <div className="add-page__sentence">
            <p className="bold italic">
              “This link between technology and forestry has always been there, it just happens to
              be exploding at the moment.”
            </p>
            <p>-University of British Columbia forestry professor Dr. Nicholas Coops</p>
          </div>
          <div className="add-page__sentence">
            <p className="bold italic">
              “The business of planting trees is going to be one of the biggest climate stories of
              the next 20 years.”
            </p>
            <p>-Justin Adams, managing director for global lands at The Nature Conservancy</p>
          </div>
          <p className="add-page__text">
            The United Nations’ Decade of Restoration estimates that the emerging reforestation
            sector could command
            {' '}
            <a
              href="https://www.unep.org/news-and-stories/story/countries-commit-restore-global-land-area-size-china?_ga=2.9408821.1854706521.1606574879-1526955355.1606574879"
              target="_blank"
              rel="noopener noreferrer"
            >
              a trillion dollars
            </a>
            {' '}
            over the next 10 years. Current gaps in the industry’s MRV framework -- piecemeal
            project monitoring, inconsistent data reporting methodologies, and disjointed
            verification standards--represent an opportunity for emerging technologies to capitalize
            on this influx of green capital. The Open Reforestation Protocol (ORP) is a solution
            mobilizing green investors, reforestation project operators, and technology providers to
            mount a coordinated defense against anthropogenic climate change.
          </p>
          <p className="add-page__text">
            <span className="bold">Here’s how:</span>
            {' '}
            The ORP acts as a decentralized ledger of
            reforestation data. This means that reforestation projects using the protocol provide
            verifiable and transparent data on the progress of their reforestation projects. The
            data that project operators upload onto the protocol (usually referencing the number of
            trees planted, the status of reforested trees, and any additional GIS data available to
            them) is open sourced for anyone and everyone to view. It can therefore can serve as a
            foundation for a number of integrated technologies. The ORP is capable of software
            integration with other IT systems, managing and integrating GIS data from satellite
            imagery, incorporating drone technology, and hosting AI/IOT software. As such, a
            protocol is not only a solution for solving current problems relating to reforestation,
            it is also a foundation for enhancing future initiatives.
          </p>
          <h3 className="add-page__subtitle">How To Get Involved</h3>
          <p className="add-page__text">
            There are two primary methods for integrating into the protocol. The first is plugging
            in, or adding your technology as an extension of the ORP. Companies taking this route
            can integrate and license their solution directly on the ORP. The other route is running
            your technology as JSON RPC or Rest API. In this method, tech integrators connect their
            API to the ORP, set their own rates, and then run in tandem with the ORP.
          </p>
          <p className="add-page__text">
            The main value proposition for technology integrators is the chance to grow your product
            alongside the global community of reforestation practitioners. The ORP is a flexible
            mechanism limited only by the creative potential of its members. Reforestation will
            become an economic, social, and environmental phenomenon in the coming decade, and the
            technological innovators who fuel this transition will be the biggest benefactors.
          </p>
          <div className="add-page__logo">
            <ReactSVG src={logo} />
          </div>
        </div>
      </section>
    </AddLayout>
  );
}
