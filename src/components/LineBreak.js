import React from 'react';
import classNames from 'classnames';

function LineBreak({ className }) {
  const defaultClasses = "border-dark-200 my-3"
  const mergedClasses = classNames(defaultClasses, className);
  
  return (
    <hr className={mergedClasses} />
  )
}

export default LineBreak;
