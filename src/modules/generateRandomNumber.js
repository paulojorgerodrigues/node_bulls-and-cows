'use strict';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  let str = '';
  let i = 0;

  while (i < 4) {
    let n;

    if (i === 0) {
      n = getRandomInt(8) + 1;

      const sn = `${n}`;

      str += sn;
      i++;
    } else {
      n = getRandomInt(9);

      const sn = `${n}`;

      if (str.indexOf(sn) < 0) {
        str += sn;
        i++;
      }
    }
  }

  return +str;
}

module.exports = {
  generateRandomNumber,
};
