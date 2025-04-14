let marks = [96, 49, 50];
console.log("Size", marks.length);


// practice 1 
let total = 0;
for(let i of marks){
  total += i; 
}
let avg = total/marks.length;
console.log(avg);


// practice 2
let prices = [250, 100, 150, 290, 1000];
console.log("Prices before 10% OFF\n", prices);
let offer = 10;
console.log("Prices after 10% OFF:");
for(let i in prices){
  prices[i] = prices[i] - (prices[i] / 10);
}
console.log(prices);

// push is to add at the end of the array 
// pop is to delete at the end of the array
let items = ["apple", "mango"];
console.log(items);
items.push("eggs");
console.log(items);
console.log("deleted from the end", items.pop());// it also displays it wow
// tostring converts an array to string sad
console.log(items.toString());
// concat is used to combine 2 arrays and return the ans
let items2 = ["peach"];
let items3 = items.concat(items2);
console.log(items3);
// unshift is used to add to the start of the array
items3.unshift("strawberry")
console.log(items3);
// shift is used to delete from the start of the array and return it
console.log("Deleted from the start", items3.shift());
// .slice(does not change the original array) and .splice(changes the original array)
console.log(items3.slice(0, 1));
// splice syntax is //*arr.splice(starting-index, del-count, new-element1...n);
console.log(items3.splice(1, 1, "cherry")); //it removes the specified 
console.log(items3);

// practice 1
let companies = ["Bloomberg", "Microsoft", "Uber", "Google"];
console.log("Companies in Array", companies);
console.log("Removed",companies.shift() , companies);
console.log("Removed", companies.splice(1, 1, "Ola"), companies);
console.log("Added Amazon", companies.push("Amazon"), companies);
