import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Section from './Section';
import Text from './Text';

function Contact() {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel="1" text="Contact" className="text-3xl md:text-5xl" />
        <LineBreak />
      </Section>

      <Section>
        <Text>
          If you're interested in reaching out and want to chat, please just reach out via any of the links below!
        </Text>
      </Section>

      <Section>
        <Text className="text-lg">
          [<span className="text-pink">Email</span>] (<a href="mailto:Ayrton.Parkinson1@gmail.com" className="underline text-blue hover:bg-blue-highlight">mailto:ayrton.parkinson1@gmail.com</a>)
        </Text>
        <Text className="text-lg">
          [<span className="text-pink">Github</span>] (<a href="https://github.com/ayrt-n" target="_blank" rel="noreferrer" className="underline text-blue hover:bg-blue-highlight">https://github.com/ayrt-n</a>)
        </Text>
        <Text className="text-lg">
          [<span className="text-pink">LinkedIn</span>] (<a href="https://www.linkedin.com/in/ayrton-parkinson-ab6015ba/" target="_blank" rel="noreferrer" className="underline text-blue hover:bg-blue-highlight">https://www.linkedin.com/in/ayrton-parkinson-ab6015ba/</a>)
        </Text>
      </Section>
    </div>
  )
}

export default Contact;
