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
//   throw new NotImplementedError('Not implemented');
    let strArr = []
    let team = ""
    if(members){
      for(let i=0; i < members.length; i++){
    if(typeof(members[i])=='string'){

      let name = members[i].trim() //берем имя и убираем пробелы
      strArr.push(name[0].toUpperCase())
    //   console.log(strArr)
    //   let letter = name[0].toUpperCase()
    //   team+=letter
    //   console.log(team)
    }
   }
   strArr.sort()
   console.log(strArr)   
strArr.sort().forEach(memb => team+=memb[0].toUpperCase())
return team
    }else return false
}

module.exports = {
  createDreamTeam
};
