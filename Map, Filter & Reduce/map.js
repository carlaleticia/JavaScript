// mapping function = y = f(x) y= 2x
// nao modifica o array original, cria um novo array
// realiza operacoes em ordem


//Sintaxe -- array.map(callback, thisArg)
//callback(item, index, array)

//callback eh a funcao a ser executada em cada elemento
//thisArg eh opcional valor de 'this' dentro da funcao de callback



// //////// MAP VS FOREACH //////// //

//Usando map

const array = [1, 2, 3, 4, 5];
console.log(array.map((item) => item * 2)); // retorna 2,4,6,8,10

// Usando forEach
console.log(array.forEach((item) => item * 2)); // retorna undefined



//////// ACTIVITY ////////
// Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.


// Function with this

const apple = {
    value: 2,
}

const orange = {
    value: 3,
}

function mapComThis(array, thisArg) {
    return array.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this -> apple', mapComThis(nums, apple)); // this -> apple [ 2, 4 ]

console.log('this -> organge', mapComThis(nums, orange)); // this -> organge [ 3, 6 ]


//function without this

function mapSemThis(array){
    return array.map(function(item){
        return item * 2;
    });
}

const numbers = [2, 4, 6, 8, 10];

console.log(mapSemThis(numbers)); // [ 4, 8, 12, 16, 20 ]