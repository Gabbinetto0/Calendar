var dayNum = 1;
var monthNum = 1;
var yearNum = 2000;
var monthType = "jan";
var calendar;
var resetButton;
var buttonX = 8;
var buttonY = height;


function reset() {
    dayNum = 0;
    monthNum = 1;
    yearNum = 2000;
    monthType = "jan";
};

function mousePressed() {
  dayNum++;
};

function setup() {
  createCanvas(400, 400);
  calendar = new Calendar();
    
    resetButton = createButton("RESET");
    resetButton.size(70);
    resetButton.position(buttonX, buttonY);
    resetButton.mousePressed(reset);
}

function draw() {
  background(51);


  calendar.countDay();

  textAlign(CENTER);
  fill(255);
  textSize(75);
  text(dayNum + "/" + monthNum + "/" + yearNum, width / 2, height / 2);
}
