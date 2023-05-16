import classNames from 'classnames';
import React from 'react';

function Text({ as, className, children }) {
  const TextTag = as || 'p'
  
  const defaultClasses = "break-words"
  const mergedClasses = classNames(defaultClasses, className);

  return (
    <TextTag className={mergedClasses}>
      {children}
    </TextTag>
  );
}

export default Text;
