let canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

let pI = Math.PI / 180;

var ctx = canvas.getContext('2d');

let w;
let h;

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (window.innerWidth <= 720) {
        w = canvas.width - canvas.width / 1.08;
        h = canvas.width - canvas.width / 1.15;
    } else {
        w = canvas.width - canvas.width / 1.035;
        h = canvas.width - canvas.width / 1.06;
    }
}
addEventListener("resize", resize);
resize();

let true_flase = false;
let array = ["#34495e", "#e74c3c", '#2ecc71', '#9b59b6', '#f1c40f', '#1abc9c'];

canvas.ontouchmove = function (event) {
    let random = Math.floor(Math.random() * 2);
    ctx.fillStyle = array[Math.floor(Math.random() * array.length)];
    ctx.globalAlpha = .7;
    if (random == 1) {
        ctx.fillRect(event.touches[0].pageX, event.touches[0].pageY, w, h);
    }
};

canvas.onmousedown = function (e) {
    true_flase = true;
}
canvas.onmouseup = function (e) {
    true_flase = false;
}

canvas.onmousemove = function (e) {
    if (true_flase == true) {
        let random = Math.floor(Math.random() * 2);
        ctx.fillStyle = array[Math.floor(Math.random() * array.length)];
        ctx.globalAlpha = .7;
        if (random == 1) {
            ctx.fillRect(e.layerX, e.layerY, w, h);
        }
    }
};
