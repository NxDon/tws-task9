const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor(name, age, clazzes) {
        super(name,age);
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
        console.log(`I am ${this.name}. I know ${student.name} has joined Class ${student.clazz.number}.`);
    }

    notifyLeaderAssigned(student) {
        console.log(`I am ${this.name}. I know ${student.name} become Leader of Class ${student.clazz.number}.`);
    }
};