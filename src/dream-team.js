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
function createDreamTeam(arr) {
  throw new NotImplementedError('Not implemented');
    let strArr = []
    let team = ""
    
    for(let i=0; i <members.length; i++){
        if(typeof(members[i])=="string"){
            strArr.push(members[i])
        }
    }
    for(let j=0;j<strArr.length; j++){
        strArr.sort()
        team += strArr[j].toUpperCase().slice(0,1)
  
    }
  return team 
}

module.exports = {
  createDreamTeam
};
