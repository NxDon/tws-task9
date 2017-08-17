const Teacher = require('./teacher');
const Class = require("./class");
const Student = require('./student');

let clazz = new Class(2);
let student = new Student("Jerry", 21, clazz);
let teacher = new Teacher("Tom", 21, [clazz]);
clazz.appendMember(student);