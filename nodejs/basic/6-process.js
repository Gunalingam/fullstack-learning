const cp = require("child_process");

console.log(process.argv);

const getArg = (arg) => {
  const index = process.argv.findIndex((val) => val === arg) + 1;
  return process.argv[index];
};

const user = getArg("--user");

console.log(user);

process.stdout.write("Hai, Whats your name");

process.stdin.on("data", (data) => {
  console.log(data.toString());
  process.exit();
});

const helloApp = cp.spawn("node", ["1-helloworld.js"]);

helloApp.stdout.on("data", (data) => {
  console.log(data.toString());
});
