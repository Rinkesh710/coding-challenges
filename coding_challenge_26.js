
// Coding Challenge 26
/* 
Write a Program Which Will Take One String as Input & Gives Every Possible Rotations Of Characters until the
First Character Returns To its Position
*/

//Eg:- If i pass bat as string then output should be ['atb', 'tba']

function giveAllPossibleCombinations(inputString) {
    let possibleCombinationsArray = [];
    for (let i = 1; i < inputString.length; i++)
    {
            inputString += inputString[0];
            inputString = inputString.slice(1,inputString.length);
            possibleCombinationsArray.push(inputString);
    }
    // if (possibleCombinations.length)
    return possibleCombinationsArray.length ? possibleCombinationsArray : [""];
}


// Test Cases

console.log(giveAllPossibleCombinations('rinkesh'));
console.log(giveAllPossibleCombinations('next'));
console.log(giveAllPossibleCombinations('gen'));
console.log(giveAllPossibleCombinations('coder'));
console.log(giveAllPossibleCombinations(""));