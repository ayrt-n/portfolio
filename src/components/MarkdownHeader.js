import React from 'react';
import classNames from 'classnames';

function MarkdownHeader({ headingLevel, className, text }) {
  const Tag = `h${headingLevel}`;

  const defaultClasses = "text-purple";
  const mergedClasses = classNames(defaultClasses, className);

  return (
    <Tag className={mergedClasses}>
      {`${"#".repeat(headingLevel)} ${text}`}
    </Tag>
  );
}

export default MarkdownHeader;
