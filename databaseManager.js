const childProcess = require("node:child_process");
let getAllData = () => {
  return childProcess.execFileSync(
    `${__dirname}\\database\\database.exe`,
    ["start"],
    { detached: true, encoding: "utf-8" }
  );
};
let getRelatedData = (type) => {
  return childProcess.execFileSync(
    `${__dirname}\\database\\database.exe`,
    ["type", type],
    { detached: true, encoding: "utf-8" }
  );
};
let enterNewRecord = (name, url, price, type, gender) => {
  childProcess.execFile(
    `${__dirname}\\database\\database.exe`,
    ["add", name, url, price, type, gender],
    { detached: true },
    (error, stdout, stderr) => {
      if (error) console.log(error);
    }
  );
};
enterNewRecord(
  "White-Buttoned-Shirt",
  "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?cs=srgb&dl=pexels-david-bartus-297933.jpg&fm=jpg&w=640&h=427&_gl=1*jddfqm*_ga*OTkwODAwMDcuMTY4MTM3NTExMg..*_ga_8JE65Q40S6*MTY4Mzc0MzM1My43LjEuMTY4Mzc0NjIwOC4wLjAuMA..",
  "120",
  "mansTops",
  "male"
);
module.exports = {
  enterNewRecord,
  getAllData,
  getRelatedData,
};
