import React from 'react';

import AlgorithmPicker from './AlgorithmPicker';
import RunScheduling from './RunScheduling';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <AlgorithmPicker />
      <RunScheduling />
    </div>
  );
};

export default Sidebar;
