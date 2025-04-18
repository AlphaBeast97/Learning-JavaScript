let btn1 = document.querySelector("#btn1");
let num = 0;
btn1.onclick = () => {
    console.log('i was clicked ' + count() + ' times');
    function count () { 
        return ++num;
    }
}
// if event is defined inline and in JS. JS has higher priority. one handler per query
let div1 = document.querySelector('#div1');
let count = 0;
div1.onmouseover = (e) => {
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);
    count++;
    if(count < 20){
        console.log('have shame');
    }
    if(count > 20){
        console.log('somebody call 911!!!');
    }
}


// event listeners (Best)
// this lets all handlers to execute unlike above example.
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("dblclick", () => {
    console.log('hello world 1');
});
btn2.addEventListener("dblclick", () => {
    console.log('hello world 2');
});
btn2.addEventListener("dblclick", () => {
    console.log('hello world 3');
});
let f = () => {console.log('hello world 4');}
btn2.addEventListener("dblclick", f);
// can also be removed but the callback should be a called function (defined outside the parameter(cant be executed because even tho name is same the memory address is not)).
btn2.removeEventListener("dblclick", f);



// practice time (YEsss SIrrrr!!)
let mode = document.querySelector(".toggle");
let body = document.querySelector("body");
let func = () => {
    body.style.colorScheme = (body.style.colorScheme == "light")? "dark" : "light";
    console.log(body.style.colorScheme);
}
mode.addEventListener("click", func);
