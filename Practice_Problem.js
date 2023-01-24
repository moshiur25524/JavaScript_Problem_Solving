
// problem 1 (Find the smallest number from an array)

function smallestNumber(numbers) {
    let smallest = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i]
        if (element < smallest) {
            smallest = element
        }

    }
    return smallest;
}

const numArray = [62, 25, 64, 34, 97];
const smallNum = smallestNumber(numArray)
console.log(smallNum, 'is the smallest Number');

// problem 2 (Find the smallest number among three)

function lowestNumber(x, y, z) {
    if (x < y && x < z) {
        console.log(x, 'is the lowest Number');
    }
    else if (y < z && y < x) {
        console.log(y, ' is the lowest Number');
    }
    else {
        console.log(z, 'is the lowest Number');
    }
}

lowestNumber(9, 6, 8);

// problem 3 (Find the average from the array value and return as a function)

function averageOfArray(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        sum = sum + element
    }
    const average = sum / num.length
    return average
}

const Arr2 = [1, 3, 6, 9, 15, 38, 75];
const average = averageOfArray(Arr2);
console.log('The Average is:', average);

// problem 4 (Find the area of a Rectangle)

function RectangleArea(length, height) {
    return length * height
}

const area = RectangleArea(6, 8);
console.log("Rectangle Area", area);

// problem 5 (Find the second largest number from an array)

function secondLargestNumber(numbers) {
    let first = -1;
    let second = -1
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > first) {
            second = first;
            first = element
        }
        else if( element > second && element != first){
            second = element
        }
    }
    return second;
}

const myArray = [25, 36, 85, 75, 49, 67];

const ArrayResult = secondLargestNumber(myArray);
console.log('The Second Largest Number is:', ArrayResult);