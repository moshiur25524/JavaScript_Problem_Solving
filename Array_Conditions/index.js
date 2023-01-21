// -------------------------------- Practice Problem 1 -----------------------------------

var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
const BananaIndex = fruits.indexOf('Banana')
// console.log(BananaIndex); {Output: 1}

// b) Remove ‘Orange’ and add ‘Watermelon’.
const RemovedItem = fruits.pop()
// console.log(RemovedItem); {Output: Orange}
const setItem = fruits.push('Watermelon')
// console.log(fruits); {Output: [ 'Apple', 'Banana', 'Watermelon' ]}

// -------------------------------- Practice Problem 2 -----------------------------------

// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

const me = 85;
const Tom = 66;
const Jane = 95;
const Peter = 56;
const John = 40;




// -------------------------------- Practice Problem 3 -----------------------------------

// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.

const a = 13;
const b = 79;
const c = 45;

if(a > b){
    // console.log(a +' is the Largest Number ');
}
else if (b > c) {
    // console.log(b +' is the Largest Number ');
}
else{
    // console.log(c +' is the Largest Number ');
}

// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.

const side1 = 8;
const side2 = 8;
const side3 = 8;

if((side1 === side2 || side2 !== side3) && side1 !== side3){
console.log('The Triangle is not an Isosceles');
}
else{
    console.log('The Triangle is an Isosceles');
}