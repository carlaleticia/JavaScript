// Reduce
// ele executa a funcao dentro do array e retornar um valor unico
// pode retornar qualquer coisa, nao necessariamente um array


// Sintaxe array.reduce(callbackFn, inicialValue)

// callback uma funcao a ser executada a partir do acumulador

// Inicial Value eh opcional eh o valor sobre o qual o retorno final ira atuar


// const callbackFn = function(accumulator, currentValue, index, array){
//     // do something
// }

// array.reduce(callbackFn, inicialValue)


//Accumulator/PrevValue - acumula todas as chamadas da callback
//CurentValue - elemento atual sendo acessado pela funcao

// Activity

// Some todos os números de um array

function sumAll(arr){
    return arr.reduce(function(prev, current){
        return prev + current;
    })
}
const arr = [1, 2];

console.log(sumAll(array)); // 3

// Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

const lista = [
    {
        name: 'soap',
        price: 25,
    },
    {
        name: 'cereal',
        price: 10,
    },
    {
        name: 'coffee',
        price: 15,
    },
];

const saldoDisponivel = 100;


function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index) {
        console.log('rodada', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.price;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));

// rodada 1
// { prev: 100 }
// { current: { name: 'soap', price: 25 } }
// rodada 2
// { prev: 75 }
// { current: { name: 'cereal', price: 10 } }
// rodada 3
// { prev: 65 }
// { current: { name: 'coffee', price: 15 } }
// 50