import { JavascriptGreeter } from "../src/JavascriptGreeter";

describe("JavascriptGreeter class", () => {
  test("the greeting property is properly set by the constructor", () => {
    const greeter: JavascriptGreeter = new JavascriptGreeter("Hello");
    expect(greeter.greeting).toBe("Hello");
  });
  test("the method returns a value", () => {
    const greeter: JavascriptGreeter = new JavascriptGreeter("Hello");
    expect(greeter.greet("Matt")).toBe("console.log('Hello, Matt!')");
  });
  test("the method returns a value v2", () => {
    const greeter: JavascriptGreeter = new JavascriptGreeter("Bye");
    expect(greeter.greet("Felicia")).toBe("console.log('Bye, Felicia!')");
  });
});
