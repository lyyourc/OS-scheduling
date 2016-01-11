import React from 'react';

import Jobs from './Jobs';
import Processes from './Processes';
import FinishedJobs from './FinishedJobs';

const Details = () => {
  return (
    <div className="details">
      <Jobs />
      <Processes />
      <FinishedJobs />
    </div>
  );
};

export default Details;
