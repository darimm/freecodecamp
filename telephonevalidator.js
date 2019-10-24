function telephoneCheck(str) {
//Please kill me.
let phoneRegex = /(^[1]*[ ]*(?=[(])[(]\d{3}[)][ ]*\d{3}[ \-]*\d{4}$)|(^[1]*[ \-]*(?![(])[^(]?\d{3}[^)]?[ \-]*\d{3}[ \-]\d{4}$)|(^\d{10}$)/;

return phoneRegex.test(str);
}

telephoneCheck("555-555-5555");
