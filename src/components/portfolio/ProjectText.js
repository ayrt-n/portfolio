import React from 'react';
import MarkdownHeader from '../MarkdownHeader';
import Section from '../Section';
import Comment from '../Comment';
import Text from '../Text';

function ProjectText({ title, technologies, description, githubLink, liveLink }) {
  return (
    <Section className="max-w-[400px]">
      <MarkdownHeader headingLevel="2" text={title} className="text-xl md:text-3xl mb-3" />
      <Comment>{technologies}</Comment>
      <Text>{description}</Text>
      <div className="flex">
        {githubLink && <a href={githubLink} target="_blank" rel="noreferrer" className="text-green hover:bg-green-highlight font-bold mr-4">[GitHub]</a>}
        {liveLink && <a href={liveLink} target="_blank" rel="noreferrer" className="text-green hover:bg-green-highlight font-bold">[Live Preview]</a>}
      </div>
    </Section>
  );
}

export default ProjectText;
