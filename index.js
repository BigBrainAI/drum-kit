for (i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", clickChecker);
}

function clickChecker() {
  var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);

  buttonAnimation(buttonInnerHTML);
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key) {
  switch (key) {
    case "w":
      var kick = new Audio('sounds/kick-bass.wav');
      kick.play();
      break;

    case "a":
      var snare = new Audio('sounds/snare.wav');
      snare.play();
      break;

    case "s":
      var crash = new Audio('sounds/crash.wav');
      crash.play();
      break;

    case "d":
      var tom1 = new Audio('sounds/tom-1.wav');
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio('sounds/tom-2.wav');
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio('sounds/tom-3.wav');
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}