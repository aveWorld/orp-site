import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import OrpAbout from './OrpAbout';
import Values from './Values';
import Faq from './Faq';
import IntroAbout from './IntroAbout';
import Docs from './Docs';

const About = () => {
  const location = useLocation();
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      block: 'start',
    });
  };
  const navigateToBlock = () => {
    console.log(location.state, 'loc');
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
        case 2: {
          return scrollToRef(myRef2);
        }
        case 3: {
          return scrollToRef(myRef3);
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
    <section className="about">
      <div className="about__wrapper">
        <IntroAbout />
        <OrpAbout refProp={myRef1} />
        <Values refProp={myRef2} />
        <Docs />
        <Faq refProp={myRef3} />
      </div>
    </section>
  );
};

export default About;
