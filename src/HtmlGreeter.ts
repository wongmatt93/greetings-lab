import { Greeter } from "./Greeter";

class HtmlGreeter extends Greeter {
  tagname: string;
  constructor(greeting: string, tagname: string = "h1") {
    super(greeting);
    this.tagname = tagname;
  }
  greet(name: string): string {
    return `<${this.tagname}>${super.greet(name)}</${this.tagname}>`;
  }
}

const greet: HtmlGreeter = new HtmlGreeter("Hello");

// const promptly = require("promptly");

// (async () => {
//   const name = await promptly.prompt("Name: ");
//   console.log(greet.greet(name));
// })();

export { HtmlGreeter };
