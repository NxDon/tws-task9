module.exports = class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        let PersonProto = Object.getPrototypeOf(this)
        if (PersonProto.hasOwnProperty('nextID')) {//这里给原型添加了属性nextID,实现了id自动编号
            this.id = PersonProto.nextID++;
        } else {
            this.id = 0;
            PersonProto['nextID'] = 1;
        }
    }

    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
};
