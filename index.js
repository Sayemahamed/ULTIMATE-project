const http = require("http");
const fs = require("fs");
const {
  getAllData,
  enterNewRecord,
  getRelatedData,
} = require("./databaseManager.js");
http
  .createServer(function (req, res) {
    if (req.url === "/" || req.url === "/home.html") {
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
      res.write(JSON.stringify(getAllData()));
      res.end();
      console.log("Data request made to DataBase");
    } else if (req.url === "/assets/cart.svg") {
      res.writeHead(200, { "Content-Type": "image/svg+xml" });
      res.write(fs.readFileSync(__dirname + "\\assets\\cart.svg", "utf-8"));
      res.end();
    } else if (req.url.match("/details.html") == "/details.html") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(fs.readFileSync(__dirname + "\\html\\details.html", "utf-8"));
      res.end();
    } else if (req.url === "/details.js") {
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.write(fs.readFileSync(__dirname + "\\scripts\\details.js", "utf8"));
      res.end();
    } else if (req.url.match("/relatedData") == "/relatedData") {
      // console.log(req.url.substring(22, req.url.length));
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(
        JSON.stringify(getRelatedData(req.url.substring(22, req.url.length)))
      );
      res.end();
      console.log("Relational Data request made to DataBase");
    } else if (req.url === "/cart.html") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(fs.readFileSync(__dirname + "\\html\\cart.html", "utf-8"));
      res.end();
    } else if (req.url === "/style.css.map") {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(fs.readFileSync(__dirname + "\\styles\\style.css.map", "utf8"));
      res.end();
    } else console.log(req.url);
  })
  .listen(3000, () => {
    console.log("Server listening at port 3000");
  });
