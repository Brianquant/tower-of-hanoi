// Set default value
let clipBoard = null;

const handleClick = (event, tower) => {
    // check for disc
    if (clipBoard !== null) {
        const discs = tower.querySelectorAll(".disc");
        const lastDisc = discs[0];
        if (
            discs.length !== 0 &&
            clipBoard.dataset.indexNumber < lastDisc.dataset.indexNumber
        ) {
            return;
        }
        tower.prepend(clipBoard);
        console.log("prepend", tower);
    }
    // tower = event.target; provide all discs
    const discs = tower.querySelectorAll(".disc");
    console.log("discs", discs);

    // If tower has no discs, then return an empty array
    if (discs.length === 0) {
        return;
    }

    // Get last disc of tower
    const lastDisc = discs[0];
    // console.log("lastDisc", lastDisc, lastDisc.dataset.indexNumber);

    // If Statement checks for class selected
    if (lastDisc.classList.contains("selected")) {
        // remove class selected from last disc
        lastDisc.classList.remove("selected");
        // Reset clipboard value
        clipBoard = null;

        console.log("remove selected", lastDisc, "clipboard", clipBoard);
        // Refactor
    } else {
        // add class selected and disc moves to the top
        lastDisc.classList.add("selected");
        // store last disc in clipboard
        clipBoard = lastDisc;
        console.log("clipboard", clipBoard);
    }
};
// The div container-tower targets all divs with the class name towers
const towers = document.querySelectorAll("#container-tower > .tower");
console.log("towers", towers);

towers.forEach((tower) => {
    // console.log("tower-array", tower);
    tower.addEventListener("click", (event) => handleClick(event, tower));
});

function decrementWidth(width) {
    return width - 10 + "px";
}

function incrementIndex(index) {
    return parseInt(index) + 1;
}

function createDisc(width) {
    const targetIndex = document.querySelector(".disc");
    const div = document.createElement("div");
    div.className = "disc";
    const newIndex = incrementIndex(targetIndex.dataset.indexNumber);
    div.dataset.indexNumber = newIndex;
    div.style.setProperty("width", width);
    return div;
}

function addDisc(tower, disc) {
    const discs = tower.querySelectorAll(".disc");
    if(discs.length < 5) {
        tower.prepend(disc);
    } else {
        return;
    }
    console.log("addDisc", tower);
}

function getTopDisc(tower) {
    const topDisc = tower.querySelector(".disc");
    // console.log("topDisc", topDisc);
    return topDisc;
}

const addDiscBtn = document.getElementById("addDisc");
// console.log(addDiscBtn);
addDiscBtn.addEventListener("click", function () {
    const tower = document.querySelector("#tower-A");
    const newDisc = createDisc(decrementWidth(getTopDisc(tower).clientWidth));
    addDisc(tower, newDisc);
});

function removeDisc(tower) {
    const discs = tower.querySelectorAll(".disc");
    // console.log("discs", discs);
    const lastDisc = discs[0];
    lastDisc.parentElement.removeChild(lastDisc);
    return lastDisc;
}

const removeDiscBtn = document.getElementById("removeDisc");
// console.log("removeDisc", removeDiscBtn);
removeDiscBtn.addEventListener("click", function () {
    const tower = document.querySelector("#tower-A");
    const TopDisc = getTopDisc(tower);
    removeDisc(tower, TopDisc);
});
