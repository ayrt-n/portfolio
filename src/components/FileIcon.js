import React from 'react';
import { fileIcons } from '../assets/images/file_types/fileIcons';

function FileIcon({ fileType="defaultIcon" }) {
  return (
    <img src={fileIcons[fileType]} className="w-6 h-6 mr-2" alt="" />
  );
}

export default FileIcon;
