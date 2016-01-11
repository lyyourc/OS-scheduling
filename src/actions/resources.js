export const allocate = ({
  memory,
  tapeDriver,
  processName
}) => {
  return {
    type: 'ALLOCATE_RESOURCES',
    memory,
    tapeDriver,
    processName
  };
};

export const free = ({
  tapeDriver,
  processName
}) => {
  return {
    type: 'FREE_RESOURCES',
    tapeDriver,
    processName
  };
};
