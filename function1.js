function logOut(user) {
  console.log(`${user} is logged out`);
}
function register(user) {
  console.log(`${user} is registered`);
}

module.exports = { logOut, register };
console.log(module);
