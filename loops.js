// practice day problem 24

var budget = 1000;

if(budget > 80000){
    console.log('Ami Patti wala Mac chalai');
}
else if(budget > 60000){
    console.log('Laptop dorkar');
}
else if(budget > 40000){
    console.log('leneva yoga computer kinbo');
}
else if( budget > 20000){
    console.log('puran Laptop kinbo');
}
else{
    // console.log('Gorib ar Mobile');
}

// sorry ata loop na .. ata conditon ar silo..

// Problem solving 25

for( var i = 1 ; i <=39 ; i++){
    // console.log('Ajke amar mon valo nei');
}

// practice problem 29

for(var i = 58 ; i <= 98 ; i++){
    // console.log(i);
}

for(var i = 412 ; i <= 456; i+=2){
    // console.log(i);
}

for(var i = 581; i <=623; i+=2){
    // console.log(i);
}

// practice problem 33

var learnedTopic = ['Js Fundamental' ,'variable','operator','array', 'conditionals', 'loops']

for(var i = 0; i< learnedTopic.length ; i++){
    var topic = learnedTopic[i];
    // console.log(topic);
}

// Practice problem 34

var usedPhone = ['Nokia', 'samsong button','samsung j2', 'realme Norzo 30'];

var i = 0;
while(i < usedPhone.length){
    // console.log(usedPhone[i]);
    i++
}

// Practice 35 

for(var i = 30; i <= 86; i++ ){
    if(i>44){
        break
    }
    // console.log(i);
}

// Practice 36

const myBooks =  [123,250, 190, 380, 420, 45, 352, 198,100];

for(var i = 0; i < myBooks.length ; i++){
    var books = myBooks[i]
    if(books < 200){
        console.log(books);
    }
    
}