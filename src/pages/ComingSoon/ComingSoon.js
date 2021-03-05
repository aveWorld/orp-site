import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';

const ComingSoon = () => {
  const history = useHistory();

  return (
    <section className="soon">
      <div className="soon__wrapper">
        <h2 className="gen-title">
          Coming Soon
        </h2>
        <div className="soon__wrapper-btn">
          <Button label="Back" customClass="" handleClick={() => history.push('/')} />
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
