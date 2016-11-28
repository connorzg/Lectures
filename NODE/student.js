const accounting = require('accounting');

function Student(first, last, salary) {
  this.firstName = first;
  this.lastName = last;
  this.salary = salary;
}

Student.prototype.fullName = function () {
  return this.first + ' ' + this.last;
};

Student.prototype.formattedSalary = function () {
  return accounting.formatMoney(this.salary);
};

module.exports = Student;
