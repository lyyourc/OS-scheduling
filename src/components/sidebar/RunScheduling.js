import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as timeActions from '../../actions/timer';
import {DELAY} from '../../constants';

const RunScheduling = ({
  timeActions
}) => {
  let intervalID;

  return (
    <div>
      <button onClick={() => {
        intervalID = setInterval(timeActions.start, DELAY);
      }}>
        RUN IT NOW
      </button>

      <button onClick={() => {
        clearInterval(intervalID);
      }}>
        STOP BA
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    timeActions: bindActionCreators(timeActions, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(RunScheduling);
