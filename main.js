let clipBoard = null;
function selectDisc(tower) {
    // Get Disc from tower
    const discs = tower.querySelectorAll(".disc");
    const lastDisc = discs[0];
    // Put Disc in clipboard
    clipBoard = lastDisc;

    console.log("clipBoard", clipBoard);
}

function dropDisc(tower, lastDisc) {
    const discs = tower.querySelectorAll(".disc");
    const clipBoardWidth = clipBoard.clientWidth;
    const lastDiscWidth = lastDisc.clientWidth;
    console.log("discsWidth", clipBoardWidth);
    // Take disc from clipboard
    if (clipBoard === null) {
        return;
    }
    if (discs.length === 0) {
        return tower.append(clipBoard);
        // compare width clipboard to last disc in tower
    } else if (clipBoardWidth < lastDiscWidth) {
        return tower.append(clipBoard);
    }
    // Drop Disc on tower
}

const handleClick = (event, tower) => {
    const select = event.currentTarget;
    console.log("select", select);
    const targetTower = select.closest(".tower");
    console.log("targetTower", targetTower);

    const discs = tower.querySelectorAll(".disc");
    console.log("discs", discs);
    const lastDisc = discs[0];

    dropDisc(targetTower, lastDisc);

    console.log("lastDisc", lastDisc);
    if (lastDisc.classList.contains("selected")) {
        lastDisc.classList.remove("selected");
        clipBoard = null;
    } else {
        lastDisc.classList.add("selected");
        selectDisc(tower);
    }
};
const towers = document.querySelectorAll("#container-tower > .tower");
// Erkläre Bug: lastDisc = undefinded
console.log("towers", towers);
towers.forEach((tower) => {
    tower.addEventListener(
        "click",
        (event) => handleClick(event, tower),
        false
    );
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
    tower.prepend(disc);
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
