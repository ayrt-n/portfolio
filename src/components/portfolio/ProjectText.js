import React from 'react';
import MarkdownHeader from '../MarkdownHeader';

function ProjectText({ title, technologies, description, githubLink, liveLink }) {
  return (
    <div className="max-w-[400px]">
      <MarkdownHeader headingLevel="2" text={title} className="text-3xl mb-3" />
      <p className="text-comment mb-3">{technologies}</p>
      <p>{description}</p>
    </div>
  );
}

export default ProjectText;
