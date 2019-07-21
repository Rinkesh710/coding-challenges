
/* Write a Function which will take 4 Arguments 1st String, 2nd Position Where A Old Character Will Get Searched
In Each Word, 3rd is Old Character Which Will Get Searched and 4th is New Character Which Will Replace Old Character if it is
present at the specified position. */


function replacingCharactersInEachWord(str, positionToSearchOldCharacter, oldCharacterToReplace, newCharacterWhichWillReplaceOldCharacter) {
    let individualWordsArray = str.split(" ");
    for (let i = 0; i < individualWordsArray.length; i++) {
        if (oldCharacterToReplace === individualWordsArray[i][positionToSearchOldCharacter - 1]) {
            individualWordsArray[i] = individualWordsArray[i].replace(individualWordsArray[i][positionToSearchOldCharacter - 1], newCharacterWhichWillReplaceOldCharacter);
        }
    }
    return individualWordsArray.join(" ");
}

// Test Cases
console.log(replacingCharactersInEachWord("Next Gen Coder", 2, "u", "i"));
console.log(replacingCharactersInEachWord("Rinkesh Gokulchandani", 3, "k", "p"));
console.log(replacingCharactersInEachWord("I Love Programming", 6 , "a", "o"));
console.log(replacingCharactersInEachWord("Web Development is fun", 1 , "W", "B"));