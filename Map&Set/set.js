// Set sao estruturas que armazenam apenas valores unicos que nao se repetem

const mySet = new Set();
mySet.add(1);
mySet.add(5);

mySet.has(1);
// true

mySet.has(3);
// false

mySet.delete(5);


//// Set versus Array
// Alem de possuir valores unicos, inves de lenght, consulta-se registros pela propriedade size
// Nao possui os metodos map, filter, reduce, etc \\\\


