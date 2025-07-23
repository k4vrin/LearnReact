

function handleTimeout() {
  console.log("Timeout occurred");
}

const handleTimeout2 = () => {
  console.log("Timeout occurred... again");
};

setTimeout(handleTimeout, 5000);
setTimeout(handleTimeout2, 5000);
setTimeout(
    () => {
        console.log("Timeout occurred... again and again");
    },
    5000
)

function greeter(greetfn) {
    console.log("Hello, World!");
    greetfn();
}

greeter(
    () => {
        console.log("Hello, Function as Value!");
    }
)