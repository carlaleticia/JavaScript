//Switch / case equivale a uma comparacao de tipo e valor (===)
// Sempre precisa de um valor default
// Ideal para comparacao de muitos valores

function getAnimal(id) {
    switch(id) {
        case 1:
            return "dog";
        case 2: 
        return "cat";
        case 3:
            return "bird"
        default:
            return "fish";
    }
}

console.log(getAnimal(1)) // dog
console.log(getAnimal(4)) // fish
console.log(getAnimal("1")) // fish