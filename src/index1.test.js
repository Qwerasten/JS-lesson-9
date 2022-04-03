import { sumMult, sumLength, sumOfNumbers } from "./index1";

jest.spyOn(console, "log");
describe("sumMult", () => {
  it("2&3 give 5&6", () => {
    sumMult(2, 3);
    expect(console.log).toHaveBeenCalledWith(5);
    expect(console.log).toHaveBeenCalledWith(6);
  });
  it("5&5 give 10&25", () => {
    sumMult(5, 5);
    expect(console.log).toHaveBeenCalledWith(10);
    expect(console.log).toHaveBeenCalledWith(25);
  });
  it("4&8 give 12&32", () => {
    sumMult(4, 8);
    expect(console.log).toHaveBeenCalledWith(12);
    expect(console.log).toHaveBeenCalledWith(32);
  });
});

describe("sumLength", () => {
  it("sum Path & Way is 7", () => {
    sumLength("Path", "Way");
    expect(console.log).toHaveBeenCalledWith(7);
  });
  it("sum  Sunrise & Sunset is 13", () => {
    sumLength("Sunrise", "Sunset");
    expect(console.log).toHaveBeenCalledWith(13);
  });
  it("sum Past & Future is 10", () => {
    sumLength("Past", "Future");
    expect(console.log).toHaveBeenCalledWith(10);
  });
});

describe("sumOfNumbers", () => {
  it("sum 123 is 6", () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "123");
    sumOfNumbers();
    expect(console.log).toBeCalledWith(6);
  });
  it("sum 555 is 15", () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "555");
    sumOfNumbers();
    expect(console.log).toBeCalledWith(15);
  });
  it("sum 468 is 18", () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "468");
    sumOfNumbers();
    expect(console.log).toBeCalledWith(18);
  });
});
