import { useEffect, useState } from 'react';
import TabContext from './TabContext';
import { useNavigate } from 'react-router-dom';

function TabProvider({ initialTabs, children }) {
  const navigate = useNavigate();
  const [tabHistory, setTabHistory] = useState(initialTabs);
  const [tabList, setTabList] = useState(initialTabs);

  const addTab = (tab) => {
    if (!tabList.find(t => (t.pathname === tab.pathname))) {
      setTabList(prev => ([...prev, tab]));
    }

    switchTabs(tab);
  };

  const removeTab = (tab) => {
    setTabList(prev => (prev.filter(t => t.pathname !== tab.pathname)));
    setTabHistory(prev => (prev.filter(t => t.pathname !== tab.pathname)));
  };

  const switchTabs = (tab) => {
    setTabHistory(prev => ([tab, ...prev.filter(t => t.pathname !== tab.pathname)]));
  };

  useEffect(() => {
    tabHistory[0] ? navigate(tabHistory[0]) : navigate('/')
  }, [navigate, tabHistory]);

  return (
    <TabContext.Provider value={{tabList, addTab, removeTab, switchTabs}}>
      {children}
    </TabContext.Provider>
  );
}

export default TabProvider;
