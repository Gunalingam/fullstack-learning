const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.write("Hello server");
  res.end();
});

const port = 3000;
server.listen(port, "localhost", () => {
  console.log("Server Started Successfully");
});
