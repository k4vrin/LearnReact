const hobbies = ["reading", "gaming", "hiking", "cooking"];
console.log(`Hobbies: ${hobbies[0]}, ${hobbies[1]}, ${hobbies[2]}, ${hobbies[3]}`);
console.log(`Hobbies: ${hobbies.join(', ')}`);

const index = hobbies.findIndex(item => item === "gaming")

console.log(`Index of "gaming": ${index}`);

hobbies.map(item => item + " is fun!").forEach(item => console.log(item));

const editedHobbies = hobbies.map(item => ({text: item, length: item.length}));
console.log("Edited Hobbies:", editedHobbies);

/**
 *
 * @param array {Array} An array of objects to transform.
 */
export function transformToObjects(array) {
    return array.map(item => ({val: item}))
}

transformToObjects([1, 2, 3]).forEach(item => console.log(item));