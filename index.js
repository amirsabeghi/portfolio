const cloud1 = document.getElementById("cloud1");
const cloud2 = document.getElementById("cloud2");
const cloud3 = document.getElementById("cloud3");
const intro = document.getElementById("intro");

// Navbar links
const navbar = document.querySelectorAll(".navbar a");
const [home, about, contact] = navbar;
// let homeTop = about.getBoundingClientRect().top;
const aboutSection = document.querySelector("#about");
const contactSection = document.querySelector("#cta");
let aboutTop = aboutSection.offsetTop;
let contactTop = contactSection.offsetTop;

function getComputedStyleValue(element, property) {
    return parseInt(window.getComputedStyle(element).getPropertyValue(property));
}


let cloud1Top = getComputedStyleValue(cloud1, "top");
let cloud2Top = getComputedStyleValue(cloud2, "right");
let cloud3Top = getComputedStyleValue(cloud3, "left");
let introTop = getComputedStyleValue(intro, "top");

function setActive(navbarList, activeItem) {
    navbarList.forEach(item => {
        item.classList.remove("active");
    });
    activeItem.classList.add("active");
}

// Scroll Event
window.addEventListener("scroll", () => {
    let temp = window.scrollY;
    cloud1.style.top = (temp * -1 + cloud1Top) + "px";
    cloud2.style.right = (temp * -1 + cloud2Top) + "px";
    cloud3.style.left = (temp * -1 + cloud3Top) + "px";
    intro.style.top = (temp * 0.8 + introTop) + "px";


    if (temp < (aboutTop * 2 / 3)) {
        setActive(navbar, home);
    } else if (temp < aboutTop + (contactTop - aboutTop) * 3 / 4) {
        setActive(navbar, about);
    } else {
        setActive(navbar, contact);
    }
});

// Form email redirect
document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const content = document.getElementById("textarea").value;
    window.open("mailto:" + email + "?body=" + content);
});

// navbar toggle
let id = null;
let height = 0;
document.querySelector(".nav-menu ").addEventListener("click", (e) => {
    if (height == 0) {
        clearInterval(id);
        id = setInterval(frame, 1);
        function frame() {
            if (height == 200) {
                clearInterval(id);
            } else {
                height += 10;
                document.getElementById("menu").style.height = height + "px";
            }
        }
    } else if (height == 200) {
        clearInterval(id);
        id = setInterval(frame, 1);
        function frame() {
            if (height == 0) {
                clearInterval(id);
            } else {
                height -= 10;
                document.getElementById("menu").style.height = height + "px";
            }
        }
    }
})
