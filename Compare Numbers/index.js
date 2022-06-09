function compareNumbers(num1, num2) {
	const first = createFirst(num1, num2);
	const second = createSecond(num1, num2);

	return `${first} ${second}`;
}

function createFirst(num1, num2) {
	let first = `The numbers ${num1} and ${num2} are`;
	let boolean = 'not';

	if (num1 === num2) {
		boolean = '';
	}

	return `${first} ${boolean} equals.`;
}

function createSecond(num1, num2) {
	const sum = num1 + num2;
	let compareTen = 'less';
	let compareTwenty = 'less';

	if (sum > 10) {
		compareTen = 'greater';
	}

	if (sum > 20) {
		compareTwenty = 'greater';
	}

	return `Their sum is ${sum}, wich is ${compareTen} than 10 and ${compareTwenty} than 20.`;
}

console.log(compareNumbers(33,43));