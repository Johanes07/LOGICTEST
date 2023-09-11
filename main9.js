function countAndSortLetters(input) {
    
    const letterCount = {};

   
    input = input.toLowerCase();

   
    for (let i = 0; i < input.length; i++) {
        const letter = input[i];
        if (letter.match(/[a-z]/i)) {
            if (letterCount[letter]) {
                letterCount[letter]++;
            } else {
                letterCount[letter] = 1;
            }
        }
    }

    
    const sortedResult = Object.keys(letterCount).sort();

    
    for (const letter of sortedResult) {
        console.log(`${letter}: ${letterCount[letter]}`);
    }
}

const userInput = "Bismillah";
countAndSortLetters(userInput);
