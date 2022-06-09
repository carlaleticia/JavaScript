// Uma funcao autoinvocavel (IIFE) da-se por
// Uma funcao anonima 
// entre parenteses seguida por 
// outro par de parenteses, que 
// representa sua chamada:


(
    function(){
        let name = "Carla"
        return name;
    }
)(); // Carla



/// Tambem pode ser utilizada com parametros
/// ou armazenada em uma variavel:

(
    function(a,b) {
        return a + b;
    }
)(1, 2);
// 3

const soma3 = ( 
    function(a,b) {
        return a + b;
    }
)(1, 2);
console.log(soma3) //3