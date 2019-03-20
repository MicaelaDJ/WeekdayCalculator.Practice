/* eslint-disable no-unused-vars */
export class Date {
  constructor(month, day, year) {
    this.month = month;
    this.day = day;
    this.year = year;
  }
  leapYear(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }

  }
}

/* eslint-disable no-unused-vars */
