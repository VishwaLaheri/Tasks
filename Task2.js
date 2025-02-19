const users = [
    { name: 'Ram', age: 27, isActive: true },
    { name: 'Deep', age: 24, isActive: false },
    { name: 'Vishwa', age: 25, isActive: true },
    { name: 'Dhwani', age: 28, isActive: true },
    { name: 'Krishna', age: 22, isActive: false }
];
const activeUsers = users.filter(user => user.isActive);
console.log(activeUsers);

const activeUsersname = users.filter(user => user.isActive).map(users => users.name);
console.log(activeUsersname);

const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log(totalAge);

const sortedUsersByAge = [...users].sort((a, b) => a.age - b.age);
console.log(sortedUsersByAge);

users.forEach(user => {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
});