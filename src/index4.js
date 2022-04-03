export function getUser(userAge, userName) {
  const user = { name: userName };
  user.age = userAge;
  return user;
}
export function getAdmin(user) {
  const admin = {};
  Object.assign(admin, user);
  admin.role = "admin";
  return admin;
}
