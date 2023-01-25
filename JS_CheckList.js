
// 1. Declare string, number, boolean variable

const name = 'Sayma';
var age = 20;
var isLover = true;

// 2. update the let and const value

const country = 'Bangladesh';
// country =  'Moon';  {Cannot be  updated}

let friend = 'Nahid';
friend = 'hafiz';
// console.log(friend);

// 3. sum, diff, multiple, division, remainder between two numbers

const num1 = 56;
const num2 = 8;
const sum = num1 + num2;
const dif = num1 - num2
const mul = num1 * num2;
const division = num1 / num2;
const remainder = num1 % num2;

console.log(sum, dif, mul, division, remainder);

// 4. compare two variable with (<, > , == , ===, !=, <=, >= )

// some problems to be solved

//  7 (find the odd numbers between 7 to 19 using while loop)

// const i = 7;
// while( i<= 19){
//     console.log('Odd Numbers:', i);
//     i++
// }

// concept 8 (Declare an array )

const players = ['musfiz', 'tamim', 'mahmudullah', 'sakib', 'Mashrafi', 'Miraz','Mustafiz'];
players[3] = 'Liton'
players.push('Moshiur')
players.push('Salehin')
players.pop()
console.log('Array elements', players.length);
// console.log(players);

// Concept 9 (Loop over an array with for loop)

// approach 1
// for(let i = 0; i < players.length; i++){
//     const player = players[i];
//     console.log(player);
// }

// approach 2
for(const player of players){
    // console.log(player);
}

// Concept 10 (show the number greater than 80 from an array)

const numberArray = [165, 79, 25, 56, 97, 80, 26, 84];

for(number of numberArray){
    if(number > 80){
        // console.log(number);
    }
}

// Concept 11 ( Find the multiplication of three numbers)

function multiple(x, y, z){
    return x*y*z;
}

console.log("Multiple of three numbers" ,multiple(1,2,3));

// Concept 12 (Declare an object an change a property value)

const myLover = {
    name:'Sayma',
    class: '10',
    address: 'Borishal'
}

// myLover.class = '11';
myLover['class']= '11'

console.log(myLover);

// Problem solving Checklist

// Problem 1 (Find feet to inch)

function feetToInch(feet){
    return feet * 12
}

const inches = feetToInch(2)
console.log("The inch is:",inches);

// Problem 2 (Find centimeter to meter)

function centimeterToMeter(cm){
return cm / 100
} 

const meter = centimeterToMeter(200);
console.log('The meter is;', meter);

// Problem 3 (Find the total Required paper)

function paperRequirements(firstBook, secondBook, thirdBook){
    const firstBookpageRequire = 100;
    const SecondBookpageRequire = 200;
    const thirdBookpageRequire = 300;

    const totalFirstBookPage = firstBook * firstBookpageRequire;
    const totalSecondBookPage = secondBook * SecondBookpageRequire;
    const totalThirdtBookPage = thirdBook * thirdBookpageRequire;

    return totalFirstBookPage + totalSecondBookPage + totalThirdtBookPage;
}

const pages = paperRequirements(2, 3, 4);
console.log('Total pages Require:', pages);

// Problem 4 (find the long name of best friends from an array)

function bestFriend(friends){
let friendName = friends[0].length
    for(let i = 0; i < friends.length; i++){
        const friend = friends[i];
        if(friend.length > friendName){
            friendName = friend
            return friendName
        }
    }
}

const bestFriendArray = ['Nahid', 'Hafiz', 'Salehin', "Osman", 'Noman'];
const friends = bestFriend(bestFriendArray)
console.log("Long Named Friend :",friends);

// Problem 5 (put the positive numbers in an array and break the loop if find the negative number)

const mixedArray = [12, 45, 39, 75, 0 , -9, 58, -80];

function positiveNumbers(numbers){
    let newArray = []
    for(let i = 0; i < mixedArray.length; i++){
        const number = numbers[i]
        if(number >= 0){
            newArray.push(number)
        }
        else{
            break
        }
    }
    return newArray;
}

const positive = positiveNumbers(mixedArray);
console.log(positive);