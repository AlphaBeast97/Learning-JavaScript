// DOM(Document Object Model)
// structure is as follow:
/*
    Window->Document->HTML(split)
                                \->Head(contains meta data and links)
                                \->Body(further split into tags inside body)
*/

document.body.style.background = "Green";
// console.dir(document.body.childNodes[3].innertext = "abcd");


// let btn = document.getElementById("btn");
// console.log(btn);

// let container = document.getElementsByClassName("container");
// console.dir(container);

// let tag = document.getElementsByTagName("p");
// console.log(tag);

// query selector
// let par1 = document.querySelector(".container"); // will give only the first element
// console.dir(par1);
// let par = document.querySelectorAll(".container"); // will give only the all element
// console.dir(par);
// it returns the node list.


// property value checking and changing
let ele1 = document.querySelector(".container");
console.dir(ele1.tagName); 
console.dir(ele1.innerHTML); 
console.dir(ele1.textContent); 


// homework
let el = document.querySelector("body");
console.dir(el.firstChild);
let el1 = document.querySelector("div");
console.dir(el.lastChild);
let el2 = document.querySelector("div");
console.dir(el2.children[0]);




// practice 1
let head12 = document.querySelector("#heading1");
console.dir(head12.textContent);
head12.textContent = head12.textContent + " From Apna College"

// practice 2
let new_content = document.querySelectorAll(".container");
// console.dir(new_content);
// new_content[0].innerHTML += " New Content 1";
// new_content[1].innerHTML += " New Content 2";
// new_content[2].innerHTML += " New Content 3";

// loops can also be used
for(let i = 0; i < new_content.length; i++){
    new_content[i].innerHTML += " hello world";
}

for(div of new_content){
    console.dir(div.textContent);
}