/* eslint-disable no-unused-vars */
import Date from "./../src/triangletracker.js";

describe('Date',function(){
  it('should test to see if its a leap year', function(){
    let date = new Date(2019);
    expect(date.leapYear(2019, 0)).toEqual(365);
  });
});
/* eslint-disable no-unused-vars */
