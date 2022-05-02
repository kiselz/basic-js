const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (typeof value === "undefined") this.arr.push('( )');
    else this.arr.push(`( ${value} )`);
    return this;
  },
  reset() {
    this.arr = [];
  },
  removeLink(position) {
    if (parseInt(position) !== position || position <= 0 || position > this.arr.length) {
      this.reset();
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let chain = this.arr.join('~~');
    this.reset();
    return chain;
  }
};

module.exports = {
  chainMaker
};
