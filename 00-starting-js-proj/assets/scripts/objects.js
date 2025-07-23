const user = {
    name: 'John Doe',
    age: 30,
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
}

console.log(`User Name: ${user.name}`);
user.greet();

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, ${this.name}!`);
    }
}

const user2 = new User('Manuel', 25);

console.log(`User Name: ${user2.name}`);
user2.greet();