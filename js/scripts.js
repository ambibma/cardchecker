function cardConvert(cardString){
  let cardSplit = cardString.split("");
  let cardSplitNumber = cardSplit.map(function(element){
    return parseInt(element);
  });
  return cardSplitNumber;
}

function everyOtherNumber(cardSplitNumber){
  let transformNums = [];
  for (let i=(cardSplitNumber.length -1); i>=0; i-=2){
    transformNums.push(cardSplitNumber[i] * 2);
  }
  return transformNums ;
}

function digitSum(transformNums) {
  let transformSumNums = [];
  for (let i = 0; i<transformNums.length; i++){
    if (transformNums[i] < 10){
      transformSumNums.push(transformNums[i]);
    } else {
      let dubDigs = transformNums[i]; 
      let splitDubDigs = dubDigs.toString().split("");
      let counter = 0; 
      for (let j = 0; j<splitDubDigs.length; j++){
        counter += parseInt(splitDubDigs[j]); 
      }
      transformSumNums.push(counter);
    }
  } 
  return transformSumNums;
}

function notEveryOtherNumber(cardSplitNumber) {
  let regNums = [];
  for (i=(cardSplitNumber.length -2); i>=0; i-=2){
    regNums.push(cardSplitNumber[i]);
  }
  return regNums;
}

function allTheNumbers(genericArray){
  let counter = 0; 
  for (let i = 0; i<genericArray.length; i++){
    counter += genericArray[i]; 
  }    
  return counter;
} 

function luhn(cardNumberString){
  let numArray = cardConvert(cardNumberString);
  let regNums = notEveryOtherNumber(numArray);
  let mathNums = digitSum(everyOtherNumber(numArray)); 
  let luhnScore = allTheNumbers(regNums) + allTheNumbers(mathNums);
  if ((luhnScore % 10) === 0) {
    return true;
  } else {
    return false;
  }
}

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
