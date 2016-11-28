var me = {}
me.firstName = 'Connor';
console.log(me.firstName);

me['lastName'] = 'Garber'
console.log(me['lastName']);

//Methods
me.fullName = function() {
  return this['firstName'] + ' ' + this.lastName
}

var cart = {
  groceries: 2,
  milk: 4,
  magazine: 3
}

function sayHello() {
  return 'Hello'
}

var greeting = sayHello()
console.log('greeting', greeting);

var numbers = [1, 2, 3, 4, 5];
var oddNumbersSum = numbers.reduce(oddSum, 0);

function oddSum(subtotal, numToAdd) {
  if (numToAdd % 2 === 1) {
    return subtotal + numToAdd
  } else {
    return subtotal
  }
}
// console.log(oddNumbersSum);
function functionWithCallback(fun) {
  return fun()
}
var result = functionWithCallback(sayHello)
console.log(result);

function returnAFunction() {
  return function() {
    console.log('hello returned');
  }
}
var foo = returnAFunction;
foo();

var friends = ['Nylund', 'Pascal', 'Aaron']
var listItems = friends.map(function (name) {
  return '<li>' + name + '</li>'
});
console.log(listItems);
