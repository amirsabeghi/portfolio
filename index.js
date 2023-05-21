const cloud1 = document.getElementById("cloud1");
const cloud2 = document.getElementById("cloud2");
const cloud3 = document.getElementById("cloud3");
const intro = document.getElementById("intro");

let cloud1Top = parseInt(window.getComputedStyle(cloud1).getPropertyValue("top"));
let cloud2Top = parseInt(window.getComputedStyle(cloud2).getPropertyValue("right"));
let cloud3Top = parseInt(window.getComputedStyle(cloud3).getPropertyValue("left"));
let introTop = parseInt(window.getComputedStyle(intro).getPropertyValue("top"));

window.addEventListener("scroll", () => {
    let temp = window.scrollY;
    let newTemp = 0;
    console.log(temp * -0.5 + cloud1Top);

    if (temp > newTemp) {
        cloud1.style.top = (temp * -1 + cloud1Top) + "px";
        cloud2.style.right = (temp * -1 + cloud2Top) + "px";
        cloud3.style.left = (temp * -1 + cloud3Top) + "px";
        intro.style.top = (temp * 0.8 + introTop) + "px";
        newTemp = temp;
    }
});


document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const content = document.getElementById("textarea").value;
    window.open("mailto:" + email + "?body=" + content);
});

let menuFlag = true;
document.querySelector(".nav-menu ").addEventListener("click", (e) => {
    if (menuFlag) {
        document.getElementById("menu").style.display = "flex";
        menuFlag = false;
    } else {
        document.getElementById("menu").style.display = "none";
        menuFlag = true;
    }
})