function palindrome(str) {
  let str2=str.toLowerCase().replace(/[^a-z0-9]/g,"");
  let str3=str2.split('').reverse().join('');
  return str3===str2;
}



palindrome("eye");
