
'use strict';

function init() {
    console.log("initializing home.js "+ new Date());
    const btn1 = document.getElementById("btn2");
    const text1 = document.getElementById("text1");
    if (btn2) {
        btn2.addEventListener('click', (event) => {
            const message = `${event.target.value}  ${Date.now()}`;
            console.log(`%c ${message}`,'color:yellow;background:black');
            text1.innerText = message;
        });
    }
}
init();