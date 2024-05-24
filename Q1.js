let people = {
    friends: []
};
// Step 2 Creata three separate objects
let friend1 = {
    firstName: "abdullah",
    lastName: "khan",
    id: 1
};
let friend2 = {
    firstName: "Muhammad",
    lastName: "Hassan",
    id: 2
};
let friend3 = {
    firstName: "Imran",
    lastName: "Hassan",
    id: 3
};
//step3 add these friends object to the friends array within the people object
people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);
//step 4 
console.log(people);
export {};
