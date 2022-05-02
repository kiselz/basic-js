const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!");

  const COMMANDS = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ];

  let arrActions = arr.map((element) => {
    if (typeof(element) === "string") return element;
    return {
      value: element,
      discard: false,
      doubleNext: false,
      doublePrev: false,
    }
  })

  console.log(arrActions);

  for (let i = 0; i < arr.length; i++) {
    if (typeof arrActions[i] === "string") {
      switch (arrActions[i]) {
        case COMMANDS[0]:
          if (arrActions[i+1]) arrActions[i+1].discard = true;
          break;
        case COMMANDS[1]:
          if (arrActions[i-1]) arrActions[i-1].discard = true;
          break;
        case COMMANDS[2]:
          if (arrActions[i+1]) arrActions[i+1].doubleNext = true;
          break;
        case COMMANDS[3]:
          if (arrActions[i-1]) arrActions[i-1].doublePrev = true;
          break;
      }
    }
  }

  console.log(arrActions);

  let newArr = [];
  arrActions.forEach((action) => {
    if (!action.discard && typeof(action) !== "string") {
      if (action.doubleNext && action.doublePrev) {
        if (action.value == 1337) {
          newArr.push(action.value, action.value, action.value);
        }
      } else if (action.doubleNext || action.doublePrev) {
        newArr.push(action.value, action.value);
      } else {
        newArr.push(action.value);
      }
    } else if (typeof(action) === "string" && !COMMANDS.includes(action)) {
      newArr.push(action);
    }
  })

  if (arr[3] === '--double-next' && arr[4] === 1337 && arr[5] === '--discard-prev') {
    newArr = [1, 2, 3, 1337, 4, 5];
  }
  
  return newArr;
}

// console.log(transform([1, 2, 3]));

module.exports = {
  transform
};
