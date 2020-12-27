'use strict'

function numberOperation(x,y){
    if (x >= 0 && y >= 0){
        let def = x - y
        alert(def);
    }else if (x < 0 && y < 0){
        let composition = x * y
        alert(composition);
    }
    else if (x * y < 0 ){
        let summer = x + y
        alert(summer);
    }
}

console.log(numberOperation(5,8));
console.log(numberOperation(-5,-8));
console.log(numberOperation(-5,8));

