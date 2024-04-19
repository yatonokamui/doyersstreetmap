var isNightTime = false;
var mapLocation = [1, 2, 3, 4, 5, 6];
var mapView = [0, 1, 2, 3, 4, 5, 6, 7];
var currentLocation = 1;
var currentView = 0;

function findPosIndex() {
  return (1 + 8 * (currentLocation - 1)) + currentView;
}

function returnPosIndex() {
  console.log("Current positioning index: " + findPosIndex());
}

function checkNightTime() {
  return isNightTime ? "P" : "A"; 
}

function updateFileName() {
  return "bg" + checkNightTime() + "Location0" + currentLocation + "View0" + currentView;
}

function returnFileName() {
  console.log(updateFileName());
  returnPosIndex();
}

function updateBackground() {
  document.body.style.backgroundImage = "url('../assets/" + updateFileName() + ".png')";
}

function viewTurnRight() {
  mapView[currentView++];
  if (currentView === mapView.length) {
    currentView = 0;
  }
  // console.log(currentView);
  returnFileName();
  updateBackground();
}

function viewTurnLeft() {
  mapView[currentView--];
  if (currentView === -1) {
    currentView = mapView.length - 1;
  }
  // console.log(currentView);
  returnFileName();
  updateBackground();
}

function locMoveBackward() {
  // console.log("Before moving backward, you are at " + currentLocation);
  if (currentLocation === 1) {
    console.log(
      "You can't move backward any further."
    );
  } else {
    mapLocation[currentLocation--];
    console.log("After moving backward, you are at location 0" + currentLocation);
  }
  returnFileName();
  updateBackground();
}

function locMoveForward() {
  // console.log("Before moving forward, you are at " + currentLocation);
    if (currentLocation === mapLocation.length) {
    console.log(
      "You can't move forward any further."
    );
  } else {
    mapLocation[currentLocation++];
    console.log("After moving forward, you are at location 0" + currentLocation);
  }
  returnFileName();
  updateBackground();
}