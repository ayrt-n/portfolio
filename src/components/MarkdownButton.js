import classNames from 'classnames';
import React from 'react';

function MarkdownButton({ as, children, className, ...props }) {
  const ButtonTag = as || 'button';

  const defaultClasses = 'font-bold text-green hover:bg-green-highlight';
  const mergedClasses = classNames(defaultClasses, className);

  return (
    <ButtonTag className={mergedClasses} {...props}>
      {children}
    </ButtonTag>
  );
}

export default MarkdownButton;
