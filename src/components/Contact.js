import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';

function Contact() {
  return (
    <div>
      <MarkdownHeader headingLevel="1" text="Contact" className="text-3xl md:text-5xl" />
      <LineBreak />
    </div>
  )
}

export default Contact;
