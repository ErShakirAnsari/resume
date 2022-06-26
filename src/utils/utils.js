import moment from "moment";

export function getTotalMonths(dateStart, dateEnd) {
  if (!dateStart) {
    dateStart = new window.Date();
  }
  if (!dateEnd) {
    dateEnd = new window.Date();
  }

  return moment(dateEnd).diff(moment(dateStart), "months", false);
}

export function getTotalDays(dateStart, dateEnd) {
  if (!dateStart) {
    dateStart = new window.Date();
  }
  if (!dateEnd) {
    dateEnd = new window.Date();
  }

  return moment(dateEnd).diff(moment(dateStart), "days", false);
}

export function getExperience(dateStart, dateEnd) {
  let years = 0;
  let months = getTotalMonths(dateStart, dateEnd);

  while (months > 11) {
    years += 1;
    months -= 12;
  }

  //   months += 1; //sep-nov its 2month

  if (years == 0 && months == 0) {
    const days = getTotalDays(dateStart, dateEnd);
    return days > 0 ? `${days} days` : `${days} day`;
  }

  if (years == 0) {
    return months > 1 ? `${months} months` : `${months} month`;
  }

  if (months == 0) {
    return years > 1 ? `${years} years` : `${years} year`;
  }

  return `${years}y ${months}m`;
}
