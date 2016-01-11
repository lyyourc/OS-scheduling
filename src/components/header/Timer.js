import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as processesActions from '../../actions/processes';

class Timer extends React.Component {
  componentDidUpdate() {
    const {processesActions} = this.props;

    processesActions.runProcess();
  }
  render() {
    const {now} = this.props;
    return (
      <div className="sixteen wide column center aligned">
        <h3 className="ui teal message">当前时间: {now}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    now: state.now
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processesActions: bindActionCreators(processesActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
