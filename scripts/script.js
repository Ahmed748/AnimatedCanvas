let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.style.zIndex = '-1';
canvas.style.position = 'fixed';
canvas.style.top = 0;
canvas.style.left = 0;


function draw() {
    let red = 0;
    let green = 0;
    let blue = 0;

    for (let i = 0; i <= canvas.height; i += 10) {
        for (let n = 0; n <= canvas.width; n += 10) {
            red = Math.sin(i * n) * 1 / Math.sin(n) * 255;
            green = red - Math.random() * 255;
            blue = 0;
            ctx.fillStyle = 'rgba(' + Math.round(red) + ',' + Math.round(green) + ',' + blue + ',' + 0.3 + ')';
            ctx.beginPath();
            ctx.arc(n, i, 5, 0, 2 * Math.PI);
            ctx.fill();

        }
    }
    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);