
/* 
A number is called Perfect Number, if it's equal to the sum of it's proper positive divisor excluding the number
itself.

For Example, 6 is a Perfect Number
( 1 + 2 + 3 = 6)

Write a program to check whether the number is a perfect number or not.
*/

function checkPerfectNumber(num) {
    if (num <= 0)
     return "Invalid Number";
    let properDivisorsSum = 0;
    for (let i = num - 1; i > 0; i--) {
        if (num % i === 0) {
            properDivisorsSum += i;
        }
    }
    return num === properDivisorsSum ? `${num} is a Perfect Number` : `${num} is not a Perfect Number`;
}

// Test Cases
console.log(checkPerfectNumber(-8));
console.log(checkPerfectNumber(6));
console.log(checkPerfectNumber(13));
console.log(checkPerfectNumber(24));
console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(496));
console.log(checkPerfectNumber(497));

