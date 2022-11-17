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

// Describe everyOtherNumber(array)
// test: It will return every other digit in the array from the end and also multiply it by 2.
// code: everOtherNumber([1,2,3,4,5])
// expected output: [2,6,10] ✓


function everyOtherNumber(cardSplitNumber){
  let transformNums = [];
  for (let i=(cardSplitNumber.length -1); i>=0; i-=2){
    transformNums.push(cardSplitNumber[i] * 2);
  }
  return transformNums ;
}

// Describe everyOtherNumber(array)
// test: It will return every other digit in the array from the end and also multiply it by 2.If the number is double digits, it will add the digits together
// code: everOtherNumber([1,2,3,4,5])
// expected output: [2,6,1+0] 
// Start:transformNums = [1,5,10]       
//                        0 1 2

// transformSumNums = [];
// i = 0 , transformNums[0] = 1
// transformSumNums.push(1) / push(transformNums[0])
// transformSumNums = [1];
//                     0
//     i++
// i=1 , transformNums[1] = 5
// transformSumNums.push(5) / push(transformNums[1])
// transformSumNums = [1, 5];
//                     0, 1
//     i++

//     i=2 , transformNums[2] = 10
// transformSumNums.push()
// transformSumNums = [1, 5, 10];
//                     0, 1


// End: [1,5,1+0]
//       0 1  2

// 15 => toString(15)=>'15' => ('15').split => ['1','5'] => [1,0] => sum it all up => 1

function digitSum(transformNums) {
  let transformSumNums = [];
  for (let i = 0; i<transformNums.length; i++){
    if (transformNums[i] < 10){
      transformSumNums.push(transformNums[i]);
    } else {
      let dubDigs = transformNums[i]; // 15
      let splitDubDigs = dubDigs.toString().split(""); // ['1','5']
      let counter = 0; 
      for (let j = 0; j<splitDubDigs.length; j++){
        counter += parseInt(splitDubDigs[j]); 
      }
      transformSumNums.push(counter);
    }
  } 
  return transformSumNums;
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


// Describe allTheNumbers(array);
// test: it will add together all digits inside of the array
// code: allTheNumbers([1,2,3,4,5,])
// expected output: 15 or [1 + 2 + 3 + 4 + 5]

function allTheNumbers(genericArray){
  let counter = 0; 
  for (let i = 0; i<genericArray.length; i++){
    counter += genericArray[i]; 
  }    
  return counter;
} 

// Describe luhn(string)
// test: it will determine if the transformed array sum ends in 0
// code: luhn("12345")
// => cardConvert("12345") => [1,2,3,4,5]
// => everyOtherNumber([1,2,3,4,5]) => [2,6,1]
// => notEveryOtherNumber([1,2,3,4,5]) => [2,4]
// => allTheNumbers([2,6,1]) + allTheNumbers([2,4])
// => sort if last number is 0
// expected output: false

function luhn(cardNumberString){ // "12345"
  let numArray = cardConvert(cardNumberString); // [1,2,3,4,5]
  let regNums = notEveryOtherNumber(numArray); // [2,4]
  let mathNums = digitSum(everyOtherNumber(numArray)); // digitSum([1,3,10]) = [1,3,1]
  let luhnScore = allTheNumbers(regNums) + allTheNumbers(mathNums); //6 + 5
  if ((luhnScore % 10) === 0) {
    // If a number ends in 0, it must be divisible by 10
// If a 100 % 10 = 0, therefore 100 is divisble by 10
// If a number has 0 remainder when modulo 10, its divisble by 10 
    return true;
  } else {
    return false;
  }
}

// alternative solution
    // let luhnArray = luhnScore.toString().split('')
    // if (luhnArray[luhnArray.length-1] === '0') {
    //   return true
    // } else {
    //   return false;
    // }


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
