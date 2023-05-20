import classNames from 'classnames';
import React from 'react';

function MarkdownLink({ children, className, ...props }) {
  const defaultClasses = "underline text-blue hover:bg-blue-highlight outline-none focus:bg-blue-highlight";
  const mergedClasses = classNames(defaultClasses, className);

  return (
    <a className={mergedClasses} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  );
}

export default MarkdownLink;
