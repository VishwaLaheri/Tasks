const numbers = [4, 9, 15, -2, 8, 12, 3, -5];

const firstGreaterThanTen = numbers.find(num => num > 10);
console.log(firstGreaterThanTen);

const hasDivisibleByThree = numbers.some(num => num % 3 === 0);
console.log(hasDivisibleByThree);

const allPositive = numbers.every(num => num > 0);
console.log(allPositive);