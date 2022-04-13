let wall = document.querySelector(".wall");
let character = document.querySelector(".dino");

addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    jump();
  }
});

function jump() {
  if (character.classList != "anima1") {
    character.classList.add("anima1");
  }
  setTimeout(function () {
    character.classList.remove("anima1");
  }, 500);
}

let checkDead = setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(wall).getPropertyValue("left")
  );
  if (blockLeft <= 30 && blockLeft > 0 && characterTop >= 100) {
    wall.style.animation = "none";
    wall.style.display = "none";
    alert("you lose");

    console.log(blockLeft);
  }
  console.log(characterTop);
}, 10);
