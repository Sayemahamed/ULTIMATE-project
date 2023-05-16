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
//   "Check-Shirt",
//   "https://pixabay.com/get/g9b77bda8bc4031604832033e2038a09fced1fb283380cd50ae15a68c9d6b1aa933b9ddef840d5139c060acd75d8118a4570b614c03cd874c48075129a0ce3bc3d00718a6cac890ca11030743e15ed6b6_640.jpg",
//   "105",
//   "mansTops",
//   "male"
// );
module.exports = {
  enterNewRecord,
  getAllData,
  getRelatedData,
};
