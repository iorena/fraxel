$(window).load(function() {
    var x = 400;
    var y = 400;

    drawFractal(x, y, 729);
});

function drawFractal(x, y, reach) {
    if (reach == 1) {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.strokeStyle= 'black';
        ctx.moveTo(x-1, y);
        ctx.lineTo(x+1, y);
        ctx.moveTo(x, y+1);
        ctx.lineTo(x, y-1);
        ctx.stroke();
        return;
    }
    drawFractal(x + reach, y, reach / 3);
    drawFractal(x - reach, y, reach / 3);
    drawFractal(x, y + reach, reach / 3);
    drawFractal(x, y - reach, reach / 3);
    if (reach > 81) {
        drawFractal(x + reach, y - reach, reach / 3);
        drawFractal(x - reach, y + reach, reach / 3);
        drawFractal(x + reach, y + reach, reach / 3);
        drawFractal(x - reach, y - reach, reach / 3);
    }
    drawFractal(x, y, reach / 3);
}
