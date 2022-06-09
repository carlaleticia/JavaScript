//Uma funcao passada como argumento para outra.
//Utilizando callbacks voce tem maior controle da ordem de chamadas.

const calc = function(operation, num1, num2){
    return operation(num1, num2);
}

const sum = function(num1, num2){
    return num1 + num2;
}

const sub = function(num1, num2){
    return num1 - num2;
}

const resultSum = calc(sum, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSub); // -1
console.log(resultSum); // 3