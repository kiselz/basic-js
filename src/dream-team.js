const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!(members instanceof Array)) return false;

  members = members.filter((member) => typeof(member) === "string");
  members = members.map((value) => value.trim().toUpperCase());
  members.sort();

  let encrypted = members.reduce((previousValue, currentValue) => {
    previousValue += currentValue[0].toUpperCase();
    return previousValue;
  }, '');

  return encrypted;
}

module.exports = {
  createDreamTeam
};