
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
console.log(leastNumber, 'is the lowest Number');
