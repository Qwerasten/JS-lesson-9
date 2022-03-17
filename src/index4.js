export function getUser(userAge, userName) {
    const user = { name: userName };
    user.age = userAge;
    return user;
}
export function getAdmin(user) {
    const admin = {};
    Object.assign(admin, user);
    admin.role = 'admin';
    return admin;
}

/* let admin = { name: 'John', age: 32, role: 'admin' };
let { name, age, role } = admin;
console.log(name);
console.log(age);
console.log(role); */
