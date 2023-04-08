const http = require("http");

// Creating a server
const server = http.createServer((req, res) => {
  res.end("Hello from the server");
});

// Server listening
server.listen(8000, "127.0.0.1", () => {
  console.log("Server is now listing on port 8000");
});
