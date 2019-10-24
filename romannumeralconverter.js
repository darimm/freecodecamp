function convertToRoman(num) {
  if (num > 3999 || num < 1) {
    return "Number Must be between 1 and 3999";
  }
  //roman numerals lookup table. Multidimensional Array for [[ones],[tens],[hundreds],[thousands]]
  let romanNumerals = [
    ['','I','II','III','IV','V','VI','VII','VIII','IX'],
    ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
    ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
    ['','M','MM','MMM']
  ];
  
//convert the number to a string array, each character getting its own position.
  let numbers = num.toString().split('');

//initialize the result
  let result = '';

  for (let x = 0; x < numbers.length; x++) {
      //Build our result and reference our lookup table, start with the highest order value (thousands if it's thousands, etc.
      result += romanNumerals[numbers.length-1-x][numbers[x]];
    }
  return result;
}

convertToRoman(11142);
