import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Section from './Section';
import Text from './Text';

function About() {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel="1" text="About" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>Hi! My name is Ayrton Parkinson. I am a full stack software engineer and am currently pursuing my Bachelor of Computer Science at Carleton University.</Text>
        <Text>While originally going to school for economics and finance, I started coding as a hobby through 2021 and from that point on, I was hooked. Since then I have been learning and building every opportunity I get. For some examples of recent work, see <span className="text-green font-bold">Portfolio.js</span>.</Text>
        <Text>I am looking for positions as a backend or full stack software engineer. I am incredibly passionate about the work that I do and would love to chat about how I might be able to help the work that you do!</Text>
        <Text>For information on how to reach out, see <span className="font-bold text-green">Contact.md</span>.</Text>
      </Section>

      <Section>
        <button className="font-bold text-green hover:bg-green-highlight">[Download Resume]</button>
      </Section>

      <Section>
        <MarkdownHeader headingLevel="2" text="Technologies" className="text-xl md:text-3xl" />
        <LineBreak />
        <Text>While these are some of the languages and frameworks I am the most comfortable with, these are just tools to get the job done! I am constantly looking to expand my toolkit and am open to working with and learning new technologies.</Text>
      </Section>
    </div>
  )
}

export default About;
