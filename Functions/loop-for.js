// For - Loop dentro de elementos iteraveis (arrays, strings)
// Push add no final do array

function multiplyByTwo(array) {
    let product = [];

    for(let i = 0; i<array.length; i++) {
        product.push(array[i]*2);
    }
    
    return product;
}

const myNumbers = [2, 33, 456, 356, 40];

console.log(multiplyByTwo(myNumbers)); // 4, 66, 912, 712, 80


/// For ... in
// Loop entre propriedades enumeraveis de um objeto

function forInExample(obj) {
    for(prop in obj) {
        console.log(prop);
    }
}

const myObj = {
    name: "Joao",
    age: "20",
    city: "Salvador" 
}

console.log(forInExample(myObj)); // name age city

function forInExample2(obj){
    for(prop in obj) {
        console.log(obj[prop]);
    }
}

const myObj2 = {
    name: "Joao",
    age: "20",
    city: "Salvador" 
}

console.log(forInExample2(myObj2)); /// Joao 20 Salvador

///FOR ...OF - Loop entre estruturas iteraveis (arrays, strings)

function logLetters(word) {
    for(letter of word){
        console.log(letter);
    }
}

const word = "apple";

console.log(logLetters(word)) /// //a //p //p //l //e


/////////////////////EXAMPLE 2////////////////////////////

function logNumbers(nums) {
    for(num of nums){
        console.log(num);
    }
}

const nums = [30, 20, 233, 2];

console.log(logNumbers(nums)) /// //30 //20 //233 //2


