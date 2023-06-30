import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import IndexCSS from '../components/IndexCSS';
import Portfolio from '../components/Portfolio';
import GitIgnore from '../components/GitIgnore';

const about = { name: 'About', type: 'file', extension: 'js', component: <About /> }
const portfolio = { name: 'Portfolio', type: 'file', extension: 'js', component: <Portfolio /> }
const home = { name: 'Home', type: 'file', extension: 'js', component: <Home /> }
const index = { name: 'index', type: 'file', extension: 'css', component: <IndexCSS /> }
const gitignore = { name: ' ', type: 'file', extension: 'gitignore', component: <GitIgnore /> }
const contact = { name: 'Contact', type: 'file', extension: 'md', component: <Contact /> }

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
            about,
            portfolio,
          ]
        },
        home,
        index,
      ]
    },
    gitignore,
    contact,
  ]
}];

export {
  about,
  portfolio,
  home,
  index,
  gitignore,
  contact,
  directory
};
