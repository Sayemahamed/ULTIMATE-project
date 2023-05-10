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
// enterNewRecord(
//   "Lemon-Juice",
//   "https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?cs=srgb&dl=pexels-designbyja-2109099.jpg&fm=jpg&w=640&h=429&_gl=1*1lp78vi*_ga*OTkwODAwMDcuMTY4MTM3NTExMg..*_ga_8JE65Q40S6*MTY4MzczMjQwNS42LjEuMTY4MzczMjQzMy4wLjAuMA..",
//   "30",
//   "food",
//   "all"
// );
// console.log(getAllData());
module.exports = {
  enterNewRecord,
  getAllData,
  getRelatedData,
};
