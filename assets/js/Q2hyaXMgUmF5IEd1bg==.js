"use strict";

document.addEventListener("DOMContentLoaded", init);
let validCookies = ["aGFja2Vy", "Q2hyaXMgUmF5IEd1bg==", "RGlzZ3Vpc2VkIFRvYXN0", "U2NhcmxldHQgSm9oYW5zc29u", "TGludXMgVGVjaCBUaXBz", "TWF0dCBEYW1vbg=="];
let pushed = 0;

function init() {
    redirect();
    document.querySelector('.hintButton').addEventListener('click', clicked);
    document.querySelector('.info').addEventListener('click', info);
    document.querySelector('.bal').addEventListener('click', balance);
    document.querySelector('.set').addEventListener('click', settings);
    document.querySelector('.logOut').addEventListener('click', logout);
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

function redirect() {
    let username = readCookie("username");
    if (username !== "Q2hyaXMgUmF5IEd1bg=="){
        if (username in validCookies){
            window.location.href = (username + ".html");
        } else {
            window.location.href = "aGFja2Vy.html";
        }
    }
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