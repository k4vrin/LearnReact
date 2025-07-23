

const userMessage = 'Hello, world!';
console.log(userMessage);

console.log(10+5);
console.log("Hello" + " " + "World!");

console.log(10===10);
console.log(10==="10");

/**
 * A simple function that greets a user.
 * @param name {string} The name of the user to greet.
 * returns {string} A greeting message.
 */
export function greet(name) {
    console.log(`Hello, ${name}!`);
    return name;
}

/** * A function that combines three values.
 *
 * @param a {number}
 * @param b {number}
 * @param c {number}
 *
 * returns {number}
 */
export function combine(a, b, c) {
    if (c === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return (a * b) / c
}

export default (userName, userMessage) => {
    return `${userName}: ${userMessage}`;
}