const EventEmitter = require("events");

class Logger extends EventEmitter {
  constructor() {
    super();
  }

  greet(name) {
    console.log(`Welcome ${name}`);
    this.emit("greeting", `Welcome ${name}`);
  }
}

const log = new Logger();

log.on("greeting", (data) => {
  console.log(data);
});

log.greet("Guna");
