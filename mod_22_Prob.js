
// Problem 1 (Area of a triangle from three sides)

function triangleArea(a, b, c) {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}

const triangle = triangleArea(5, 12, 13);
console.log('The Area of the Triange is: ', triangle);