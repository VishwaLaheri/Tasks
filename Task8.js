const people = [
    { name: "Ram", ageGroup: "senior" },
    { name: "Hari", ageGroup: "child" },
    { name: "Sita", ageGroup: "senior" },
    { name: "Radha", ageGroup: "adult" },
    { name: "Krishna", ageGroup: "child" },
];

const groupedPeople = people.reduce((result, person) => {
  
    if (!result[person.ageGroup]) {
        result[person.ageGroup] = [];
    }

    result[person.ageGroup].push(person.name);

    return result;
}, {});

console.log(groupedPeople);
