
// Who will get the Delicious cake among three (Jim , Della, Chinku)

function GotCake(x, y, z){
    if(x > y && x>z){
        console.log('Jim is Topper ');
    }
    else if(y>z){
        console.log('Della is Topper');
    }
    else{
        console.log('Chinku is Topper');
    }
}

GotCake(95, 96, 89)
