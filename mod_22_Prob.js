
// Problem 1 (Area of a triangle from three sides)

function triangleArea(a, b, c) {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}

const triangle = triangleArea(5, 12, 13);
console.log('The Area of the Triange is: ', triangle);

// ------------ Find the Wood Requirement-----------------

// 1. Char ---> 3cft
// 2. Table ---> 10cft
// 3. Bed ---> 50cft

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perchairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perchairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;

    return totalWood
}

const totalWood = woodCalculator(5, 3, 2)
console.log('Total Wood Required: ', totalWood);

// --------------- Find the cheapest phone from an array of object ----------------

const phones = [
    { name: 'samsung', camera: 12, storage: '32 gb', price: 35000, color: 'silver' },
    { name: 'Walton', camera: 10, storage: '32 gb', price: 21000, color: 'silver' },
    { name: 'iphone', camera: 15, storage: '128 gb', price: 55000, color: 'black' },
    { name: 'Xaomi', camera: 12, storage: '64 gb', price: 20000, color: 'white' },
    { name: 'Oppo', camera: 12, storage: '32 gb', price: 22000, color: 'silver' },
    { name: 'Nokia', camera: 10, storage: '32 gb', price: 15000, color: 'silver' },
]

function cheapestPhone(phones) {
    let CheapPhone = phones[0]
    for (let i = 0; i < phones.length; i++) {
        const element = phones[i]
        if (element.price < CheapPhone.price) {
            CheapPhone = element
        }
    }
    return CheapPhone;
}

const lowPricePhone = cheapestPhone(phones)
console.log('The cheap phone is:', lowPricePhone);

//------------------ Caltulate the total Price of the products from shopping cart--------------

const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 2 },
    { name: 'shirt', price: 1500, quantity: 4 },
    { name: 'pant', price: 1350, quantity: 2 },
    { name: 'watch', price: 2000, quantity: 3 },
    { name: 'balt', price: 600, quantity: 2 },
];

function countTotalPrice(products) {
    let Total = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        const product = shoppingCart[i];
        const price = product.price * product.quantity
        Total = Total + price
    }
    return Total;
}

const totalPrice = countTotalPrice(shoppingCart);
console.log('Total Cart Price:', totalPrice);