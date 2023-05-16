import React from 'react';
import Directroy from './Directory';
import DirectoryItem from './DirectoryItem';

function DirectoryList({ directory, callback }) {
  const list = directory.map(item => {
    if (item.type === 'folder') return <Directroy directory={item} key={item.name} callback={callback} />

    return <DirectoryItem item={item} key={item.name} callback={callback} />
  });

  return (<>{list}</>);
}

export default DirectoryList;
