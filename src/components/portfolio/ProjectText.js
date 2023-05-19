import React from 'react';
import MarkdownHeader from '../MarkdownHeader';
import Section from '../Section';
import Comment from '../Comment';
import Text from '../Text';
import MarkdownButton from '../MarkdownButton';

function ProjectText({ title, technologies, description, githubLink, liveLink }) {
  return (
    <Section className="max-w-[400px]">
      <MarkdownHeader headingLevel="2" text={title} className="text-xl md:text-3xl mb-3" />
      <Comment>{technologies}</Comment>
      <Text>{description}</Text>
      <div className="flex">
        {githubLink &&
          <MarkdownButton as="a" href={githubLink} target="_blank" rel="noreferrer" className="mr-4">
            [GitHub]
          </MarkdownButton>
        }
        {liveLink &&
          <MarkdownButton as="a" href={liveLink} target="_blank" rel="noreferrer">
            [Live Preview]
          </MarkdownButton>
        }
      </div>
    </Section>
  );
}

export default ProjectText;
