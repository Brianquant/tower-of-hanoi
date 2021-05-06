// Define global vars
const disc_1 = document.getElementById("disc-1");
const disc_2 = document.getElementById("disc-2");
const disc_3 = document.getElementById("disc-3");

const tower_A = document.getElementById("tower-A");
const tower_B = document.getElementById("tower-B");
const tower_C = document.getElementById("tower-C");

// Copy disc

// Move possibilities

function moveDisc_3(xAxis, yAxis) {
    const disc_3 = document.getElementById("disc-3");
    let discIsClicked = false;

    disc_3.addEventListener("click", function () {
        discIsClicked = true;
        disc_3.style.position = "absolute";
        disc_3.style.left = xAxis + "px";
        disc_3.style.top = yAxis + "px";
        console.log(discIsClicked);
    });
}

moveDisc_3(224, 400);

// Add disc to Peg B
function copyDisc() {
    tower_B.addEventListener("click", function () {
        const cloneDisc = disc_3.cloneNode(true);
        tower_B.appendChild(cloneDisc);
        console.log(tower_B);
    });
}

copyDisc();
