import React from 'react';

function ProjectPreview({ src, alt, ...props }) {
  return (
    <img className="max-w-[450px] w-full h-auto max-h-[50%] rounded shadow-project" src={src} alt={alt} {...props} />
  );
}

export default ProjectPreview;
