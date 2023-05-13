import { useContext } from 'react';
import TabContext from '../contexts/tab/TabContext';

export default function useTabContext() {
  const tabs = useContext(TabContext)

  if (!tabs) {
    throw new Error('useTabContext must be used within TabProvider')
  }

  return tabs;
}
