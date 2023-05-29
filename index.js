function checkCashRegister(price, cash, cid) {
  const currencyValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let changeDue = cash - price;
  let change = [];
  let cidTotal = 0;

  // Calculate the total cash in the drawer (cid)
  for (let i = 0; i < cid.length; i++) {
    const currency = cid[i][0];
    const amount = cid[i][1];
    cidTotal += amount;
  }

  // Handle cases where the change due is equal to the total cash in the drawer
  if (changeDue === cidTotal) {
    return { status: "CLOSED", change: cid };
  }

  // Handle cases where there is insufficient cash in the drawer
  if (changeDue > cidTotal) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Calculate change using the available cash in the drawer (cid)
  cid.reverse().forEach(([currency, amount]) => {
    const currencyValue = currencyValues[currency];
    let currencyAmount = 0;

    while (changeDue >= currencyValue && amount > 0) {
      changeDue -= currencyValue;
      amount -= currencyValue;
      changeDue = Math.round(changeDue * 100) / 100;
      currencyAmount += currencyValue;
    }

    if (currencyAmount > 0) {
      change.push([currency, currencyAmount]);
    }
  });

  // Handle cases where exact change cannot be provided
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: change };
}

// Example usage
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));