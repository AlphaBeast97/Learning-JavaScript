// let div = document.querySelector(".container");
// console.log(div);
// console.log(div.getAttribute("class"));

// let img = document.querySelector("img");
// console.log(img);
// let att = img.getAttribute("src");
// console.log(att);
// const src = "chal nikal!";
// img.setAttribute("src", src);
// console.log(src);


// changing style
// let p = document.querySelector("p");
// // p.style.backgroundColor = ("red");
// p.style.backgroundColor = ("black");
// p.style.fontSize = ("1.5rem");
// // p.style.visibility = ("hidden");
// p.innerText = ("wow cool");

// console.log(p.style);



// creating button;
let newbtn = document.createElement("button");
newbtn.innerText = "Click Me!";
// appending it in the body now
let div = document.querySelector("p");
div.append(newbtn);
div.prepend(newbtn);
div.before(newbtn);
div.after(newbtn);
newbtn.remove();
// console.log(newbtn);
// this is soooo cooooool i like it.


let box = document.querySelector("div");
let heading = document.createElement("h1");
heading.innerHTML = "<i>This is cool and added by JS!!!!!!</i>";
box.prepend(heading);
box.style.color = "#463564";

// div.remove();



// practice time yipeeee


let new_btn = document.createElement("button");
let body = document.querySelector("body").prepend(new_btn);
new_btn.innerHTML = ("click me");
new_btn.style.backgroundColor = ("red");
new_btn.style.color = ("white");
new_btn.style.fontSize = ("5rem");


// practice q2 les gooooo
let p = document.querySelector(".para");
p.classList.add("newClass");
