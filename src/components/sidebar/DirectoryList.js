import React from 'react';
import Directroy from './Directory';
import DirectoryItem from './DirectoryItem';

function DirectoryList({ directory }) {
  const list = directory.map(item => {
    if (item.type === 'folder') return <Directroy directory={item} key={item.name} />

    return <DirectoryItem item={item} key={item.name} />
  });

  return (<>{list}</>);
}

export default DirectoryList;
