export const pickJobAlgo = algorithm => {
  return {
    type: 'SET_JOB_ALGO',
    algorithm
  };
};

export const pickProcessAlgo = algorithm => {
  return {
    type: 'SET_PROCESS_ALGO',
    algorithm
  };
};

export const pickMemoryAlgo = algorithm => {
  return {
    type: 'SET_MEMORY_ALGO',
    algorithm
  };
};
