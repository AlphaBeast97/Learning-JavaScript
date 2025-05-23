// async await >> promise chains >> callback hell
// synchronous programming is sequential execution of instructions
console.log("one");
console.log("two");
console.log("three");

// asynchronous programming allows for code after the asynchronous function to execute while the asynchronous function is executing
// for API's communication


// setTimeout function
// it executes function but we define when that execution happens
const h = () => {
    console.log("hello");
}
setTimeout(h, 2000); // adds delay to the execution of the called function

// also can be written like this 
// better method just add the code you want to execute after delay inside the setTimeout func
setTimeout(() => {
    console.log(`this will execute after 4 sec`);
}, 4000)
// it does not block the line of code after this thats amazing 
// the lines after will be executed and then when tha delay is reached they will execute this

console.log("four");
console.log("five");
console.log("six");

// this is asynchronous programming
// it helps the flow of program



// a callback is a function passed as an argument to another function
function sum (a, b){
    sum = a + b;
    console.log(sum);
}

function calc (a, b, sumCallback) {
    sumCallback(a, b);
}
calc(1,2,sum);
// also can be written a

calc(2, 5, (a, b) => {
    sum = a + b;
    console.log(sum);
})


const hello = () => {
    console.log("HEY!");
}

setTimeout(hello, 3000);



//// use of callback can lead to callback hell
//// nested callback 
//// bad practice

// const getData = (dataID) => {
//     setTimeout(() => {
//         console.log("DATA", dataID);
//     }, 2000);
// }

// getData(10000004);
// getData(10000005);
// this starts the timer for both statements at the same time so they appear at the same time but we want delay between them so we will do this below

// const getData = (dataID, getNextData) => {
//     setTimeout(() => {
//         console.log("DATA", dataID);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// it should be written like this 
// this looks complex but is the standard

// this is callback hell (no shit this donkey poo)
// getData(10000004, () => {
//     console.log("getting Data 2");
//     getData(10000005, () => { // i don't feel good about ths
//         console.log("getting Data 3");
//         getData(10000006, () => {
//             console.log("getting Data 4");
//             getData(10000007);
//         });
//     });
// });
// getData(10000005);





// promises try to solve this hell
// they are not fault proof

// a promise has three states(pending, fulfilled = resolve, rejected)
let promise = new Promise((resolve, reject) => {
    console.log("i am a promise");
    // resolve(123);
    reject("some error occurred");
});

// lets look at the get data example again
const getData = (dataID) => {
    return new Promise ((resolve, reject) => {  
        setTimeout(() => {
            console.log("DATA", dataID);
            resolve("success");
        }, 5000);
    });
}
// getData(10000004, () => {
    //     console.log("getting Data 2");
//     getData(10000005, () => { // i don't feel good about ths
//         console.log("getting Data 3");
//         getData(10000006, () => {
//             console.log("getting Data 4");
//             getData(10000007);
//         });
//     });
// });
// adding promise chaining to this

// getData(1).then(() => {
//     return getData(2);
// })
// .then(() => {
//     return getData(3);
// })
// .then((res) => {
//     console.log(res);
// })
// this is promise chaining


// we want some work to be done when a promise reaches its resolution (resolve/reject)
// we use .then when resolve (used a lot more)
// and .catch when reject

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("i am promise");
        // resolve("success");
        reject("rejected");
    })
} 

let pr = getPromise();

// default para res (result)
pr.then((res) => {
    console.log("promise fulfilled ", res);
});

// default para err (result)
pr.catch((err) => {
    console.log("promise rejected ", err);
});


function asyncFunc1 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data 1");
            resolve("success");
        }, 4000)
    })
}


function asyncFunc2 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data 2");
            resolve("success");
        }, 4000)
    })
}
console.log("fetching data 1");
asyncFunc1().then(() => {
    console.log("fetching data 2");
    asyncFunc2().then(() => {});
});

// promise chaining is above



// async-await functions are the best approach tho
// the make async programming simpler
// it always returns a promise

async function h12() {
    console.log("Hello in russian");
}

// await key word
// it pauses the execution of the surrounding "async" function until promise is settled
// only used inside a async function



async function API() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I AM API");
            resolve(200);
        }, 2000)
    });
}
// const api = API();


async function getWeather () {
    await API();// 1st call
    await API();// 2nd call
    console.log("GOT IT");
}


// same data example but with async-await

async function awaitData() {
    await getData(20000);
    await getData(20001);
    await getData(20002);
}

// bro this shit best
// this does not automatically get called we have to call it manually

// the solution to that is iife (immediately invoked function express )

// this belongs in advanced java script

// it is a function that is immediately executed when defined
// they are functions but don't have a name and have three ways of execution.
// they are only onetime use.






// // standard IIFE
// (function () {
//     // statements…
// })();
  
// // arrow function variant
// (() => {
//     // statements…
// })();

// async method
(async () => {
    await getData(20000);
    await getData(20001);
    await getData(20002);
})();