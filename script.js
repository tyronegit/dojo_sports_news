console.log("page loading...");

var buys = [159];
var span = [   
    document.querySelector("#post")
];

function buy(id) {
    buys[id]++;
    span[id].innerHTML = buys[id];
}

var buys = [314];
var span = [   
    document.querySelector("#posta")
];

function buya(id) {
    buys[id]++;
    span[id].innerHTML = buys[id];
}

function hide(el) {
    el.remove()
}
