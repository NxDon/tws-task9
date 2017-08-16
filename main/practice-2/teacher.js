const Person = require('./person');

module.exports = class Teacher extends Person {
    constructor(name, age, clazz) {
        super(name, age);
        this.clazzes = clazz;
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
};

