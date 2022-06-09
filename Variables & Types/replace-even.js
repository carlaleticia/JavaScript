function replaceEven(array){
    if(!array.length) return -1;

    for( let i = 0; i <array.length; i++) {
        if(array[i] === 0) {
            console.log("It is already zero!");
        } else if(array[i] % 2 === 0){
            console.log(`Replacing ${array[i]} for 0 ...`);
            array[i] = 0;
        }
    }

    return array;
}

let arr = [ 2, 7, 9, 10, 25, 94];
console.log(replaceEven(arr));
