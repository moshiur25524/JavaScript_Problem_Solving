
// Problem 1 (Convert Hour to minute with a function)

function ConvertToMinute(hours) {
    return hours * 60
}

const minutes = ConvertToMinute(3);
console.log('The converted minutes is: ', minutes);

// Problem 2 (Take an array of leap year from an array of years and return it from a function)

function findLeapYear(leapYears) {
    let leapyear = []
    for (let i = 0; i < leapYears.length; i++) {
        const year = leapYears[i];
        if (year % 400 === 0) {
            leapyear.push(year)
        }
        else if (year % 100 !== 0 && year % 4 === 0) {
            leapyear.push(year)
        }
    }
    return leapyear
}

const leapYearArray = [2023, 2024, 2025, 2028, 2030, 2032, 2034];
const LeapYear = findLeapYear(leapYearArray)
console.log('The Leap Year Array is:', LeapYear);

// problem 3 (Sum of the odd numbers from an array)

function findOddSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number % 2 === 1) {
            sum = sum + number
        }
    }
    return sum;
}

const OddArray = [5, 7, 8, 10, 45, 30];
const OddSum = findOddSum(OddArray)
console.log('The sum of the Odd numbers is:', OddSum);

// More Problem solving......

// Problem 4 (Check Leap Year and return true and false through function)
// Problem 5 (Check the age odd or even and retun ture and false through function)
// Problem 6 (Convert Hour to seconds)
// Problem 7 (Calculate the interest of a Bank)

function CalculateInterest(principle, rate, year){
    rate = rate * 0.01
    return principle * rate * year;
}

const interest = CalculateInterest(500, 5, 2);
console.log("The Interest of money is: ", interest);

