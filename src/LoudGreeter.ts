import { Greeter } from "./Greeter";

class LoudGreeter extends Greeter {
  private extra: string = "!!";
  addVolume(): void {
    this.extra += "!";
  }
  greet(name: string): string {
    return `${super.greet(name)}${this.extra}`;
  }
}

const greet: LoudGreeter = new LoudGreeter("Hello");
// greet.addVolume();
// console.log(greet.greet("Matt"));

// const promptly = require("promptly");

// (async () => {
//   const name = await promptly.prompt("Name: ");
//   console.log(greet.greet(name));
// })();

export { LoudGreeter };
