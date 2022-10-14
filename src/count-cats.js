const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */) {
  throw new NotImplementedError('Not implemented');
  let count = 0
  let newArr = matrix.flat(Infinity)
  for(let i =0; i< newArr.length; i++){
    if(newArr[i] == '^^'){
      return count =+1
    }else return 0
  }
}

module.exports = {
  countCats
};
