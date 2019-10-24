function recurse_MakeChange(changeDue, cashInDrawer, callback) {
  var tempArr = cashInDrawer.pop();
  var counter = 0;
  var lookupTable = {
    'PENNY': 1,
    'NICKEL': 5,
    'DIME': 10,
    'QUARTER': 25,
    'ONE': 100,
    'FIVE': 500,
    'TEN': 1000,
    'TWENTY': 2000,
    'ONE HUNDRED': 10000
  }

  while (changeDue >= (lookupTable[tempArr[0]]) && (tempArr[1] > 0)) {
    counter += 1;
    changeDue -= lookupTable[tempArr[0]];
    tempArr[1] -= lookupTable[tempArr[0]];
  }
  callback.change.push([tempArr[0], counter * lookupTable[tempArr[0]]]);

  if (cashInDrawer.length > 0) {
    recurse_MakeChange(changeDue, cashInDrawer, callback);
  } else {
    if (changeDue > 0) {
      callback.status = "INSUFFICIENT_FUNDS";
      callback.change = [];
    } else {
      callback.status = "OPEN";
    }
  }
}

function checkCashRegister(price, cash, cid) {
  var drawer = cid.map(x => [x[0], Number((x[1] * 100).toPrecision(7))]);
  var t_cash = (drawer.reduce((total, x) => total + x[1], 0));
  var due = (cash * 100) - (price * 100);
  var returnVal = {};
  returnVal.status = "";
  returnVal.change = [];

  recurse_MakeChange(due, drawer, returnVal);
  if (due == t_cash) {
    returnVal.status = "CLOSED";
    returnVal.change = [...returnVal.change.map(x => [x[0], x[1] / 100])].reverse();
  } else {
    returnVal.change = [...returnVal.change.map(x => [x[0], x[1] / 100])].filter(y => y[1] > 0);
  }
  // Here is your change, ma'am.
  return returnVal;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]] 
 
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
