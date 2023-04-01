import { EventEmitter } from "node:events";

class CustomEventEmitter extends EventEmitter {}

const emitter = new CustomEventEmitter();

Object.freeze(emitter);

export { emitter };
