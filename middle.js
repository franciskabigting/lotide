const eqArrays = function(array1, array2) {
  let output = true;
  if (array1.length !== array2.length) return false;
  for (let element = 0; element < array1.length; element += 1) {
    if (Array.isArray(array1[element]) || Array.isArray(array2[element])) {
      output = output && eqArrays(array1[element], array2[element]);
    } else if (array1[element] !== array2[element]) {
      output = output && false;
    }
  }
  return output;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Array Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Array Failed: ${array1} !== ${array2}`);
  }
};



const middle = function (array) {
  let output = [];
  const arrLength = array.length;
  if (arrLength <= 2) {
    return output;
  } else if (arrLength % 2 === 0) { //even number
    output = array.slice(((arrLength/2)-1), (arrLength/2)+1);
  } else { //odd number
    output = array.slice(arrLength/2, (arrLength/2)+1);
  }
  return output;
};

console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));