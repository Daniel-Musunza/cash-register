# Cash Register Drawer

The `checkCashRegister()` function is a JavaScript function that helps determine the change to be given from a cash register drawer based on a purchase price and payment. It considers the availability of cash in the drawer and returns the appropriate change in different scenarios.

## Function Signature

```javascript
function checkCashRegister(price, cash, cid)


Sure! Here's an example of a README file that explains the usage and functionality of the checkCashRegister() function:

markdown
Copy code
# Cash Register Drawer

The `checkCashRegister()` function is a JavaScript function that helps determine the change to be given from a cash register drawer based on a purchase price and payment. It considers the availability of cash in the drawer and returns the appropriate change in different scenarios.

## Function Signature

```javascript
function checkCashRegister(price, cash, cid)

## Parameters
    price (number): The purchase price of the item.
    cash (number): The payment provided by the customer.
    cid (array): The cash-in-drawer (cid) is a 2D array that lists the available currency and its amounts.

## Return Value
The checkCashRegister() function always returns an object with two keys:

    status (string): Represents the status of the cash register drawer. Possible values are:

    "INSUFFICIENT_FUNDS": If the cash-in-drawer is less than the change due, or if the exact change cannot be given.
    "CLOSED": If the cash-in-drawer is equal to the change due, meaning the drawer is closed.
    "OPEN": If the cash-in-drawer has sufficient funds to provide the change due.
    change (array): Represents the change to be given from the cash register drawer. It contains an array of currency units and their amounts, sorted in highest to lowest order.

## Examples
```javascript
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// Output: { status: "OPEN", change: [["QUARTER", 0.5]] }

In this example, the purchase price is $19.5, and the customer provides $20. The cash-in-drawer consists of various currency units with their respective amounts. The function calculates the change due and determines that it can provide a quarter ($0.25) in change. Hence, the status is "OPEN," and the change is an array with the currency unit "QUARTER" and the amount $0.5.

## Usage
1. Clone the repository:
```bash
git clone https://github.com/your-username/your-repository.git

2. Include the checkCashRegister() function in your JavaScript code.

3. Call the checkCashRegister() function with the appropriate arguments to calculate the change from the cash register drawer.

4. Use the returned object to determine the status and change to be given.

## License
This project is licensed under the MIT License.

```css

Remember to update the repository URL and your username in the usage section 