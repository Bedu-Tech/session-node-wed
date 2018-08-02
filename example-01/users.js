var users = [];

var createUser = function (user) {
  users.push(user);
  return user;
}

var getUsers = function () {
  return users;
}

module.exports = {
  createUser,
  getUsers
}