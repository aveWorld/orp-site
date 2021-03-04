// @flow
import * as React from 'react';

type Props = {
    type?: string,
    label: string,
    customClass: string,
    handleClick: Function,
}

const Button = (props: Props) => {
  const { style, label, handleClick, customClass } = props;
  const cssClass = `btn ${style} ${customClass}`;
  return (
    <button
      type="submit"
      className={cssClass}
      onClick={(e) => handleClick(e)}
    >
      {label}
    </button>
  );
};

export default Button;
