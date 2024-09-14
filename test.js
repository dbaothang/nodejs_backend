const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.end("web page");
  } else if (req.url === "/name") {
    res.end("not build yet");
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

server.listen(port, () => {
  console.log("server is running");
});
