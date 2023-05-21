const cloud1 = document.getElementById("cloud1");
const cloud2 = document.getElementById("cloud2");
const cloud3 = document.getElementById("cloud3");
const intro = document.getElementById("intro");

function getComputedStyleValue(element, property) {
    return parseInt(window.getComputedStyle(element).getPropertyValue(property));
}

function updateElementPosition() {
    temp = windows.scrollY;
}
let cloud1Top = getComputedStyleValue(cloud1, "top");
let cloud2Top = getComputedStyleValue(cloud2, "right");
let cloud3Top = getComputedStyleValue(cloud3, "left");
let introTop = getComputedStyleValue(intro, "top");

window.addEventListener("scroll", () => {
    let temp = window.scrollY;
    cloud1.style.top = (temp * -1 + cloud1Top) + "px";
    cloud2.style.right = (temp * -1 + cloud2Top) + "px";
    cloud3.style.left = (temp * -1 + cloud3Top) + "px";
    intro.style.top = (temp * 0.8 + introTop) + "px";

    // console.log("cloud1" + cloud1.style.top + "\n temp " + (temp * -1 + cloud1Temp));
});


document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const content = document.getElementById("textarea").value;
    window.open("mailto:" + email + "?body=" + content);
});

let menuFlag = false;
document.querySelector(".nav-menu ").addEventListener("click", (e) => {
    document.getElementById("menu").style.display = menuFlag ? "none" : "flex";
    menuFlag = !menuFlag
})