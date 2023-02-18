//read data
const fs = require("fs")
const data = fs.readFileSync("./homework-7/log.txt", "utf-8")
// console.log(data);

//write data
fs.writeFileSync("./baru.txt", data, "utf-8");
console.log('Done')