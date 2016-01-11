const scheduling = (
  state = {
    jobAlgorithm: 'FCFS',
    processAlgorithm: 'FIFO',
    memoryAlgorithm: 'FIRST_FIT'
  },
  action
) => {
  switch (action.type) {
    case 'SET_JOB_ALGO':
      return {
        ...state,
        jobAlgorithm: action.algorithm
      };

    case 'SET_PROCESS_ALGO':
      return {
        ...state,
        processAlgorithm: action.algorithm
      };

    case 'SET_MEMORY_ALGO':
      return {
        ...state,
        memoryAlgorithm: action.algorithm
      };

    default:
      return state;
  }
};

export default scheduling;
