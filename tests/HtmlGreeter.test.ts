import { HtmlGreeter } from "../src/HtmlGreeter";

describe("Greeter class", () => {
  test("the greeting property is properly set by the constructor", () => {
    const greeter: HtmlGreeter = new HtmlGreeter("Hello");
    expect(greeter.greeting).toBe("Hello");
  });
  test("the method returns a value", () => {
    const greeter: HtmlGreeter = new HtmlGreeter("Hello");
    expect(greeter.greet("Matt")).toBe("<h1>Hello, Matt!</h1>");
  });
  test("the method returns a value v2", () => {
    const greeter: HtmlGreeter = new HtmlGreeter("Bye", "div");
    expect(greeter.greet("Felicia")).toBe("<div>Bye, Felicia!</div>");
  });
  test("the method returns a value v2", () => {
    const greeter: HtmlGreeter = new HtmlGreeter("Hey", "caption");
    expect(greeter.greet("Kid")).toBe("<caption>Hey, Kid!</caption>");
  });
});
