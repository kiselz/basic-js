const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let counts = {};
  for (let i = 0; i < names.length; i++) {
    if (!counts[names[i]]) counts[names[i]] = 0;
    console.log(counts);
    let oldName = names[i];
    let newName = `${names[i]}(${counts[names[i]]})`;
    if (counts[names[i]] > 0) {
      names[i] = newName;
      if (!counts[newName]) counts[newName] = 1;
      else counts[newName] += 1;
    }
    counts[oldName] += 1;
  }
  return names;
}

module.exports = {
  renameFiles
};

// console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']), ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']);