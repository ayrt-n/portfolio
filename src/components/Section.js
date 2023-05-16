import React from 'react';
import classNames from 'classnames';

function Section({ className, children }) {
  const defaultClasses = "space-y-3 mb-8"
  const mergedClasses = classNames(defaultClasses, className);

  return (
    <div className={mergedClasses}>
      {children}
    </div>
  );
}

export default Section;
