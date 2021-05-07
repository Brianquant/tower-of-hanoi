// Define global vars
const disc_1 = document.getElementById("disc-1");
const disc_2 = document.getElementById("disc-2");
const disc_3 = document.getElementById("disc-3");

const tower_A = document.getElementById("tower-A");
const tower_B = document.getElementById("tower-B");
const tower_C = document.getElementById("tower-C");

// Select disc
function selectDisc(disc) {
    disc.addEventListener("click", function () {
        w3.addStyle(disc, "background-color", "red");
    });
}
selectDisc(disc_3);

// move selected disc from A to B
function move_A_to_B(disc, tower) {
    tower.addEventListener("click", function () {
        w3.addStyle(disc, "background-color", "gold");
        const cloneDisc = disc.cloneNode(true);
        tower.appendChild(cloneDisc);
        disc.remove();
        console.log(tower);
    });
}

move_A_to_B(disc_3, tower_B);
