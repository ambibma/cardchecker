input: card number (its a string) e.g "4102080860435620"

Step 1: Luhn's Algorithm
-Get Credit Card String => array of numbers (**)
- Do Luhn's math and convert the array to a new transformed array
  - Iterate every other digit starting from the end 
  - Multiply that digit by 2
  - If the number is a 2 digit number, add the digits together (***)
-Add each number of transformed array together
-Return valid sum of the digits of the transformed array ends in a 0 (***)

Step 2: First Digit is what type of card sorter
- Grab the first digit of the number
- Check if 4,5,6 for Visa, Mastercard, Discover
- Check if 3, and then check second digit is 4 or 7 for Amex
- Return the type of card 

Step 3: Length Validation
- Get Credit Card String => array of numbers (**)
- Check length of array 
- Check if it's 15, its Amex
- Check if its 16, its Visa Mastercard Discover
- Return type of card

Step 4: Put all the information together:
Valid Card if:
- Passes Luhn's Algo
- First Digit is a valid type of card
- Make sure the length of the card matches the type of card

Invalid if anything else

output: a string response of valid or not valid

Describe function()
Test:
Code:
Expected Output:

Describe cardConvert(String)
Test: It will return a string input credit card number and return an array of numbers corresponding to that card number
Code: cardConvert("12345")
Expected Output: [1,2,3,4,5]

Describe everyOtherNumber(array)
test: It will return every other digit in the array starting from the end
code: everyOtherNumber([1,2,3,4,5])
Expected Output: [1,3,5] , [3,5,1], [5,1,3], [5,3,1]?
([1,2,3,4]) => [2,4]
([1,2]) => [2]
([1]) => [1]

describe notEveryOtherNumber(array)
test: It will return not every other position
code: everyOtherNumber([1,2,3,4,5])
Expected Output: [2,4] 
([1,2,3,4]) => [1,3]
([1,2]) => [1,]
([1]) => [undefined]

Describe everyOtherNumber(array)
test: It will return every other digit in the array from the end and also multiply it by 2.
code: everOtherNumber([1,2,3,4,5])
expected output: [2,6,10] 

Describe digitSum(array)
test: It will return every other digit in the array from the end and also multiply it by 2.If the number is double digits, it will add the digits together
code: digitSum([1,2,3,4,5])
expected output: [2,6,1+0] 

Describe allTheNumbers(array);
test: it will add together all digits inside of the array
code: allTheNumbers([1,2,3,4,5,])
expected output: 15 or [1 + 2 + 3 + 4 + 5]

Describe luhn(string)
test: it will determine if the transformed array sum ends in 0
code: luhn("12345")
=> cardConvert("12345") => [1,2,3,4,5]
=> everyOtherNumber([1,2,3,4,5]) => [2,6,1]
=> notEveryOtherNumber([1,2,3,4,5]) => [2,4]
=> allTheNumbers([2,6,1]) + allTheNumbers([2,4])
=> sort if last number is 0
expected output: false


step 2

describe firstNumber(string)
test: It will grab the first number of credit card string.
code: firstNumber("12345")
=> cardConvert("12345") => [1,2,3,4,5]
=> check to see if firstNumber is a 4,5,6 or if 3 then second digit 4 or 7
return: type of card, visa(4), Mastercard (5), discover(6), AmEx(34 or 37)

step 3

describe lengthOf(string)
test: it will return the length of the credit card string
code: lengthOf("12345")
expected output: 5

step 4

describe validator(string)
test: it will return whether the credit card string is valid based on results of Luhns, firstNumber, and lengthOf
code: validator("12345")
=> return valid IF:
- Luhn is true (aka the number ends in 0)
- firstNumber gives a type (Visa, Mastercard, etc.)
AND - lengthOf matches the card Type (visa = 16, Amex = 15)
=> return invalid elsewise
