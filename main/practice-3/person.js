module.exports = class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        if (Object.getPrototypeOf(this).hasOwnProperty('nextID')) {//这里给原型添加了属性nextID,实现了id自动编号
            this.id = Object.getPrototypeOf(this).nextID++;
        } else {
            this.id = 0;
            Object.getPrototypeOf(this)['nextID'] = 1;
        }
    }

    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
};
