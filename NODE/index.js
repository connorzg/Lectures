require('dotenv').config();

var a = 'foo';
console.log(a);

const Student = require('./student');

var me = new Student('Connor', 'Garber', 60000);

console.log(me);
console.log(me.formattedSalary());
console.log(process.env.ANOTHER_VAR);
