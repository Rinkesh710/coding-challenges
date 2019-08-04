
// Coding Challenge 1
// A Number is called a SPY Number If The Sum and Product Of It's Digits Are Equal

// For eg:- 123 is a SPY Number (1 + 2 + 3) = (1 * 2 * 3)

function checkSPYNumber(numberToCheck)
{
    let sumOfAllDigits = 0;
    let productOfAllDigits = 1;
    numberToCheck = numberToCheck.toString();
    for (let i = 0;i < numberToCheck.length; i++)
    {
        sumOfAllDigits += Number(numberToCheck[i]);
        productOfAllDigits *= Number(numberToCheck[i]);
    }
    return sumOfAllDigits === productOfAllDigits;
}

// Test Cases

console.log(checkSPYNumber(123) ? 123 + ' is a SPY Number' : 123 + ' is not a SPY Number');
console.log(checkSPYNumber(12345) ? 12345 + ' is a SPY Number' : 12345 + ' is not a SPY Number');
console.log(checkSPYNumber(1124) ? 1124 + ' is a SPY Number' : 1124 + ' is not a SPY Number');
console.log(checkSPYNumber(4233) ? 4233 + ' is a SPY Number' : 4233 + ' is not a SPY Number');