// while - executa instrucoes ate que a condicao se torne falsa

function exampleWhile(){
    let num = 0
    
    while(num <=5){
        console.log(num);
        num++;
    }
}

console.log(exampleWhile())
// 0
// 1
// 2
// 3
// 4
// 5


////////////// DO ... WHILE ////////////////
// Executa instrucoes ate que a condicao se torne falsa, 
/// porem a primeira execucao sempre ocorre


function exampleDoWhile() {
    let num = 6;

    do {
        console.log(num);
        num++;
    } while(num <=5)
}

console.log(exampleDoWhile()) //6