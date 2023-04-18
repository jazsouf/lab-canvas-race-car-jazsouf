window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {}
};

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const road = new Image();
road.onload = function () {
  ctx.drawImage(road, 0, 0);
};
road.src = "../images/road.png";
