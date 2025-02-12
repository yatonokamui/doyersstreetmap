var isNightTime = false;
var mapLocation = [1, 2, 3, 4, 5, 6];
var mapView = [0, 1, 2, 3, 4, 5, 6, 7];
var currentLocation = 1;
var currentView = 0;

function returnFileName() {
  console.log("bgALocation0" + currentLocation + "View0" + currentView);
}

function viewTurnRight() {
  console.log(currentView);
  mapView[currentView++];
  if (currentView === mapView.length) {
    currentView = 0;
  }
  console.log(currentView);
  returnFileName();
}

function viewTurnLeft() {
  console.log(currentView);
  mapView[currentView--];
  if (currentView === -1) {
    currentView = mapView.length - 1;
  }
  console.log(currentView);
  returnFileName();
}

function locMoveBackward() {
  console.log("Before moving backward, you are at " + currentLocation);
  if (currentLocation === 1) {
    console.log(
      "You can't move backward any further. You are at " + currentLocation
    );
  } else {
    mapLocation[currentLocation--];
    console.log("After moving backward, you are at " + currentLocation);
  }
  returnFileName();
}

function locMoveForward() {
  console.log("Before moving forward, you are at " + currentLocation);
    if (currentLocation === mapLocation.length) {
    console.log(
      "You can't move forward any further. You are at " + currentLocation
    );
  } else {
    mapLocation[currentLocation++];
    console.log("After moving forward, you are at " + currentLocation);
  }
  returnFileName();
}
