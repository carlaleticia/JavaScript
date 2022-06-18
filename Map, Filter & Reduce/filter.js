// Filter 
// cria um novo array, nao modifica o original 

// retona um novo array com os dados que atenderam as condicoes 

const frutas = [ 'maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];

console.log(frutas.filter((fruta) => fruta.includes('maçã'))) /// retorna [ 'maçã fuji', 'maçã verde' ]


/// ACTIVITY 

// Filtre e retorne todos os números pares de um array.
function filterEven(array) {
    return array.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const even = [ 1, 12, 2, 57, 64, 81, 9];

console.log(filterEven(even)) // [ 12, 2, 64 ]