import {allocateMemory, freeMemory} from '../algorithm/memoryAllocation';

const resources = (
  state = {
    memory: [{
      occupant: 'no',
      flag: 'hole',
      startAddress: 0,
      length: 100
    }],
    tapeDriver: 4
  },
  action
) => {
  switch (action.type) {
    case 'ALLOCATE_RESOURCES':
      return {
        memory: allocateMemory(state.memory, action.memory, action.processName),
        tapeDriver: state.tapeDriver - action.tapeDriver
      };

    case 'FREE_RESOURCES':
      return {
        memory: freeMemory(state.memory, action.processName),
        tapeDriver: state.tapeDriver + action.tapeDriver
      };

    default:
      return state;
  }
};

export default resources;
