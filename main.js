const handleClick = (event, tower) => {
    // const tower = event.target;
    // select all discs
    const discs = tower.querySelectorAll(".disc");
    console.log("discs", discs);

    if (discs.length === 0) {
        return;
    }
    const lastDisc = discs[0];
    const getDisc = event.target;
    console.log("getDisc", getDisc);
    console.log("lastDisc", lastDisc);

    // console.log("event", event.target);

    if (lastDisc.classList.contains("selected")) {
        lastDisc.classList.remove("selected");
    } else {
        lastDisc.classList.add("selected");
    }
};
const towers = document.querySelectorAll("#container-tower > .tower");
// Erkläre Bug: lastDisc = undefinded
console.log("towers", towers);
towers.forEach((tower) => {
    tower.addEventListener("click", (event) => handleClick(event, tower));
});

function decrementWidth(width) {
    return width - 10 + "px";
}

function createDisc(width) {
    const div = document.createElement("div");
    div.className = "disc";
    div.style.setProperty("width", width);
    return div;
}

function addDisc(tower, disc) {
    tower.prepend(disc);
    console.log("addDisc", tower);
}

function getTopDisc(tower) {
    const topDisc = tower.querySelector(".disc");
    console.log("topDisc", topDisc);
    return topDisc;
}

const addDiscBtn = document.getElementById("addDisc");
console.log(addDiscBtn);
addDiscBtn.addEventListener("click", function () {
    const tower = document.querySelector("#tower-A");
    const newDisc = createDisc(decrementWidth(getTopDisc(tower).clientWidth));
    addDisc(tower, newDisc);
});

function removeDisc(tower) {
    const discs = tower.querySelectorAll(".disc");
    console.log("discs", discs);
    const lastDisc = discs[0];
    lastDisc.parentElement.removeChild(lastDisc);
    console.log("removeLastDisc", lastDisc);
}

const removeDiscBtn = document.getElementById("removeDisc");
console.log("removeDisc", removeDiscBtn);
removeDiscBtn.addEventListener("click", function () {
    const tower = document.querySelector("#tower-A");
    const TopDisc = getTopDisc(tower);
    removeDisc(tower, TopDisc);
});

function currentTower() {
    const listOfTower = document.querySelectorAll("#container-tower > .tower");
    console.log("listOfTower", listOfTower);
    // const selectedTower = getTopDisc()
    const towerOne = document.getElementById("tower-A");
    towerOne.addEventListener("click", function () {
        console.log("Tower A gets clicked");
    });
    const towerTwo = document.getElementById("tower-B");
    towerTwo.addEventListener("click", function () {
        console.log("Tower B gets clicked");
    });
    const towerThree = document.getElementById("tower-C");
    towerThree.addEventListener("click", function () {
        console.log("Tower C gets clicked");
    });

    // const discs = document.querySelectorAll(".disc");
    // const lastDisc = discs[0];
    // console.log("currentLastDisc", lastDisc);

    // if (towerOne) {

    // } else if (towerTwo) {
    //     console.log("Tower B gets clicked");
    // } else if (towerThree) {
    //     console.log("Tower C gets clicked");
    // } else {
    //     console.log("error");
    // }
}

const towerScope = document.querySelector("#container-tower");
console.log("towerScope", towerScope);
towerScope.addEventListener("click", function () {
    currentTower();
});
