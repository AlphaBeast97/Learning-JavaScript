// operators
let a = 10;
let b = 10;
console.log("a + b", a+b);
console.log("a - b", a-b);
console.log("a * b", a*b);
console.log("a / b", a/b);
console.log("a ^ 2", a**2);
console.log("a % b", a%b);
console.log("a", ++a);
console.log("a", --a);
(a !== b)? console.log(true) : console.log(false);


let mode = "dark";
let color;
// if (mode === "dark") {
//     color = "dark";
// }
// else if(mode === "white"){
//     color = "White";
// }
// else{
//     color = "blue";
// }


let result = color === mode? true : false;
console.log(result);

switch(mode){
    case "dark":
        color = "dark";
        break;
    default:
        break;
}

// practice 1
// let num = prompt("Enter a Number:");
// let Result = num % 5 === 0 ? "yes" : "no";
// console.log("Is", num, "Multiple of 5:", Result);
// practice 2
let marks = prompt("Enter Your Marks");
let grade;
let numMarks = parseInt(marks); // Convert the input to an integer

if (isNaN(numMarks)) {
  console.error("Invalid Input: Please enter a number.");
} else if (numMarks >= 80 && numMarks <= 100) {
  grade = "A";
} else if (numMarks >= 70 && numMarks <= 79) {
  grade = "B";
} else if (numMarks >= 60 && numMarks <= 69) {
  grade = "C";
} else if (numMarks >= 50 && numMarks <= 59) {
  grade = "D";
} else if (numMarks >= 0 && numMarks <= 49) {
  grade = "F";
} else {
  console.error("Invalid Input: Marks out of range.");
}

console.log(grade);