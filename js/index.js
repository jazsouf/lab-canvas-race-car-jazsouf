//setup canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "white";

//setup road
const road = new Image();
road.src = "../images/road.png";

//setup car object
const car = {
  carImage: new Image(),
  width: 50,
  height: 100,
};
car.X = road.width / 2 - car.width / 2;
car.Y = road.height - car.height;

car.carImage.src = "../images/car.png";

//move car
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && car.X > 0) {
    car.X -= 10;
  }
  if (e.key === "ArrowRight" && car.X < road.width - car.width) {
    car.X += 10;
  }
});

// setup obstacles
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

//check for collision
function checkCollision() {
  return obstacles.some(
    (obstacle) =>
      obstacle.X < car.X + car.width &&
      obstacle.X + obstacle.width > car.X &&
      obstacle.Y < car.Y + car.height &&
      obstacle.Y + obstacle.height > car.Y
  );
}

function animate() {
  // adding obstacles
  addObstacle(); // put an first obstacle in the game
  const addObstacleInterval = setInterval(() => {
    addObstacle();
  }, 4000);
  //updating in the canvas
  const updateInterval = setInterval(() => {
    if (!checkCollision()) {
      // clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // draw road
      ctx.drawImage(road, 0, 0);
      // draw player
      ctx.drawImage(car.carImage, car.X, car.Y, car.width, car.height);
      // draw all obstacles
      obstacles.forEach((obstacle) => {
        if (obstacle.Y < canvas.height - 1) {
          obstacle.Y += 1;
        }
        ctx.fillRect(obstacle.X, obstacle.Y, obstacle.width, obstacle.height);
      });
    } else {
      clearInterval(updateInterval);
      clearInterval(addObstacle);
      alert("Game over, refresh to play again");
    }
  }, 1000 / 60);

  // moving down obstacles
  setInterval(() => {
    obstacles.forEach((obstacle) => {
      if (obstacle.Y < canvas.height - 1) {
        obstacle.Y += 1;
      }
    });
  }, 1000 / 60);
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    animate();
  };
};
