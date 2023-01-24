

// ---------------------inches to feet--------------

function converter(inches){
    return inches / 12
}

const feet = converter(84);
// console.log(feet);

// ------------------miles to kilometer------------------

function distanceConverter(miles){
    return miles * 1.60934;
}

const kilo = distanceConverter(3);
// console.log(kilo);

// Odd or even related

function check(number){
    if(number % 2 == 0){
        return true
    }
    else{
        return false
    }
}

const result = check(21)
// console.log(result);

// ---------------------get all numbers from an array----------------

const array1 = [12, 45, 35, 58, 33];

function sumArray(array){
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        const numb = array[i];
        sum = sum + numb
    }
    // console.log(sum);
    return sum
}

sumArray(array1)

// ------------------get the sum of the Even numbers from an array-----------------

const array2 = [5, 7 , 8 ,10, 45, 30];

function findEvenSum(array2){
let sum = 0
    for(let i = 0; i < array2.length ; i++){
        const numb2 = array2[i]
        if(numb2 % 2 === 0){
            sum = sum + numb2
        }
    }
    console.log(sum);
    return sum
}

findEvenSum(array2)

// ------------get the sumo of odd numbers from an array ---------------------

function getSum(numberes){
    let sum = 0
    for(let i = 0; i < numberes.length ; i++){
        const element = array3[i]
        if(element % 2 === 1){
            sum = sum + element;
        }
    }
    // console.log(sum);
    return sum
}

const array3 =  [5, 7 , 8 ,10, 45, 30];
// getSum(array3)

// ----------------------- Get all odd numbers from an array -----------------------

function getOddNumber(numbers){
    const oddNumbers = []
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element % 2 !== 0){
            oddNumbers.push(element)
        }
    }
    return oddNumbers;
}

const oddNumbers = getOddNumber(array3)
// console.log(oddNumbers);
const oddNumbersSum = getSum(oddNumbers)
// console.log(oddNumbersSum);

// ----------------Factorial Numbers --------------------------

function findFactorial(number){
    let fac = 1
    for(let i = 1; i <=number ; i++){
        fac = fac*i
    }
    return fac
}

const Factorial = findFactorial(6)
// console.log(Factorial);

// -------------Factorial with whlie loop and decremental way-------------

function findFactorialNumber(number){
    let fac = 1;
    for(let i = number; i>= 1; i--){
        fac = fac * i
    }
    return fac
}

const FactorialValue = findFactorialNumber(5)
console.log(FactorialValue);