 
// Rover Object Goes Here
// ======================
let marsRover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [{x: 0, y: 0}],
 }

const obstacleA = {
  x: Math.round(Math.random() * 10),
  y: Math.round(Math.random() * 10)
}
const obstacleB = {
  x: Math.round(Math.random() * 10),
  y: Math.round(Math.random() * 10)
}
const obstacleC = {
  x: Math.round(Math.random() * 10),
  y: Math.round(Math.random() * 10)
}
const obstacleD = {
  x: Math.round(Math.random() * 10),
  y: Math.round(Math.random() * 10)
}
const obstacleE = {
  x: Math.round(Math.random() * 10),
  y: Math.round(Math.random() * 10)
}


let moveLog = marsRover.travelLog

 // ======================
 function turnLeft(rover){
  switch(marsRover.direction) {
    case 'N':
      marsRover.direction = 'W';
      break;
    case 'W':
      marsRover.direction = 'S';
      break;
    case 'S':
      marsRover.direction = 'E';
      break;
    case 'E':
      marsRover.direction = 'N'
  }
  if(turnLeft){
    marsRover.travelLog.push({direction: marsRover.direction})
    }
    console.log(`
== Rover turned left. 
== Direction: ${marsRover.direction}.`)
 }

  
 function turnRight(rover){
  switch(marsRover.direction) {
    case 'N':
      marsRover.direction = 'E';
      break;
    case 'E':
      marsRover.direction = 'S';
      break;
    case 'S':
      marsRover.direction = 'W';
      break;
    case 'W':
      marsRover.direction = 'N'
  } 
  if(turnRight){
    marsRover.travelLog.push({direction: marsRover.direction})
    }
    console.log(`
== Rover turned right.
== Direction: ${marsRover.direction}.`)
  }



function moveForward(rover){
 let newX = marsRover.x
 let newY = marsRover.y
 let newD = marsRover.direction
if (marsRover.direction === 'N'){
  newY -= 1
} else if ( marsRover.direction === 'W'){
  newX -= 1
} else if (marsRover.direction === 'S'){
  newY += 1
} else if (marsRover.direction === 'E'){
  newX += 1
} 
  if(moveForward){
    marsRover.x = newX
    marsRover.y = newY
    marsRover.travelLog.push({x: newX, y: newY})
  console.log(`
== Rover took one step forward. 
== Direction: ${marsRover.direction}.
== Current Coordinates: x ${marsRover.x}, y ${marsRover.y}`)
  } 
}
 
  
 function moveBackwards(rover){
  let newX = marsRover.x
  let newY = marsRover.y
  if (marsRover.direction === 'N'){
      newY += 1
    }else if (marsRover.direction === 'W'){
            newX += 1
    }else if (marsRover.direction === 'S'){
            newY -= 1
    }else if (marsRover.direction === 'E'){
            newX -= 1
    }
    
    if(moveBackwards){
      marsRover.x = newX
      marsRover.y = newY
      marsRover.travelLog.push({x: newX, y: newY})
    }
    console.log(`
== Rover took one step backwards. 
== Direction: ${marsRover.direction}.
== Current Coordinates: x ${marsRover.x}, y ${marsRover.y}`)
    
}

function createObstacles() {
  
  if (marsRover.x === obstacleA.x && marsRover.y === obstacleA.y ||
      marsRover.x === obstacleB.x && marsRover.y === obstacleB.y ||
      marsRover.x === obstacleC.x && marsRover.y === obstacleC.x ||
      marsRover.x === obstacleD.x && marsRover.y === obstacleD.y ||
      marsRover.x === obstacleE.x && marsRover.y === obstacleE.y) {
        alert('Rover found an obstacle. Please change course!')
  }
}


function getCommands(marsRover, commandsList){
  for (let i = 0; i < commandsList.length; i++) {
    let command = commandsList[i]
    if (command === 'r'){
      turnRight(marsRover)
      } else if ( command === 'l'){
        turnLeft(marsRover)
      } else if (command === 'r'){
        turnRight(marsRover)
      } else if(command === 'f'){
        moveForward(marsRover)
      } else if(command === 'b'){
        moveBackwards(marsRover)
      } else {
        marsRover.direction = 'N'
        marsRover.x = 0
        marsRover.y = 0
        alert(`Invalid command input: * ${commandsList[i]} * Please enter r, l, f or b.`)
        {break}
      }
    if (marsRover.x < 0 ||
        marsRover.x >= 10 ||
        marsRover.y < 0 ||
        marsRover.y >= 10) {
        alert('CAUTION: Rover reached the edge of the grid. Please change course.')
        {break}
        } 
      }
 createObstacles()
  console.log(`
-- ROVER LOG --
-- Orders given: ${commandsList}
-- Current Position: x ${marsRover.x}, y ${marsRover.y}
-- Direction: ${marsRover.direction}
-- Travel Log: ${JSON.stringify(moveLog)}`)
}
  

getCommands(marsRover,'rffrfflfrff');


