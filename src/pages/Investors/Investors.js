import React from 'react';
import { ReactSVG } from 'react-svg';
import AddLayout from '../../components/AddLayout';

import logo from '../../assets/image/logo.svg';

export default function Investors() {
  return (
    <AddLayout>
      <section className="add-page">
        <div className="add-page__wrapper">
          <div className="add-page__sentence">
            <p className="bold italic">
              “The long-term growth outlook is positive as technology lowers the costs of tree-
              planting, consumers reward companies who restore forests, governments make large
              commitments to rehabilitate their land, and business model innovation continues. The
              confluence of these factors signals that now’s the time to invest in restoration.”
            </p>
            <p>-Sofia Faruqi, Manager at World Resources Institute</p>
          </div>
          <p className="add-page__text">
            Restoring degraded and deforested lands is not only a boon for the environment but a
            lucrative opportunity for investors looking to make a difference in the world. At
            present, there are roughly{' '}
            <a
              href="https://www.unep.org/news-and-stories/story/countries-commit-restore-global-land-area-size-china"
              target="_blank"
              rel="noopener noreferrer"
            >
              1 billion hectares
            </a>{' '}
            of land earmarked for restoration by the international community. Reforestation derives
            much of its value from the creation of carbon credits, the demand for which is
            increasing dramatically.{' '}
            <a
              href="https://www.mckinsey.com/business-functions/sustainability/our-insights/a-blueprint-for-scaling-voluntary-carbon-markets-to-meet-the-climate-challenge"
              target="_blank"
              rel="noopener noreferrer"
            >
              McKinsey & Company
            </a>{' '}
            estimate that demand for carbon credits could increase by a factor of 15 or more (to $50
            billion) by 2030.
          </p>
          <p className="add-page__text">
            ORP is a digital marketplace that connects investors with reforestation practitioners in
            a trustless, decentralized community. ORP stores reforestation data on a blockchain,
            where it is permanently stored for validation. By allowing validators to access a
            project’s entire lifespan of reforestation data, ORP offers unprecedented transparency
            and trust to investors hoping to identify legitimate projects. By integrating a unique,
            blockchain-based monitoring, reporting, and verification (MRV) mechanism, ORP is solving
            a major roadblock for the reforestation industry, and in doing so, paving the way for
            the minting of the world’s first data-backed carbon credits.
          </p>
          <p className="add-page__text">
            Investors join the protocol as validators through the acquisition of ORP tokens. The
            responsibilities of validators begin when projects send over their project data along
            with a data upload fee. The data upload includes project information from their latest
            round of tree planting: how many trees are planted, how many survived from last round,
            that kind of thing. Validators then vote on the integrity of the data uploaded. They are
            incentivized to determine whether or not this data is accurate, since the data upload
            fee gets distributed among the validators who voted correctly, as determined by the
            rules set by the ORP DAO. Validation rewards are awarded based on the number of ORP
            tokens held by each validator, so early investors will reap a bigger reward.
          </p>
          <p className="add-page__text">
            Investors have a unique window of opportunity to participate in an industry whose
            success would mitigate the severity of the climate crisis, improve the livelihoods of
            global communities, and create huge returns for early backers. Through this lens, it is
            clear to see that reforestation is the ultimate 21st century investment.
          </p>
          <div className="add-page__logo">
            <ReactSVG src={logo} />
          </div>
        </div>
      </section>
    </AddLayout>
  );
}
