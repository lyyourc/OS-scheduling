const splitTime = time => {
  return time.split(':').map(Number);
};

export const addMinute = (time, minute) => {
  let hours = splitTime(time)[0];
  let minutes = splitTime(time)[1];

  minutes += Number(minute);

  if (minutes >= 60) {
    minutes = 0;
    hours += 1;
    if (hours >= 24) hours = 0;
  }

  if (minutes < 10) minutes = '0' + String(minutes);
  if (hours < 10) hours = '0' + String(hours);

  return [hours, minutes].join(':');
};

export const isAfter = (time1, time2) => {
  let splitedTime1 = splitTime(time1);
  let hour1 = splitedTime1[0];
  let minute1 = splitedTime1[1];

  let splitedTime2 = splitTime(time2);
  let hour2 = splitedTime2[0];
  let minute2 = splitedTime2[1];

  if (hour1 > hour2) {
    return 1;
  } else if (hour1 === hour2) {
    if (minute1 > minute2) {
      return 1;
    } else if (minute1 === minute2) {
      return 0;
    }
    return -1;
  }

  return -1;
};
