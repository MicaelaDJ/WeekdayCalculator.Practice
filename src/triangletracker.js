/* eslint-disable no-unused-vars */
export default class Date {
  constructor(month, day, year,countDays) {
    this.month = month;
    this.day = day;
    this.year = year;
    this.countDays = countDays;
  }
  leapYear(year,countDays,month,day) {

    const notALeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const aLeapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for(let i = 0; i <= this.year-1; i++){
      if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        countDays+=366;
      } else {
        countDays+=365;
      }
    }
    for(let i = 0; i <= this.month-1; i++){
      if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        countDays+=aLeapYear[i];
      } else {
        countDays+=notALeapYear[i];
      }
    }
    for(let i = 0; i <= this.day-1; i++){
        countDays += 1;
    }
    return countDays;
  }

  resetDays() {
    this.countDays = 0;
  }

  getDay(countDays) {
    const days = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"];
    // let temp = Math.floor(countDays / 4);
    // countDays = countDays + temp;
    return (days[countDays % 7]);

    }



}
/* eslint-disable no-unused-vars */
