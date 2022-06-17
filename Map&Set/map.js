/// Uma colecao de arrays no formato [chave, valor];
/// Pode ser iterado por um loop for ...of

/// Estrutura ______ const myMap = new Map()

//Metodos - add, ler e deletar:

const myMap = new Map( )

myMap.set('apple', 'fruit'); /// add valor
// Map(1) {'apple' => 'fruit' }

myMap.get(apple); // checa o valor
// 'fruit'

myMap.delete('apple'); // apaga o valor
// true

myMap.get('apple') //foi apagado acima
// undefined

//Map versus Object
// -Maps podem ter chaves de qualquer tipo // Objeto sempre string;
// -Maps sao faceis de iterar pq Tem o lenght pronto;
// - Utilizado quando o valor das chaves eh desconhecido;
// Os valores tem o mesmo tipo