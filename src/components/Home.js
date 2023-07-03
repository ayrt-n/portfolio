import React from 'react';
import Section from './Section';
import Text from './Text';
import { about, portfolio, contact } from '../utils/directory'
import LineBreak from './LineBreak';
import TabLink from './TabLink';
import Link from './Link';

function Home() {
  return (
    <div>
      <Section>
        <h1 className="text-5xl mb-3">
          Hi! I'm <span className="text-pink">Ayrton</span>!
        </h1>
        <h2 className='text-3xl'>
          A Full Stack Software Engineer from Canada
          <span className="animate-blink">|</span>
        </h2>
        <LineBreak />
      </Section>

      <Section>
        <Text>
          I'm a passionate and obsessive, full stack developer in love with building beautiful and performant applications.
        </Text>
        <Text>
          Experienced with Ruby, Ruby on Rails, JavaScript, React, and more.
        </Text>
        <Text>
          This website, inspired by <Link targetBlank href="https://code.visualstudio.com/">VS Code</Link>, is an interactive overview of what I love, who I am, and the things that I've built. I encourage visitors to click around and explore (the sidebar and tabs at the top are fully functioning).
        </Text>
        <Text>
          For more information on my background and previous work, check out some of the helpful links below!
        </Text>
      </Section>
      
      <Section className="space-y-2">
        <h3 className="text-2xl font-bold mb-3">
          Helpful Links
        </h3>
        <div>
          <TabLink tab={about} className="text-link font-normal">About</TabLink>
          <span className="ml-5">~/background_information</span>
        </div>
        <div>
          <TabLink tab={portfolio} className="text-link font-normal">Portfolio</TabLink>
          <span className="ml-5">~/work_experience_and_achievements</span>
        </div>
        <div>
          <TabLink tab={contact} className="text-link font-normal">Contact</TabLink>
          <span className="ml-5">~/lets_chat</span>
        </div>
      </Section>
    </div>
  )
}

export default Home;
