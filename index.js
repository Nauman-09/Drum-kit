var drumBtns = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumBtns; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
 
    var btnInnerHtml = this.innerHTML

    makeSound(btnInnerHtml)
    btnAnimation(btnInnerHtml)
    
    })
}

//For keyborad 
document.addEventListener("keypress", function (event) {
  makeSound(event.key)
  btnAnimation(event.key)
})


// function to dedect keys

function makeSound(key) {
   switch (key) {
      case "w":
        var audio = new Audio("sounds/tom-1.mp3")
        audio.play()
        break;
      case "a":
        var audio = new Audio("sounds/tom-2.mp3")
        audio.play()
        break;
      
      case "s":
        var audio = new Audio("sounds/tom-3.mp3")
        audio.play()
        break;
      
      case "d":
        var audio = new Audio("sounds/tom-4.mp3")
        audio.play()
        break;
      
      case "j":
        var crash = new Audio("sounds/crash.mp3")
        crash.play()
        break;
      
      case "k":
        var kick = new Audio("sounds/kick-bass.mp3")
        kick.play()
        break;
      
       case "l":
        var snare = new Audio("sounds/kick-bass.mp3")
        snare.play()
        break;
      
      default:
        console.log(btnInnerHtml);
    }
}


function btnAnimation(key) {
  var activeBtn = document.querySelector("." + key);
  activeBtn.classList.add("pressed")


  setTimeout(function () {
    activeBtn.classList.remove("pressed") 
  }, 100)

}