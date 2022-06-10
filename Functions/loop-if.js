/// OPTION 1 

function numberPositivo(num) {
    let result;
    if(num < 0) {
        result = false;
    } else { 
        result = true;
    }

    return result;
}

console.log(numberPositivo(2)) // true

console.log(numberPositivo(-3)) // false


///OPTION 2 -  CODIGO LIMPO - SAME CODE


function numberPositivo(num) {
    let result;

    const isNegative = num < 0;

    if(isNegative){
        result = false;
    } else {
        result = true;
    }
    return result;
}
console.log(numberPositivo(-3)) // false


/// OPTION 3 - WITHOUT ELSE TO SAVE MEMORY -- SAME CODE

function numberPositivo(num) {
    const isNegative = num < 0;

    if(isNegative){
        return false;
    }
    return true;
}

// ==ALINHAR IFS==

function numberPositivo(num) {
    const isNegative = num < 0;
    const greaterTen = num > 10;
    
    if(isNegative) {
        return "This number is negative!";
    } else if (!isNegative && greaterTen) {
        return "This number is positive and greater than 10!"
    }

    return "This number is positive!"
}

console.log(numberPositivo(2)) // This number is positive!
console.log(numberPositivo(-2)) // This number is negative!
console.log(numberPositivo(40)) // This number is positive and greater than 10!