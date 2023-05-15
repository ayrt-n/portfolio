import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';

function About() {
  return (
    <div>
      <MarkdownHeader headingLevel="1" text="About" className="text-3xl md:text-5xl" />
      <LineBreak />

      <p className="mb-3">Hi! My name is Ayrton Parkinson. I am a full stack software engineer. I am currently pursuing my Bachelor of Computer Science at Carleton University.</p>
      <p className="mb-3">While originally going to school for economics and finance, I started coding as a hobby through 2021 and from that point on, I was hooked. Since then I have been learning and building every opportunity I get. For some examples of recent work, see <span className="text-green font-bold">Projects.js</span>.</p>
      <p className="mb-3">I am looking for positions as a backend or full stack software engineer. I am incredibly passionate about the work that I do and would love to chat about how I might be able to help the work that you do!</p>
      <p className="mb-3">For information on how to reach out, see <span className="font-bold text-green">Contact.md</span>.</p>

      <MarkdownHeader headingLevel="2" text="Technologies" className="text-xl md:text-3xl" />
      <LineBreak />

      <p className="mb-3">While these are some of the languages and frameworks I am the most comfortable with, these are just tools to get the job done! I am constantly looking to expand my toolkit and am open to working with and learning new technologies.</p>

    </div>
  )
}

export default About;
