import "./style.scss";

document.querySelector("#app").style.display = "block";

const navIcons = document.getElementsByClassName("icon");
console.log(navIcons);
const navToggle = () => {
  navIcons[0].classList.toggle("hidden");
  navIcons[1].classList.toggle("hidden");
};

const navButton = document.getElementsByClassName("navButton");
console.log(navButton);
navButton[0].addEventListener("click", navToggle);
