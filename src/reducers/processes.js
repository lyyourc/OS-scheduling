const processes = (
  state = [],
  action
) => {
  switch (action.type) {
    case 'ADD_PROCESS':
      return [
        ...state,
        {
          ...action.process,
          haveRunnedTime: 0
        }
      ];

    case 'REMOVE_PROCESS':
      return state.filter(process => process.name !== action.name);

    case 'RUN_PROCESS':
      return state.map((process, index) => {
        if (index !== 0) return process;

        return {
          ...process,
          // serviceTime: process.serviceTime - 1
          haveRunnedTime: (process.haveRunnedTime || 0) + 1
        };
      });

    case 'UPDATE_PROCESS':
      return state.map(process => {
        if (process.name !== action.name) return process;

        return {
          ...process,
          finishTime: action.now
        };
      });

    default:
      return state;
  }
};

export default processes;
