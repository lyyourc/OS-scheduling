import {combineReducers} from 'redux';

import scheduling from './scheduling';
import jobs from './jobs';
import processes from './processes';
import finishedJobs from './finishedJobs';
import timer from './timer';
import resources from './resources';

export default combineReducers({
  pickAlgorithm: scheduling,
  now: timer,
  resources,
  jobs,
  processes,
  finishedJobs
});
