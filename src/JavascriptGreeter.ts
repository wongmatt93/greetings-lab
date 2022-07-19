import { Greeter } from "../src/Greeter";

class JavascriptGreeter extends Greeter {
  greet(name: string): string {
    return `console.log('${super.greet(name)}')`;
  }
}

const greeting: JavascriptGreeter = new JavascriptGreeter("Hello");
// console.log(greeting.greet("Matt"));

// const promptly = require("promptly");

// (async () => {
//   const name = await promptly.prompt("Name: ");
//   console.log(greeting.greet(name));
// })();

export { JavascriptGreeter };
