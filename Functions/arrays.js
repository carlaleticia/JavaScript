//Spread - lidar com elementos separadamente - o que era array se torna um elemento independente

function sum(x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));


//Rest - combina os args em um array - O que era elemento independente vira um array

function checkSize(...args){
    console.log(args.length)
}

checkSize()
checkSize(1,8)
checkSize(3,4,5)