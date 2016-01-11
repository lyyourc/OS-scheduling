import {NOW} from '../constants/';
import {addMinute} from '../algorithm/timeUtil';

const timer = (state = NOW, action) => {
  switch (action.type) {
    case 'START_TIMING':
      return addMinute(state, 1);

    case 'STOP_TIMING':
      return state;

    default:
      return state;
  }
};

export default timer;
