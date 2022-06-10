
const helloWorld1 = function( ){
    return "Hello World";
}

/// is the same as 

const helloWorld2 =( ) => {
    return "Hello World"
}

/// and the same as 

const helloWorld3 = ( ) => "Hello World"; // only se for muito pequena

console.log(helloWorld1());
console.log(helloWorld2());
console.log(helloWorld3());


//// RULES!!
//>> Caso exista apenas uma linha, pode dispensar as chaves e o return
//>> Caso exista apenas um parametro, pode dispensar os parenteses

const soma = a => a;
console.log(soma(4));


///IMPORTANT TO KNOW!!
//>> Nao faz hoisting - tem que declarar antes de chamar a funcao
//>> This nao pode ser usado numa arrow function
//>> Nao existe o objeto arguments numa arrow function
//>> O construtur (ex: new MyObject()) tambem nao pode ser utilizado
