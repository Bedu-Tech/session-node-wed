var maths = require('./myModule');
var users = require('./users');

console.log(maths);
console.log(maths.area(10));

console.log(users);
users.createUser({ name: 'Javier', email: 'hello@coderdiaz.me' });
console.log(users.getUsers());