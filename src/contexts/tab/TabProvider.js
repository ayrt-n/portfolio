import { useState, useMemo, useCallback } from 'react';
import TabContext from './TabContext';

function TabProvider({ initialTabs, children }) {
  const [tabHistory, setTabHistory] = useState(initialTabs);
  const [tabList, setTabList] = useState(initialTabs);

  const addTab = useCallback((tab) => {
    if (!tabList.find(t => (t.name === tab.name))) {
      setTabList(prev => ([...prev, tab]));
    }

    switchTabs(tab);
  }, [tabList]);

  const removeTab = (tab) => {
    setTabList(prev => (prev.filter(t => t.name !== tab.name)));
    setTabHistory(prev => (prev.filter(t => t.name !== tab.name)));
  };

  const switchTabs = (tab) => {
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
