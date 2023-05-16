import classNames from 'classnames';
import React from 'react';
import Text from './Text';

function Comment({ className, children, ...props }) {
  const mergedClasses = classNames("text-comment", className);

  return (
    <Text className={mergedClasses} {...props}>
      {children}
    </Text>
  );
}

export default Comment;
