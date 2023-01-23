// Practice Problem 1

function foo() {
    console.log('foo');
    bar()
}

function bar() {
    console.log('bar');
}

foo()

// Practice Problem 2

function make_avg(num1, num2, num3) {
    return (num1 + num2 + num3) / 3
}

const num1 = 5;
const num2 = 19;
const num3 = 25;

const average = make_avg(num1, num2, num3);
// const averageInTwoDecimal = parseFloat(average.toFixed(2))
// console.log('The average is:', averageInTwoDecimal);

// ----------------------practice problem 3-----------------

// const numbers = [12, 10, 5, 9, 35];
// for (i = 0; i < numbers.length; i++) {
//     const number = numbers[i]
//     let sum = 0
//     number = number + sum;

//     // console.log(number);
//     const numberAverage = make_avgNumbers(number)
// }
// function make_avgNumbers(number) {

// }

// practic problem 4

// no 1 way

// function odd_even(value){
// if(value % 2 == 0){
//     console.log(value,'is Even');
// }
// else{
//     console.log(value, "is Odd");
// }
// }

// odd_even(6)

// no 2 way

function odd_even() {
    var numb = 6
    if (numb % 2 == 0) {
        console.log(numb, 'is Even');
    }
    else {
        console.log(numb, 'is Odd');
    }
}

// odd_even()

// ------------------------Practic Problem 5-------------------

// const signal = 'green'

// if(signal == 'red'){
//     console.log("Don't Cross the road");
// }
// else if( signal == 'yellow'){
//     console.log("Please Wait a moment");
// }
// else if(signal == 'green'){
//     console.log("You may go now");
// }

// Same Problem using Switch
const signal = 'yellow'

switch (signal) {
    case 'red':
        console.log("Don't Cross the road");
        break;
    case 'yellow':
        console.log("Wait a moment");
        break
    case 'green':
        console.log('You may go now');
        break;
    default:
        console.log('basay guma');

}

// -----------------------Module 19 Practice Problem--------------------

// problem 1 (Multiplication table)

// function multi_Table(multi) {
// const iterate = 13
//  const multiple = iterate * multi
//     console.log(iterate, 'X' , multi , '=', multiple);
// }

// for (i = 1; i <= 10; i++) {
//     multi_Table(i)
// }

// problem 2 (make Lowercase)

// function UpperCaseName(name){
//     const convertedLowercase = name.toLowerCase()
//     return convertedLowercase
// }

// const LowercaseName = UpperCaseName('MosHiur')
// console.log(LowercaseName);

// problem 3 (make full name)

function fullName(firstName, lastName){
    const name = firstName + ' ' + lastName;
    return name;
}

const firstName = "Moshiur";
const lastName = 'Rahman';

const OutputName = fullName(firstName, lastName)
console.log(OutputName);

// Problem 4 (squre of a number)

function squre(x){
    return x*x
}

const squredValue = squre(6)
console.log(squredValue);



