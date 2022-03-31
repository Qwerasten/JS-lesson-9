import { dayOfWeek, whoIsYanger } from "./index8";

describe("dayOfWeek", () => {
    it("17.03.2022", () => {
        expect(dayOfWeek("17.03.2022")).toEqual("Четверг");
    });
    it("08.12.2021", () => {
        expect(dayOfWeek("08.12.2021")).toEqual("Среда");
    });
    it("31.10.2021", () => {
        expect(dayOfWeek("31.10.2021")).toEqual("Воскресенье");
    });
});

describe("whoIsYanger", () => {
    it("17.03.2002, 17.03.2000", () => {
        expect(whoIsYanger("17.03.2002", "17.03.2000")).toEqual("First");
    });
    it("08.12.1921, 01.03.1921", () => {
        expect(whoIsYanger("08.04.1921", "01.12.1921")).toEqual("Second");
    });
    it("31.10.2021, 31.10.2021", () => {
        expect(whoIsYanger("31.10.2021", "31.10.2021")).toEqual("Equal");
    });
});
