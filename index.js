
// Make sure question is understood clearly. Ask questions about the problem.
// Identify the Inputs and Outputs
// Write down the steps
// Execute the plan

function findAverageAge(users){
    let sumOfAges = 0;

    for (let i = 0; i < users.length; i++){
        sumOfAges += users[i].age;
    }

    return sumOfAges / users.length;
}

const users = [
    {
        id: 0,
        age: 20,
    },
    {
        id: 1,
        age: 30,
    },
    {
        id: 2,
        age: 40,
    },
    {
        id: 3,
        age: 50,
    },
    {
        id: 4,
        age: 50,
    }
];

console.log(findAverageAge(users));