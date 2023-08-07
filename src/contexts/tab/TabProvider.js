import { useState, useMemo, useCallback, useEffect } from 'react';
import TabContext from './TabContext';

function TabProvider({ initialTabs, children }) {
  const [tabHistory, setTabHistory] = useState(initialTabs);
  const [tabList, setTabList] = useState(initialTabs);

  // Set initial home tab name in history for handling popstate events
  useEffect(() => {
    window.history.replaceState({ tabName: 'Home' }, '', '');
  }, []);

  // On popstate (i.e., back/forward history event) check if tab is open
  // If tab is not open go back further, switch to that tab
  useEffect(() => {
    const handlePop = () => {
      const tabName = window.history.state.tabName
      if (tabName) {
        const tab = tabList.find(t => t.name === tabName)
        if (tab) {
          setTabHistory(prev => ([tab, ...prev.filter(t => t.name !== tab.name)]));
        } else {
          window.history.back();
        }
      }
    };

      window.addEventListener('popstate', handlePop);
      return () => window.removeEventListener('popstate', handlePop);
  });

  // Check if tab is already open (e.g., in tabList), if not add it
  // Then switch to that tab
  const addTab = useCallback((tab) => {
    if (!tabList.find(t => (t.name === tab.name))) {
      setTabList(prev => ([...prev, tab]));
    }

    switchTabs(tab);
  }, [tabList]);

  // Remove tab from tab list and tab history
  const removeTab = (tab) => {
    setTabList(prev => (prev.filter(t => t.name !== tab.name)));
    setTabHistory(prev => (prev.filter(t => t.name !== tab.name)));
  };

  // Push tab name to window history to allow navigation via popstate
  // Then change tab history to switch to new tab
  const switchTabs = (tab) => {
    window.history.pushState({ tabName: tab.name }, '', '');
    setTabHistory(prev => ([tab, ...prev.filter(t => t.name !== tab.name)]));
  };

  const value = useMemo(() => (
    {
      current: tabHistory[0],
      tabList,
      addTab,
      removeTab,
      switchTabs
    }
  ), [tabList, tabHistory, addTab])

  return (
    <TabContext.Provider value={value}>
      {children}
    </TabContext.Provider>
  );
}

export default TabProvider;
