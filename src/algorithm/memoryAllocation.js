export const getFitHoleIndex = (memoryList, length) => {
  return memoryList.findIndex(item =>
    item.flag === 'hole' && item.length > length
  );
};

export const freeMemory = (memoryList, processName) => {
  const targetIndex = memoryList.findIndex(item =>
    item.occupant === processName
  );
  const target = memoryList[targetIndex];
  const before = memoryList[targetIndex - 1];
  const after = memoryList[targetIndex + 1];

  // Don't try to read the following codes !!!!

  // 回收-进程 || 进程-回收 || 进程-回收-进程
  if (
    (targetIndex === 0 && after.flag === 'occupied') ||
    (before && before.flag === 'occupied' &&
      targetIndex === memoryList.length - 1) ||
    (before && before.flag === 'occupied' && after.flag === 'occupied')
  ) {
    return [
      ...memoryList.slice(0, targetIndex),
      {
        ...target,
        flag: 'hole',
        occupant: 'no'
      },
      ...memoryList.slice(targetIndex + 1)
    ];
  }

  // 空闲-回收-空闲
  if (
    (before && before.flag === 'hole') &&
    (after && after.flag === 'hole')) {
    return [
      ...memoryList.slice(0, targetIndex - 1),
      {
        ...before,
        length: before.length + target.length + after.length
      },
      ...memoryList.slice(targetIndex + 2)
    ];
  }

  // 空闲-回收-[进程]
  if (
    (before && before.flag === 'hole') &&
    (!after || after.flag === 'occupied')) {
    return [
      ...memoryList.slice(0, targetIndex - 1),
      {
        ...before,
        length: before.length + target.length
      },
      ...memoryList.slice(targetIndex + 1)
    ];
  }

  // [进程]-回收-空闲
  if (
    (!before || before.flag === 'occupied') &&
    (after && after.flag === 'hole')) {
    return [
      ...memoryList.slice(0, targetIndex),
      {
        ...target,
        occupant: 'no',
        flag: 'hole',
        length: target.length + memoryList[targetIndex + 1].length
      },
      ...memoryList.slice(targetIndex + 2)
    ];
  }
};

export const allocateMemory = (memoryList, length, processName) => {
  const fitHoleIndex = getFitHoleIndex(memoryList, length);
  if (fitHoleIndex === -1) return memoryList;

  const fitHole = memoryList[fitHoleIndex];

  return [
    ...memoryList.slice(0, fitHoleIndex),
    {
      occupant: processName,
      flag: 'occupied',
      startAddress: fitHole.startAddress,
      length: length
    },
    {
      occupant: 'no',
      flag: 'hole',
      startAddress: fitHole.startAddress + length,
      length: fitHole.length - length
    },
    ...memoryList.slice(fitHoleIndex + 1)
  ];
};
