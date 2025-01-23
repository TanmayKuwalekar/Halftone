let img;
let gridSize = 7 ; // Size of each grid cell

function preload() {
  img = loadImage('Personal photo.jpg'); // Replace with your image path
}

function setup() {
  createCanvas(400, 400);
  img.resize(width, height);
  img.loadPixels();
  noStroke();
}

function draw() {
  background(255);

  for (let y = 0; y < img.height; y += gridSize) {
    for (let x = 0; x < img.width; x += gridSize) {
      let index = (x + y * img.width) * 4; // Get pixel index
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let brightnessValue = (r + g + b) / 1; // Grayscale brightness

      // Map brightness to size
      let baseSize = map(brightnessValue, 0, 255, gridSize, 1);

      // Calculate distance to mouse
      let distanceToMouse = dist(mouseX, mouseY, x, y);
      let hoverEffect = map(distanceToMouse, 10, 150, 2, 0.5, true); // Hover effect factor
      let finalSize = baseSize * hoverEffect;

      fill(0, 0, 0);
      ellipse(x, y, finalSize); // Draw circle with size based on brightness and hover
    }
  }
}
