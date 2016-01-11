import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Table from './Table';
import {getArrivedJobs, getSortedJobs} from '../../algorithm/jobScheduling';
import {getFitHoleIndex} from '../../algorithm/memoryAllocation';

import * as processesActions from '../../actions/processes';
import * as jobsActions from '../../actions/jobs';
import * as resourcesActions from '../../actions/resources';

// display the info of jobs in the JCB
// ===================================

class Jobs extends React.Component {
  componentDidUpdate() {
    const {
      jobs, now,
      pickAlgorithm, resources,
      jobsActions, processesActions, resourcesActions
    } = this.props;

    if (!jobs.length) return 0;

    const arriviedJobs = getArrivedJobs(jobs, now);
    const sortedJobs = getSortedJobs(arriviedJobs, pickAlgorithm.jobAlgorithm);

    // put the jobs in PCB, if the resouces request fits
    sortedJobs.forEach(job => {
      const request = {memory: job.memory, tapeDriver: job.tapeDriver};

      // available resouces >= request resouces
      if (resources.tapeDriver < request.tapeDriver) return 0;
      if (getFitHoleIndex(resources.memory, request.memory) === -1) return 0;

      jobsActions.removeJob(job.name);
      processesActions.addProcess({
        ...job,
        startTime: now
      });
      resourcesActions.allocate({
        ...request,
        processName: job.name
      });
    });
  }

  render() {
    return (
      <div>
        <h3> JCB SITUATION: </h3>
        <Table data={this.props.jobs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.jobs,
    now: state.now,
    pickAlgorithm: state.pickAlgorithm,
    resources: state.resources
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processesActions: bindActionCreators(processesActions, dispatch),
    jobsActions: bindActionCreators(jobsActions, dispatch),
    resourcesActions: bindActionCreators(resourcesActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
