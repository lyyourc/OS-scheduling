import {isAfter} from './timeUtil';

// first in first out
const fifo = processes => {
  return processes.sort((process1, process2) =>
    isAfter(process1.startTime, process2.startTime)
  );
};

// short process first
const spf = processes => {
  return processes.sort((process1, process2) =>
    (process1.serviceTime - process1.haveRunnedTime) -
    (process2.serviceTime - process2.haveRunnedTime)
  );
};

// Sort processes, according to the algorithm picked
export const getSortedprocesses = (processes, pickedAlgorithm) => {
  switch (pickedAlgorithm) {
    case 'FIFO':
      return fifo(processes);

    case 'SPF':
      return spf(processes);

    default:
      return processes;
  }
};
