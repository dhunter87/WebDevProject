var position = 100
// var name = visitorNames
var moving = true
var forwards = true
var counter = 0

function setup() {
  createCanvas(400, 300)
  background(0, 0, 255)
}

function draw() {
  if(moving == true && forwards == true)
  {
    background(0, 0, 255)
    position = position + 10
    rect(position, 0, 10, 10)

    if (position >= 400)
    {
      forwards = false
      counter++
    } 
  }
  if(moving == true && forwards == false)
  {
    background(0, 0, 255)
    position = position - 10
    rect(position, 0, 10, 10)
    
    if(position <= 0)
    {
      forwards = true
      counter ++
    }
  } 

  console.log('The position is ' + position)
  text('Visitor Name : ' + visitorName, 10, 30)

  text(moving, 10, 50)
  text(counter, 10, 70)
  console.log(moving)
}


function mousePressed() {
  moving = !moving
}

