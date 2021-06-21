var fs = require("fs");
const { readFileSync } = require("fs");

const array = readFileSync("./temp/words.txt")
  .toString()
  .replace(/\r\n/g, "\n")
  .split("\n");
var map = new Map();
let entries = 0;
for (let i of array) {
  entries++;
  map[i] = i.length;
}
let n = 2;
let ans = 0;
for (
  var i = entries - n, keys = Object.keys(map), ii = keys.length;
  i < ii;
  i++
) {
  let ans = 0;

  console.log(keys[i]);
  for (let arr of array) {
    if (keys[i].includes(arr)) {
      //console.log("ct");
      ans++;
    }
  }
  console.log(ans - 1);
}
