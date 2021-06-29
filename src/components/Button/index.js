import React from 'react';

const Button = (props) => {
  return (
    <div
      className={props.className}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Button;
