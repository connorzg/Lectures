function Person(fn, ln, fc) {
  this.firstName = fn
  this.lastName = ln
  this.favColor = fc
}

Person.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName
}

Person.prototype.favColor = function () {
  return this.favColor
}

Object.prototype.log = function() {
  console.log(this);
}

var me = new Person('Connor', 'Garber', 'blue');
var neighbor = new Person('Gabe', 'Diaz', 'red');
// 1. Create new object {}
// 2. set new obj firstName to Riley
// 3. set new obj lastName to Dallas
// 4. set new obj fullName to a function
// 5. set new obj __proto__ = Person.prototype
// 6. return new object
console.log(me);



// var me = {
// 	firstName: 'Connor',
// 	lastName: 'Garber'
// }
//
// var gabe = {
// 	firstName: 'Gabe',
// 	lastName: 'Diaz'
// }
//
// function fooFunction() {
//   return 'foobar'
// }
//
// var foo1 = new fooFunction();
// var foo2 = new fooFunction();
