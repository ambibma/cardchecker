// Describe cardConvert(String)
// Test: It will return a string input credit card number and return an array of numbers corresponding to that card number
// Code: cardConvert("12345")
// Expected Output: [1,2,3,4,5]
function cardConvert(cardString){
  let cardSplit = cardString.split("");
  let cardSplitNumber = cardSplit.map(function(element){
    return parseInt(element);
  });
  return cardSplitNumber;
}

// Describe everyOtherNumber(array)
// test: It will return every other digit in the array starting from the end
// code: everyOtherNumber([1,2,3,4,5])
// Expected Output: [1,3,5] , [3,5,1], [5,1,3], [5,3,1]?

function everyOtherNumber(cardSplitNumber){
  let transformNums = [];
  for (i=(cardSplitNumber.length -1); i>=0; i-=2){
    transformNums.push(cardSplitNumber[i]);
  }
  return transformNums;
}

// describe notEveryOtherNumber(array)
// test: It will return not every other position
// code: everyOtherNumber([1,2,3,4,5])
// Expected Output: [2,4] 

function notEveryOtherNumber(cardSplitNumber) {
  let regNums = [];
  for (i=(cardSplitNumber.length -2); i>=0; i-=2){
    regNums.push(cardSplitNumber[i]);
  }
  return regNums;
}

// Describe everyOtherNumber(array)
// test: It will return every other digit in the array from the end and also multiply it by 2.
// code: everOtherNumber([1,2,3,4,5])
// expected output: [2,6,10] 

// Describe everyOtherNumber(array)
// test: It will return every other digit in the array from the end and also multiply it by 2.If the number is double digits, it will add the digits together
// code: everOtherNumber([1,2,3,4,5])
// expected output: [2,6,1+0] 

// Describe allTheNumbers(array);
// test: it will add together all digits inside of the array
// code: allTheNumbers([1,2,3,4,5,])
// expected output: 15 or [1 + 2 + 3 + 4 + 5]

// Describe luhn(string)
// test: it will determine if the transformed array sum ends in 0
// code: luhn("12345")
// => cardConvert("12345") => [1,2,3,4,5]
// => everyOtherNumber([1,2,3,4,5]) => [2,6,1]
// => notEveryOtherNumber([1,2,3,4,5]) => [2,4]
// => allTheNumbers([2,6,1]) + allTheNumbers([2,4])
// => sort if last number is 0
// expected output: false


// step 2

// describe firstNumber(string)
// test: It will grab the first number of credit card string.
// code: firstNumber("12345")
// => cardConvert("12345") => [1,2,3,4,5]
// => check to see if firstNumber is a 4,5,6 or if 3 then second digit 4 or 7
// return: type of card, visa(4), Mastercard (5), discover(6), AmEx(34 or 37)

// step 3

// describe lengthOf(string)
// test: it will return the length of the credit card string
// code: lengthOf("12345")
// expected output: 5

// step 4

// describe validator(string)
// test: it will return whether the credit card string is valid based on results of Luhns, firstNumber, and lengthOf
// code: validator("12345")
// => return valid IF:
// - Luhn is true (aka the number ends in 0)
// - firstNumber gives a type (Visa, Mastercard, etc.)
// AND - lengthOf matches the card Type (visa = 16, Amex = 15)
// => return invalid elsewise
