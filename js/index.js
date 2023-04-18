//setup canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// draw road
const road = new Image();
road.src = "../images/road.png";

// setup car object
const car = {
  carImage: new Image(),
  width: 50,
  height: 100,
};
car.X = road.width / 2 - car.width / 2;
car.Y = road.height - car.height;

car.carImage.src = "../images/car.png";

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && car.X > 0) {
    car.X -= 10;
  }
  if (e.key === "ArrowRight" && car.X < road.width - car.width) {
    car.X += 10;
  }
});

const obstacles = [];

function addObstacle() {
  const obstacle = {
    width: Math.random() * (road.width * 0.5) + road.width * 0.2,
    height: 25,
    X: Math.random() * (road.height * 0.5),
    Y: 0,
  };
  obstacles.push(obstacle);
}

function animate() {
  //updating in the canvas
  setInterval(() => {
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw road
    ctx.drawImage(road, 0, 0);
    // draw player
    ctx.drawImage(car.carImage, car.X, car.Y, car.width, car.height);
    // draw all obstacles
    obstacles.forEach((obstacle) =>
      ctx.fillRect(obstacle.X, obstacle.Y, obstacle.width, obstacle.height)
    );
  }, 1000 / 60);

  // adding obstacles
  addObstacle();
  setInterval(() => {
    addObstacle();
  }, 10000);

  // moving down obstacles
  setInterval(() => {
    obstacles.forEach((obstacle) => (obstacle.Y += 1));
  }, 1000 / 60);
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    animate();
  };
};
