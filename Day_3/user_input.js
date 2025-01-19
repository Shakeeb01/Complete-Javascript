// Taking User input:

// 1. Easy Way -->  window prompt

// let username;
// username = window.prompt("What is your name?")
// console.log(username)


// 2. Professional Way -->  HTML textbox 
let username;
let title;
document.getElementById('btn').onclick = function(){
    username = document.getElementById('mytext').value;
    title = document.getElementById('title').innerHTML = `Hello ${username}`
};