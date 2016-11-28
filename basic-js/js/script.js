var name = 'Connor'
console.log(name.split(''));
var friends = ['Pascal', 'Nylund', 'Rachel'];

var convenientFriends = friends.filter(function(name) {
  return name.length <= 4;
})

friends.forEach(function(friend, index) {
  console.log(index, friend);
  var greeting = 'Hello ' + friend;
  console.log(greeting);
});

var friendsListItems = friends.map(function(friend) {
  return '<li>' + friend + '</li>'
});
console.log(friendsListItems);


var numbers = [1, 2, 3];
var squareNumbers = numbers.map(function(num) {
  return num * num
});
console.log(squareNumbers);

var sumOfSquares = numbers.reduce(function(previous, num) {
  return num * num + previous;
}, 0);
console.log(sumOfSquares);
