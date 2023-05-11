import React from 'react';
import FileIcon from './FileIcon';

function File({ name, extension }) {
  return (
    <div className="flex align-center text-base">
      <FileIcon fileType={extension} />
      {name}.{extension}
    </div>
  );
}

export default File;
