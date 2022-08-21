
function findMatching(array, aString){
  const newArray = array.filter(element => element.toLowerCase() === aString.toLowerCase());
  return newArray;
}

function fuzzyMatch(array, char){
  const newArray = array.filter(element => element.indexOf(char) === char.indexOf(char));
  return newArray;
}

function matchName(array, aString){
    const newArray = array.filter(element => element.name === aString);
    return newArray;
}