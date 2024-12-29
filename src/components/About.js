import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Section from './Section';
import Text from './Text';
import MarkdownButton from './MarkdownButton';
import Comment from './Comment';
import { portfolio, contact } from '../utils/directory'
import TabLink from './TabLink';
import Link from './Link';
import ResumePDF from '../assets/documents/Ayrton_Parkinson_CV.pdf';

function About() {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel="1" text="About" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>Hi! My name is Ayrton Parkinson. I am a full stack software engineer currently working at <Link href="https://fullscript.com/" targetBlank>FullScript</Link> as a backend Ruby developer, helping to build the future of whole person care!</Text>
        <Text>While originally going to school for economics and finance, I started coding as a hobby through 2021 and from that point on, I was hooked. Since then I have been learning and building every opportunity I get. For some examples of recent work, see <TabLink className="font-bold text-yellow" tab={portfolio}>Portfolio.js</TabLink>.</Text>
        <Text>For information on how to reach out, see <TabLink className="font-bold text-yellow" tab={contact}>Contact.md</TabLink>.</Text>
      </Section>

      <Section>
        <MarkdownButton as="a" href={ResumePDF} target="_blank" rel="noreferrer">
          [Download Resume]
        </MarkdownButton>
      </Section>

      <Section>
        <MarkdownHeader headingLevel="2" text="Technologies" className="text-xl md:text-3xl" />
        <LineBreak />
        <Comment>
          While these are some of the languages I am the most comfortable with, I am constantly looking to expand my toolkit and am open to working with and learning new skills!
        </Comment>
        <Text>
          <span className="font-bold text-pink">Languages and Frameworks:</span> Ruby, Ruby on Rails, Python, Java, GraphQL, SQL, React, JavaScript, HTML, CSS
        </Text>
        <Text>
          <span className="font-bold text-pink">Miscellaneous:</span> Git, Webpack, Object-Oriented Programming and Design, Test-Driven Development, Data Structures and Algorithms, Full Stack Web Development, REST APIs, Amazon S3
        </Text>
      </Section>
    </div>
  )
}

export default About;
