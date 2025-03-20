// Declare 3 variables with different data types
var myCity = "Mumbai";       // String
let myAge = 26;              // Number
const isLearning = true;     // Boolean

// Print them
console.log(myCity, myAge, isLearning);

function test() {
    if (true) {
      var x = 10;
      let y = 20;
      const z = 30;
    }
    console.log(x); // 10 (accessible)
    //console.log(y); // Error! Block madhe hota
    //console.log(z); // Error! Block madhe hota
  }
  test();

//   2. Re-declaration/Update
// var → Re-declare & Update Possible
// let → Re-declare Not Possible, Update Possible
// const → Re-declare & Update Not Possible


var a = 5;
var a = 10;  // Allowed (Re-declare possible)

let b = 15;
b = 20;      // Update possible
// let b = 25; // Error! Re-declare not allowed

const c = 30;
// c = 35;    // Error! Update not possible
// const c = 40; // Error! Re-declare not allowed

// ------------------------------------------------------------------------------------------------------

// 3. Hoisting (Memory Allocation Phase)
// var → Hoisted with undefined
// let & const → Hoisted but Not Initialized (Temporal Dead Zone)