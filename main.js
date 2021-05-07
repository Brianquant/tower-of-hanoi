const handleClick = (event, tower) => {
    // const tower = event.target;

    // Scheiben verschieben

    // Selektieren #1wie #2Wo #3Was

    //
    const discs = tower.querySelectorAll(".disc");
    console.log("discs", discs);
    const idx = discs.length - 1;
    if (discs.length === 0) {
        return;
    }
    const lastDisc = discs[idx];

    console.log("lastDisc", lastDisc);
    console.log("event", event.target);

    if (lastDisc.classList.contains("selected")) {
        lastDisc.classList.remove("selected");
    } else {
        lastDisc.classList.add("selected");
    }
};
const towers = document.querySelectorAll("#container-tower > .tower");
// Scheiben dynamisch anlegen

// Erkläre Bug: lastDisc = undefinded
console.log("towers", towers);
towers.forEach((tower) => {
    tower.addEventListener("click", (event) => handleClick(event, tower));
});

// function moveDisc(tower) {
//     tower.addEventListener("click", function () {
//         while (tower_A.childNodes.length > 0) {
//             tower.appendChild(tower_A.childNodes[0]);
//             console.log(tower);
//         }
//     });
// }

// moveDisc(tower_B);

// function move_B_to_C(disc, tower) {
//     tower.addEventListener("click", function () {
//         w3.addStyle(disc, "background-color", "gold");
//         const cloneDisc = disc.cloneNode(true);
//         tower.appendChild(cloneDisc);
//         disc.remove();
//         console.log(tower);
//     });
// }

// move_A_to_B(disc_3, tower_C);
