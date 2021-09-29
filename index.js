console.log("hello World");

for (let i = 0; i < 3; i++) {
  console.log(i);
}

let importedArr = require("./data");
console.log("require", require("./data"));
console.log(importedArr, "importedArr");
let data1 = require("./data1");
console.log(data1);
console.log(data1.textExported);
console.log(data1.cityExported[0]);
console.log(data1.myKey);

let data2 = require("./data2");
console.log(data2);
//console.log(data2.heroesKey);
//console.log(data2.totalKey)

let logIn = require("./function.js");
console.log(logIn);
logIn("superman");

let myFunctions = require("./function1.js");
console.log(myFunctions);

myFunctions.logOut("Batman");
myFunctions.register("Thor");

console.log("heyyy");

const _ = require("lodash");
console.log(_.sortBy(data1.cityExported));
console.log(_.uniq([3, 2, 3, 2, 3, 2, 3, 3]));
