/// Activity 1 - MAP

function getAdmins(map){
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const users = new Map();

users.set('Luiz', 'Admin');
users.set('Carla', 'Admin');
users.set('Tobias', 'Admin');
users.set('Lola', 'User');

console.log(getAdmins(users));


/// ACTIVITY 2 - SET
const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function singleValue(array){
    const mySet = new Set(array);

    return [...mySet]; //precisa colocar o spread ... senao nao cria outro array
}

console.log(singleValue(myArray));
