
// Who will get the Delicious cake among three (Jim , Della, Chinku)

// fist way
// function GotCake(x, y, z){
//     if(x > y && x>z){
//         console.log('Jim is will get the cake ');
//     }
//     else if(y>z && y>x){
//         console.log('Della is will get the cake');
//     }
//     else{
//         console.log('Chinku is will get the cake');
//     }
// }

// GotCake(95, 96, 89)

// second way

const Jim = 85;
const Della = 89;
const Chinku = 95;

const getCake = Math.max(Jim, Della, Chinku)
console.log(getCake);

if(Jim === getCake){
    console.log('Jim will get the cake');
}
else if( Della === getCake){
    console.log('Della will get the cake');
}
else{
    console.log("Chinku will get the cake");
}

// HomeWork: Problem (find the lowest number among three numbers)

function lowestNumber(x, y, z){
    if(x<y && x< z){
        console.log(x, 'is the lowest Nubmer');
    }
    else if( y<x && y<z){
        console.log(y, 'is the lowest Number');
    }
    else{
        console.log(z, 'is the lowest Number');
    }
}

// lowestNumber(96, 75, 98);

const leastNumber = Math.min(35, 95, 12);
// console.log(leastNumber, 'is the lowest Number');

//----------------------------- Problem 3 (..... Who is the Tallest.....)------------------------

// first way

function maxInAnArray(numbers){
    let largest = numbers[0]
    for( let i = 0; i < numbers.length ; i++){
        const element = numbers[i]
        // console.log(element);
        if(element > largest){
            largest = element
        }
    }
    return largest
}

const heightArr = [125, 564, 356, 254, 896];

const result = maxInAnArray(heightArr)
// console.log(result, 'is the largest number');

// HomeWork: write a function to get the lowest number from an array

function getLargestNumber(ArrNumbers){

    let lowest = ArrNumbers[0]
    for(let i = 0; i < ArrNumbers.length; i++){
        const element = ArrNumbers[i];
        if(element< lowest){
            lowest = element
        }
        // console.log(element);
    }
    return lowest
}

const Arr2 = [45, 68, 19, 79, 38, 30];
const lowestValue = getLargestNumber(Arr2)
// console.log(lowestValue, 'is the lowest Number');

// Reverse the characters of a word

const myname = 'Moshiur';
const splitedName = myname.split('');
const reversedName = splitedName.reverse();
const joinName = reversedName.join('')
// console.log(joinName);

// Reverse the words of a sentene

const aboutMe = 'I am React Developer';
const splitedSentence = aboutMe.split(' ');
const reverseSentence = splitedSentence.reverse();
const joinTheSentence = reverseSentence.join(' ')

// console.log(joinTheSentence);

// ----------------------- Fibonacci Series ------------------------

const fibo = [0, 1];
let nextFibo = 1
for(let i = 2; i <=10 ; i++){
   fibo[i] = fibo[i-1] + fibo[i-2]
}

console.log(fibo);