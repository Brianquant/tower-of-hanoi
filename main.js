const handleClick = (event, tower) => {
    // const tower = event.target;

    // Scheiben verschieben

    // Select Disc

    // select all discs
    const discs = tower.querySelectorAll("#disc");
    console.log("discs", discs);

    // Get last last disc of the peg
    const idx = discs.length - 1;
    // console.log("idx", idx);
    if (discs.length === 0) {
        return;
    }
    const lastDisc = discs[idx];
    console.log("lastDisc", lastDisc);
    // console.log("event", event.target);

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

// Add discs
function addDiscs() {
    const tower_x = document.querySelector("#tower-A");
    const incrementDisc = document.getElementById("addDisc");
    incrementDisc.addEventListener("click", function () {
        const div = document.createElement("div");
        div.className = "disc-4";
        const id = document.createAttribute("id");
        id.value = "disc";
        div.setAttributeNode(id);
        tower_x.insertBefore(div, tower_x.firstChild);

        console.log(tower_x);
        // e.preventDefault();
    });
}

addDiscs();
