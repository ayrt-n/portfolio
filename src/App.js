import React from 'react';
import Dashboard from './components/Dashboard';
import TabProvider from './contexts/tab/TabProvider';
import Home from './components/Home';
import About from './components/About';

function App() {
  const tabs = [
    { name: 'Home', type: 'file', extension: 'js', component: <Home /> },
    { name: 'About', type: 'file', extension: 'js', component: <About /> },
  ];

  return (
    <TabProvider initialTabs={tabs}>
      <Dashboard />
    </TabProvider>
  );
}

export default App;
