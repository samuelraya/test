// Tiny static server for the frontend (no dependencies).
const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end(fs.readFileSync(path.join(__dirname, "index.html")));
  })
  .listen(3000, () => console.log("Frontend: http://localhost:3000"));
