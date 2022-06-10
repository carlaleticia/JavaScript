//This é uma referencia de contexto. 

//No exemplo, this refere-se ao objeto person.

const person ={
    firstName: 'Carla',
    lastName: 'Almeida',
    id: 1,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getId: function() {
        return this.id;
    }
};

console.log(person.fullName()); // Carla Almeida
console.log(person.getId()); // 1


/// O valor de this pode mudar de acordo  com o lugar no codigo onde foi chamada

///             Contexto         |          Referencia
///      Em um objeto (metodo)   |   Proprio objeto dono do metodo
///             Sozinha          | Objeto global (em browsers, window)
///              Funcao          |       Objeto global
///             Evento           |  Elemento que recebeu o evento




const person2 = {
    name: 'Maria',
};

const animal = {
    name: 'Marley'
}

function getSomething(){
    console.log(this.name);
}

console.log(getSomething.call(person2)) /// call = who is this // Maria

/// Eh possivel passar parametros para essa funcao separando-os por virgula

const myObj = {
    num1: 2,
    num2: 4,
};
function sum(a, b){
    console.log(this.num1 + this.num2 + a + b);
}

console.log(sum.call(myObj, 1, 5)); // 12

// APLLY - UNICA DIFERENCA DO CALL - ARGUMENTOS VAO NUM ARRAY

const myObj2 = {
    num1: 2,
    num2: 4,
};
function sum(a, b){
    console.log(this.num1 + this.num2 + a + b);
}

console.log(sum.apply(myObj, [1, 5])); // 12 <<<<<-----


/// BIND
//>> Clona a estrutura da funcao onde eh chamada e aplica o valor do objeto passado como parametro

const returnNames = function() {
    return this.name;
};

let bruno = returnNames.bind({ name: 'Bruno'});

console.log(bruno()) // Bruno