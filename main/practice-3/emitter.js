var EventEmitter = require('events').EventEmitter;

module.exports = class Emitter extends EventEmitter{
    constructor(){
        super();
        this.emit = new EventEmitter();
        this.emit.on('some_event', function () {
            console.log('some_event 事件触发on emitter');
        });
    }
    append(){
        this.emit.emit('some_event');
    }
}