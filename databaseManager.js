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
  "Combo-Pack",
  "https://images.pexels.com/photos/2433980/pexels-photo-2433980.jpeg?cs=srgb&dl=pexels-desativado-2433980.jpg&fm=jpg&w=640&h=964&_gl=1*bu0euu*_ga*OTkwODAwMDcuMTY4MTM3NTExMg..*_ga_8JE65Q40S6*MTY4Mzc0MzM1My43LjEuMTY4Mzc0NTk4My4wLjAuMA..",
  "102",
  "food",
  "all"
);
module.exports = {
  enterNewRecord,
  getAllData,
  getRelatedData,
};
