// practice day problem 24

var budget = 1000;

if (budget > 80000) {
    console.log('Ami Patti wala Mac chalai');
}
else if (budget > 60000) {
    console.log('Laptop dorkar');
}
else if (budget > 40000) {
    console.log('leneva yoga computer kinbo');
}
else if (budget > 20000) {
    console.log('puran Laptop kinbo');
}
else {
    // console.log('Gorib ar Mobile');
}

// sorry ata loop na .. ata conditon ar silo..

// Problem solving 25

for (var i = 1; i <= 39; i++) {
    // console.log('Ajke amar mon valo nei');
}

// practice problem 29

for (var i = 58; i <= 98; i++) {
    // console.log(i);
}

for (var i = 412; i <= 456; i += 2) {
    // console.log(i);
}

for (var i = 581; i <= 623; i += 2) {
    // console.log(i);
}

// practice problem 33

var learnedTopic = ['Js Fundamental', 'variable', 'operator', 'array', 'conditionals', 'loops']

for (var i = 0; i < learnedTopic.length; i++) {
    var topic = learnedTopic[i];
    // console.log(topic);
}

// Practice problem 34

var usedPhone = ['Nokia', 'samsong button', 'samsung j2', 'realme Norzo 30'];

var i = 0;
while (i < usedPhone.length) {
    // console.log(usedPhone[i]);
    i++
}

// Practice 35 

for (var i = 30; i <= 86; i++) {
    if (i > 44) {
        break
    }
    // console.log(i);
}

// Practice 36

const myBooks = [123, 250, 190, 380, 420, 45, 352, 198, 100];

for (var i = 0; i < myBooks.length; i++) {
    var books = myBooks[i]
    if (books < 200) {
        // console.log(books);
    }

}

// Conceptual Session related problem

var age = 18;
var vacinatedCount = 2;
var isVacinated = false;

if (age > 20 && vacinatedCount == 2) {
    console.log('You can go Abroad');
}

 if ((age >= 15 && age < 20) && vacinatedCount == 0) {
console.log("Please, Go Hospital to take vacine");
}

 if((age >= 15 && age < 20) && vacinatedCount == 2){
    isVacinated = true;
    console.log('Your vacination is successful');
}

// Tour Related Problem

var Tourbudget = 4500;
var hotelRent = 4000;
var RestAmount = Tourbudget - hotelRent;


if (Tourbudget > 5000){
    if(RestAmount > 2000){
        console.log("let's make a barbique party");
    }
    else{
        console.log("let's do some short shopping");
    }
}
else{
    // console.log('Sleeping is good for health !!!');
}


