const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "input");

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const filePath = path.join(dirPath, "example.txt");

fs.writeFile(filePath, "Hello World", "utf8", (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log("File Created Successfully");
});

fs.readFile(filePath, (err, data) => {
  if (err) {
    throw new Error(err);
  }
  console.log(data.toString());
});

fs.appendFile(filePath, "\nNodejs learning", "utf8", (err) => {
  if (err) {
    throw new Error(err);
  }
});
