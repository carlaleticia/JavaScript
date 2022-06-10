const students = [
    {
        name: 'Joaquim',
        grade: 5,
        classroom: '1B',
    },
    {
        name: 'Luiza',
        grade: 9,
        classroom: '1B',
    },
    {
        name: 'Lucas',
        grade: 7,
        classroom: '2C',
    },
    {
        name: 'Leda',
        grade: 3,
        classroom: '2C',
    },
    {
        name: 'Cassia',
        grade: 10,
        classroom: '1B',
    },
];


function studentsAproved(array, average){
    let aproved = []; //Fora do for para nao reinicializar
    
    for (let i = 0; i<array.length; i++){
        const {grade, name} = array[i]
        if(grade >= average){
            aproved.push(name);
        }
    }

    return aproved;
}

console.log(studentsAproved(students, 5));



//// ACTIVITY 2 

const person1 = {
    name: 'Carla',
    age: 27,
}

const person2 = {
    name: 'Cassia',
    age: 30,
}

const person3 = {
    name: 'Claudia',
    age: 41,
}

const animal = {
    name: 'Jade',
    age: 1,
    breed: 'none',
};


function calAge(years) {
	return `In ${years} years, ${this.name} will be ${
		this.age + years
	} years old.`;
}

console.log(calAge.call(person2, 12));
console.log(calAge.call(animal, 12));
console.log(calAge.apply(person1, [3]));
