import { getUser, getAdmin } from "./index4";

describe("getUser", () => {
    it("John 32", () => {
        expect(getUser(32, "John")).toEqual({ name: "John", age: 32 });
    });
    it("Mary 16", () => {
        expect(getUser(16, "Mary")).toEqual({ name: "Mary", age: 16 });
    });
});

describe("getAdmin", () => {
    it("John 32 admin", () => {
        expect(getAdmin({ name: "John", age: 32 })).toEqual({
            name: "John",
            age: 32,
            role: "admin",
        });
    });
});
