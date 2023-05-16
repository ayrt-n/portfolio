import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Text from './Text';
import Section from './Section';
import Project from './portfolio/Project';
import ProjectText from './portfolio/ProjectText';
import ProjectPreview from './portfolio/ProjectPreview';

function Portfolio() {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel="1" text="Personal Projects" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>
          Below is a selection of some recent and larger projects that I have worked on. For more detail on everything that I have done, as well as what I am currently working on, check out my GitHub at <a className="text-blue hover:bg-blue-highlight underline" href="https://github.com/ayrt-n" target="_blank" rel="noreferrer">https://github.com/ayrt-n</a>
        </Text>
      </Section>

      <Section>
        <Project>
          <ProjectText
            title="Invesddit"
            technologies="Ruby on Rails, React, JavaScript"
            description="A finance related content aggregation and discussion site inspired by Reddit. Replicated core Reddit features (posting, infinitely nested comments, voting system, sub-communities, and more)."
            githubLink="https://github.com/ayrt-n/invesddit"
            liveLink="https://ayrt-n.github.io/invesddit/"
          />
          <ProjectPreview />
        </Project>
      </Section>

      <Section>
        <Project>
          <ProjectText
            title="Taasskkrr"
            technologies="Ruby on Rails, React, JavaScript"
            description="Developed to-do list web application allowing users to create and keep track of projects using to-do lists, built with JavaScript, HTML, and CSS. The application makes it easy to create, view, update or delete projects and/or associated to-dos."
            githubLink="https://github.com/ayrt-n/taasskkrr"
            liveLink="https://ayrt-n.github.io/taasskkrr"
          />
          <ProjectPreview />
        </Project>
      </Section>

      <Section>
        <Project>
          <ProjectText
            title="Inventory Tracker"
            technologies="Ruby on Rails, React, JavaScript"
            description="Full stack inventory tracking and management web application. Application allows users to create, update, and delete inventory and shipments to easily track outstanding shipments and remaining inventory."
            githubLink="https://github.com/ayrt-n/inventory-tracking-web-app"
          />
          <ProjectPreview />
        </Project>
      </Section>

      <Section>
        <Project>
          <ProjectText
            title="Chess"
            technologies="Ruby"
            description="Fully developed game of chess using Ruby, played through the command-line. Number of quality-of-life features implemented, including selecting and viewing all moves, and ability to save/load games."
            githubLink="https://github.com/ayrt-n/ruby-chess"
          />
          <ProjectPreview />
        </Project>
      </Section>
    </div>
  )
}

export default Portfolio;
