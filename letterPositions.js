const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== ' ') { 
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};


const eqArrays = function(array1, array2) {
  let tempHolder;
  if (array1.length !== array2.length) { 
    tempHolder = false;
  } else { 
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) { 
        tempHolder = true;
      } else {
        tempHolder = false;
      }
    }
  }
  return tempHolder;
};


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Array Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Array Failed: ${array1} !== ${array2}`);
  }
};


assertArraysEqual(letterPositions("hello").e, [1]);