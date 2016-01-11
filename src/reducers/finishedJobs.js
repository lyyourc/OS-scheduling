const finishedJobs = (
  state = [],
  action
) => {
  switch (action.type) {
    case 'ADD_FINISHED_JOB':
      return [
        ...state,
        action.job
      ];
    default:
      return state;
  }
};

export default finishedJobs;
