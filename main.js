const handleClick = (event, tower) => {
    // const tower = event.target;
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
    console.log("event", event.target);

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

decrementWidth();

(function addDisc() {
    const discs = document.querySelectorAll("#disc");
    console.log("discs", discs);

    // Get last last disc of the peg
    const idx = discs.length - 1;
    console.log("idx_stack", idx);

    const lastDisc = discs[idx];
    console.log("lastdiscINStack", lastDisc);

    const init_tower = document.querySelector("#tower-A");
    const incrementDisc = document.getElementById("addDisc");
    console.log(incrementDisc);
    incrementDisc.addEventListener("click", function () {
        const div = document.createElement("div");
        div.className = "disc-style";
        const id = document.createAttribute("id");
        id.value = "disc";
        div.setAttributeNode(id);
        div.style.setProperty("width", decrementWidth(lastDisc.clientWidth));
        init_tower.appendChild(div);
        console.log(init_tower);
    });
})();
