import React from 'react';
import './css/animate.css';

export const AnimateInOut = ({children, classname}) => {
  return (
    <div className={classname}>
      {children}
    </div>
  );
};