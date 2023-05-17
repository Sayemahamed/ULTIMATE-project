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
//   "Cars-Collection",
//   "https://images.pexels.com/photos/163696/toy-car-toy-box-mini-163696.jpeg?cs=srgb&dl=pexels-pixabay-163696.jpg&fm=jpg&_gl=1*kh2q63*_ga*OTkwODAwMDcuMTY4MTM3NTExMg..*_ga_8JE65Q40S6*MTY4NDI1MjU1NS4xMC4xLjE2ODQyNTgwODQuMC4wLjA.",
//   "68",
//   "toys",
//   "child"
// );
module.exports = {
  enterNewRecord,
  getAllData,
  getRelatedData,
};
