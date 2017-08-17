var EventEmitter = require('events').EventEmitter;

module.exports = class Class extends EventEmitter{
    constructor(number) {
        super();
        this.emitter = new EventEmitter();
        this.number = number;
        this.member = [];
        this.teacher = '';
    }

    assignLeader(student) {

        if (this.hasStudent(student)) {
            if (this.teacher) {
                this.emitter.emit("assigned",student);
            }
            this.leader = student.name;
            return `Assign team leader successfully.`;
        } else {
            return `It is not one of us.`;
        }
    }

    appendMember(student) {
        this.emitter.emit("append",student);
        this.member.push(student.id);
    }

    hasStudent(student) {
        return this.member.includes(student.id);
    }
};

