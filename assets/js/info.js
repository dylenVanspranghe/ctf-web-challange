"use strict";

document.addEventListener("DOMContentLoaded", init);
let pushed = 0;

function init() {
    usernameID();
    addImages();
    document.querySelector('.hintButton').addEventListener('click', clicked);
    document.querySelector('.info').addEventListener('click', info);
    document.querySelector('.bal').addEventListener('click', balance);
    document.querySelector('.set').addEventListener('click', settings);
    document.querySelector('.logOut').addEventListener('click', logout);
}

function addImages() {
    let username = readCookie("username");
    document.querySelector('.images').innerHTML = "<img src='assets/media/"+ username +".jpg'>"
}

function usernameID(){
    let username = readCookie("username");
    document.querySelector('.ID').innerHTML = username;
}

function info(e) {
    e.preventDefault();
    window.location.href = ("info.html");
}

function balance(e) {
    e.preventDefault();
    let username = readCookie("username");
    window.location.href = (username + ".html");
}

function settings(e) {
    e.preventDefault();
    alert("you don't need this tab, stay away from it.")
}

function logout(e) {
    e.preventDefault();
    alert("i'm pretty sure i said you don't need to logout.");
}

function readCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)===' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function clicked() {
    pushed += 1;
    switch (pushed){
        case (1):
            document.querySelector('.displayHint').innerHTML = "i wouldn't press the button again...";
            break;
        case (2):
            document.querySelector('.displayHint').innerHTML = "you can do this on your own!";
            break ;
        case (3):
            document.querySelector('.displayHint').innerHTML = "well, i can't stop you...";
            break ;
        case (4):
            document.querySelector('.displayHint').innerHTML = "would there be an admin page? i think so...";
            break ;
        case (5):
            document.querySelector('.displayHint').innerHTML = "i want a cookie...";
            break ;
        default:
            document.querySelector('.displayHint').innerHTML = "now you should really be able to do it on your own... no more hints available.";
            break ;
    }
}