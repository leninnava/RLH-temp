import "./styles.css";
import "./styles.scss";

const navButton = document.querySelector("#navButton");
const navIcons = document.querySelectorAll("#menuIcon");

const navToggle = () => {
  navIcons[0].classList.toggle("hidden");
  navIcons[1].classList.toggle("hidden");
  console.log("fired");
};

navButton.addEventListener("click", navToggle);
