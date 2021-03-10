import React from 'react';
import { ReactSVG } from 'react-svg';
import AddLayout from '../../components/AddLayout';

import logo from '../../assets/image/logo.svg';

export default function Operators() {
  return (
    <AddLayout>
      <section className="add-page">
        <div className="add-page__wrapper">
          <p className="add-page__text">
            Reforestation project operators that can prove the authenticity of their projects are
            able to raise funds for their projects at scale. Meanwhile, projects that cannot
            guarantee their methods of measuring, reporting, and verification (MRV), and by
            extension that trees have been planted and are continuously growing, have a much more
            difficult time convincing funders to put forward capital.
          </p>
          <p className="add-page__text">
            The Open Reforestation Protocol (ORP) is a solution for project operators hoping to
            digitize their reforestation efforts. ORP is a blockchain-based market that connects
            investors with reforestation practitioners in a trustless, decentralized manner. ORP
            standardizes MRV processes and hashes that data onto a blockchain. This breakthrough
            will weed out bad actors in the reforestation community, and give good faith
            reforestation projects a leg up on illegitimate competitors. The blockchain basis of ORP
            introduces a novel collaborative funding mechanism for reforestation, allowing project
            owners to secure capital from diverse sources and meet funding goals more rapidly.
          </p>
          <p className="add-page__text">
            Before project operators can upload data on the protocol, they must submit a funding
            request through the Reforester application. Their request will instantly go live on the
            protocol, to be considered by investors looking to lock up collateral in reforestation
            projects. Once the funding threshold is met, project owners establish their own NFT,
            where they will store their project data for the duration of their project and beyond.
            The NFT stores information about project ownership, tree data, and Open Carbon Credits
            (OCCs), which are automatically generated in proportion to carbon sequestered.
          </p>
          <p className="add-page__text">
            The real magic of ORP is the validation process. Reforestation data is sent to a
            community of validators who confirm or challenge the validity of each submission. This
            process is based on a simple crypto-economic model in which parties stake ORP tokens in
            support of their position, and tokens are awarded based on the outcome of the validation
            process . If the data is verified, reforestation data is hashed onto an immutable,
            tamper-proof ledger, thereby providing a record that is universally available and
            permanently backed-up. This data is then used to mint OCCs, prove legitimacy to
            potential investors, and ensure the continued growth of reforested trees.
          </p>
          <p className="add-page__text">
            ORP is a boon for project operators for three main reasons: proving the authenticity of
            their MRV data, meeting funding goals more quickly from a diversity of funding sources,
            and minting data-backed carbon credits which can be traded on an open market. All
            together, ORP builds trust in reforestation projects, attracting more investment and
            leading to more trees being planted around the world.
          </p>
          <div className="add-page__logo">
            <ReactSVG src={logo} />
          </div>
        </div>
      </section>
    </AddLayout>
  );
}
