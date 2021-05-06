// Define discs
const disc_1 = document.getElementById("disc-1");
const disc_2 = document.getElementById("disc-2");
const disc_3 = document.getElementById("disc-3");
console.log(disc_1.dataset.indexNumber);
console.log(disc_2.dataset.indexNumber);
console.log(disc_3.dataset.indexNumber);

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
