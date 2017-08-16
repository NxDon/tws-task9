module.exports = class Class {
    constructor(number) {
        this.number = number;
        this.member = [];
        this.teacher = '';
    }

    assignLeader(student) {
        if (this.teacher != false) {
            if (this.hasStudent(student)) {
                this.teacher.notifyLeaderAssigned(student);
                this.leader = student.name;
                return `Assign team leader successfully.`;
            } else {
                return `It is not one of us.`;
            }
        } else if (this.hasStudent(student)) {
            this.leader = student.name;
            return `Assign team leader successfully.`;
        } else {
            return `It is not one of us.`;
        }
    }

    appendMember(student) {
        if (this.teacher != false) {
            this.teacher.notifyStudentAppended(student);
        }
        this.member.push(student.id);
    }

    hasStudent(student) {
        return this.member.includes(student.id);
    }
};

