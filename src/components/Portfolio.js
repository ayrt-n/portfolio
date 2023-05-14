import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Project from './portfolio/Project';
import ProjectText from './portfolio/ProjectText';
import ProjectPreview from './portfolio/ProjectPreview';

function Portfolio() {
  return (
    <div>
      <div className="mb-8">
        <MarkdownHeader headingLevel="1" text="Personal Projects" className="text-5xl" />
        <LineBreak />
        <p>
          Below is a selection of some recent and larger projects that I have worked on. For more detail on everything that I have done, as well as what I am currently working on, check out my GitHub at <a className="text-blue hover:bg-blue-highlight underline" href="https://github.com/ayrt-n" target="_blank" rel="noreferrer">https://github.com/ayrt-n</a>
        </p>
      </div>

      <Project>
        <ProjectText
          title="Invesddit"
          technologies="Ruby on Rails, React, JavaScript"
          description="A finance related content aggregation and discussion site inspired by Reddit. Replicated core Reddit features (posting, infinitely nested comments, voting system, sub-communities, and more)."
        />
        <ProjectPreview />
      </Project>

      <Project>
        <ProjectText
          title="Taasskkrr"
          technologies="Ruby on Rails, React, JavaScript"
          description="Developed to-do list web application allowing users to create and keep track of projects using to-do lists, built with JavaScript, HTML, and CSS. The application makes it easy to create, view, update or delete projects and/or associated to-dos."
        />
        <ProjectPreview />
      </Project>

      <Project>
        <ProjectText
          title="Chess"
          technologies="Ruby"
          description="Fully developed game of chess using Ruby, played through the command-line. Number of quality-of-life features implemented, including selecting and viewing all moves, and ability to save/load games."
        />
        <ProjectPreview />
      </Project>
    </div>
  )
}

export default Portfolio;
