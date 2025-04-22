// What is an API: "it provides an interface for fetching (sending/receiving) resources"
const url = "https://meowfacts.herokuapp.com/";
let facts = document.querySelector(".facts");
const btn = document.querySelector("button");
let data = 0;

// using fetch() method
// syntax fetch(url, [options]) 

btn.addEventListener("click", async () => {
    console.log("Getting Data");
    // when fetch is used without any options like below it sends a GET request(get data) by default
    let response = await fetch(url); //this is a GET request
    console.log(response.status);
    
    data = await (response.json());

    facts.textContent = data.data;
})

// const getFacts = async () => {
//     console.log("Getting Data");
//     // when fetch is used without any options like below it sends a GET request(get data) by default
//     let response = await fetch(url); //this is a GET request
//     console.log(response.status);
    
//     data = await (response.json());
//     // console.log(data.data);
//     facts.textContent = data.data;
// };

// now this does not give a readable data that we require
// it's in JSON format
// so we look at these terms to understand how to get the required data


// AJAX is asynchronous JS & XML (this is boomer shit [don't care])
// JSON is JavaScript Object Notation (modern)


