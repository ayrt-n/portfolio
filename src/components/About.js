import React from 'react';

function About() {
  return (
    <div>
      <h1 className="text-5xl text-purple">
        # About
      </h1>
      <hr className="border-dark-200 my-3" />

      <p className="mb-3">Hi! My name is Ayrton Parkinson. I am a full stack software engineer. I am currently pursuing my Bachelor of Computer Science at Carleton University.</p>
      <p className="mb-3">While originally going to school for economics and finance, I started coding as a hobby through 2021 and from that point on, I was hooked. Since then I have been learning and building every opportunity I get. For some examples of recent work, see <span className="text-green font-bold">Projects.js</span>.</p>
      <p className="mb-3">I am looking for positions as a backend or full stack software engineer. I am incredibly passionate about the work that I do and would love to chat about how I might be able to help the work that you do!</p>
      <p className="mb-3">For information on how to reach out, see <span className="font-bold text-green">Contact.md</span>.</p>

      <h2 className="text-3xl text-purple">
        ## Technologies
      </h2>
      <hr className="border-dark-200 my-3" />

      <p className="mb-3">While these are some of the languages and frameworks I am the most comfortable with, these are just tools to get the job done! I am constantly looking to expand my toolkit and am open to working with and learning new technologies.</p>

    </div>
  )
}

export default About;
