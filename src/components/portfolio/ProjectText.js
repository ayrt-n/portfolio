import React from 'react';
import MarkdownHeader from '../MarkdownHeader';

function ProjectText({ title, technologies, description, githubLink, liveLink }) {
  return (
    <div className="max-w-[400px]">
      <MarkdownHeader headingLevel="2" text={title} className="text-3xl mb-3" />
      <p className="text-comment mb-3">{technologies}</p>
      <p className="mb-3">{description}</p>
      <div className="flex">
        {githubLink && <a href={githubLink} target="_blank" rel="noreferrer" className="text-green hover:bg-green-highlight font-bold mr-4">[GitHub]</a>}
        {liveLink && <a href={liveLink} target="_blank" rel="noreferrer" className="text-green hover:bg-green-highlight font-bold">[Live Preview]</a>}
      </div>
    </div>
  );
}

export default ProjectText;
