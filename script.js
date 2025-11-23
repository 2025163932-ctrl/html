var inputOneIsOn = false;
var inputTwoIsOn = false;

// Toggle Input 1 Button
function toggleImage() {
    var imgElement = document.getElementById('toggleImage');
    if (imgElement.src.includes("offbutton.png")) {
        imgElement.src = "onbutton.png";
        inputOneIsOn = true;
    } else {
        imgElement.src = "offbutton.png";
        inputOneIsOn = false;
    }
}

// Toggle Input 2 Button
function toggleImage2() {
    var imgElement = document.getElementById('toggleImage2');
    if (imgElement.src.includes("offbutton.png")) {
        imgElement.src = "onbutton.png";
        inputTwoIsOn = true;
    } else {
        imgElement.src = "offbutton.png";
        inputTwoIsOn = false;
    }
}

// AND Gate Logic (updates only when "Run" is pressed)
function and() {
    var andGateImage = document.getElementById('andGate');

    if (inputOneIsOn && inputTwoIsOn) {
        andGateImage.src = 'and2on.png';
    } else if (!inputOneIsOn && inputTwoIsOn) {
        andGateImage.src = 'andoffon.png';
    } else if (inputOneIsOn && !inputTwoIsOn) {
        andGateImage.src = 'andonoff.png';
    } else {
        andGateImage.src = 'and2off.png';
    }
}

// Redirect to Resume Site
  function goToSite() {
    window.location.href = "https://2025163932-ctrl.github.io/programs/"; // put your URL here
  }




