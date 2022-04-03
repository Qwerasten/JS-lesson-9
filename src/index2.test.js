import { max, getMonthName, isCircleInSquare } from "./index2";

describe("max", () => {
  it("2&3 give 3", () => {
    expect(max(2, 3)).toEqual(3);
  });
  it("5&1 give 5", () => {
    expect(max(5, 1)).toEqual(5);
  });
  it("4&4 give 4", () => {
    expect(max(4, 4)).toEqual(4);
  });
});
describe("getMonthName", () => {
  it("1 is Январь", () => {
    expect(getMonthName(1)).toEqual("Январь");
  });
  it("5 is Май", () => {
    expect(getMonthName(5)).toEqual("Май");
  });
  it("13 нет", () => {
    expect(getMonthName(13)).toEqual("Такого месяца нет");
  });
});
describe("isCircleInSquare", () => {
  it("4, 9 is true", () => {
    expect(isCircleInSquare(4, 9)).toBe(true);
  });
  it("4, 2 is false", () => {
    expect(isCircleInSquare(4, 2)).toBe(false);
  });
  it("3, 3 is false", () => {
    expect(isCircleInSquare(3, 3)).toBe(false);
  });
});
