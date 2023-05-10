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
  "Mango-Juice",
  "https://images.pexels.com/photos/1251210/pexels-photo-1251210.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1251210.jpg&fm=jpg&w=640&h=960&_gl=1*1yriae4*_ga*OTkwODAwMDcuMTY4MTM3NTExMg..*_ga_8JE65Q40S6*MTY4Mzc0MzM1My43LjEuMTY4Mzc0MzU3NC4wLjAuMA..",
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
