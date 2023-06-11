import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Text from './Text';
import Section from './Section';
import Link from './Link';
import Project from './portfolio/Project';
import ProjectText from './portfolio/ProjectText';
import ProjectPreview from './portfolio/ProjectPreview';
import invesdditPrev from '../assets/images/portfolio/invesddit-1.png';
import taasskkrrPrev from '../assets/images/portfolio/taasskkrr-1.png';
import inventoryPrev from '../assets/images/portfolio/inventory-tracker-1.png';
import chessPrev from '../assets/images/portfolio/chess-1.png';

function Portfolio() {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel="1" text="Personal Projects" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>
          Below is a selection of some recent and larger projects that I have worked on. For more detail on everything that I have done, as well as what I am currently working on, check out my GitHub at <Link targetBlank href="https://github.com/ayrt-n">https://github.com/ayrt-n</Link>
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
          <ProjectPreview src={invesdditPrev} alt="screenshot of invesddit homepage" />
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
          <ProjectPreview src={taasskkrrPrev} alt="screenshot of taasskkrr homepage" />
        </Project>
      </Section>

      <Section>
        <Project>
          <ProjectText
            title="Inventory Tracker"
            technologies="Ruby on Rails, JavaScript"
            description="Full stack inventory tracking and management web application. Application allows users to create, update, and delete inventory and shipments to easily track outstanding shipments and remaining inventory."
            githubLink="https://github.com/ayrt-n/inventory-tracking-web-app"
          />
          <ProjectPreview src={inventoryPrev} alt="screenshot of inventory tracker web application" />
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
          <ProjectPreview src={chessPrev} alt="screenshot of game of chess being played in command line" />
        </Project>
      </Section>
    </div>
  )
}

export default Portfolio;
