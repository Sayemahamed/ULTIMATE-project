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
  "Big-Pizza",
  "https://images.pexels.com/photos/14906564/pexels-photo-14906564.jpeg?cs=srgb&dl=pexels-alteredsnaps-14906564.jpg&fm=jpg&w=640&h=480&_gl=1*61hiqd*_ga*OTkwODAwMDcuMTY4MTM3NTExMg..*_ga_8JE65Q40S6*MTY4Mzc0MzM1My43LjEuMTY4Mzc0NTc1NC4wLjAuMA..",
  "59",
  "food",
  "all"
);
module.exports = {
  enterNewRecord,
  getAllData,
  getRelatedData,
};
