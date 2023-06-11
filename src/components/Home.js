import React from 'react';
import LineBreak from './LineBreak';

function Home() {
  return (
    <div>
      <h1 className="text-5xl mb-3">
        Hi! I'm <span className="text-pink">Ayrton!</span>
      </h1>
      <h2 className='text-3xl'>
        A Full Stack Software Engineer from Canada
        <span className="animate-blink">|</span>
      </h2>
      <LineBreak />
    </div>
  )
}

export default Home;
