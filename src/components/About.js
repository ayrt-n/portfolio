import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Section from './Section';
import Text from './Text';
import MarkdownButton from './MarkdownButton';
import Comment from './Comment';
import ResumePDF from '../assets/documents/Ayrton_Parkinson_CV.pdf';

function About() {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel="1" text="About" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>Hi! My name is Ayrton Parkinson. I am a full stack software engineer and am currently pursuing my Bachelor of Computer Science at Carleton University.</Text>
        <Text>While originally going to school for economics and finance, I started coding as a hobby through 2021 and from that point on, I was hooked. Since then I have been learning and building every opportunity I get. For some examples of recent work, see <span className="font-bold">Portfolio.js</span>.</Text>
        <Text>I am looking for positions as a backend or full stack software engineer. I am incredibly passionate about the work that I do and would love to chat about how I might be able to help the work that you do!</Text>
        <Text>For information on how to reach out, see <span className="font-bold">Contact.md</span>.</Text>
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
          While these are some of the technologies I am the most comfortable with, these are just tools to get the job done! I am constantly looking to expand my toolkit and am open to working with and learning new technologies.
        </Comment>
        <Text>
          <span className="font-bold text-pink">Languages and Frameworks:</span> Ruby, Ruby on Rails, GraphQL, SQL, React, JavaScript, HTML, CSS, Tailwind
        </Text>
        <Text>
          <span className="font-bold text-pink">Miscellaneous:</span> Git, Webpack, Object-Oriented Programming and Design, Test-Driven Development, Data Structures and Algorithms, Full Stack Web Development, REST APIs, Amazon S3
        </Text>
      </Section>
    </div>
  )
}

export default About;
