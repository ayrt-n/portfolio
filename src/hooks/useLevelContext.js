import { useContext } from 'react';
import { LevelContext } from '../contexts/level/LevelContext';

export default function useLevelContext() {
  return useContext(LevelContext);
}
