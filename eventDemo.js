import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

const greetHandler = (name) => {
  console.log("Hello!" + name);
};

const goodbyeHandler = (name) => {
  console.log("Goodbye!" + name);
};

//Register Event Listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

// Emit events
myEmitter.emit("greet", "John");
myEmitter.emit("goodbye", "John");

//Error handling
myEmitter.on("error", (err) => {
  console.log("An Error occured:", err);
});

//Simulate Error
myEmitter.emit("error", new Error("Somthing went wrong"));
