const userNameData = ["John", "Doe", 30]

// Destructuring the array to access elements directly
const firstName1 = userNameData[0];
const lastName1 = userNameData[1];
const age1 = userNameData[2];

// Destructuring the array into variables
const [firstName, lastName, age] = userNameData;

const user = {
    name: "John Doe",
    age: 30,
}

const {name: fullName, age: userAge} = user;

console.log(`User Name: ${fullName}`);
console.log(`User Age: ${userAge}`);

// Spread operator

const hobbies = ["Reading", "Traveling", "Cooking"];
const mergedHobbies = [...hobbies, "Gaming", "Hiking"];
console.log(mergedHobbies);

const nestedHobbies = [hobbies, "Gaming", "Hiking"];
console.log(nestedHobbies);

const extendedUser = {
    ...user,
    isAdmin: false,
}

console.log(extendedUser);