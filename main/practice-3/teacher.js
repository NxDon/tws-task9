const Person = require('./person');

module.exports = class Teacher extends Person {
    constructor(name, age, clazzes) {
        super(name, age);
        this.clazzes = clazzes;
        this.clazzes.forEach((clazz) => {
            clazz.teacher = this;//箭头函数不需要bind
        });
    }

    introduce() {
        if (this.clazzes == false) {//触发隐式类型转换
            return super.introduce() + ` I am a Teacher. I teach No Class.`;
        }
        return super.introduce() + ` I am a Teacher. I teach Class ${this.getClasses()}.`
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
        console.log(`I am ${this.name}. I know ${student.name} has joined Class ${student.clazz}.`);
    }

    notifyLeaderAssigned(student) {
        console.log(`I am ${this.name}. I know ${student.name} become Leader of Class ${student.clazz}.`);
    }
};