import React from 'react';
import LineBreak from './LineBreak';
import MarkdownHeader from './MarkdownHeader';
import Section from './Section';
import Text from './Text';
import Comment from './Comment';
import Link from './Link';

function IndexCSS() {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel="1" text="Styling" className="text-3xl md:text-5xl" />
        <LineBreak />
      </Section>

      <Section>
        <Comment className=" text-lg md:text-2xl">Helpful styling links and sources!</Comment>
      </Section>

      <Section>
        <Text>
          User interface built with <Link href="https://react.dev/" targetBlank>React</Link> + <Link href="https://tailwindcss.com/" targetBlank>TailwindCSS</Link> + <Link href="https://headlessui.com/" targetBlank>HeadlessUI</Link>
        </Text>
        <Text>
          Color palette / theme based off of <Link href="https://draculatheme.com/" targetBlank>Dracula</Link>
        </Text>
        <Text>
          File icons from <Link href="https://github.com/jesseweed/seti-ui" targetBlank>VSCode Seti Theme</Link>
        </Text>
        <Text>
          Utility icons from <Link href="https://heroicons.com/" targetBlank>Heroicons</Link>
        </Text>
      </Section>
    </div>
  );
}

export default IndexCSS;