import {JCB} from '../constants';

const jobs = (
  state = JCB,
  action
) => {
  switch (action.type) {
    case 'REMOVE_JOB':
      return state.filter(job => job.name !== action.name);
    default:
      return state;
  }
};

export default jobs;
