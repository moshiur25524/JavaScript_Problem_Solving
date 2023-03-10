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

var myFriends = [me, Tom, Jane, Peter, John];

for (var i = 0; i < myFriends.length; i++) {
    var friend = myFriends[i];
    if (friend > 80) {
        // console.log(friend, ' Get A Grade');
    }
    else if (friend > 60) {
        // console.log(friend, ' Get B Grade');
    }
    else if (friend > 50) {
        // console.log(friend, ' Get C Grade');
    }
    else if (friend <= 40) {
        // console.log(friend, ' Get D Grade');
    }
    else {
        // console.log(friend, ' Get F Grade');
    }
}




// -------------------------------- Practice Problem 3 -----------------------------------

// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.

var a = 80;
var b = 125;
var c = 100;

if (a > b) {
    if(a > c){
        console.log(a, 'is the largest number');
    }
    else{
        console.log(c, 'is the largest number');
    }
}
else{
    if(b>c){
        console.log(b, 'is the largest number');
    }
    else{
        console.log(c, 'is the largest number');
    }
}


// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.

const side1 = 9;
const side2 = 7;
const side3 = 7;

if (side1 === side2 && side1 !== side3) {
    console.log('The Triangle is an Isosceles');
}
else if(side2 === side3 && side2 !== side1){
    console.log('The Triange is also an Isoscles');
}
else{
    console.log('The triangle is not isoscles');
}

// Find Even or Odd Number 

var num = 6;

if( num % 2 == 0) {
    console.log(num,' is an even Number');
}
else{
    console.log(num , 'is an Odd Number');
}