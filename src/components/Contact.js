import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Section from './Section';
import Text from './Text';
import MarkdownLink from './MarkdownLink';

function Contact() {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel="1" text="Contact" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>
          If you're interested in reaching out and want to chat, please just reach out via any of the links below!
        </Text>
      </Section>

      <Section>
        <Text className="text-lg">
          [<span className="text-pink">Email</span>] (<MarkdownLink href="mailto:ayrton.parkinson1@gmail.com">mailto:ayrton.parkinson1@gmail.com</MarkdownLink>)
        </Text>
        <Text className="text-lg">
          [<span className="text-pink">Github</span>] (<MarkdownLink href="https://github.com/ayrt-n">https://github.com/ayrt-n</MarkdownLink>)
        </Text>
        <Text className="text-lg">
          [<span className="text-pink">LinkedIn</span>] (<MarkdownLink href="https://www.linkedin.com/in/ayrton-parkinson-ab6015ba/">https://www.linkedin.com/in/ayrton-parkinson-ab6015ba/</MarkdownLink>)
        </Text>
      </Section>
    </div>
  )
}

export default Contact;
