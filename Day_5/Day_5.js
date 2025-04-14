// functions
let slur = "i am an idiot!";
function myFunciton(slur){
  console.log(slur);
}
myFunciton(slur);


// function add(a, b){
//   return a+b;
// }
// alternatively (arrow function)
const add = (a, b) => {
  return a + b;
}
console.log(add(10, 20));
// cool
const mul = (a, b) => {
  // return a * b;
  console.log(a*b);
}
mul(10, 20);
// console.log(mul(10, 20));
const name = () => {console.log("Saad");}
// this is used for small functions for larger functions we use the traditional functions

// practice q1
// function vowels_count (string) {
//   let count = 0;
//   for(let i = 0; i < string.length; i ++){
//     if(string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u"){
//       count++;
//     }
//   }
//   return count;
// }
// let str = "Hello My Name is Saad Khan."
// console.log(vowels_count(str));
// q2 (alternatively)
const vowels_count = (string) => {
  let count = 0;
  for(let i = 0; i < string.length; i ++){
    if(string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u"){
      count++;
    }
  }
  return count;
}
let str = "Hello My Name is Saad Khan."
console.log(vowels_count(str));



// arr.foreach
// bro no way this shit is shit
// it iterates through the array one by one wow
let arr = [1, 2, 3];
// arr.forEach(function print(val){
//   console.log(val);
// });
// generally passed as an arrow func

arr.forEach((val, index) => {
  console.log(val, "at Index", index);
});

// what are higher order functions/methods 
// forEach is higher order fuc/method 
// the func which uses other func as parameter or returns it is called higher order func/method.



// practice 2
// let numbers = [1, 4, 5, 6, 19];
// numbers.forEach((num) => {
//   console.log(num**2);
// })
// another way to do this is
let numbers = [1, 4, 5, 6, 19];
let calc_square = (num) => {
  console.log(num**2);
}
numbers.forEach(calc_square);

console.log(numbers);

// more array methods
// map method
// it is very similar to forEach
// the only diff is that it creates a new array
// forEach does not change the array in any way(😮😮😮)

let arr2 = [2,4,5,5,2];
console.log(arr2);
let newarr = arr2.map((val) => {
  return val;
});
console.log(newarr);
// nice
// filter 
// it only copies the element that return true for a specified condition

let evenarr = newarr.filter((val) =>{
  return val % 2 === 0;
});
console.log(evenarr);

// reduce method reduces any array to a single value
let arr100 = [1, 22, 3, 4];
let largest = arr100.reduce((prev, curr) => {
  return prev > curr ? prev : curr
});
console.log(largest);



// practice 3 q1
let stdmatks = [90, 20, 50 , 100, 89, 91];
let Agraders = stdmatks.filter((val) => {
  return val > 90;
});
console.log(Agraders);

// practice 3 q2
let nlimit = prompt("Input Number n");
let customarr = [];
for(let i = 1; i <= nlimit; i++){
  customarr.push(i);
}
console.log(customarr);
let sumall = customarr.reduce((prev, curr) => {
  return prev + curr;
});
console.log(sumall);
let proall = customarr.reduce((prev, curr) => {
  return prev * curr;
});
console.log(proall);