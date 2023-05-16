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
//   "Standard-Shirt",
//   "https://images.pexels.com/photos/10952733/pexels-photo-10952733.jpeg?cs=srgb&dl=pexels-farhad-chaudhary-10952733.jpg&fm=jpg&_gl=1*16fz7ae*_ga*OTkwODAwMDcuMTY4MTM3NTExMg..*_ga_8JE65Q40S6*MTY4NDI0ODY5MC45LjEuMTY4NDI0OTI5OS4wLjAuMA..",
//   "115",
//   "mansTops",
//   "male"
// );
module.exports = {
  enterNewRecord,
  getAllData,
  getRelatedData,
};
