// Events
// document.addEventListener("click", movePeg_3);

// Set Peg to default position
function defaultPosition_1(xAxis, yAxis) {
    const peg = document.getElementById("peg-1");
    peg.style.position = "absolute";
    peg.style.left = xAxis + "px";
    peg.style.bottom = yAxis + "px";
}
function defaultPosition_2(xAxis, yAxis) {
    const peg = document.getElementById("peg-2");
    peg.style.position = "absolute";
    peg.style.left = xAxis + "px";
    peg.style.bottom = yAxis + "px";
}
function defaultPosition_3(xAxis, yAxis) {
    const peg = document.getElementById("peg-3");
    peg.style.position = "absolute";
    peg.style.left = xAxis + "px";
    peg.style.bottom = yAxis + "px";
}

defaultPosition_1(50, 240);
defaultPosition_2(85, 285);
defaultPosition_3(125, 327);

function movePeg_3(xAxis, yAxis) {
    const peg_3 = document.getElementById("peg-3");
    let pegIsClicked = false;

    peg_3.addEventListener("click", function () {
        pegIsClicked = true;
        if (pegIsClicked) {
            peg_3.style.position = "absolute";
            peg_3.style.left = xAxis + "px";
            peg_3.style.top = yAxis + "px";
            console.log(pegIsClicked);
        } else {
            return;
        }
    });
}

movePeg_3(125, 400);
