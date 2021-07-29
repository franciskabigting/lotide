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


const without = function(array, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < itemsToRemove.length; x++) {
        break;
      }
      if (itemsToRemove.length - 1 === x) {
        newArray.push(array[i]);
      }
    }
  }
  return newArray;

const words = ["hello", "world", "lighthouse"];
without(words, ["hello"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);