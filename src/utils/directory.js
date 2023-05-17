import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import IndexCSS from '../components/IndexCSS';
import Portfolio from '../components/Portfolio';

const directory = [{
  name: 'ayrton_parkinson_portfolio',
  type: 'folder',
  children: [
    {
      name: 'src',
      type: 'folder',
      children: [
        {
          name: 'components',
          type: 'folder',
          children: [
            { name: 'About', type: 'file', extension: 'js', component: <About /> },
            { name: 'Portfolio', type: 'file', extension: 'js', component: <Portfolio /> },
          ]
        },
        { name: 'Home', type: 'file', extension: 'js', component: <Home /> },
        { name: 'index', type: 'file', extension: 'css', component: <IndexCSS /> },
      ]
    },
    { name: '', type: 'file', extension: 'gitignore', component: <></> },
    { name: 'Contact', type: 'file', extension: 'md', component: <Contact /> },
  ]
}];

export { directory }
