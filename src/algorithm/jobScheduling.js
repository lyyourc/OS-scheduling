import {isAfter} from './timeUtil';

// first come first serve
const fcfs = jobs =>
  jobs.sort((job1, job2) =>
    isAfter(job1.arrivialTime, job2.arrivialTime)
  );

// short job first
const sjf = jobs =>
  jobs.sort((job1, job2) => job1.serviceTime - job2.serviceTime);

// get arrived jobs
export const getArrivedJobs = (jobs, now) =>
  jobs.filter(job => isAfter(now, job.arrivialTime) !== -1);

// Sort Jobs, according to the algorithm picked
export const getSortedJobs = (jobs, pickedAlgorithm) => {
  switch (pickedAlgorithm) {
    case 'FCFS':
      return fcfs(jobs);

    case 'SJF':
      return sjf(jobs);

    default:
      return jobs;
  }
};
