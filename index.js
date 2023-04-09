const http = require("http");
const url = require("url");
const fs = require("fs");

// Creating a server
const server = http.createServer((req, res) => {
  const pathName = req.url;
  switch (pathName) {
    case "/":
      res.end("This is OverView");
      break;
    case "/product":
      res.end("This is product");
      break;
    case "/api":
      fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
        const productData = JSON.parse(data);
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(data);
      });
      break;
    default:
      res.end("Error not found");
  }
});

// Server listening
server.listen(8000, "127.0.0.1", () => {
  console.log("Server is now listing on port 8000");
});
