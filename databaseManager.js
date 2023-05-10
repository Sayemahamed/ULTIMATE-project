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
  "Pineapple-Juice",
  "https://images.pexels.com/photos/5817633/pexels-photo-5817633.jpeg?cs=srgb&dl=pexels-shameel-mukkath-5817633.jpg&fm=jpg&_gl=1*143i9rc*_ga*OTkwODAwMDcuMTY4MTM3NTExMg..*_ga_8JE65Q40S6*MTY4Mzc0MzM1My43LjEuMTY4Mzc0Mzc0NS4wLjAuMA..",
  "32",
  "food",
  "all"
);
// console.log(getAllData());
module.exports = {
  enterNewRecord,
  getAllData,
  getRelatedData,
};
