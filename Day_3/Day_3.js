// Loops
let sum = 0;
for(let i = 1; i < 6; i++){
  sum += i;
}

// for-of loop (strings and arrays)
let name = "Saad Khan";
for (let i of name){
  console.log(i);
}
// for-in loop (objects)
const Student = {
  Name: "Muhammad Saad Khan",
  cgpa: 3.74,
  Course: "BS-IET",
  Section: "3-J"
};

for(let std in Student){
  console.log(Student[std]);
}
// practice 1
// console.log("Even Numbers from 1 to 100:");
// for(let i = 0; i <= 100; i++){
//   if(i % 2 === 0){console.log(i, "is Even");}
// }

// practice 2
// let gamenumber = 25;
// let guess;
// do{
//   guess = prompt("Guess a Number Between 0<->100:");
//   if((guess !== gamenumber) && (guess > gamenumber)){
//     alert("Guess is greater then the Game Number.");
//   }
//   else if((guess !== gamenumber) && (guess < gamenumber)){
//     alert("Guess is Lesser then the Game Number.");
//   }
//   else{
//     alert("You Won!")
//   }
// }while(guess != gamenumber);

// strings
let str = "This is a String.";
console.log(str.length);
let size = str.length;
for(let i = 0; i < size; i++){
  console.log(str[i]);
}
// another method
// for(let s of str){
//   console.log(s);
// }

// template literals
let obj = {
  disc: "Pen",
  price: 12
};
let output = `this is ${obj.disc}, it costs ${obj.price}$`; // nice.
console.log(output);
let sentence = `this is a template literal`;
console.log(sentence);
let sr = "   hello die!  ";
console.log(sr.toUpperCase());
console.log(sr.toLowerCase());
console.log(sr.trim());//removes white space at end or start.
console.log(sr.slice(6,8));
console.log(sr.concat(str));
console.log(sr.replace("e" ,"a"));
console.log(sr.replaceAll("e" ,"a"));
console.log(sr.charAt(10));
// practice 1 
let fullname = prompt("Enter Your Name:");
fullname = fullname.trim();
fullname = fullname.toLowerCase();
fullname = "@" + fullname + fullname.length;
console.log(fullname);