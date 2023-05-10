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
  "ChickenBurger",
  "https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1199960.jpg&fm=jpg&w=640&h=427&_gl=1*1s8hok7*_ga*OTkwODAwMDcuMTY4MTM3NTExMg..*_ga_8JE65Q40S6*MTY4Mzc0MzM1My43LjEuMTY4Mzc0NDk2MC4wLjAuMA..",
  "49",
  "food",
  "all"
);
module.exports = {
  enterNewRecord,
  getAllData,
  getRelatedData,
};
