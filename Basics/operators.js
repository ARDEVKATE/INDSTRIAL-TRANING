// Operator	Meaning	Example	Output
// +	Addition	            10 + 5	              15
// -	Subtraction	            10 - 5	              5
// *	Multiplication	        10 * 5	              50
// /	Division	            10 / 2	              5
// %	Modulus	                10 % 3	              1
// **	Exponentiation	        2 ** 3	              8


let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.33
console.log(a % b);  // 1
console.log(2 ** 3); // 8

// Assignment Operators (Variables assign करायला वापरतात)
// Operator	                                           Example	Meaning
// =	                x = 5	                       Assign value to x
// +=	                x += 3	                       x = x + 3
// -=	                x -= 2	                       x = x - 2
// *=	                x *= 4	                       x = x * 4
// /=	                x /= 2	                       x = x / 2

let x = 10;
x += 5;  // x = x + 5 -> 15
x *= 2;  // x = x * 2 -> 30
console.log(x); // 30

// Comparison Operators (तुलना करायला वापरतात)
// Operator	Meaning	Example (a=10, b=5)

// ==	                       Equal to	                    a == b →        false
// ===	                       Strict Equal (type check)	a === "10" →    false
// !=	                       Not equal	                a != b →        true
// !==	                       Strict Not Equal	            a !== "10" →    true
// >	                       Greater than	                a > b →         true
// <	                       Less than	                a < b →         false
// >=	                       Greater than or equal	    a >= 10 →       true
// <=	                       Less than or equal	        a <= 5 →        false

console.log(10 == "10");  // true (type check nahi karto)
console.log(10 === "10"); // false (type check karto)
console.log(10 !== 5);    // true
console.log(10 > 5);      // true

// Logical Operators (Multiple Conditions Sathi)
// Operator	Meaning	           Example (x=10, y=20)
// &&	         AND (Both true)	x > 5 && y < 30 →     true
// `		`
// !	         NOT (Reverse)	!   (x > 5) →             false

let age = 25;
console.log(age > 18 && age < 30); // true (AND - Donhi conditions true)
console.log(age > 30 || age < 40); // true (OR - Ek tari condition true)
console.log(!(age > 18)); // false (NOT - Ulta karte)