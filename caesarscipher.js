function rot13(str) { // LBH QVQ VG!
  
  //Configure a ROT13 lookup table to make this nice and easy.
  let lookupTable = {
      A: "N", B: "O", C: "P", D: "Q", E: "R", F: "S", G: "T", H: "U", I: "V", J: "W", K: "X", L: "Y", M: "Z",
      N: "A", O: "B", P: "C", Q: "D", R: "E", S: "F", T: "G", U: "H", V: "I", W: "J", X: "K", Y: "L", Z: "M"
  }
  //split the string into an array of characters.
  let testStr = str.split('');
  //initialize the result
  let resultStr = '';

  //loop through the array of characters, and if the character exists in the lookup table then use the ROT13 value, otherwise just use the existing value (to preserve punctuation etc)
  for (let c in testStr) {
      resultStr += (testStr[c] in lookupTable) ? lookupTable[testStr[c]] : testStr[c];
  }
  return resultStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
