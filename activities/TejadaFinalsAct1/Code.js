
const name1 = document.getElementById("Name1");
const image1 = document.getElementById("Image1");
const input1 = document.getElementById("Input1");
const year1 = document.getElementById("Year1");
const click1 = document.getElementById("Click1");
const dblclick1 = document.getElementById("DblClick1");
const press1 = document.getElementById("Press1");
const reset1 = document.getElementById("Reset1");
const status1 = document.getElementById("Status1");


click1.addEventListener("click", function () {
    name1.innerHTML = "Future Pro(blema)\nGame Dev/Artist";
    status1.innerHTML = "You Clicked :).";
});

dblclick1.addEventListener("dblclick", function () {
    name1.style.color = "white";
    status1.innerHTML = "You Double-clicked :).";
});

image1.addEventListener("mouseover", function () {
    image1.style.transform = "scale(1.1)";
    status1.innerHTML = "Mouse entered the icon.";
});

image1.addEventListener("mouseout", function () {
    image1.style.transform = "scale(1)";
    status1.innerHTML = "Mouse left the icon.";
});

press1.addEventListener("mousedown", function () {
    press1.style.backgroundColor = "khaki";
    press1.style.transform = "scale(0.95)";
    status1.innerHTML = "Mouse button is Hold.";
    name1.style.color = "gold"
});

press1.addEventListener("mouseup", function () {
    press1.style.backgroundColor = "tan";
    press1.style.transform = "scale(1)";
    status1.innerHTML = "Mouse button released.";
});

input1.addEventListener("focus", function () {
    input1.style.backgroundColor = "khaki";
    status1.innerHTML = "Input active.";
});

year1.addEventListener("focus", function () {
    year1.style.backgroundColor = "khaki";
    status1.innerHTML = "Year active.";
});

input1.addEventListener("blur", function () {
    input1.style.backgroundColor = "white";
    status1.innerHTML = "Input inactive.";
});

year1.addEventListener("blur", function () {
    year1.style.backgroundColor = "white";
    status1.innerHTML = "Year inactive.";
});

year1.addEventListener("change", function () {
    status1.innerHTML = "Year selected: " + year1.value;
});

reset1.addEventListener("click", function () {
    name1.style.color = "black";
    name1.innerHTML = "Ken";
    status1.innerHTML = "Reset Done :)";
    input1.value = "";
    year1.value = "";
});

input1.addEventListener("input", function () {
    name1.innerHTML = input1.value || "Ken";
    status1.innerHTML = "Typing...";
});
