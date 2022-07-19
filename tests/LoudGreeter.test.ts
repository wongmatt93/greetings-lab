import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter class", () => {
  test("the greeting property is properly set by the constructor", () => {
    const greeter: LoudGreeter = new LoudGreeter("Hello");
    expect(greeter.greeting).toBe("Hello");
  });
  test("the method returns a value", () => {
    const greeter: LoudGreeter = new LoudGreeter("Hello");
    expect(greeter.greet("Matt")).toBe("Hello, Matt!!!");
  });
  test("the method returns a value v2", () => {
    const greeter: LoudGreeter = new LoudGreeter("Bye");
    greeter.addVolume();
    greeter.addVolume();
    expect(greeter.greet("Felicia")).toBe("Bye, Felicia!!!!!");
  });
});
