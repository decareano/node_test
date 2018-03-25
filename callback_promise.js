function add (num1, num2) {
	return num1 + num2;
}

const result = add(1, 2);
console.log(result);

const result1 = getAddResultFromServer('http://www.example.com?num1=1&num2=2');
console.log(result1);