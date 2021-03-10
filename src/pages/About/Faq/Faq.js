import React from 'react';

const Faq = ({ refProp }) => (
  <section className="faq" ref={refProp}>
    <div className="faq__wrapper">
      <h2 className="gen-title">FAQ</h2>
      <div className="faq__desc">
        <h4 className="faq__title">What is ORP?</h4>
        <p>
          The Open Reforestation Protocol (ORP) is an open-source digital platform for building,
          coordinating, and certifying carbon sequestration initiatives. ORP connects reforestation
          practitioners with investors, technology integrators, and entrepreneurs in a decentralized
          economy. ORP is the first and only decentralized reforestation marketplace with
          standardized MRV methodologies and the capacity to mint data-backed carbon credits.
        </p>
      </div>
      <div className="faq__desc">
        <h4 className="faq__title">How does ORP work?</h4>
        <p>
          ORP is a technical solution for monitoring, reporting, and verifying reforestation
          projects.
        </p>
        <p>
          When a project launches on ORP, they must source collateral from a group of decentralized
          collateral providers.
        </p>
        <p>
          Only once funding has legitimized a project, is the project allowed to upload data onto
          the protocol.
        </p>
        <p>
          This data is then sent to a decentralized community of validators who stake on the
          validity of that data.
        </p>
        <p>
          Once project data is verified, it is stored on a distributed ledger, disincentivizing bad
          actors from uploading false data (as they are likely to be weeded out by validator audits
          over time).
        </p>
        <p>
          This improved data transparency helps investors make smart decisions regarding which
          projects to put their money behind. It also helps the project operators, who can attract
          investors by proving the integrity of their reforestation efforts. At the international
          level, governments hoping to mitigate climate change can be sure that the trees they hope
          to plant will stay planted. Notably, the blockchain data structure for handling project
          MRV data allows for direct accounting of carbon sequestration, solving long standing
          issues related to improper reporting and double-counting of carbon credits.
        </p>
      </div>
      <div className="faq__desc">
        <h4 className="faq__title">Who is ORP built for?</h4>
        <p>
          ORP is built for anyone who wants to start, invest or be involved in carbon sequestration
          initiatives through the planting of trees (and eventually other nature based sequestration
          initiatives). Individuals or organizations interested in starting reforestation projects
          can use ORP to manage their projects and secure funding from green capital around the
          globe.
        </p>
        <p>
          Investors can easily find and support reforestation projects and by using a stringent MRV
          system they can make sure that the projects are 100% legitimate and all the submitted
          information tracking their progress is correct.
        </p>
        <p>
          Companies who operate with sustainability in mind can sponsor reforestation projects and
          use the minted OCC tokens to offset their carbon footprint.
        </p>
        <p>
          Developers and Entrepreneurs can use the open-source nature of the protocol to create
          innovative solutions for carbon sequestration or the reforestation value chain.
        </p>
        <p>
          Tech providers can find a new market for their solution by integrating their services with
          the protocol (including satellite imagery, AI, drones) as a compliment to existing
          solutions. Last but not least, the general public will be given the opportunity to support
          reforestation projects, support the fight against climate change and make a return on
          investment for the effort.
        </p>
      </div>
      <div className="faq__desc">
        <h4 className="faq__title">How do I get started?</h4>
        <p>
          Project operators who are already running a reforestation project or already possess a
          concrete plan for a future reforestation project, can create an account and download the
          Reforester app. Reforester is a one-stop shop for project operators planting trees to
          quickly and easily upload data about their project, track the status of their project,
          engage with other ecosystem participants like collateral providers and validators, and
          eventually yield Open Carbon Credits (OCC’s).
        </p>
      </div>
      <div className="faq__desc">
        <h4 className="faq__title">Can I Integrate My Technology Into The Protocol?</h4>
        <p>
          Why, yes! As an open-source protocol, ORP can host any technology that assists in the
          completion of carbon sequestration projects, whether that be relating to data management,
          carbon sequestration measurement, or social tech solutions that help facilitate local
          participation in reforestation initiatives. Technology integrators must apply to the ORP
          DAO for their solution to be whitelisted on Reforester. Foreseeable use cases involve
          satellite imagery, tree planting drones, and soil carbon calculators - as well as any
          future developments that might become industry standards.
        </p>
      </div>
      <div className="faq__desc">
        <h4 className="faq__title">What is The ORP Token?</h4>
        <p>
          The ORP token is a utility and governance token on ORP and it exists for three purposes:
          First, ORP’s provides validators with the capacity to verify the veracity of data uploaded
          onto the protocol. Second, ORP tokens are used for governance rights on the ORP DAO.
          Third, ORP token holders participating in the management of the protocol are able to yield
          Open Carbon Credits from reforestation projects using ORP.
        </p>
      </div>
      <div className="faq__desc">
        <h4 className="faq__title">What Are OCCs?</h4>
        <p>
          Open Carbon Credits (OCCs) are data-backed carbon credits sourced from reforestation
          projects on the protocol. Carbon credits are minted in proportion to the data uploaded by
          a project over time. The design of the protocol is such that 5% of every OCC minted is
          distributed out to ORP token holders.
        </p>
      </div>
      <div className="faq__desc">
        <h4 className="faq__title">Why Is ORP Necessary?</h4>
        <p>
          The reforestation industry suffers from a number of efficiency roadblocks. Information is
          siloed between reforestation initiatives, there is a lack of collaborative funding
          mechanisms, MRV methodologies are expensive and inconsistent, and there is a lack of
          standardization among existing carbon credit schemes.
        </p>
      </div>
      <div className="faq__desc">
        <h4 className="faq__title">What is Reforester?</h4>
        <p>
          Reforester is an open-source application used on the Open Reforestation Protocol by
          project operators (OP) for uploading data, and managing reforestation projects over time.
          Reforester is a one-stop shop for project owners planting trees to quickly and easily
          upload data about their project, track the status of their project, and engage with other
          ecosystem participants (i.e. Collateral Providers and Validators). With Reforester new
          projects start by creating an account, connecting funds to a wallet, and minting an NFT.
          Existing and ongoing projects use the same application to track the status of their
          previous data uploads, the amount of collateral locked for upcoming phases, and the status
          of their NFT and any RCC’s generated therein.
        </p>
      </div>
      <div className="faq__desc">
        <h4 className="faq__title">What Do Collateral Providers Do?</h4>
        <p>
          Collateral providers lock up DAI in a smart contract, as collateral vouching for the
          legitimacy of a reforestation project. Based upon the duration of time and stage of the
          project, a collateral provider is able to yield ORP tokens. With these tokens, they have
          access to validation windows, the ORP DAO as well as the capacity to yield carbon credits.
        </p>
      </div>
    </div>
  </section>
);

export default Faq;
