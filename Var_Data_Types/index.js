//--------------------- Module 16 Problem solving ------------------------
// https://drive.google.com/drive/u/1/folders/1FbntkDTYNA33BuiqJ9TVF9-YWlqvhZch

// -------------------------- Practice Problem 1 ------------------------
// Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
// help Harry calculate how much money the shopkeeper will return.

// Input:
// The first line of the input is the taka Harry’s mom gave him.
// The second line is the cost of 1 kg of oranges and 1 kg of apples.

// Output:
// Print the result.

// Js Code:

const fromMom = 1000;
const productsPrice = 700;
const shopkeeperWillReturen = fromMom - productsPrice;

// console.log(shopkeeperWillReturen) {Output 300}

// -------------------------- Practice Problem 2 ------------------------

// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
// Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Js code :

const Mathematics = 75.25;
const Chemistry = 65;
const Physics = 80;
const Biology = 35.45;
const Bangla = 99.50;

const TotalMarks = Mathematics + Chemistry + Physics + Biology + Bangla
const average = TotalMarks / 5
const averageWithFixedDecimal =  average.toFixed(2)

// console.log(averageWithFixedDecimal); {Output 71.04}

// -------------------------- Practice Problem 3 ------------------------

// John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to
// combine these two strings and print them in one line. Help John write the program.

// Input:
// The first and the second lines of the input contain the strings.

// Output:
// Print the result in one line.

// js code:

const firstLine = 'I am going to be';
const lastLine = 'an awesome web developer';

const fullLine = firstLine + " " + lastLine ;

// console.log(fullLine); {output: I am going to be an awesome web developer}

// -------------------------- Practice Problem 4 ------------------------

// Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the
// remainder would be if she divided the number by 5. Help Sarah write the program.

// Input:
// The first line of the input contains the number.

// Output:
// Print the remainder.

// Js code:

const givenNumber = 119;
const remainder = givenNumber % 5 ;

// console.log(remainder); {Output: 4}

