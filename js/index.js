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
let carX = road.width / 2 - car.width / 6;
let carY = road.height - car.height / 3;

car.onload = function () {
  ctx.drawImage(car, carX, carY, car.width * 0.3, car.height * 0.3);
};

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && carX > 0) {
    carX -= 10;
  }
  if (e.key === "ArrowRight" && carX < road.width - car.width / 3) {
    carX += 10;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(road, 0, 0);
  ctx.drawImage(car, carX, carY, car.width * 0.3, car.height * 0.3);
});
