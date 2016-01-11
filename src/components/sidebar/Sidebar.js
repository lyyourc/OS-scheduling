import React from 'react';

import AlgorithmPicker from './AlgorithmPicker';
import RunScheduling from './RunScheduling';

const Sidebar = () => {
  return (
    <div className="three wide column">
      <AlgorithmPicker />
      <RunScheduling />
    </div>
  );
};

export default Sidebar;
