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
function createDreamTeam(/* members */) {
  throw new NotImplementedError('Not implemented');
   let strArr = []
let team = ""

for(let i=0; i <arr.length; i++){
    if(typeof(arr[i])=="string"){
        strArr.push(arr[i])
    }
}
for(let j=0;j<strArr.length; j++){
    strArr.sort()
    team+= strArr[j].slice(0,1)
    console.log(team)
}
}

module.exports = {
  createDreamTeam
};
