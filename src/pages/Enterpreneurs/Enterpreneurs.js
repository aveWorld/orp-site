import React from 'react';
import { ReactSVG } from 'react-svg';
import AddLayout from '../../components/AddLayout';

import logo from '../../assets/image/logo.svg';

export default function Enterpreneurs() {
  return (
    <AddLayout>
      <section className="add-page">
        <div className="add-page__wrapper">
          <div className="add-page__sentence">
            <p className="bold italic">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              "The business of planting trees is going to be one of the biggest climate stories of
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              the next 20 years."
            </p>
            <p>
              -According to Justin Adam, managing director for global lands at The Nature
              Conservancy
            </p>
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
            over the next 10 years. Current gaps in the industry’s MRV framework—piecemeal project
            monitoring, inconsistent data reporting methodologies, and disjointed verification
            standards—represent an opportunity for entrepreneurs to capitalize on this influx in
            green capital. The Open Reforestation Protocol (ORP) is a digital hub that brings
            together reforestation specialists, carbon market traders, investors, and technological
            integrators. The intense global interest in reforestation combined with the novelty of
            this all-inclusive approach leads to an environment rich in commercial opportunity for
            entrepreneurs.
          </p>
          <p className="add-page__text">
            The combined blockchain/greentech ecosystem generates a number of beneficial outputs for
            entrepreneurs:
          </p>
          <p className="add-page__text">
            First, data generated on the protocol is verified and continuously accessible on an
            open- source blockchain. Enterprises dependent on up-to-date reforestation information,
            from seed suppliers to reforestation charities, will benefit from this open, reliable
            data stream.
          </p>
          <p className="add-page__text">
            Another use case for the ORP involves the protocol’s flexible funding mechanisms. On the
            protocol, investors pool collateral in order to support reforestation projects and yield
            ORP tokens. The novel decentralized finance mechanism allows intermediary companies to
            collect money from individuals hoping to invest in sustainable causes and keeping a
            percentage of each transaction.
          </p>
          <p className="add-page__text">
            The third and by no means final use case of the ORP involves the minting and trading of
            data-backed carbon credits. ORP automatically mints Open Carbon Credits (OCCs) based on
            reforestation data. OCCs are voluntary emissions reductions, and therefore will join a
            carbon market that has been growing at about
            {' '}
            <a
              href="https://www.spglobal.com/platts/en/market-insights/latest-news/coal/092220-voluntary-carbon-market-grows-6-on-year-in-2019-ecosystem-marketplace#:~:text=The%20cumulative%20market%20volume%20in,exceeding%20%245.5%20billion%2C%20it%20said."
              target="_blank"
              rel="noopener noreferrer"
            >
              6% per year
            </a>
            {' '}
            as of 2019. OCCs are based on immutable blockchain data and do not depend on a
            centralized authority to represent their value. Furthermore, OCCs are “burned” when
            used, thereby solving the trenchant problem of double-counting that has been plaguing
            the international carbon market. Businesses hoping to capitalize on the explosive growth
            of carbon trading will use the ORP to procure the world’s most reliable carbon credits.
          </p>
          <p className="add-page__text">
            The main value proposition for entrepreneurs is the chance to grow your product
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
