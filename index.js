const http = require("http");
const fs = require("fs");
const { getAllData, enterNewRecord } = require("./databaseManager.js");
http
  .createServer(function (req, res) {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(fs.readFileSync(__dirname + "\\html\\home.html", "utf-8"));
      res.end();
    } else if (req.url === "/style.css") {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(fs.readFileSync(__dirname + "\\styles\\style.css", "utf8"));
      res.end();
    } else if (req.url === "/home.js") {
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.write(fs.readFileSync(__dirname + "\\scripts\\home.js", "utf8"));
      res.end();
    } else if (req.url === "/data") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify( getAllData()));
      res.end();
      console.log("data request made to database");
    }
  })
  .listen(3000, () => {
    console.log("Server listening at port 3000");
  });
