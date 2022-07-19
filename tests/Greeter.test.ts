import { Greeter } from "../src/Greeter";

describe("Greeter class", () => {
  test("the greeting property is properly set by the constructor", () => {
    const greeter: Greeter = new Greeter("Hello");
    expect(greeter.greeting).toBe("Hello");
  });
  test("the method returns a value", () => {
    const greeter: Greeter = new Greeter("Hello");
    expect(greeter.greet("Matt")).toBe("Hello, Matt!");
  });
  test("the method returns a value v2", () => {
    const greeter: Greeter = new Greeter("Bye");
    expect(greeter.greet("Felicia")).toBe("Bye, Felicia!");
  });
});
