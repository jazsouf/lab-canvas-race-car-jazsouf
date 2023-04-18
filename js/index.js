window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {}
};

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// draw road
const road = new Image();
road.src = "../images/road.png";
road.onload = function () {
  ctx.drawImage(road, 0, 0);
};

// draw car
const car = new Image();
car.src = "../images/car.png";
car.onload = function () {
  ctx.drawImage(
    car,
    road.width / 2 - car.width / 7,
    road.height - car.height / 3,
    car.width * 0.3,
    car.height * 0.3
  ); // how does the width / 7 work ? I would think it should be width / 2...
};
