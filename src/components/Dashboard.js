import React from 'react';
import Sidebar from './sidebar/Sidebar';
import TabBar from './tabs/TabBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NoTabs from './NoTabs';
import useTabContext from '../hooks/useTabContext';
import Portfolio from './Portfolio';

function Dashboard() {
  const tabs = useTabContext();

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
        ]
      },
      { name: '', type: 'file', extension: 'gitignore', component: <></> },
      { name: 'Contact', type: 'file', extension: 'md', component: <Contact /> },
    ]
  }];

  return (
    <div className="font-sans grid grid-rows-dashboard grid-cols-dashboard min-h-screen">
      <Sidebar directory={directory} />
      <TabBar />
      <div className="font-mono pt-[32px] px-9">
        {tabs.current ? tabs.current.component : <NoTabs />}
      </div>
    </div>
  );
}

export default Dashboard;
