const Person = require('./person');
var EventEmitter = require('events').EventEmitter;

module.exports = class Teacher extends EventEmitter {
    constructor(name, age, clazzes) {
        super();
        this.name = name;
        this.age = age;
        let PersonProto = Object.getPrototypeOf(this)
        if (PersonProto.hasOwnProperty('nextID')) {//这里给原型添加了属性nextID,实现了id自动编号
            this.id = PersonProto.nextID++;
        } else {
            this.id = 0;
            PersonProto['nextID'] = 1;
        }
        this.clazzes = clazzes;
        this.clazzes.forEach((clazz) => {
            clazz.teacher = this;
            clazz.emitter.on('append',(stu) => {
                this.notifyStudentAppended(stu);
            })
            clazz.emitter.on('assigned',(stu) => {
                this.notifyLeaderAssigned(stu);
            })
        });
    }

    introduce() {
        if (this.clazzes.length === 0) {
            return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach No Class.`;
        }
        return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach Class ${this.getClasses()}.`
    }

    getClasses() {
        return this.clazzes.reduce((acc, cur) => {
            return acc.number + ',' + cur.number;
        })
    }

    isTeaching(student) {
        return this.clazzes.some((clazz) => {
            return clazz.hasStudent(student);
        })
    }

    notifyStudentAppended(student) {
        console.log(`I am ${this.name}. I know ${student.name} has joined Class ${student.clazz.number}.`);
    }

    notifyLeaderAssigned(student) {
        console.log(`I am ${this.name}. I know ${student.name} become Leader of Class ${student.clazz.number}.`);
    }
};