var EventEmitter = require('events').EventEmitter;

module.exports = class Teacher extends EventEmitter {
    constructor(emiter) {
        super();
        this.emiter = emiter;
        this.emiter.emit.on('some_event', function () {
            console.log('some_event 事件触发 on teacher');
        });
    }
};
