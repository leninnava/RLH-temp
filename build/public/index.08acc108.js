(function () {
  const $bdae709e486d818819a9f33baeaacebc$var$navIcons = document.getElementsByClassName("icon");
  console.log($bdae709e486d818819a9f33baeaacebc$var$navIcons);
  const $bdae709e486d818819a9f33baeaacebc$var$navToggle = () => {
    $bdae709e486d818819a9f33baeaacebc$var$navIcons[0].classList.toggle("hidden");
    $bdae709e486d818819a9f33baeaacebc$var$navIcons[1].classList.toggle("hidden");
  };
  const $bdae709e486d818819a9f33baeaacebc$var$navButton = document.getElementsByClassName("navButton");
  console.log($bdae709e486d818819a9f33baeaacebc$var$navButton);
  $bdae709e486d818819a9f33baeaacebc$var$navButton[0].addEventListener("click", $bdae709e486d818819a9f33baeaacebc$var$navToggle);
})();

