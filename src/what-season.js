const { fake } = require('sinon');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  // if (!(date instanceof Date)) throw new TypeError("Invalid date!");
  
  let month;
  try {
    month = date.getUTCMonth();
  } catch (TypeError) {
    throw new Error("Invalid date!");
  }
  
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';
  if (month === 11 || month === 0 || month === 1) return 'winter';
}

module.exports = {
  getSeason
};

// const fakeDate = {
//   toString() {
//       return Date.prototype.toString.call(new Date());
//   },
//   [Symbol.toStringTag]: 'Date'
// };
// console.log(getSeason(fakeDate));

// const deeperFakeDate = {
//   toString() {
//       return Date.prototype.toString.call(new Date());
//   },
//   getMonth() {
//       return Date.prototype.getMonth.call(new Date());
//   },
//   getFullYear() {
//       return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
//   },
//   getDate() {
//       return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
//   },
//   getHours() {
//       return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
//   },
//   getMinutes() {
//       return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
//   },
//   getSeconds() {
//       return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
//   },
//   getMilliseconds() {
//       return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
//   },
//   getDay() {
//       return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
//   },
//   [Symbol.toStringTag]: 'Date'
// };

// Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));
// console.log(getSeason(deeperFakeDate));

// Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

// console.log(new Date().constructor);
// console.log(fakeDate.constructor);
// console.log(Date.prototype.isPrototypeOf(fakeDate))
// console.log(typeof(fakeDate.getUTCMonth));