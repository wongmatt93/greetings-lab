import chalk from "chalk";

class Greeter {
  greeting: string;
  constructor(greeting: string) {
    this.greeting = greeting;
  }
  greet(name: string): string {
    return `${this.greeting}, ${name}!`;
  }
}

const greet: Greeter = new Greeter("Hello");
// console.log(greet.greet("Matt"));

// const promptly = require("promptly");

// (async () => {
//   const name = await promptly.prompt("Name: ");
//   console.log(greet.greet(name));
// })();

// console.log(chalk.blue("Hello World!"));

export { Greeter };
