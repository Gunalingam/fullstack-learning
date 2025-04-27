const path = require("path");

console.log("dir path", path.dirname(__filename));
console.log("file Name", path.basename(__filename));
console.log("extention", path.extname(__filename));
console.log("__dirname", __dirname);
console.log("__filename", __filename);
console.log("file Path", path.join(__dirname, path.basename(__filename)));
