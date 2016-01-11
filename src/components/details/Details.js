import React from 'react';

import Jobs from './Jobs';
import Processes from './Processes';
import FinishedJobs from './FinishedJobs';
import Resources from './Resources';

const Details = () => {
  return (
    <div className="thirteen wide column">
      <div className="ui grid">
        <Jobs />
        <Resources />
        <Processes />
        <FinishedJobs />
      </div>
    </div>
  );
};

export default Details;
