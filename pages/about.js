'use strict';

function init() {
    console.log(" initializing about.js :" + new Date());
    const btn1 = document.getElementById("btn1");
    const text1 = document.getElementById("text1");
    btn1.addEventListener('click', (event) => {
        const message = `test in about page ${Date.now()}`;
        console.log(`%c ${message}`, 'color:black;background:yellow');
        text1.innerText = message;
    });
}
init();
