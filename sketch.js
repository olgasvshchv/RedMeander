let pg;
const img = document.createElement('img');
const instructions = document.getElementById('instructions');
const info = document.getElementById('text');

document.getElementById('add-image').addEventListener("click", () => {
  addImage();
});
img.addEventListener("click", () => {imageOut()});

const addImage = () => {
  
  instructions.appendChild(img);
  img.src="https://admin.albersfoundation.org/images/uYzOvr5z2-t4n8bTxUPH_4fZFkM=/155/format-webp%7Cwidth-2880/1994-11-13_x3000web.jpg";
  instructions.replaceChild(img, info);
  instructions.style.padding=0;
  img.style.height='100%';
}
const imageOut = () => {
  instructions.replaceChild(info, img);
  instructions.style.padding = '5rem';
}



function setup() {
  let sketch;
  sketch = createCanvas(500, 600);
  sketch.parent('#sketch');
  frameRate(10);
  pg = createGraphics(480, 580);
}

function draw() {

  let tilesX = 25;
  let tilesY = 30;
  let tileW = width / tilesX;
  let tileH = height / tilesY;

  background(240);
  noStroke();
  let mainColor = color(234, 112, 106);
  let c = color(232, 66, 23, 200);

  for (let x = 0; x < tilesX; x++) {
    for (let y = 0; y < tilesY; y++) {
      let r = random(1);

      if (r < 0.2) {
        mainColor.setAlpha(255);
        fill(mainColor);
        rect(x * tileW, y * tileH, tileW, tileH);
      } else if (r < 0.8) {
        mainColor.setAlpha(200);
        fill(mainColor);
        rect(x * tileW, y * tileH, tileW, tileH);
      } else {
        mainColor.setAlpha(150);
        fill(mainColor);
        rect(x * tileW, y * tileH, tileW, tileH);
      }
    }
    
  }


  
  let tilesZ = 24;
  let tilesQ = 29;
  let tW = pg.width / tilesZ;
  let tH = pg.height / tilesQ;
  let mouseOverX = Math.floor(map(mouseX - 10, 0, pg.width, 0, tilesZ));
  let mouseOverY = Math.floor(map(mouseY - 10, 0, pg.height, 0, tilesQ));

  for (let z = 0; z < tilesZ; z++) {
    for (let q = 0; q < tilesQ; q++) {
      if (mouseIsPressed === true && mouseOverX == z && mouseOverY == q) {
        cursor(CROSS);
        
        pg.noStroke();
        pg.fill(c);
        pg.rect(z * tW, q * tH, tW, tH);
      }
    }
  }

  //Draw the offscreen buffer to the screen with image()
  image(pg, 10, 10);
}
function keyPressed() {
  if (keyCode === BACKSPACE) {
    pg.clear();
  }
}
// function keyPressed() {
//   if (keyCode === ENTER) {
//     // remove();
//   } else if (keyCode === BACKSPACE) {
//     pg.clear();
//   }
// }
