import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Table from './Table';
import * as processActions from '../../actions/processes';
import * as finishedJobsActions from '../../actions/finishedJobs';
import * as resourcesActions from '../../actions/resources';

import {getSortedprocesses} from '../../algorithm/processScheduling';

class Processes extends React.Component {
  componentDidUpdate() {
    const {
      processes, now, pickAlgorithm,
      processActions, finishedJobsActions, resourcesActions
    } = this.props;

    if (!processes.length) return 0;

    const sortedProcess = getSortedprocesses(processes,
      pickAlgorithm.processAlgorithm);

    const readyProcess = sortedProcess[0];

    if (readyProcess.haveRunnedTime >= readyProcess.serviceTime) {
      processActions.removeProcess(readyProcess.name);

      finishedJobsActions.addFinishedJobs({
        ...readyProcess,
        finishTime: now
      });

      resourcesActions.free({
        tapeDriver: readyProcess.tapeDriver,
        processName: readyProcess.name
      });
    }
  }

  render() {
    const {processes} = this.props;
    return (
      <div className="sixteen wide column">
        <h4> PCB: </h4>
        <Table data={processes} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    processes: state.processes,
    resources: state.resources,
    now: state.now,
    pickAlgorithm: state.pickAlgorithm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processActions: bindActionCreators(processActions, dispatch),
    resourcesActions: bindActionCreators(resourcesActions, dispatch),
    finishedJobsActions: bindActionCreators(finishedJobsActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Processes);
