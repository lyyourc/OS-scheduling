import React from 'react';
import {connect} from 'react-redux';

import Table from './Table';

const FinishedJobs = ({finishedJobs}) => {
  return (
    <div>
      <h3> Finished Jobs: </h3>
      <Table data={finishedJobs} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    finishedJobs: state.finishedJobs
  };
};

export default connect(mapStateToProps)(FinishedJobs);
