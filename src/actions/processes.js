export const addProcess = process => {
  return {
    type: 'ADD_PROCESS',
    process
  };
};

export const removeProcess = name => {
  return {
    type: 'REMOVE_PROCESS',
    name
  };
};

export const runProcess = () => {
  return {
    type: 'RUN_PROCESS'
  };
};

export const updateProcess = (name, now) => {
  return {
    type: 'UPDATE_PROCESS',
    name,
    now
  };
};
