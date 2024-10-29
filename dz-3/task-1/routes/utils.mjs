export function getSeason(month = new Date().getMonth()) {
  let res;
  switch (month) {
    case 0:
    case 1:
    case 11:
      res = 'Winter';
      break;
    case 2:
    case 3:
    case 4:
      res = 'Spring';
      break;
    case 5:
    case 6:
    case 7:
      res = 'Summer';
      break;
    case 8:
    case 9:
    case 10:
      res = 'Autumn';
      break;
    default:
      res = 'Invalid month';
  }

  return res;
}

export function getDay(day = new Date().getDay()) {
  let res;
  switch (day) {
    case 0:
      res = 'Sunday';
      break;
    case 1:
      res = 'Monday';
      break;
    case 2:
      res = 'Tuesday';
      break;
    case 3:
      res = 'Wednesday';
      break;
    case 4:
      res = 'Thursday';
      break;
    case 5:
      res = 'Friday';
      break;
    case 6:
      res = 'Saturday';
      break;
    default:
      res = 'Invalid day';
  }

  return res;
}
export function getTimeOfDay(hour = new Date().getHours()) {
  let timeOfDay;

  if (hour >= 5 && hour < 12) {
    timeOfDay = 'Morning';
  } else if (hour >= 12 && hour < 17) {
    timeOfDay = 'Day';
  } else if (hour >= 17 && hour < 21) {
    timeOfDay = 'Evening';
  } else {
    timeOfDay = 'Night';
  }

  return timeOfDay;
}
